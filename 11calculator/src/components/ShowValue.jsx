import React from 'react'

function ShowValue({value}) {
    return (
        <div>
            <input type="text" value={value} placeholder='0' className='text-3xl text-white bg-gray-800 border-2 border-solid border-gray-600 p-2 m-2 w-64 rounded-lg' readOnly />
        </div>
    )
}

export default ShowValue
