import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import Home from './Home.jsx'
import Profile from './Profile.jsx'
import Contact from './Contact.jsx'

function Header() {
  return (
    <div>
      <Home />
      <Outlet />
    </div>
  )
}

export default Header
