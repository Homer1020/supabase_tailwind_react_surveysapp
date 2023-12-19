import { useContext } from 'react'
import { authContext } from '../../context/authContext'
import NavbarLink from './NavbarLink'

export default function DashboardNavbar () {
  const { auth } = useContext(authContext)
  return (
    <nav>
      <ul>
        {
          auth &&
            (
              <>
                <li className='inline-block'>
                  <NavbarLink path='/' text='Encuestas' />
                </li>
                <li className='inline-block'>
                  <NavbarLink path='crear-encuesta' text='Crear Encuesta' />
                </li>
              </>
            )
        }
      </ul>
    </nav>
  )
}
