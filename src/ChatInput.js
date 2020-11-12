import React, { useState } from 'react'
import firebase from 'firebase'
import { db } from './firebase'
import SendIcon from '@material-ui/icons/Send';

function ChatInput() {

  const [input, setInput] = useState('');

  const addMessage = (event) =>{
    event.preventDefault();
  
      db
      .collection("messages")
      .doc()
      .add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
  
    setInput('')
  }

  return (
    <div className="text_box">

                <form>

                    <input
                    
                        placeholder="Type a message..."
                        type="text"
                        value= {input}  
                        onChange={e => setInput(e.target.value)}
                        
                    />

                    <button 
                        disabled = {!input} 
                        type = 'submit' 
                        onClick = {addMessage} 
                        variant="contained"
                    >
                      <h2 className="sendbutton"><SendIcon /></h2>
                    </button>

                </form>
             
                
            </div>
  )
}

export default ChatInput
