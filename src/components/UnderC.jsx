import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonDigging, faTimes } from '@fortawesome/free-solid-svg-icons'

const NotFound = () => {
  return (
    <div className='border border-primary rounded-2xl text-4xl flex justify-center items-center h-[80px] space-x-4 px-4'>
        <FontAwesomeIcon icon={faPersonDigging} className='text-primary'/>
        <h2>UNDER CONSTRUCTION!</h2>
        <FontAwesomeIcon icon={faTimes} className='text-primary'/>
    </div>
  )
}

export default NotFound