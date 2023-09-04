import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const CardDetail = () => {

  let index = 0;
  
  let {id} = useParams(); 
  
  const [cities, setCities] = useState('');
    useEffect(()=>{
      scroll(0,0)
      axios.get(`http://localhost:8000/api/cities/${id}`)
       .then(response => setCities(response.data.city))
       .catch((err) => console.log(err))
    }, [] );


  return (
    <section className='bg-darkLight text-light flex flex-col items-center justify-center p-8'>
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

      <iframe className='w-[480px] h-[250px] p-2 md:w-11/12 opacity-80' src={cities.chart} allowFullScreen="" loading="lazy" referrerolicy="no-referrer-when-downgrade"></iframe>
      
      <div className='flex flex-col bg-dark w-4/5 p-8 rounded-3xl space-y-6'>


        <h2 className='text-3xl text-primary uppercase font-bold text-center'>{cities.itinerary?.name}</h2>


        <div className='flex items-center justify-around space-x-6'>

          <h2 className='text-center w-1/3'>
            <p>${cities.itinerary?.price}</p>
            {cities.itinerary?.duration} hour/s
          </h2>
          <div className='flex flex-col items-center w-1/3 space-y-1'>
            <img src={cities.user?.image} className='rounded-full w-[120px]' />
            <h1>{cities.user?.name}</h1>
          </div>
          <div className='flex flex-col items-center w-1/3'>
            <button className='border rounded-xl px-2 hover:border-primary hover:text-primary'>
            {cities.itinerary?.likes} <FontAwesomeIcon icon={faHeart} />
            </button>
            {cities.itinerary?.hashtags}
          </div>

        </div>

        <button className='border p-2 rounded-full px-8 self-center hover:border-primary hover:text-primary'>
           see more... 
        </button>


      </div>

    </section>
  )
}

export default CardDetail

{/* <div className='flex justify-around items-center bg-dark w-4/5 space-x-6 p-8 rounded-3xl'>

<h2 className='flex flex-col items-center'>
  <p>${cities.itinerary?.price}</p>
  {cities.itinerary?.duration} hour/s
</h2>

<div className='flex flex-col items-center space-y-8'>
    <h2 className='text-3xl text-primary uppercase font-bold'>{cities.itinerary?.name}</h2>
    <img className='rounded-full max-w-[120px]' src={cities.user?.image} />
    <h1>{cities.user?.name}</h1>
    <button className='border p-2 rounded-full'>
     see more... 
  </button>
</div>

<div className='flex flex-col items-center'>
  <button className='border rounded-xl px-2'>
    {cities.itinerary?.likes} <FontAwesomeIcon icon={faHeart} className='text-primary'/>
    </button>
    {cities.itinerary?.hashtags}
</div>

</div> */}