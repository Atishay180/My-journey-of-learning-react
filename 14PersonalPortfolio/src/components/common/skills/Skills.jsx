import React, { useState } from 'react'
import { Progress } from 'antd';
import skillData from '../../data/skillData'

function Skills() {

    return (

        <div className={`text-secondary font-primary`}>
            <header className='text-primary m-3 sm:m-5 lg:m-10 font-bold flex justify-center text-4xl sm:text-5xl'>{skillData.title}</header>

            <div className='flex'>
                {/* left */}
                <div className='border'>
                    <div>{skillData.subTitle}</div>
                    <div className='px-5 border flex flex-col justify-evenly'>
                        {skillData.Descriptions.map((data, index) => (
                            <li key={index} className=''>{data}</li>
                        ))}
                    </div>
                </div>

                {/* right */}
                <div className='flex w-1/2'>
                    {/* languages */}
                    <div className='w-1/2 flex flex-col'>
                        <div className='text-2xl'>{skillData.languages.title}</div>
                        {skillData.languages.content.map((data, index) => (
                            <div className='w-full my-2 py-2' key={index}>
                                <div className='absolute z-10 p-2'>{data.title}</div>
                                <Progress strokeWidth={40} percent={data.percent} trailColor='gray' strokeColor={'rgb(219, 39, 119)'} />
                            </div>
                        ))}
                    </div>

                    {/* frameworks */}
                    <div className='w-1/2 flex flex-col'>
                        <div className='text-2xl'>{skillData.frameworks.title}</div>
                        {skillData.frameworks.content.map((data, index) => (
                            <div className='w-full my-2 py-2' key={index}>
                                <div className='absolute z-10 p-2'>{data.title}</div>
                                <Progress strokeWidth={40} percent={data.percent} trailColor='gray' strokeColor={'rgb(219, 39, 119)'} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
