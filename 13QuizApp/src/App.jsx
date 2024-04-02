import Quiz1 from './components/Quiz1'
import './App.css'
import ShowResult from './components/ShowResult'
import { useSelector } from 'react-redux'
import Start from './components/Start'

function App() {
  const isUserStarted = useSelector(state => state.quizStatus.isUserStarted)
  const isSubmitted = useSelector(state => state.quizStatus.isSubmitted)


  return (
    <div className='w-screen h-screen flex flex-col justify-between items-center'>

      <div className={`bgImage opacity-45 ${isUserStarted ? "blur-sm" : ""}`}></div> {/* background */}

      <header className='w-screen p-5'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white shadow-2xl font-bold border-b-4 border-white pt-3 pb-6'>SIMPLE QUIZ</h1>
      </header>

      {!isSubmitted && !isUserStarted ? <Start /> : null}

      {!isSubmitted && isUserStarted ? <Quiz1 /> : null}

      {isSubmitted && isUserStarted ? <ShowResult /> : null}

      <footer className="text-white text-sm m-4 text-center">
        © 2024 Quiz App. All rights reserved.
      </footer>
    </div>
  )
}

export default App
