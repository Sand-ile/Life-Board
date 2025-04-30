import './profilePage.css'
import Image from '../../components/image/Image'
import { useState } from 'react'
import Gallery from '../../components/gallery/Gallery'
import Boards from '../../components/boards/Boards.jsx'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'
import apiRequest from '../../utils/apiRequest.js'

const ProfilePage = () => {
  const [type, setType] = useState('saved')

  const { username } = useParams()

  const { isPending, error, data } = useQuery({
    queryKey: ['profile', username],
    queryFn: () => apiRequest.get(`/users/${username}`).then((res) => res.data),
  })

  if (isPending) return 'Laoding...'
  if (error) return 'An error occurred ' + error.message
  if (!data) return 'User not found'

  return (
    <div className='ProfilePage'>
      <Image
        className='profileImg'
        src={data.img || '/general/noAvatar.png'}
        alt='avatar-icon'
      />
      <h1 className='profileName'>{data.displayName}</h1>
      <span className='profileUserName'>@{data.username}</span>
      <div className='followCount'>10 followers * 20 following</div>
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
      {type === 'created' ? (
        <Gallery userId={data._id} />
      ) : (
        <Boards userId={data._id} />
      )}
    </div>
  )
}

export default ProfilePage
