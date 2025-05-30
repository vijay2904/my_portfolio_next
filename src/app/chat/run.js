import { createClient } from '@supabase/supabase-js';
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { ChatGoogleGenerativeAI, GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { PromptTemplate } from '@langchain/core/prompts';
import { combineDocuments } from './utils/combineDocuments';
import dotenv from 'dotenv';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { RunnablePassthrough, RunnableSequence } from '@langchain/core/runnables';

dotenv.config();

export const run = async (questionFromChat, convHistoryFromChat) => {
    try {
        // Read the input text file
        // const text = await readFile('my-info.txt', 'utf-8');

        // // Split the text into chunks
        // const textSplitter = new RecursiveCharacterTextSplitter({
        //     chunkSize: 80,
        //     chunkOverlap: 20,
        //     separators: ['\n\n', '\n', ' ', ''],
        // });

        // const output = await textSplitter.createDocuments([text]);

        // output.forEach((doc, index) => {
        //     doc.metadata = { ...doc.metadata, id: `doc-${index}` }; // Assign a unique ID
        // });

        // Retrieve environment variables
        const sbApiKey = process.env.SB_API_KEY;
        const sbApiUrl = process.env.SB_API_URL;
        const openAIApiKey = process.env.OPENAI_API_KEY;

        if (!sbApiKey || !sbApiUrl || !openAIApiKey) {
            throw new Error("Missing required environment variables: SB_API_KEY, SB_API_URL, or OPENAI_API_KEY");
        }

        // Initialize Supabase client
        const client = createClient(sbApiUrl, sbApiKey);

        // Use Google Generative AI embeddings
        const embeddings = new GoogleGenerativeAIEmbeddings({ apiKey: openAIApiKey });

        const vectorstore = new SupabaseVectorStore(embeddings, {
            client,
            tableName: 'documents', // Ensure this table exists in your Supabase database
            queryName: 'match_documents', // Ensure this query is defined in Supabase\
        });

        const retriever = vectorstore.asRetriever();

        // Create llm
        const llm = new ChatGoogleGenerativeAI({ apiKey: openAIApiKey, model: "gemini-2.0-flash" });

        const standAloneQuestionTemplate = `Given a chat history and the latest user question \
    which might reference context in the chat history, formulate a standalone question \
    which can be understood without the chat history. Do NOT answer the question, \
    just reformulate it if needed and otherwise return it as is.
            conversation history: {conv_history}
        question: {question} stand-alone question:`;
        const standAloneQuestionPrompt = PromptTemplate.fromTemplate(standAloneQuestionTemplate);

        const answerTemplate = `
            Use the following pieces of retrieved context to answer the question.
    Use three to seven sentences maximum and keep the answer concise, while still giving depth. Always speak as if you were talking to a friend.
            context: {context}
            conversation history: {conv_history}
            question: {question}
            answer:
        `;

        const answerPrompt = PromptTemplate.fromTemplate(answerTemplate);
        
        const standAloneQuestionChain = standAloneQuestionPrompt.pipe(llm)
                                        .pipe(new StringOutputParser());
        
        const retrieverChain = RunnableSequence.from([
            prevResult => prevResult.standalone_question,
            retriever,
            combineDocuments
        ]);

        const answerChain = answerPrompt.pipe(llm)
                                        .pipe(new StringOutputParser());
        
        
        const chain = RunnableSequence.from([
            {
                standalone_question: standAloneQuestionChain,
                original_input: new RunnablePassthrough()
            },
            {
                context: retrieverChain,
                question: ({ original_input }) => original_input.question,
                conv_history: ({ original_input }) => original_input.conv_history,
            },
            answerChain
        ]);

        const response = await chain.invoke({
            question: questionFromChat,
            conv_history: convHistoryFromChat,
        });
        return response;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return "Something went wrong. Please email me at kvijayrohit@gmail.com";
    }
}