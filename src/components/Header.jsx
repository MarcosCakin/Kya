import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { user_logout } from "../store/actions/userActions";

function Header() {

    const [open, setOpen] = useState(false);
    
    const handleMenu = () => {
        setOpen((prev) => !prev);
    };
    
    const dispatch = useDispatch();
    const defaultPhoto = useSelector(store => store.userReducer.defaultPhoto)
    const token = useSelector(store => store.userReducer.token);
    const user = useSelector(store => store.userReducer.user);

    const handleSignout = (e) => {
        e.preventDefault();
          dispatch(user_logout({token}))
      }

    const links = [
        {title: 'Home', to: '/'},
        {title: 'Cities', to: '/cities'},
        {title: user ? null : 'Sign in', to: '/signin'},
    ]

return (
        <header className='bg-dark navShadow'>
            <div className='mx-auto py-1 px-4 sm:px-5 lg:px-8'>
                <div className='flex items-center justify-around pt-2'>

                    <div className='flex items-center'>
                        <a href='/'>
                            <img src="/logo.png" className='rotate90'/>
                        </a>
                    </div>

                    <div className='hidden md:block'>

                        <div className='ml-10 flex items-center md:space-x-8'>
                            {
                                links.map((link) => 
                                    (<Link className='text-light font-bold hover:text-primary' key={link.title} to={link.to}>{link.title}</Link>))
                            }
                            <div>
                            {user ? 
                                <button onClick={handleSignout} className='text-light font-bold hover:text-primary'>
                                    Log out
                                </button>
                                : 
                                    <p />
                                }
                        </div>
                        <img className='w-[60px] h-[60px] rounded-[100%] object-cover border border-light' src={user ? user.photo : defaultPhoto} alt="User photo" />
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
                        <div>
                            {user ? 
                                <button onClick={handleSignout} className='text-light font-bold hover:text-primary'>
                                    Log out
                                </button>
                                : 
                                    <p />
                                }
                        </div>
                        <img className='w-[60px] h-[60px] rounded-[100%] object-cover border border-light' src={user ? user.photo : defaultPhoto} alt="User photo" />
                    </div>
                </div>
            ) : null }
        </header>
    )
}

export default Header;