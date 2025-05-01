import EmojiPicker from 'emoji-picker-react'
import { useState } from 'react'
const CommentForm = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
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
  )
}

export default CommentForm
