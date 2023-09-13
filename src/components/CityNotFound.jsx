import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons'

const CityNotFound = () => {
  return (
    <div>
        <p className='text-2xl mt-8'>
            We cant find any city, we're sorry
        </p>
        <FontAwesomeIcon className='h-10' icon={faFaceSadTear} />
    </div>
  )
}

export default CityNotFound