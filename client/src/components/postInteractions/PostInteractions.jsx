import Image from '../image/Image'
import './postInteractions.css'

const PostInteractions = () => {
  return (
    <div className='PostInteractions'>
      <div className='interactionIcons'>
        <Image path='/general/react.svg' />
        273
        <Image path='/general/share.svg' />
        <Image path='/general/more.svg' />
      </div>
      <button>Save</button>
    </div>
  )
}

export default PostInteractions
