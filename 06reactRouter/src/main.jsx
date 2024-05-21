import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { gihubInfoLoader } from './components/Github/Github.jsx'
import { Auth0Provider } from '@auth0/auth0-react';



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />

      <Route 
      path='github' 
      element={<Github />} 
      loader={gihubInfoLoader}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-epe6nowd34ymj1d7.us.auth0.com"
    clientId="NDxUEwPPmw9JBWAMz75uZGnwo593hMCF"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <RouterProvider router = {router} />
  </Auth0Provider>,
)
