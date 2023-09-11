import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import links from '../arrays/links' 
import { useSelector } from 'react-redux/es/hooks/useSelector'; 

function Header() {

    const [open, setOpen] = useState(false);

    const photo = useSelector(store => store.userReducer.photo)

    const handleMenu = () => {
        setOpen((prev) => !prev);
    };

return (
        <header className='bg-dark navShadow'>
            <div className='mx-auto px-4 sm:px-5 lg:px-8'>
                <div className='flex items-center justify-around pt-2'>

                    <div className='flex items-center'>
                        <a>
                            <img src="/logo.png" className='rotate90'/>
                        </a>
                    </div>

                    <div className='hidden md:block'>

                        <div className='ml-10 flex items-center md:space-x-8'>
                            {
                                links.map((link) => 
                                    (<Link className='text-light font-bold hover:text-primary' key={link.title} to={link.to}>{link.title}</Link>))
                            }
                            <a href="/signin" className='text-light flex items-center space-x-2 p-1 my-2 hover:text-primary'>
                                <img className='w-[50px] h-[50px] rounded-[100%] object-cover' src={photo} alt="User photo" />
                                <p className='font-bold'> Login </p>
                            </a>
                        </div>

                    </div>

                    <div className='mr-2 md:hidden focus:hidden'>
                        <button type="button" onClick={handleMenu} className='inline-flex items-center justify-center p-2 rounded-md text-light'>
                            <span className='sr-only'>Open main menu</span>
                            {open == true ? <FontAwesomeIcon icon={faTimes} className='h-10'/> : <FontAwesomeIcon icon={faBars} className='h-8'/>}
                        </button>
                    </div>

                </div>
            </div>

            {open ? (
                <div className='py-4 md:hidden'>
                    <div className='flex flex-col items-center mx-4 ox-2 pt-2 pb-3 space-y-2 sm:px-3 text-light'>
                        {
                            links.map((link) => (<Link onClick={() => {setOpen(false)}} className='text-light font-bold hover:text-primary' key={link.title} to={link.to}>{link.title}</Link>))
                        }
                        <a href="/signin">
                            <img className='max-w-[50px] rounded-full' src={photo} alt="User photo" />
                        </a>
                    </div>
                </div>
            ) : null }
        </header>
    )
}

export default Header;