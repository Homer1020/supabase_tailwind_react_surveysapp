import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import AppLayout from './layouts/AppLayout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import PrivateRouter from './components/auth/PrivateRouter'
import PublicRoute from './components/auth/PublicRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <PrivateRouter element={ Home } />
      },
      {
        path: 'login',
        element: <PublicRoute element={ Login } />
      },
      {
        path: 'register',
        element: <PublicRoute element={ Register } />
      }
    ]
  }
])

export default router
