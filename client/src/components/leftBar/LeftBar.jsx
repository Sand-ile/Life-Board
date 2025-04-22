import './leftBar.css'
import Image from '../image/Image'
import { Link } from 'react-router'

const LeftBar = () => {
  return (
    <div className='leftBar'>
      <div className='menuIcons'>
        {/* single menu Icon */}
        <Link to='/' className='menuIcon'>
          <Image path='/general/logo.png' alt='' className='logo' />
        </Link>
        {/* end of single menu Icon */}
        {/* single menu Icon */}
        <Link to='/' className='menuIcon'>
          <Image path='/general/home.svg' alt='' />
        </Link>
        {/* end of single menu Icon */}
        {/* single menu Icon */}
        <Link to='/create' className='menuIcon'>
          <Image path='/general/create.svg' alt='' />
        </Link>
        {/* end of single menu Icon */}
        {/* single menu Icon */}
        <Link to='/' className='menuIcon'>
          <Image path='/general/messages.svg' alt='' />
        </Link>
        {/* end of single menu Icon */}
      </div>
      {/* single menu Icon */}
      <Link to='/' className='menuIcon'>
        <Image path='/general/settings.svg' alt='' />
      </Link>
      {/* end of single menu Icon */}
    </div>
  )
}

export default LeftBar
