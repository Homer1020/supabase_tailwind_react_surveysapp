import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import HomerLogo from '../../assets/homerlogo-white.svg'
import Container from '../Container'
import DashboardNavbar from './DashboardNavbar'

export default function Header () {
  return (
    <header className='bg-white dark:bg-slate-900 border-b border-slate-800'>
      <Container className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Link to='/' className='mr-8'>
              <img src={HomerLogo} alt="Homer Logo" width={100} />
            </Link>
            <DashboardNavbar />
          </div>
          <Navbar />
      </Container>
    </header>
  )
}
