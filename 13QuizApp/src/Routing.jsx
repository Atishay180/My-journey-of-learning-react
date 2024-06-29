import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Quiz1 from './components/Quiz1'
import ShowResult from './components/ShowResult'


const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SignUp />} />
                <Route path='/login' element={<Login />} />
                <Route path='/quiz' element={<Quiz1 />} />
                <Route path='/result' element={<ShowResult />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
