import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const user_login = createAsyncThunk(
    'user_login',
    async (obj) => {
        try {
            const { data } = await axios.post('http://localhost:8000/api/auth/signin', obj.data)
            console.log(data);
            localStorage.setItem('token', data.response.token)
            localStorage.setItem('user', JSON.stringify(data.response.user))
            Swal.fire({
                title: 'Welcome',
                text: data.message,
                icon: 'success',
                confirmButtonText: 'Okay'
              })

            return {
                user: data.response.user,
                token: data.response.token
            } 
        } catch (error) {
            console.log(error)
            Swal.fire({
                title: 'Error!',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            return {
                user: null
            }
        }

    }
)

export const user_token = createAction('user_token', (user) => {
    return {
        payload: {
            user
        }
    }
})

export const user_logout = createAction(
    'user_logout',
    (token) => {
        localStorage.removeItem('token');
        return {
            payload: {
                token
            }
        }
    })

export const user_signup = createAsyncThunk(
    'user_signup',
    async (obj) => {
        try {
            const { data } = await axios.post('http://localhost:8000/api/auth/signup', obj.data)
            localStorage.setItem('token', data.response.token)
            localStorage.setItem('user', JSON.stringify(data.response.user)) 
            return {
                user:data.response.user,
                token: data.response.token
            }
        } catch (error) {
            console.log(error);
            
            return{
                user: null
            }
        }
    })

export const google_user_signin = createAsyncThunk('google_user_signin',
 async (obj) =>{
    try {
        const { data }= await axios.post('http://localhost:8000/api/auth/google', obj.data)
        console.log(data)
        localStorage.setItem('token', data.response.token)
        localStorage.setItem('user',JSON.stringify(data.response.user)) 
        return {
            user:data.data.response.user,
            token: data.data.response.token
        }
    } catch (error) {
        console.log(error);
        return{
            user: null
        }
    }
})