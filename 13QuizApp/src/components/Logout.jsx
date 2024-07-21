import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../authentication/Auth'
import { useDispatch } from 'react-redux'
import { setIsUserLoggedIn, setIsLoader, setUser } from '../features/questionSlice'
import { NavLink } from 'react-router-dom'

const Logout = () => {
    const dispatch = useDispatch()

    const handleLogout = async (e) => {
        dispatch(setIsLoader(true))
        try {
            await signOut(auth)
            dispatch(setUser({}))
            dispatch(setIsUserLoggedIn(false))
        } catch (error) {
            console.log("Error");
        } finally {
            dispatch(setIsLoader(false))
        }
    }
    return (
        <NavLink
            to="/"
            onClick={handleLogout}
            className={`text-primary-dark bg-primary-light hover:bg-primary-lightHover focus:ring-4 focus:outline-none font-bold rounded-lg text-sm px-4 py-2 text-center dark:focus:ring-primary-light`}
        >
            Logout
        </NavLink>
    )
}

export default Logout
