import axios from "axios";
import { useEffect, useRef } from "react"

const GoogleSignin = () => {
  const googleButton = useRef();  
  const handleCredentialResponse = async (response)=>{
    const data = {
      token_id: response.credential
    }
    const userResponse = await axios.post('http://localhost:8000/api/auth/google', data);
    console.log(userResponse)
  }
  
  useEffect(()=>{
    window.onload = function () {
      window.google.accounts.id.initialize({
        client_id: "904137735491-l9u2bci9gobe9701k9f0grliguqll6lf.apps.googleusercontent.com",
        callback: handleCredentialResponse
      });
      window.google.accounts.id.renderButton(
        googleButton.current,
        { type:"standard",shape:"pill", theme: "filled_blue",text:"signup_with", size: "large",locale:"en-US",logo_alignment:"left"}
      );
    }
}, [])

  return (
    <div className="self-center" ref={googleButton}></div> 
  )
}
export default GoogleSignin