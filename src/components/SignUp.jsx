import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import countries from '../arrays/countries'

import { useDispatch, useSelector } from "react-redux";
import { user_signup } from "../store/actions/userActions";
import { useState } from 'react'
import Swal from 'sweetalert2';

const SingUp = () => {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: '',
    country: ''
  })

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSingup = async (e) => {
    e.preventDefault();
    const result = await Swal.fire({
        title: 'Welcome',
        text: "usuario logueado correctamente",
        icon: 'success',
        confirmButtonText: 'Okay'
    })
    try {
      dispatch(user_signup({
        data: formData
      }))
      console.log(formData)
    } catch (error) {
      console.log(error)
    }
  }

    return (
      <div className="flex flex-col justify-center items-center text-light bg-darkLight min-h-[71vh]">
        <div className="flex justify-center items-center m-4 p-4 rounded-xl bg-dark space-x-2">
          <div>
            <img className="mr-6" src='/travelTime.png' />
          </div>
          <div className="flex flex-col items-center space-y-6">
            <h2 className="text-3xl font-bold text-primary underline">Sign up!</h2>
            <form
             onSubmit={handleSingup} 
             className="flex flex-col space-y-6 text-md text-light"  role="form" method="get">
            <div>
              <label htmlFor="name" />
              <input className="px-3 py-1 w-full rounded-xl bg-dark border-b" onChange={handleInput} type="text" name="name" id="name" placeholder="Complete name..." required />
            </div>
            <div>
                <label htmlFor="email"/>
                <input className="px-3 py-1 w-full rounded-xl bg-dark border-b" onChange={handleInput} type="email" name="email" id="email" placeholder="E-mail..." required />
            </div>
            <div>
              <label htmlFor="password" />
              <input className="px-3 py-1 w-full rounded-xl bg-dark border-b" onChange={handleInput} type="password" name="password" id="password" placeholder="Password..." required />
            </div>

            <div>
                <label htmlFor="country" />
                <select className="px-3 py-1 w-full rounded-xl bg-dark border-b cursor-pointer" onChange={handleInput} type="select" name="country" id="country" required >
                  {
                    countries.map((country) => (<option key={country.name} value={country.value}>{country.name}</option>))
                  }
                </select>
            </div>

            <div>
              <label className="flex items-center justify-center text-light w-full text-center rounded-xl bg-dark border
               p-1 space-x-2 cursor-pointer hover:text-dark hover:bg-[#9ca3af] hover:border-dark">
                <FontAwesomeIcon icon={faImage} />
                <p> Choose avatar</p>
                <input className="hidden" onChange={handleInput} type="file" name="avatar" />
              </label>
            </div>

            <button
               onSubmit={handleSingup} 
              className="bg-dark text-primary rounded-xl p-1 font-bold border border-primary hover:bg-primary hover:text-dark">
                Sign up!
            </button>
            </form>
          </div>
        </div>
      </div>  
    )
  }
  
  export default SingUp;