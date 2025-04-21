import './leftBar.css'
import Image from '../image/Image'

const LeftBar = () => {
  return (
    <div className='leftBar'>
      <div className='menuIcons'>
        {/* single menu Icon */}
        <a href='/' className='menuIcon'>
          <Image path='/general/logo.png' alt='' className='logo' />
        </a>
        {/* end of single menu Icon */}
        {/* single menu Icon */}
        <a href='/' className='menuIcon'>
          <Image path='/general/home.svg' alt='' />
        </a>
        {/* end of single menu Icon */}
        {/* single menu Icon */}
        <a href='/' className='menuIcon'>
          <Image path='/general/create.svg' alt='' />
        </a>
        {/* end of single menu Icon */}
        {/* single menu Icon */}
        <a href='/' className='menuIcon'>
          <Image path='/general/messages.svg' alt='' />
        </a>
        {/* end of single menu Icon */}
      </div>
      {/* single menu Icon */}
      <a href='/' className='menuIcon'>
        <Image path='/general/settings.svg' alt='' />
      </a>
      {/* end of single menu Icon */}
    </div>
  )
}

export default LeftBar
