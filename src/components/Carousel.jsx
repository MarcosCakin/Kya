import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import slides from "../arrays/slides";
import { useEffect ,useState } from "react";

const Carousel = () => {

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



  )
}
export default Carousel