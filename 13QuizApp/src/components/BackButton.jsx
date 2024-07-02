import React from 'react'
import {useNavigate} from 'react-router-dom'

const BackButton = ({to}) => {
    const navigate = useNavigate()

  return (
    <div>
      <button
      onClick={() => navigate(to)}
      className="absolute top-16 left-4 m-3 py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-primary-dark text-primary-light hover:bg-primary-darkHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light"
    >
      Back
    </button>
    </div>
  )
}

export default BackButton
