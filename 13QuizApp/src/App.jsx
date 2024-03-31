import Quiz1 from './components/Quiz1'
import ShowResult from './components/ShowResult'
import { useSelector } from 'react-redux'
import Start from './components/Start'

function App() {
  const isUserStarted = useSelector(state => state.quizStatus.isUserStarted)
  const isSubmitted = useSelector(state => state.quizStatus.isSubmitted)


  return (
    <div className='w-screen flex flex-col items-center'>
      <div className='w-screen p-5 mb-4'>
        <h1 className='text-4xl text-white font-bold border-b-4 border-white pt-3 pb-6'>Simple Quiz</h1>
      </div>

      {!isSubmitted && !isUserStarted ? <Start /> : null}

      {!isSubmitted && isUserStarted ? <Quiz1 /> : null}

      {isSubmitted && isUserStarted ? <ShowResult /> : null}
    </div>
  )
}

export default App
