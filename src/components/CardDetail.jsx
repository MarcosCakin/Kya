import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Itineraries from './Itineraries';
import { useDispatch, useSelector, } from 'react-redux';
import { get_city_by_id } from '../store/actions/cityActions';


const CardDetail = () => {
  
  let {id} = useParams();

  const cities = useSelector((store) => store.cityReducer.city)

  const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(get_city_by_id(id)) 
    },[])


  return (
    <section className='bg-darkLight text-light flex flex-col items-center justify-center p-8'>
      <div className='flex flex-col p-2 md:flex-row'>
        <div className='flex items-center md:w-2/3'>
            <img src={cities?.image} alt="picture of the city" className='h-4/5 min-w-full rounded-2xl shadow-2xl'/>
        </div>
        <div className='p-4 md:w-1/3 flex flex-col justify-center'>
          <h1 className='text-6xl text-primary font-extrabold text-center'>{cities?.city}</h1>
          <p className='text-2xl text-light text-center pb-4'>{cities?.country}</p> 
          <h4 className='text-center md:text-left px-4'>{cities?.description}</h4>
        </div>
      </div>
      <iframe className='w-[480px] h-[250px] p-2 md:w-11/12 opacity-80' src={cities?.chart} allowFullScreen="" loading="lazy" referrerolicy="no-referrer-when-downgrade"></iframe>
      <Itineraries />
    </section>
  )
}

export default CardDetail