import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'
import Layout from './Layout'
import Home from './components/home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'

const router = createBrowserRouter([
    {
      path :"/",
      element : <Layout/>,
      children:[
        {
          path:"",
          element: <Home/>
        },
        {
          path:"about",
          element: <About/>
        },
        {
          path:"contact",
          element: <Contact/>
        },
        {
          path: "user/:userId",
          element: <User/>
        }
      ]
    }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
