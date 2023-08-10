import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons"

const LogBtn = () => {
  return (
    <a href="#login" className="border py-2 px-8 w-1/2 text-center self-center rounded bg-primary text-dark font-bold hover:bg-dark hover:text-primary"> 
        <FontAwesomeIcon icon={faUser} className='mr-2'/> Login                         
    </a>
)
}

export default LogBtn;