import { createReducer } from "@reduxjs/toolkit";
import { get_city_by_id, filter_cities, get_cities } from "../actions/cityActions";

const initialState = {
    cities: []
}

const cityReducer = createReducer(initialState,
    (builder) => builder
        .addCase(get_city_by_id.fulfilled, (state, action) => {

            return {
                ...state,
                city: action.payload.city
            }
        })
        .addCase(get_cities.fulfilled, (state, action) => {
            
            return{
                ...state,
                cities: action.payload.cities
            }
        })
        .addCase(filter_cities.fulfilled, (state, action) => {

            return {
                ...state,
                cities: action.payload.cities
            }
        })
)

export default cityReducer
