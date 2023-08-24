import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons'

const NotFound = () => {
  return (
    <div>
        <p className='text-2xl'>
            We're sorry, we cant find a city 
        </p>
        <FontAwesomeIcon className='h-10' icon={faFaceSadTear} />
    </div>
  )
}

export default NotFound