

import React from 'react'
import { useSelector } from 'react-redux';
import Auth from './components/Auth';
import Header from './components/Header';
import UserProfile from './components/Calculator';


function App() {
  const isAuthenticated=useSelector(state=>state.auth.isLoggedIn)
  return (
  
   <React.Fragment>
 <Header/>
 {!isAuthenticated &&<Auth/>}
 {isAuthenticated &&<UserProfile/>}
 </React.Fragment>
  );
 
   
}

export default App;
