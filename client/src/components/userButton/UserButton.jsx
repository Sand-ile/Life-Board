import Image from '../image/Image'
import './userButton.css'
import { useState } from 'react'

const UserButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  // temp user
  const currentUser = true

  return currentUser ? (
    <div className='userButton'>
      <Image path='/general/noAvatar.png' alt='' />
      <Image
        path='/general/arrow.svg'
        alt=''
        className='arrow'
        onClick={() => setIsOpen((prev) => !prev)}
      />
      {isOpen && (
        <div className='userOptions'>
          <div className='userOption'>Profile</div>
          <div className='userOption'>Settings</div>
          <div className='userOption'>Logout</div>
        </div>
      )}
    </div>
  ) : (
    <a href='/' className='loginLink'>
      Login / SignUp
    </a>
  )
}

export default UserButton
