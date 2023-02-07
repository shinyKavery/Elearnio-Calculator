import React, { useRef,useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import refreshIcon from '../assets/img/refresh-icon.png';
import classes from './Auth.module.css';

const Auth = () => {
  const [errorMessage, seterrorMessage] = useState('');
  const dispatch = useDispatch();
  const userNameInput = useRef("");
const userPasswordInput = useRef("");
const reloadInputHandler = ()=>{
  userNameInput.current.value = '';
  userPasswordInput.current.value='';
}
  const loginHandler = (event)=>{
    event.preventDefault();
    if(userNameInput.current.value === 'elearnio@gmail.com' && userPasswordInput.current.value === '123456'){
      dispatch(authActions.login());
    }else{
seterrorMessage("Please enter a valid user name and password");
    }
   
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
          <br/>
          <div style={{display:'flex',marginLeft:'130px'}}>
          <button onClick={loginHandler}>Login</button>
          <img src={refreshIcon} alt='refreshIcon' onClick={reloadInputHandler} width='50px' height='50px'title='reload calculator'/>
          </div>
          
          { errorMessage !== '' && <p style={{color:'red'}}>{errorMessage}</p>}
        </form>
      </section>
    </main>
    </React.Fragment>
  );
};

export default Auth;
