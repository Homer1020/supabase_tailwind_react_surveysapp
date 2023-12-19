import { Outlet } from 'react-router-dom'
import Footer from '../components/ui/Footer'
import Header from '../components/ui/Header'

export default function AppLayout () {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
