import { useEffect, useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home'
import GuestLayout from './layouts/GuestLayout'


function App() {
  

  const routes= 
      [
        {
              path : "/",
              element : <GuestLayout />,
              children : [
                {
                  path : "/",
                  element : <Home />,
                  index : true,
                },
               
              ]
            },

      ]
 
  const router = createBrowserRouter(routes)

  return (
    <RouterProvider router={router} />


  )
}

export default App
