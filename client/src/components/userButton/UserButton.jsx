import Image from '../image/Image'
import './userButton.css'
import { useState } from 'react'
import apiRequest from '../../utils/apiRequest'
import { useNavigate } from 'react-router'

const UserButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navigate = useNavigate()
  // temp user
  const currentUser = true

  const handleLogout = async () => {
    try {
      await apiRequest.post('/users/auth/logout', {})
      navigate('/auth')
    } catch (err) {
      console.log(err)
    }
  }

  return currentUser ? (
    <div className='userButton'>
      <Image path='/general/noAvatar.png' alt='' />
      <div onClick={() => setIsOpen((prev) => !prev)}>
        <Image path='/general/arrow.svg' alt='' className='arrow' />
      </div>
      {isOpen && (
        <div className='userOptions'>
          <div className='userOption'>Profile</div>
          <div className='userOption'>Settings</div>
          <div className='userOption' onClick={handleLogout}>
            Logout
          </div>
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
