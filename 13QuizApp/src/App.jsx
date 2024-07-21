import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Quiz1 from './components/Quiz1'
import ShowResult from './components/ShowResult'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Services from './pages/Services'
import About from './pages/About'
import Home from './pages/Home'
import ErrorPage from './components/ErrorPage'
import Start from './components/Start'
import QuizSelection from './components/QuizSelection'
import Profile from './components/Profile'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile' element={<Profile />}/>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/select' element={<QuizSelection />} />
        <Route path='/start' element={<Start />} />
        <Route path='/quiz' element={<Quiz1 />} />
        <Route path='/result' element={<ShowResult />} />
        <Route path='/error' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>

    // <Loader />
    // <Quiz1 />
    // <BackButton />
  )
}

export default App
