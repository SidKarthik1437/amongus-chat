import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import { auth, db } from './firebase';
import Message from './Message';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import Chat from './Chat'

function App() {


  return (
    <div className="app">
        <Router>
          <Route path='/'>
          <div className="chatbody">
            <div className="innerborder">
              <Message />  
              <div className="textbox">
                
              </div>
            </div>
            <div className="roundbutton"> 
              <div className="buttondesign"><RadioButtonCheckedIcon className="roundbuttonshd" /></div>
            </div>
          </div>
          </Route>
      </Router>
    </div>
    
  );
}

export default App;