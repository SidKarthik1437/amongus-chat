import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import Chat from './Chat'
import Login from './Login'
import { useStateValue } from './StateProvider';

function App() {

  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
         <Router>
           { !user? (
           <>
           <Login />
           </>
         ) : (
           <>
         
            <Route path='/'>
              <div className="chatbody">
                <div className="innerborder">
                  <div className="textbox">
                    <Chat />
                  </div>
                </div>

                <div className="roundbutton"> 
                  <div className="buttondesign"><RadioButtonCheckedIcon className="roundbuttonshd" /></div>
                </div>
                
              </div>
            </Route>
        
        </>
      )}
      </Router>
    </div>
    
  );
}

export default App;