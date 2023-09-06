import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

  


const Itineraries = () => {

let {id} = useParams(); 
  
const [cities, setCities] = useState('');
  useEffect(()=>{
    // scroll(0,0)
    axios.get(`http://localhost:8000/api/cities/${id}`)
     .then(response => setCities(response.data.city))
     .catch((err) => console.log(err))
  }, [] );

  return (
    <div className="flex flex-col bg-dark w-4/5 p-8 rounded-3xl space-y-6">
      <h2 className="text-3xl text-primary uppercase font-bold text-center">
        {cities.itinerary?.name}
      </h2>
      <div className="flex items-center justify-around space-x-6">
        <h2 className="text-center w-1/3">
          <p>${cities.itinerary?.price}</p>
          {cities.itinerary?.duration} hour/s
        </h2>
        <div className="flex flex-col items-center w-1/3 space-y-1">
          <img
            src={cities.user?.image}
            className="w-[100px] h-[100px] rounded-[100%] object-cover"
          />
          <h1>{cities.user?.name}</h1>
        </div>
        <div className="flex flex-col items-center w-1/3">
          <button className="border rounded-xl px-2 hover:border-primary hover:text-primary">
            {cities.itinerary?.likes} <FontAwesomeIcon icon={faHeart} />
          </button>
          {cities.itinerary?.hashtags}
        </div>
      </div>
      <button className="border p-2 rounded-full px-8 self-center hover:border-primary hover:text-primary">
        see more...
      </button>
    </div>
  );
};

export default Itineraries;
