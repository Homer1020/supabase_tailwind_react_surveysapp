import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './router.jsx'
import AuthContextProvider from './context/authContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={ router } />
    </AuthContextProvider>
  </React.StrictMode>
)
