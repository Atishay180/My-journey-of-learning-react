import React from 'react'
import logo from './../images/logoDark.png'
import { NavLink } from 'react-router-dom'
import bg1 from './../images/bg1.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLoader } from '../features/questionSlice'
import Loader from './Loader'

const FrontPage = () => {

    const isLoader = useSelector(state => state.isLoader)
    const dispatch = useDispatch()

    const handleOnClick = () => {
        dispatch(setIsLoader(true));

        setTimeout(() => {
            dispatch(setIsLoader(false));
        }, 500);
    }

    if(isLoader){
        return <Loader />
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-sky-500 to-blue-600 p-4">
            <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full text-center">
                <img src={logo} alt="Quiz App Logo" className="w-24 mx-auto mb-4" />

                <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-gray-800 font-roboto">
                    Welcome to Quiz App
                </h1>

                <p className="text-lg text-gray-600 mb-8 font-lato">
                    Test your knowledge with our quizzes. Click the button below to get started!
                </p>

                <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-200 mb-6 font-lato">
                    Start Quiz
                </button>

                <div className="flex justify-between mt-6 space-x-4">
                    <NavLink to='/login' onClick={handleOnClick} className="flex-1 bg-green-500 text-white px-4 py-3 rounded-full hover:bg-green-600 transition duration-200 font-lato">
                        Login
                    </NavLink>
                    <NavLink to='/signup' onClick={handleOnClick} className="flex-1 bg-indigo-500 text-white px-4 py-3 rounded-full hover:bg-indigo-600 transition duration-200 font-lato">
                        Sign Up
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default FrontPage
