import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { google_user_signin } from '../store/actions/userActions.js';

const GoogleSignin = () => {

  const googleButton = useRef();  

  const dispatch = useDispatch();

  const handleCredentialResponse = async (response)=>{
    const data = {
      token_id: response.credential
    }
    const result = await Swal.fire({
      title: 'Welcome',
      text: "logueado con google!",
      icon: 'success',
      confirmButtonText: 'Okay'
  })
    try {
      dispatch(google_user_signin({
        data
      })) 
    } catch (error) {
      console.log(error);
    }
  }
  
useEffect(()=>{
  if(window.google) {
    window.google.accounts.id.initialize({
        client_id: "904137735491-l9u2bci9gobe9701k9f0grliguqll6lf.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });
    window.google.accounts.id.renderButton(
      googleButton.current,
      { type:"standard",shape:"pill", theme: "filled_blue",text:"signup_with", size: "large",locale:"en-US",logo_alignment:"left"}
    );
  }
})


  return (
    <div className="self-center" ref={googleButton}></div> 
  )
}
export default GoogleSignin
