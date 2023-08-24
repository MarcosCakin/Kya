import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonDigging, faTimes } from '@fortawesome/free-solid-svg-icons'

const NotFound = () => {
  return (
    <div className='flex justify-center items-center'>
        <FontAwesomeIcon icon={faPersonDigging} />
        <h2>UNDER CONSTRUCTION!</h2>
        <FontAwesomeIcon icon={faTimes} />
    </div>
  )
}

export default NotFound