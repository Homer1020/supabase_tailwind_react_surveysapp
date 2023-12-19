import { useContext } from 'react'
import { authContext } from '../../context/authContext'
import NavbarLink from './NavbarLink'

export default function Navbar () {
  const { auth, logout } = useContext(authContext)
  return (
    <nav>
      <ul>
        {
          !auth
            ? (
              <>
                <li className='inline-block'>
                  <NavbarLink path='login' text='Login' />
                </li>
                <li className='inline-block'>
                  <NavbarLink path='register' text='register' />
                </li>
              </>
              )
            : (

              <li className='inline-block'>
                <NavbarLink isButton={ true } onClick={ logout } text='Logout' />
              </li>
              )
        }
      </ul>
    </nav>
  )
}
