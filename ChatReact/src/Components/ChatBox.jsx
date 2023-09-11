import React, { useState, useEffect } from 'react';
import MessageBox from './MessageBox';

export default function ChatBox({ className, textoEnviado, socket }) {

    const [chatList, setChatList] = useState([]);

    useEffect(() => {
        if (textoEnviado.message !== "" && textoEnviado !== '') {
            setChatList((prevChatList) => [...prevChatList, textoEnviado]);
        }
    }, [textoEnviado]);


    const [message, setMessage] = useState('');

    socket.on('chat message', function (message) {
        message.position = 'left'
        setMessage(message)
    });

    useEffect(() => {
        if (message !== '') {
            setChatList((prevChatList) => [...prevChatList, message]);
        }
    }, [message]);

    return (
        <section className={className}>
            {
                chatList.map((chat, index) => (
                    <div key={index}>
                        <MessageBox message={chat.message} date={chat.date} position={chat.position} />
                    </div>
                ))
            }
        </section>
    );
}