import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CardDetail = () => {

  let index = 0;
  
  let {id} = useParams(); 
  
  const [cities, setCities] = useState('');
    useEffect(()=>{
      axios.get(`http://localhost:8000/api/cities/${id}`)
       .then(response => setCities(response.data.city))
       .catch((err) => console.log(err))
    }, [] );


  return (
    <section className='bg-darkLight text-light flex flex-col items-center justify-center'>
      <div className='flex flex-col p-2 md:flex-row'>
        <div className='flex items-center md:w-2/3'>
            <img src={cities.image} alt="picture of the city" className='h-4/5 min-w-full rounded-2xl shadow-2xl'/>
        </div>
        <div className='p-4 md:w-1/3 flex flex-col justify-center'>
          <h1 className='text-6xl text-primary font-extrabold text-center'>{cities.city}</h1>
          <p className='text-2xl text-light text-center pb-4'>{cities.country}</p> 
          <h4 className='text-center md:text-left px-4'>{cities.description}</h4>
        </div>
      </div>
      <iframe className='w-[480px] h-[250px] p-2 md:w-11/12' src={cities.chart} allowFullScreen="" loading="lazy" referrerolicy="no-referrer-when-downgrade"></iframe>
      <h2 className='text-light text-3xl'>{cities.user}</h2>
    </section>
  )
}

export default CardDetail