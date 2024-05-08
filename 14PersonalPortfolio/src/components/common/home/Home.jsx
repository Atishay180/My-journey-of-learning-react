import React from 'react'
import homeData from '../../data/homeData'
import './Home.css'

function Home() {

    return (
        <div>
            <div className='text-secondary my-44 flex flex-col-reverse md:flex-row items-center justify-evenly py-12 px-14'>
                {/* left */}
                <div className='md:w-3/5 flex flex-col justify-center'>
                    <div className='text-7xl px-4 py-4'>Hi<span className='text-primary'>!</span> I'm <span className='text-primary'>Atishay Jain</span></div>
                    <div className='text-4xl px-4 py-4'>{homeData.subtitle}</div>
                    <div className='px-4 py-5'>{homeData.description}</div>
                </div>

                {/* right */}
                <div className='md:w-2/5 flex justify-center items-center'>
                    <span className='container flex items-center justify-center w-4/5'>
                        <img className='w-2/5' src={homeData.profile} alt="" />
                        <img className='w-full absolute' src={homeData.frame} alt="" />
                    </span>
                </div>
            </div>
            {/* <img className='absolute w-screen h-full top-0 -z-10 opacity-10' src={homeData.backgroundPic} alt="" /> */}
        </div>
    )
}

export default Home
