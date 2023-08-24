import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UnderC from './UnderC'


const CardDetail = () => {


    let {id} = useParams(); 

    const [cities, setCities] = useState('');
    let index = 0;

    useEffect(()=>{
      scroll(0, 0)
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
          <h4 className='text-left px-4'>{cities.description}</h4>
        </div>
      </div>
      <iframe className='w-[480px] h-[250px] p-2 md:w-11/12' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13642.934070279383!2d-61.501926!3d-31.255799550000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95caae3817e97aad%3A0x5374c27ff4fc9fb6!2sDellasanta%20Comercial%20Sa!5e0!3m2!1ses-419!2sar!4v1692890502974!5m2!1ses-419!2sar" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <UnderC />
    </section>
  )
}

export default CardDetail