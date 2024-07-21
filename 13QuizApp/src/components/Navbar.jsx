import React from 'react';
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';
import LogoutButton from './Logout';
import { useSelector } from 'react-redux';
import Loading from "./Loader.jsx"

const Navbar = () => {
    const isLoader = useSelector(state => state.isLoader)
    const isUserLoggedIn = useSelector(state => state.authStatus.isUserLoggedIn)
    const isUserStarted = useSelector(state => state.quizStatus.isUserStarted)

    if (isLoader) {
        return (
            <Loading />
        )
    }

    return (
        !isUserStarted ?
            <nav className="bg-primary-dark w-full z-20 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img className="w-24" src={logo} alt="Logo" />
                    </div>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        {isUserLoggedIn ?
                            <LogoutButton /> :
                            <NavLink className="text-primary-dark bg-primary-light hover:bg-primary-lightHover focus:ring-4 focus:outline-none font-bold rounded-lg text-sm px-4 py-2 text-center dark:focus:ring-primary-light" to="/signup" >Get started</NavLink>
                        }

                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <NavLink

                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "block py-2 px-3 font-bold text-zinc-400 " : "block py-2 px-3 font-bold text-primary-light hover:text-zinc-300"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive ? "block py-2 px-3 font-bold text-zinc-400 " : "block py-2 px-3 font-bold text-primary-light hover:text-zinc-300"
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/services"
                                    className={({ isActive }) =>
                                        isActive ? "block py-2 px-3 font-bold text-zinc-400 " : "block py-2 px-3 font-bold text-primary-light hover:text-zinc-300"
                                    }
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        isActive ? "block py-2 px-3 font-bold text-zinc-400 " : "block py-2 px-3 font-bold text-primary-light hover:text-zinc-300"
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            :
            null
    );
}

export default Navbar;
