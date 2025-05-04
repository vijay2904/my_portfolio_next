"use client";

import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { SetStateAction, useState } from "react";
import { ChatForm } from "./chatform";

export default function Chatbot() {
    const [chatOpen, setChatOpen] = useState(false);
    
    const toggleChat = () => {
        setChatOpen(!chatOpen);
    }

    const [dataFromChild, setDataFromChild] = useState<{ query: string } | null>(null);

    function formatConvHistory(messages: string[]) {
        return messages.map((message, i) => {
            if(i % 2 === 0) {
                return `Human: ${message}`;
            }
            return `AI: ${message}`;
        })
    }

    const handleDataFromChild = async (data: { query: string }) => {
        console.log(data)
        // setDataFromChild(data);

        const convHistory: string[] = [];


        const chatbotConversation = document.querySelector('.chat-messages');
        const question = data.query;

        const newHumanSpeechBubble = document.createElement('div');
        
        newHumanSpeechBubble.classList.add('my-5', 'p-2', 'w-50', 'rounded', 'bg-white', 'text-black', 'justify-self-end');
        newHumanSpeechBubble.textContent = question;
        chatbotConversation?.appendChild(newHumanSpeechBubble);
        if (chatbotConversation && chatbotConversation.scrollHeight !== undefined) {
            chatbotConversation.scrollTop = chatbotConversation.scrollHeight;
        }


        // Display AI's response
        const newAiSpeechBubble = document.createElement('div');
        newAiSpeechBubble.classList.add('my-5', 'p-2', 'w-50', 'rounded', 'bg-gray-500', 'text-white', 'justify-self-start');
        chatbotConversation?.appendChild(newAiSpeechBubble);

        newAiSpeechBubble.textContent = 'Thinking...';

        try {
            const response = await fetch('http://localhost:5000/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({question : question, convHistory: formatConvHistory(convHistory)}),
            });
    
            const data = await response.json();
    
            convHistory.push(question);
            convHistory.push(data.response);
    
            console.log('Conversation History:', convHistory);
    
            newAiSpeechBubble.textContent = data.response;
        } catch (error) {
            newAiSpeechBubble.textContent = 'Sorry, something went wrong.';
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
            `}</style>

            <div className= {`chat-container fixed bottom-20 right-25 bg-gray-400 rounded ${chatOpen ? 'open' : '!transform scale-0'}`}>
                
                <div className="chat-messages no-scrollbar bg-black absolute top-0 w-full p-3 rounded" style={{ bottom: '3rem', overflowY: 'auto' }}>
                
                </div>
                <div className="absolute bottom-0 p-2 w-full">
                    <ChatForm onData={handleDataFromChild}/>
                </div>
            </div>
            <div className="fixed flex items-center justify-center bottom-10 right-10 h-12 w-12 rounded-full bg-gray-500"
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