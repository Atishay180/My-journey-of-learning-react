import React from 'react'
import image from '../images/quiz-bg-1.jpg'
import { useDispatch } from 'react-redux'
import { setIsUserStarted } from '../features/questionSlice'

function Start() {
    const dispatch = useDispatch()
    const handleStart = () => {
        dispatch(setIsUserStarted(true));
    }

    const imageStyling = {
        backgroundImage: `url(${image})`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        position : `fixed`,
        top: `0`,
        left: `0`,
        width: `100%`,
        height: `100vh`,
        zIndex: `-1`,
        filter: 'blur(8px)'
    }
    const blur = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.477)', // Semi-transparent blue color
        // opacity: 0.9,
        zIndex: -1,
    }

    return (
        <div className='flex flex-col items-center border border-white mt-16 rounded-md bg-white bg-opacity-15'>
            <div className="image" style={imageStyling}></div>
            <div className='blur' style={blur}></div>
            <h1 className='text-white text-5xl p-5 m-5'>Are You Ready To Challenge Yourself ?</h1>

            <button className="bg-gradient-to-tl from-amber-400 to-orange-500 hover:translate-y-2 hover:from-orange-500 hover:to-amber-400 hover:scale-90 duration-200 text-white text-3xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-7xl w-1/2 font-semibold py-6 px-6 m-5 rounded focus:outline-none focus:shadow-outline" onClick={handleStart}>START</button>

            <footer className="text-white text-sm absolute bottom-0 left-0 right-0 p-4 text-center">
                © 2024 Quiz App. All rights reserved.
            </footer>
        </div>   
    )
}

export default Start
