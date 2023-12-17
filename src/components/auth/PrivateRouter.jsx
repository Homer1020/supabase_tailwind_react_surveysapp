import { useContext } from 'react'
import { authContext } from '../../context/authContext'
import { Navigate } from 'react-router-dom'

export default function PrivateRouter ({ element: Element }) {
  const { auth } = useContext(authContext)

  return auth
    ? (
      <Element />
      )
    : (
      <Navigate to="/login" />
      )
}
