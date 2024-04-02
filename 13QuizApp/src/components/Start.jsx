import React from 'react'
import { useDispatch } from 'react-redux'
import { setIsUserStarted } from '../features/questionSlice'
import '../App.css'

function Start() {
    const dispatch = useDispatch()
    const handleStart = () => {
        setTimeout(() => {
            dispatch(setIsUserStarted(true));
        }, 300);
    }

    return (
        <div className='animateText flex flex-col items-center font-bold border border-white p-8 m-10 rounded-md bg-white bg-opacity-15'>
            <h1 className='text-white text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-0 sm:p-1 md:p-2 lg:p-3 xl:p-4 m-4'>Are You Ready To Challenge Yourself ?</h1>

            <button className="bg-gradient-to-tl from-amber-400 to-orange-500 hover:translate-y-2 hover:from-orange-500 hover:to-amber-400 hover:scale-90 duration-200 text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl w-1/2 font-semibold py-6 px-6 m-5 rounded focus:outline-none focus:shadow-outline" onClick={handleStart}>START</button>
        </div>
    )
}

export default Start
