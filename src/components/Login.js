import React from 'react';
import {CommentOutlined,GoogleOutlined, FacebookOutlined} from '@ant-design/icons';
import 'firebase/app';

import { auth} from '../firebase'
import firebase from 'firebase/app';
 
const Login =() =>{
    return(
        <div id="login-page">
            <div id="login-card">
            <CommentOutlined style={{ fontSize:'70px' , marginTop:'-20px'}} />
                <h2>
                    Welcome to Chat-App!
                </h2>
                <div
                        className='Login-Button google'
                        onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <GoogleOutlined /> Sign in with Google
                </div>
                <br /> <br />
                <div
                    className='Login-button facebook'
                    onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
 
                >
                    <FacebookOutlined /> Sign in with Facebook
                </div>
            </div>
        </div>
    );
}
 
export default Login;
