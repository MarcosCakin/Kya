import React from 'react'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faAnglesLeft, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";

function Home() {

const slides = [
    {
      url: "https://a.cdn-hotels.com/gdcs/production114/d115/5a3ff7e3-3997-4ccb-8415-00f3302f2d3f.jpg?impolicy=fcrop&w=800&h=533&q=medium",
      city: "Vancouver",
      country: "Canada",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg",
      city: "New York",
      country: "United States",
    },
    {
      url: "https://images.adsttc.com/media/images/5bd6/fd00/f197/ccaa/4a00/027c/newsletter/shutterstock_1116656705.jpg?1540816099",
      city: "Dublin",
      country: "Ireland",
    },
    {
      url: "https://img.bekiaviajes.com/ciudades/portada/0000/6-h.jpg",
      city: "Rome",
      country: "Italy",
    },
    {
      url: "https://img.bekiaviajes.com/ciudades/portada/0000/6-h.jpg",
      city: "London",
      country: "England",
    },
    {
      url: "https://media.traveler.es/photos/61376c12d4923f67e298ebaf/master/w_1600%2Cc_limit/146704.jpg",
      city: "Bariloche",
      country: "Argentina",
    },
    {
      url: "https://static.nationalgeographic.es/files/styles/image_3200/public/giza-plateau-pyramids.jpg?w=1900&h=1267",
      city: "Guiza",
      country: "Egypt",
    },
    {
      url: "https://cdn.pixabay.com/photo/2020/04/29/18/36/jamaica-5110094_1280.jpg",
      city: "Montego Bay",
      country: "Jamaica",
    },
    {
      url: "https://static.nationalgeographic.es/files/styles/image_3200/public/reflection-salar-de-uyuni-bolivia.jpg?w=1600&h=900",
      city: "Salar de Uyuni",
      country: "Bolivia",
    },
    {
      url: "https://www.semana.com/resizer/ZyurLl6Wr0PQh1HH3yuI55ukmes=/1920x1080/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/VXZBT2MEXNHFFCIXLS4EOIQEB4.jpg",
      city: "Montreal",
      country: "Canada",
    },
    {
      url: "https://travellersworldwide.com/wp-content/uploads/2023/01/Shutterstock_653196580.jpg.webp",
      city: "Moscow",
      country: "Russia",
    },
    {
      url: "https://facts.net/wp-content/uploads/2023/06/45-facts-about-tokyo-1688094762.jpeg",
      city: "Tokyo",
      country: "Japan",
    },
];

let [index, setIndex] = useState(0);

const prev = () => {
index > 0 ? setIndex(index - 4) : setIndex(8);
};

const next = () => {
index < 8 ? setIndex(index + 4) : setIndex(0);
};

useEffect(() => {
const timer = setInterval(() => {
if (index < 8) {
  setIndex(index + 4)
} else {
  setIndex(0)
}}, 4000)
return () => {
clearInterval(timer)
}
}, [index]);


  return (
    <section id="home" className="space-y-4 bg-darkLight">

    <div className="scroll-smooth flex flex-col items-center text-left space-y-8 py-4 bg-darkLight text-light md:flex-row md:justify-between md:px-16">
        <div className="space-y-8 flex flex-col items-center md:w-1/2">
          <h1 className="text-primary font-bold text-center text-4xl">
            MyTinerar<span className="text-light font-extrabold">y</span>
          </h1>
          <h5 className="text-2xl text-left p-2">
            Find your perfect trip, designed by insiders who know and love their
            cities!
          </h5>
          <button className="font-bold space-x-12 w-11/12 p-2 border border-primary text-primary duration-500 rounded sm:space-x-4 md:self-start md:w-1/2 hover:border-l-[50px] hover:border-light hover:text-light">
            <FontAwesomeIcon icon={faPlaneDeparture} />
            <a href="#cities">View more...</a>
          </button>
        </div>
        <div className="md:w-1/2 p-4">
          <img
            className="rounded-full p-4 homeImg"
            src="src\assets\bgHome.png"
            alt="Home img"
          />
        </div>
    </div>
    
    <h2 className="text-light text-center text-2xl font-bold underline pt-4">Popular Mytineraries</h2>
        
    <div className="flex justify-center items-center p-4 space-x-4 text-light">

        <button onClick={prev}><FontAwesomeIcon className='h-8 text-light hover:text-primary' icon={faAnglesLeft} /></button>

        <div className=' h-[70vh] w-5/6 grid mb-3 mt-2 grid-cols-1 sm:grid-rows-2 sm:grid-cols-2 md:gap-4'>
            {[0, 1, 2, 3].map((i) => (
                <a key={i} className='block relative rounded-xl border-dark border-2 text-dark font-extrabold hover:text-light hover:duration-200'>
                    <img
                    className='absolute rounded-xl inset-0 object-cover object-center h-full w-full'
                    src={slides[index + i].url} />
                    <div className='relative p-4 rounded-xl rounded-b-none sm:p-6 lg:p-8 '>
                        <p className='text-xl text-right md:text-3xl'>
                            {slides[index + i].city}
                        </p>
                        <p className="text-sm text-right md:text-xl">
                            {slides[index + i].country}
                        </p>
                    </div>
                </a>
            ))}
        </div>

        <button onClick={next}><FontAwesomeIcon className='h-8 text-light hover:text-primary' icon={faAnglesRight} /></button>

    </div>

    </section>
  );
}

export default Home;