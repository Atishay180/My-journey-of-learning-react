import React from 'react'
import { achievements } from '../data/Achievements'

function Achievements() {
  return (
    <div className='text-white'>
      <header className='border border-black m-3 sm:m-5 lg:m-10 font-bold flex justify-center text-4xl sm:text-5xl'><h1>{achievements.title}</h1></header>

      <div className='flex flex-wrap justify-evenly'>{achievements.content.map((data, index) => (
        <div className=' w-4/5 sm:w-80 flex flex-col items-center justify-evenly p-2 m-3 bg-zinc-800 rounded-xl duration-700 hover:cursor-pointer hover:scale-105' key={index}>
          <span className='flex w-full'><img className='w-full' src={data.image} alt="" /></span>
          <div className='text-center m-2'>{data.name}</div>
          <div className='text-center text-xs m-2'>{data.description}</div>
        </div>
      ))}</div>
    </div>
  )
}

export default Achievements
