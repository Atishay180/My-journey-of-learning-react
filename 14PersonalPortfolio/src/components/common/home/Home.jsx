import React from 'react'
import homeData from '../../data/homeData'
import './Home.css'

function Home() {

    return (
        <div>
            <div className='text-secondary flex flex-col-reverse md:flex-row items-center justify-evenly py-12 px-10'>
                {/* left */}
                <div className='md:w-3/5 flex flex-col justify-center'>
                    <div className='text-4xl text-center px-4 py-4'>{homeData.title}</div>
                    <div className=' text-center px-4 py-4'>{homeData.subtitle}</div>
                    <div className=' text-center px-4 py-5'>{homeData.description}</div>
                </div>

                {/* right */}
                <div className='md:w-2/5 flex justify-center items-center'>
                    <span className='container flex w-4/5'><img className='w-full' src={homeData.profilePic} alt="" /></span>
                </div>
            </div>
            {/* <img className='absolute w-screen h-full top-0 -z-10 opacity-10' src={homeData.backgroundPic} alt="" /> */}
        </div>
    )
}

export default Home
