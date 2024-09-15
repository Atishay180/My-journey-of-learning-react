import React from 'react';
import { Carousel } from 'antd';
import bg1 from "../images/bg2.jpg"
import { quizQuestions } from "../hooks/questions.js"
import bg3 from './../images/bg3.jpg';



const Test = () => {

    return (
        <div className='w-full h-screen'>
            <img className='absolute -z-10 w-full h-full object-cover rotate-180' src={bg3} alt="" />



            <Carousel autoplay autoplaySpeed={2000} dotPosition='bottom' className=''>
                {quizQuestions.map((q, index) => (
                    <div key={index} className='border-black relative w-full h-52 flex flex-col items-center justify-center'>
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <img className='w-full h-full object-cover blur-sm' src={bg1} alt="" />
                        </div>
                        <div className='w-full h-full relative flex flex-col justify-center items-center z-10'>
                            <img className='w-1/12' src={q.logo} alt="" />
                            <h1 className='text-white text-xl'>{q.title}</h1>
                        </div>
                    </div>
                ))}
            </Carousel>
            
            <div className='p-4 text-center'>
                <h2 className='text-primary-dark font-bold text-3xl mb-2'>Welcome to Quizify</h2>
                <p className='text-primary-dark font-bold text-lg'>
                    Test your knowledge with a variety of quizzes on different topics.
                    Join now to challenge yourself and improve your skills!
                </p>
            </div>
        </div>
    );
};

export default Test;
