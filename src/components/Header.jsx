import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector'; 

function Header() {

    const [open, setOpen] = useState(false);

    const user = useSelector(store => store.userReducer.user)
    console.log(user)

    const defaultPhoto = 'data:image/jpeg;base64,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'

    const handleMenu = () => {
        setOpen((prev) => !prev);
    };

    const links = [
        {title: 'Home', to: '/'},
        {title: 'Cities', to: '/cities'},
        {title: user ? null : 'Sign in', to: '/signin'},
    ]

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
                            <img className='w-[50px] h-[50px] rounded-[100%] object-cover border border-light'
                              src={user ? user.photo : defaultPhoto} alt="User photo" />
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
                        <img className='max-w-[50px] rounded-full' src={user ? user.photo : defaultPhoto} alt="User photo" />
                    </div>
                </div>
            ) : null }
        </header>
    )
}

export default Header;