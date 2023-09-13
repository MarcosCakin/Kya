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
    <div ref={googleButton}></div> 
  )
}
export default GoogleSignin

  // <button type="submit" className="flex items-center justify-center space-x-2 bg-dark text-primary rounded-xl
  //  p-2 w-full  border border-primary font-bold hover:bg-primary hover:text-dark">
  //     <img src="/googleI.png" className="w-[22px]" />
  //     <p> Sing up with google! </p>
  // </button>

  