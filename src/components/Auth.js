import React, { useRef,useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store";

import classes from './Auth.module.css';

const Auth = () => {
  const [errorMessage, seterrorMessage] = useState('');
  const dispatch = useDispatch();
  const userNameInput = useRef("");
const userPasswordInput = useRef("");
  const loginHandler = (event)=>{
    event.preventDefault();
    if(userNameInput.current.value === 'elearnio@gmail.com' && userPasswordInput.current.value === '123456'){
      dispatch(authActions.login());
    }else{
seterrorMessage("The username and the password entered is incorrect");
    }
   
console.log(userNameInput.current.value);
  }
  return (
    <React.Fragment>
     <main className={classes.auth}>
       <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={userNameInput}/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={userPasswordInput}/>
          </div>
          <button onClick={loginHandler}>Login</button>
          { errorMessage !== '' && <p>{errorMessage}</p>}
        </form>
      </section>
    </main>
    </React.Fragment>
  );
};

export default Auth;
