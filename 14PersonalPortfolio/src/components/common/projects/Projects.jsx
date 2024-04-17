import React from 'react'
import {project} from '../../data/project'

function Projects() {
  return (
    <div className='text-secondary font-primary'>
      
      <header className='text-primary m-3 sm:m-5 lg:m-10 font-bold flex justify-center text-4xl sm:text-5x'>{project.title}</header>

      <div className=' flex flex-wrap justify-evenly'>{project.content.map((data, index) => (
        <div className='w-4/5 sm:h-100 sm:w-80 flex flex-col items-center m-3 bg-tertiary rounded-xl duration-700 hover:cursor-pointer hover:scale-105' key={index}>
            <img className='w-full rounded-xl' src={data.images} alt="" />
            <div className='text-2xl m-2 p-2 text-center font-semibold text-primary'>{data.projectName}</div>
            <div className='text-sm m-2 p-2 text-center'>{data.technologies}</div>
        </div>
      ))}</div>
    </div>
  )
}

export default Projects
