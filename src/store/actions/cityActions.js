import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const get_city_by_id = createAsyncThunk('get_city_by_id', async (id) =>{
    try {
         const response = await axios.get(`http://localhost:8000/api/cities/${id}`)
        return {
            city: response.data.city
        }
    } catch (error) {
        return{ 
            city: []
        }
    }
})

export const get_cities = createAsyncThunk('get_citites', async () =>{
    try {
        const response = await axios.get('http://localhost:8000/api/cities')
        return {
            cities: response.data.cities
        }
    } catch (error) {
        console.log(error)
    }
})

export const filter_cities = createAsyncThunk('filter_citites', async (obj) =>{
    try {
        const response = await axios.get(`http://localhost:8000/api/cities?city=${obj.name}`)
        return {
            cities: response.data.cities
        }
    } catch (error) {

        return {
            cities: [] 
        }
    }
})