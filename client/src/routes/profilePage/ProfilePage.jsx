import './profilePage.css'
import Image from '../../components/image/Image'
import { useState } from 'react'
import Gallery from '../../components/gallery/Gallery'
import Collections from '../../components/collections/Collections'

const ProfilePage = () => {
  const [type, setType] = useState('saved')

  return (
    <div className='ProfilePage'>
      <Image
        className='profileImg'
        path='/general/noAvatar.png'
        alt='avatar-icon'
      />
      <h1 className='profileName'>John Doe</h1>
      <span className='profileUserName'>@johndoe</span>
      <div className='followCount'>10 followers * 20 fllowing</div>
      <div className='profileInteractions'>
        <Image path='/general/share.svg' alt='upload-icon' />
        <div className='profileButtons'>
          <button>Message</button>
          <button>Follow</button>
        </div>
        <Image path='/general/more.svg' alt='more-icon' />
      </div>
      <div className='profileOptions'>
        <span
          onClick={() => setType('created')}
          className={type === 'created' ? 'active' : ''}
        >
          Created
        </span>
        <span
          onClick={() => setType('saved')}
          className={type === 'saved' ? 'active' : ''}
        >
          Saved
        </span>
      </div>
      {type === 'created' ? <Gallery /> : <Collections />}
    </div>
  )
}

export default ProfilePage
