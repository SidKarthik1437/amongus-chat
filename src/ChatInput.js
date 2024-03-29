import React, { useState } from 'react'
import firebase from 'firebase'
import { db } from './firebase'
import './ChatInput.css';
import SendIcon from '@material-ui/icons/Send';
import { useStateValue } from './StateProvider';

function ChatInput() {

  const [input, setInput] = useState('');
  const [{user}] = useStateValue();

  const addMessage = (event) =>{
    event.preventDefault();
  
      db
      .collection("messages")
      .add({
        user: user.displayName,
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
    

    setInput('')
  }
  return (
    <div className="text_box">

      <form >

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
              <h2 className="sendbutton"><SendIcon style={{color:'blue'}} /></h2>
            </button>
         
      </form>
             
                
    </div>
  )
}

export default ChatInput
