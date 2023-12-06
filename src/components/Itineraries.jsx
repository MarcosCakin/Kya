import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Itinerary$ from './Itinerary$';
import Comments from './Comments';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector, } from 'react-redux';
import { get_city_by_id } from '../store/actions/cityActions';
  


const Itineraries = () => {
    
    let {id} = useParams();
    const cities = useSelector((store) => store.cityReducer.city)
    const dispatch = useDispatch()
      useEffect(()=>{
          scroll(0,0)
          dispatch(get_city_by_id(id)) 
      },[])

      const [isVisible, setIsVisible] = useState(false);
      const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };

  return (
    <div className="flex flex-col bg-dark w-full p-8 rounded-3xl space-y-6">
      <h2 className="text-3xl text-primary uppercase font-bold text-center">
        {cities?.itinerary?.name}
      </h2>
      <div className="flex items-center justify-around space-x-6">
        <h2 className="flex flex-col text-center w-1/3">
          <Itinerary$ price={cities?.itinerary?.price} />
          {cities?.itinerary?.duration} hour/s
        </h2>
        <div className="flex flex-col items-center w-1/3 space-y-1">
          <img
            src={cities?.user?.image}
            className="w-[100px] h-[100px] rounded-[100%] object-cover"
          />
          <h1>{cities?.user?.name}</h1>
        </div>
        <div className="flex flex-col items-center w-1/3">
          <button className="border rounded-xl px-2 hover:border-primary hover:text-primary">
            {cities?.itinerary?.likes} <FontAwesomeIcon icon={faHeart} />
          </button>
          {cities?.itinerary?.hashtags}
        </div>
      </div>
        <Comments visible={isVisible} />
      <button onClick={toggleVisibility} className="border p-2 rounded-full px-8 self-center hover:border-primary hover:text-primary">
        {isVisible ? 'Read less' : 'Read more'}
      </button>
    </div>
  );
};

export default Itineraries;
