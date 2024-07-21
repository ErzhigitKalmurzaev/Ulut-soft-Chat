'use client'
import { useState } from 'react';
import ChatInput from '../../../components/ui/ChatInput/ChatInput';

import './index.css';
import { examples } from './../../../services/HelperConstants';

interface Message {
    text: string;
    owner: number;
}
export  default function Page() {

    const [text, setText] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);

    const sendMessage = () => {
        setText('');
        setMessages(prev => [...prev, {owner: 1, text}])
    }

    return (
        <div className="w-full h-full px-4 flex flex-col justify-center gap-4">
                {
                    messages?.length > 0 && 
                    <div className='h-full flex flex-col chat-wrapper'>
                        {
                            messages?.map((message, index) => (
                                <div className={message.owner ? 'my-message': 'chat-message'} key={index}>
                                    <p className='text-xl'>
                                        {message.text}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                }
                {
                    messages?.length < 1 &&
                    <div className='h-full flex flex-col items-center justify-center gap-7'>
                        <p className='text-xl'>
                            Кызыктырган суроонузду бериниз
                        </p>
                        <div className='w-full flex flex-wrap justify-center gap-5'>
                            {
                                examples.map(example => (
                                    <div className="example-block" key={example.id}>
                                        {example.icon}
                                        <p className='text-xl'>
                                            {example.query}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                }
            <div className="h-1/6 flex justify-center">
                <ChatInput value={text} setValue={setText} sendMessage={sendMessage}/>
            </div>
        </div>
    )
}