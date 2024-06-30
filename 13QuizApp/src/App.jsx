import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Quiz1 from './components/Quiz1'
import ShowResult from './components/ShowResult'
import logo from './images/logo.png'
import Loader from './components/Loader'
import FrontPage from './components/FrontPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Services from './pages/Services'
import About from './pages/About'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<FrontPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/quiz' element={<Quiz1 />} />
        <Route path='/result' element={<ShowResult />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    // <Loader />
  )
}

export default App
