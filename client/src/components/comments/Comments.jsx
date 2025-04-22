import './comments.css'
import Image from '../../components/image/Image'
import EmojiPicker from 'emoji-picker-react'
import { useState } from 'react'

const Comments = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='Comments'>
      <div className='commentList'>
        <span className='commentCount'>5 comments</span>
        {/* single comment */}
        <div className='comment'>
          <Image path='/general/noAvatar.png' alt='avatar-icon' />
          <div className='commentContent'>
            <span className='commentUsername'>John</span>
            <p className='commentText'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              rem.
            </p>
            <span className='commentTime'>1 Hour ago</span>
          </div>
        </div>
        {/* end of single comment */}

        {/* single comment */}
        <div className='comment'>
          <Image path='/general/noAvatar.png' alt='avatar-icon' />
          <div className='commentContent'>
            <span className='commentUsername'>John</span>
            <p className='commentText'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              rem.
            </p>
            <span className='commentTime'>1 Hour ago</span>
          </div>
        </div>
        {/* end of single comment */}

        {/* single comment */}
        <div className='comment'>
          <Image path='/general/noAvatar.png' alt='avatar-icon' />
          <div className='commentContent'>
            <span className='commentUsername'>John</span>
            <p className='commentText'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              rem.
            </p>
            <span className='commentTime'>1 Hour ago</span>
          </div>
        </div>
        {/* end of single comment */}

        {/* single comment */}
        <div className='comment'>
          <Image path='/general/noAvatar.png' alt='avatar-icon' />
          <div className='commentContent'>
            <span className='commentUsername'>John</span>
            <p className='commentText'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              rem.
            </p>
            <span className='commentTime'>1 Hour ago</span>
          </div>
        </div>
        {/* end of single comment */}
      </div>
      <form className='commentForm'>
        <input type='text' placeholder='Add a comment' />
        <div className='emoji'>
          <div onClick={() => setIsOpen((prev) => !prev)}>😊</div>
          {isOpen && (
            <div className='emojiPicker'>
              <EmojiPicker />
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default Comments
