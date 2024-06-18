import React from 'react'
import { useState , useEffect } from 'react';
import { signInWithEmailAndPassword , GoogleAuthProvider , signInWithPopup } from 'firebase/auth';
import { googleProvider , auth } from '../../firebase/firebase';
import {useNavigate} from 'react-router-dom'
import SignInUi from '../../ui/login-ui';

export default function SignIn({isLogged , setLogged ,  setLoading}) {
 const [input , setInput] = useState({
    email: '' ,
    password:''
  })
 const navigate = useNavigate()
  useEffect(()=>{
    if(isLogged === true){
      navigate('/dash/home')
    }
  },[isLogged])
  
   const logInWithEmailAndPassword = async () => {
   
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, input.email, input.password);  navigate('/dash/home')
      } catch (err) {
      setLoading(false);
      setLogged(!!auth.currentUser)
    }
  };
  
  const handleSubmit = (e) => {
   
    console.log("Form submitted");
  };
  function signIn(e){
  
    logInWithEmailAndPassword();
  }
  function sigInNewMethod(){
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // const user = result.user;
    }).catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // const email = error.customData.email;
      // const credential = GoogleAuthProvider.credentialFromError(error);
    });
  }
  return (
    <>
     <SignInUi input={input} setInput={setInput} handleSubmit={handleSubmit} handleLogin={signIn} handleGoogleLogin={sigInNewMethod} />
    </>
  );
}