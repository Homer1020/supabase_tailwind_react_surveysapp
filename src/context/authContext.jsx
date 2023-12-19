import { createContext, useEffect, useState } from 'react'
import { supabase } from '../config/supabase'

// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext()

export default function AuthContextProvider ({ children }) {
  const [auth, setAuth] = useState(null)
  const [loading, setLoading] = useState(true)

  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (!error) {
      setAuth(data.user)
    }
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (!error) {
      setAuth(null)
    }
  }

  const register = async (email, password) => {
    const { data: createdUser, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        // emailRedirectTo: ''
      }
    })

    console.log({ createdUser, error })
    if (!error) {
      const { status } = await supabase.from('users').insert({
        id: createdUser.user.id,
        email: createdUser.user.email
      })

      console.log({ status })

      if (status === 201) {
        console.log('Creado mi negro')
      }
    }
  }

  useEffect(() => {
    supabase.auth.getSession()
      .then(({ data, error }) => {
        if (!error) {
          setAuth(data?.session?.user || null)
        }
        setLoading(false)
      })
  }, [])

  return (
    <authContext.Provider value={{
      auth,
      login,
      logout,
      register
    }}>
      { loading ? 'Loading' : children }
    </authContext.Provider>
  )
}
