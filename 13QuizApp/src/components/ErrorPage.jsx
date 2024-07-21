import React from 'react'
import { Link } from 'react-router-dom'
import error from "../images/error.png"

const ErrorPage = ({errorCode, errorText}) => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="flex flex-col items-center">
                <img src={error} className='w-3/5' alt="" />
                <h1 className="text-6xl font-extrabold text-primary-dark mb-4">{errorCode}</h1>
                <p className="text-xl text-center text-gray-600 mb-4">{errorText}</p>
                <Link to="/" className="text-lg text-zinc-500 hover:underline">
                    Go back to Home
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage
