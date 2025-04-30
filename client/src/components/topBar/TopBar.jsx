import Image from '../image/Image'
import UserButton from '../userButton/UserButton'
import './topBar.css'
import { useNavigate } from 'react-router'

const TopBar = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    navigate(`/search?search=${e.target[0].value}`)
  }
  return (
    <div className='topBar'>
      {/* search */}
      <form onSubmit={handleSubmit} className='search'>
        <Image path='/general/search.svg' alt='' />
        <input type='text' placeholder='Search' />
      </form>
      {/* userProile img */}
      <UserButton />
    </div>
  )
}

export default TopBar
