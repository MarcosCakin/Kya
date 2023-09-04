import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Itinerary = () => {

    let {id} = useParams(); 
    const [itineraries, setItineraries] = useState('');
    let index = 0;

    useEffect(()=>{
      axios.get(`http://localhost:8000/api/itineraries/${id}`)
       .then(response => setItineraries(response.data.itinerary))
       .catch((err) => console.log(err))
    }, [] );

    

  return (
    <div className="flex flex-col items-center bg-dark my-4 p-4 space-y-4 w-full md:w-3/4">
        <h2>NAME DEL ITINERARY</h2>
        <div>IMAGEN PRESIO DURASION HASHTAGS LIKES</div>
        <div>BUTON DE SEE MORE</div>
    </div>
  )
}

export default Itinerary