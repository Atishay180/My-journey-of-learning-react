import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then((response) => response.json())
    //         .then((data) => setData(data))
    // })

    return (
        <div className="bg-gray-700 text-white text-2xl p-4 m-4 text-center">
            <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    )
}

export default Github

export const gihubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Atishay180')
    return response.json()
}
