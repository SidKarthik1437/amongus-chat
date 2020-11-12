import React, { useEffect, useState} from 'react'
import './Message.css'
import ChatInput from './ChatInput'
import firebase from 'firebase'
import { db } from './firebase'
import SendIcon from '@material-ui/icons/Send';

function Chat() {

        
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
        db
        .collection('messages')
        .doc()
        .onSnapshot((snapshot) => {
            setMessages(snapshot.docs.map(doc => ({message: doc.data().message})));
        })

    }, [])

    return (
        <div className="display">

            <div className="message">
                <img src="data:image/png;base64,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" alt="" />
                
                <div className="message__info">

                    <h4 className="message__info_header">
                        Sid Karthik
                    </h4>
                    <p className="message__info_message">
                        Heyaaaaaaaaaa
                    </p>          

                </div>

            </div>

        <ChatInput />
            
        </div>
        

    )
}

export default Chat
