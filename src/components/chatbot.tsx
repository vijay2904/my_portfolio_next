"use client";

import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { ChatForm } from "./chatform";
import { usePathname } from "next/navigation";
import dotenv from 'dotenv';
dotenv.config();

export default function Chatbot() {
    const [chatOpen, setChatOpen] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        if (pathname.includes("context-aware-chatbot-using-langchain")) {
            setChatOpen(true);
        } else {
            setChatOpen(false);
        }
    }, [pathname]);
    
    const toggleChat = () => {
        setChatOpen(!chatOpen);
    }

    // const [dataFromChild, setDataFromChild] = useState<{ query: string } | null>(null);

    function formatConvHistory(messages: string[]) {
        return messages.map((message, i) => {
            if(i % 2 === 0) {
                return `Human: ${message}`;
            }
            return `AI: ${message}`;
        })
    }

    const convHistory: string[] = [];


    const handleDataFromChild = async (data: { query: string }) => {

        const chatbotConversation = document.querySelector('.chat-messages');
        const question = data.query;

        const newHumanSpeechBubble = document.createElement('div');
        
        newHumanSpeechBubble.classList.add('my-5', 'p-2','w-40', 'lg:w-60', 'rounded', 'text-foreground', 'invert', 'bg-background', 'justify-self-end', 'transition-colors', 'font-light');
        newHumanSpeechBubble.textContent = question;
        chatbotConversation?.appendChild(newHumanSpeechBubble);
        if (chatbotConversation && chatbotConversation.scrollHeight !== undefined) {
            chatbotConversation.scrollTop = chatbotConversation.scrollHeight;
        }


        // Display AI's response
        const newAiSpeechBubble = document.createElement('div');
        newAiSpeechBubble.classList.add('my-5', 'p-2', 'w-40', 'lg:w-60', 'rounded', 'bg-background', 'text-white', 'justify-self-start', 'transition-colors', 'font-light');
        chatbotConversation?.appendChild(newAiSpeechBubble);

        newAiSpeechBubble.innerHTML = `
        <div class='flex space-x-2 justify-center items-center bg-background'>
            <span class='sr-only'>Loading...</span>
            <div class='h-2 w-2 invert bg-background rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div class='h-2 w-2 invert bg-background rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div class='h-2 w-2 invert bg-background rounded-full animate-bounce'></div>
        </div>
        `;

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_MY_WEBSITE_URL}/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({question : question, convHistory: formatConvHistory(convHistory)}),
            });
    
            const data = await response.json();
    
            convHistory.push(question);
            convHistory.push(data.response);
    
            console.log('Conversation History:', convHistory);

            if(response === undefined || response === null) {
                newAiSpeechBubble.textContent = "Something went wrong. Please email me at kvijayrohit@gmail.com";
            } else {
                newAiSpeechBubble.textContent = data.response;
            }
    
        } catch (error) {
            newAiSpeechBubble.textContent = 'Sorry, something went wrong. Please email me at kvijayrohit@gmail.com';
            console.error('Error fetching AI response:', error);
        }
    
        if (chatbotConversation && chatbotConversation.scrollHeight !== undefined) {
            chatbotConversation.scrollTop = chatbotConversation.scrollHeight;
        }


    };
    
    return (
        <div>
            <style jsx>{`
                .chat-container {
                    width: 0px;
                    height: 0px;
                    -webkit-transition: all 0.5s ease;  
                    -moz-transition: all 0.5s ease;  
                    -o-transition: all 0.5s ease;  
                    -ms-transition: all 0.5s ease;  
                    transition: all 0.5s ease;
                }
                .chat-container.open {
                    width: 20rem;
                    height: 20rem;
                }

                @media only screen and (max-width: 600px) {
                    .chat-container.open {
                        width: 18rem;
                        height: 20rem;
                    }
                }

                @media only screen and (max-width: 400px) {
                    .chat-container.open {
                        width: 15rem;
                        height: 20rem;
                    }
                }
            `}</style>

            <div className= {`chat-container fixed bottom-23 right-20 md:bottom-25 invert bg-background/65 rounded ${chatOpen ? 'open' : '!transform scale-0'}`}>
                
                <div className="chat-messages no-scrollbar absolute top-0 w-full p-3 rounded" style={{ bottom: '3rem', overflowY: 'auto' }}>
                
                </div>
                <div className="absolute bottom-0 p-2 w-full">
                    <ChatForm onData={handleDataFromChild}/>
                </div>
            </div>
            <div className="fixed flex items-center justify-center bottom-10 right-10 h-12 w-12 rounded-full invert bg-background"
                onClick={toggleChat}
            >
                <ChatBubbleIcon 
                width={30} 
                height={30}
                />
            </div>
        </div>
    )
}