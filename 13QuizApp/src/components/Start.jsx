import React from 'react'
import { NavLink } from 'react-router-dom'

const Start = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-extrabold text-primary-dark mb-4">Welcome to the Quizify</h1>
                <p className="text-xl text-gray-600 mb-4">Get ready to test your knowledge!</p>
                <NavLink to="/quiz" className="mt-4 px-6 py-3 bg-primary-dark text-primary-light text-lg font-semibold rounded-lg hover:bg-primary-darkHover transition duration-300">
                    Start Quiz
                </NavLink>
            </div>
        </div>
    )
}

export default Start
