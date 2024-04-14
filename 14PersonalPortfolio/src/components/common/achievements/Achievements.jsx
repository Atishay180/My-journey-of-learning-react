import React from 'react'
import {achievementData} from '../../data/achievementData'

function Achievements() {
  return (
    <div className='text-secondary font-primary'>
      <header className='text-primary m-3 sm:m-5 lg:m-10 font-bold flex justify-center text-4xl sm:text-5xl'><h1>{achievementData.title}</h1></header>

      <div className='flex flex-wrap justify-evenly'>{achievementData.content.map((data, index) => (
        <div className='w-4/5 sm:w-80 flex flex-col items-center justify-evenly p-2 m-3 bg-tertiary rounded-xl duration-700 hover:cursor-pointer hover:scale-105' key={index}>
          <span className='flex w-full'><img className='w-full' src={data.image} alt="" /></span>
          <div className='text-2xl m-2 p-2 text-center font-semibold text-primary'>{data.name}</div>
          <div className='text-sm m-2 p-2 text-center'>{data.description}</div>
        </div>
      ))}</div>
    </div>
  )
}

export default Achievements
