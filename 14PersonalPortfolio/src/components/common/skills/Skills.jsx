import React, { useState } from 'react'
// import { Progress, } from 'antd';
import skillData from '../../data/skillData'

function Skills() {

    return (

        <div className={`text-secondary font-primary bg-zinc-900 mx-5 py-5 rounded-lg border`}>
            <header className='text-primary p-4 font-bold flex justify-center text-4xl sm:text-5xl'>{skillData.title}</header>

            <div className='flex px-5 py-5'>
                {/* left */}
                <div className='w-1/2 px-8 py-4 flex flex-col justify-evenly'>
                    <div className='text-3xl'>{skillData.subTitle}</div>
                    <div className='flex flex-col'>
                        {skillData.Descriptions.map((data, index) => (
                            <li key={index} className='py-3 text-xl'>{data}</li>
                        ))}
                    </div>
                </div>

                {/* right */}
                <div className='flex flex-wrap w-1/2 border'>
                    <div className='border flex flex-wrap'>
                        {skillData.languages.content.map((data, index) => (
                            <div key={index}>
                                <button className='flex font-bold w-28 my-2 mx-5 px-2 py-3 justify-center rounded-lg bg-black duration-200 hover:scale-110 hover:bg-primary'> {data.title}</button>
                            </div>
                        ))}
                    </div>


                    <div className='border flex flex-wrap'>
                        {skillData.frameworks.content.map((data, index) => (
                            <div key={index}>
                                <button className='flex font-bold w-28 my-2 mx-5 px-2 py-3 justify-center rounded-lg bg-black duration-200 hover:scale-110 hover:bg-primary'> {data.title}</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
