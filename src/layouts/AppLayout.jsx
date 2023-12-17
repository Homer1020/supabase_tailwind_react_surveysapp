import { Link, NavLink, Outlet } from 'react-router-dom'
import HomerLogo from '../assets/homerlogo.svg'
import { useContext } from 'react'
import { authContext } from '../context/authContext'

export default function AppLayout () {
  const { auth, logout } = useContext(authContext)

  return (
    <>
      <header className='bg-white shadow-sm'>
        <div className="max-w-7xl w-11/12 ml-auto mr-auto flex items-center justify-between">
          <Link to='/'>
            <img src={HomerLogo} alt="Homer Logo" width={120} />
          </Link>

          <nav>
            <ul>
              {
                !auth
                  ? (
                  <>
                    <li className='inline-block'>
                      <NavLink to='login' className='pt-7 pb-[calc(1.75rem_-_2px)] border-b-2 border-white hover:border-emerald-500 px-3 inline-block text-sm uppercase hover:text-emerald-600'>
                        Login
                      </NavLink>
                    </li>
                    <li className='inline-block'>
                      <NavLink to='register' className='pt-7 pb-[calc(1.75rem_-_2px)] border-b-2 border-white hover:border-emerald-500 px-3 inline-block text-sm uppercase hover:text-emerald-600'>
                        register
                      </NavLink>
                    </li>
                  </>
                    )
                  : (

                  <li className='inline-block'>
                      <button onClick={ logout } className='pt-7 pb-[calc(1.75rem_-_2px)] border-b-2 border-white hover:border-emerald-500 px-3 inline-block text-sm uppercase hover:text-emerald-600'>
                        Cerrar Sesion
                      </button>
                    </li>
                    )
              }
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
      <footer className='text-center py-5 text-sm uppercase'>
        <p>Homer Moncayo {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}
