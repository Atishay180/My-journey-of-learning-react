import React from 'react'
import navbarData from '../../data/navbarData'

function Navbar() {
  return (
    <div className='flex py-5 justify-between text-secondary'>
        <div className='flex justify-center items-center text-3xl w-1/3 my-4'>{navbarData.logo}</div>
        <div className='flex flex-wrap justify-evenly items-center w-2/3'>{navbarData.navItems.map((data, index) => (
            <div className='flex items-center mx-4 my-4 duration-200 hover:text-primary hover:scale-105 hover:cursor-pointer' key={index}><a href="#">{data}</a></div>
        ))}</div>
    </div>
  )
}

export default Navbar
