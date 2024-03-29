import { useState } from 'react'
import './App.css'
import Quiz1 from './components/Quiz1'
import ShowResult from './components/ShowResult'

function App() {
  const [showOutput, setShowOutput] = useState(false)

  return (
    <div className='w-screen flex flex-col items-center'>
      <div className='w-screen p-5 mb-4'>
        <h1 className='text-4xl font-bold border-b-4 border-black pt-3 pb-6'>Simple Quiz</h1>
      </div>
      <Quiz1 showOutput={showOutput} setShowOutput={setShowOutput} />
      <ShowResult showOutput={showOutput} />
    </div>
  )
}

export default App
