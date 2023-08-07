import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faB, faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons'

function Header() {

// const navLinks = [
// {
//     link: '#',
//     title: 'home'
// },
// {
//     link: '#cities',
//     title: 'cities'
// },
// {
//     link: '#login',
//     title: 'login',
// }
// ];

    const [open, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen((prev) => !prev);
    };

return (
        <header className='bg-dark navShadow'>
            <div className='mx-auto px-4 sm:px-5 lg:px-8'>
                <div className='flex items-center justify-around py-2'>

                    <div className='flex items-center'>
                        <a href="#">
                            <img src="./public/logo.png" alt="kya logo"/>
                        </a>
                    </div>

                    <div className='hidden md:block'>

                        <div className='ml-10 flex items-center md:space-x-8'>
                            <a href="#" className="text-light hover:text-primary focus:text-primary focus:font-bold">Home</a>
                            <a href="#cities" className="text-light hover:text-primary focus:text-primary focus:font-bold">Cities</a>
                            <a href="#login" className="border py-2 px-4 rounded bg-primary text-dark hover:bg-dark hover:text-primary"> 
                                <FontAwesomeIcon icon={faUser} className='mr-2'/> Login                         
                            </a>
                        </div>

                    </div>

                    <div className='mr-2 md:hidden'>
                        <button type="button" onClick={handleMenu} className='inline-flex items-center justify-center p-2 rounded-md text-light'>
                            <span className='sr-only'>Open main menu</span>
                            {open == true ? <FontAwesomeIcon icon={faTimes} className='h-10'/> : <FontAwesomeIcon icon={faBars} className='h-8'/>}
                        </button>
                    </div>

                </div>
            </div>

            {open ? (
                <div className='py-4 md:hidden focus:hidden'>
                    <div className='ox-2 pt-2 pb-3 space-y-1 sm:px-3 text-light'>
                            <a href="#" className="block px-3 py-2">Home</a>
                            <a href="#cities" className="block px-3 py-2">Cities</a>
                            <a href="#login" className="block py-2 px-3 rounded border m-auto bg-primary w-1/2 text-center text-dark opacity-90 hover:bg-dark hover:border-primary hover:text-primary"> 
                                <FontAwesomeIcon icon={faUser} className='mr-2'/> Login                         
                            </a>
                    </div>
                </div>
            ) : null }
        </header>
    )
}

export default Header;