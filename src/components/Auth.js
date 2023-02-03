import React, { useRef } from "react";
import { useSelector,useDispatch } from "react-redux";
import { authActions } from "../store";

import classes from './Auth.module.css';

const Auth = () => {
  const authenticationStatus = useSelector(state=>state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const userNameInput = useRef("");
const userPasswordInput = useRef("");
  const loginHandler = (event)=>{
    event.preventDefault();
    dispatch(authActions.login);
console.log(userNameInput.current.value);
  }
  return (
    <React.Fragment>
     {!authenticationStatus && <main className={classes.auth}>
       <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={userNameInput}/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={userPasswordInput}/>
          </div>
          <button onClick={loginHandler}>Login</button>
        </form>
      </section>
    </main>}
    </React.Fragment>
  );
};

export default Auth;
