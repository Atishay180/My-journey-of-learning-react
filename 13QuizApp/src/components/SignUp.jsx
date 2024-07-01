import React from 'react'
import { auth } from '../authentication/Auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setIsUserLoggedIn, setIsLoader } from '../features/questionSlice'
import Loading from './Loader'

const SignUp = () => {
    const dispatch = useDispatch()
    const isUserLoggedIn = useSelector(state => state.authStatus.isUserLoggedIn)
    const isLoading = useSelector(state => state.isLoader)


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(setIsLoader(true))
        setError("");

        try {
            await createUserWithEmailAndPassword(auth, email, password)
            dispatch(setIsUserLoggedIn(true));
        } catch (error) {
            setError("Failed to log in. Please check your credentials and try again.");
        } finally {
            dispatch(setIsLoader(false))
        }
    }

    if(isLoading){
        return <Loading /> 
      }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center text-gray-900">SignUp</h2>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email address</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                id="email"
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-dark focus:border-primary-dark focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                id="password"
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-dark focus:border-primary-dark focus:z-10 sm:text-sm"
                                placeholder="Password"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember"
                                type="checkbox"
                                className="h-4 w-4 text-primary-dark focus:ring-primary-dark border-gray-300 rounded"
                            />
                            <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-dark hover:bg-primary-darkHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark"
                        >
                            Create Account
                        </button>
                    </div>

                    {error && <p className="mt-2 text-center text-sm text-red-600">{error}</p>}

                    <div className="text-sm text-center">
                        Already have an account? <Link to="/login" className="font-medium text-primary-dark hover:text-primary-darkHover">Login</Link>
                    </div>

                    {isUserLoggedIn ? <Navigate to="/quiz" /> : null}
                </form>
            </div>
        </div>
    )
}

export default SignUp
