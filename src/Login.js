import React from 'react'
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {

    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then( result => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch(error => {
            alert(error.message)
        })
        
    }

    return (
        <div className="login">
            <div className="login__container">
                <div className="chatbody">
                    <div className="innerborder">
                        <div className="login_inner"> 
                            <Button onClick={signIn}>Login</Button>
                        </div>
                    </div>
                    <div className="roundbutton"> 
                        <div className="buttondesign"><RadioButtonCheckedIcon className="roundbuttonshd" /></div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Login
