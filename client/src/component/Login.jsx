import React from 'react';
import LoginForm from './LoginForm';


function Login(props) {
  return (
    <div>
        <LoginForm sign={props.sign} user={props.user} signState={props.signState}/>
    </div>
  )
}

export default Login;