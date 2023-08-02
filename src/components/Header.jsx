import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <header className="flex justify-around bg-dark sticky top-0">
            <div className='flex items-center'>
                <a href="#">
                    <img src="./public/logo.png" alt="kya logo"/>
                </a>
            </div>
            <ul className="flex justify-center items-center space-x-4 text-light">
                <li><a href="#" className="hover:text-primary">Home</a></li>
                <li><a href="#cities" className="hover:text-primary">Cities</a></li>
                <button className="border py-2 px-3 rounded bg-primary text-dark hover:bg-dark hover:text-primary">
                    <FontAwesomeIcon icon={faUser} className='mr-2'/>
                    Login
                </button>
            </ul>
        </header>
    )
}

export default Header;
