import './App.css'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
