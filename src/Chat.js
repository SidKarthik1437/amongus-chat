import React, { useEffect, useState } from 'react'
import Message from './Message'
import { db } from './firebase'
import ChatInput from './ChatInput'
import { useStateValue } from './StateProvider';

function Chat() {

    const [messages, setMessages] = useState([]);
    const [{ user }] = useStateValue();


    useEffect(() => {
        if(user)
        {
            db
        .collection('messages')
        .orderBy( 'timestamp', 'asc')
        .onSnapshot(snapshot => (
            setMessages(snapshot.docs.map((doc) => doc.data())))
        )
        }
        
        // setMessages([...messages])
    }, [])

    console.log(messages);

    return (
        <div className="chat">
            <div className="chat__messages">
                
                {messages.map(({user, message, timestamp}) => (
                    <Message 
                        user={user} 
                        message={message} 
                        timestamp={timestamp}
                    />
                ))}

                
            </div>
            <ChatInput />
        </div>
    )
}

export default Chat
