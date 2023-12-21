import { useContext } from 'react'
import Container from '../../components/Container'
import Input from '../../components/Input'
import { authContext } from '../../context/authContext'

export default function Login () {
  const { login } = useContext(authContext)

  const handleLogin = async e => {
    e.preventDefault()
    login(e.target.email.value, e.target.password.value)
  }

  return (
    <Container>
      <form className='bg-white dark:bg-slate-800 dark:text-gray-100 rounded-md border border-gray-700 shadow-md p-5 w-full lg:w-5/12 ml-auto mr-auto my-7' onSubmit={ handleLogin }>
        <h1 className='uppercase text-lg font-semibold mb-5'>Iniciar Sesion</h1>

        <div className="mb-3">
          <div className="mb-3">
            <label htmlFor="email" className='inline-block mb-2'>Correo</label>
            <Input type='email' id='email' />
          </div>
          <div className="mb-7">
            <label htmlFor="password" className='inline-block mb-2'>Contrasenia</label>
            <Input type='password' id='password' />
          </div>

          <button className='inline-block bg-emerald-500 text-gray-50 px-3 py-2 rounded-md cursor-pointer hover:bg-emerald-600'>
            Iniciar Sesion
          </button>
        </div>
      </form>
    </Container>
  )
}
