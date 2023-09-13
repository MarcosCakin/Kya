import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartCrack } from '@fortawesome/free-solid-svg-icons'
const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 text-light bg-darkLight pb-5">
        <h1 className='text-[180px] md:text-[220px]'>404</h1>
        <div className='text-[40px] md:text-[70px]'>
            <span>
                Page not found 
            </span>
            <FontAwesomeIcon  className='pl-6' icon={faHeartCrack} shake />
        </div>
        <a href="/" className='border p-2 font-extrabold border-light text-light rounded-md hover:border-primary hover:text-primary'>
            Back home
        </a>
    </div>
  )
}
export default NotFound