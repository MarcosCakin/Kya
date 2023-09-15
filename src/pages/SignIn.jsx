import { useDispatch } from "react-redux";
import { user_login } from "../store/actions/userActions";
import GoogleSignin from "../components/GoogleSignin";
import { useState } from "react";

const SignIn = () => {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email:'',
    password:''
  })

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSingIn = async (e) => {
    e.preventDefault();
    try {
      dispatch(user_login({
        data: formData
      }))
    } catch (error) {
      console.log(error)
    }
  }

    return (
      <div className="flex flex-col justify-center items-center text-light bg-darkLight min-h-[71vh]">
        <div className="flex justify-center items-center p-4 m-4 rounded-xl bg-dark space-x-2">
          <div>
            <img className="mr-6" src='/travelTime.png' />
          </div>
          <div className="flex flex-col items-center space-y-6">

            <h2 className="text-3xl font-bold text-primary underline">Sign in!</h2>

            <form onSubmit={handleSingIn} className="flex flex-col space-y-6 text-md text-light" method="get">
              <div>
                <label htmlFor="email"/>
                <input className="px-3 py-1 w-full rounded-xl bg-dark border-b" onChange={handleInput} type="email" name="email" id="email" placeholder="E-mail..." required />
              </div>
              <div>
              <label htmlFor="password" />
              <input className="px-3 py-1 w-full rounded-xl bg-dark border-b" onChange={handleInput} type="password" name="password" id="password" placeholder="Password..." required />
              </div>
              <div className="flex flex-col space-y-4">
                <button type="submit" onClick={handleSingIn} className="bg-dark text-primary rounded-xl p-1 border border-primary  font-bold hover:bg-primary hover:text-dark">
                  Sing in
                </button>
                <p className="text-sm text-center">
                  Dont have an account? please, <a className="underline" href="/signup">sing up here!</a>
                  <br/>or                
                </p>
              </div>
                <GoogleSignin />
            </form>
          </div>
        </div>
      </div>  
    )
  }
export default SignIn;