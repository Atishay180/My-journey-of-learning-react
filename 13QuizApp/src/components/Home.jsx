import React from 'react';
import logo from './../images/logoDark.png';
import bg2 from './../images/bg2.jpg';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoader } from '../features/questionSlice';
import Loader from './Loader';

const Home = () => {
    const isLoader = useSelector(state => state.isLoader);
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(setIsLoader(true));

        setTimeout(() => {
            dispatch(setIsLoader(false));
        }, 500);
    }

    if (isLoader) {
        return <Loader />;
    }

    const bgImage = {
        width: '60%',
        height: '60%',
        borderRight: '20px solid var(--primary-light)',
        borderTop: '20px solid var(--primary-light)',
        objectFit: 'cover',
        boxShadow: '45px -45px rgb(70, 26, 66)',
    }

    return (
        <div className='w-full h-screen flex items-center justify-center bg-gray-100'>
            <div className='w-full h-full flex flex-col md:flex-row'>
                {/* Text Section */}
                <div className='md:w-1/2 h-full p-10 md:p-28 flex flex-col justify-center'>
                    <div className='flex flex-col h-full bg-white p-8 rounded-lg shadow-lg'>
                        {/* Logo */}
                        <div className='flex justify-center mb-6'>
                            <img src={logo} alt="Logo" className='w-32 h-32 object-contain' />
                        </div>
                        <h1 className='text-5xl font-extrabold mb-6 text-gray-800'>
                            Welcome to Quizify
                        </h1>
                        <p className='text-lg text-gray-600 mb-8'>
                            A seamless quiz conducting platform where you can conduct & play quiz.
                        </p>
                        <div className='flex space-x-4'>
                            <NavLink onClick={handleOnClick} to='/signup' className="flex-1 bg-primary-dark text-white px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-primary-darkHover transition duration-200 text-center text-lg font-bold shadow-lg transform hover:scale-105">
                                Sign Up
                            </NavLink>
                            <NavLink onClick={handleOnClick} to='/login' className="flex-1 bg-primary-light text-primary-dark px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-primary-lightHover transition duration-200 text-center text-lg font-bold shadow-lg transform hover:scale-105">
                                Login
                            </NavLink>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className='md:w-1/2 h-full flex items-center justify-center pt-16'>
                    <img style={bgImage} src={bg2} alt="Background" />
                </div>
            </div>
        </div>
    )
}

export default Home;
