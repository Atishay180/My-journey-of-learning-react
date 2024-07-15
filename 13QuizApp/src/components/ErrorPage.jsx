import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-extrabold text-primary-dark mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-4">Oops! The page you're looking for doesn't exist.</p>
                <Link to="/" className="text-lg text-zinc-500 hover:underline">
                    Go back to Home
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage
