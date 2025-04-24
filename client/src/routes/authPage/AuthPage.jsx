import './authPage.css'
import Image from '../../components/image/Image'
import { useState } from 'react'

const AuthPage = () => {
  const [isRegistered, setIsRegistered] = useState(false)

  const [error, setError] = useState('')

  return (
    <div className='AuthPage'>
      <div className='authContainer'>
        <Image path='/general/logo.png' alt='logo' />
        <h1>{isRegistered ? 'Create An Account' : 'Log in to your account'}</h1>
        {isRegistered ? (
          <form key='register'>
            {/* single form input */}
            <div className='formGroup'>
              <label htmlFor='username'>Username</label>
              <input
                type='username'
                placeholder='Username'
                required
                name='username'
                id='username'
              />
            </div>
            {/* end of single form input */}

            {/* single form input */}
            <div className='formGroup'>
              <label htmlFor='displayName'>Name</label>
              <input
                type='displayName'
                placeholder='Name'
                required
                name='displayName'
                id='displayName'
              />
            </div>
            {/* end of single form input */}

            {/* single form input */}
            <div className='formGroup'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                placeholder='Email'
                required
                name='email'
                id='email'
              />
            </div>
            {/* end of single form input */}

            {/* single form input */}
            <div className='formGroup'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                placeholder='Password'
                required
                name='password'
                id='password'
              />
            </div>
            {/* end of single form input */}

            <button type='submit'>Register</button>
            <p onClick={() => setIsRegistered(false)}>
              Do you have an account? <b>Login</b>
            </p>
            {error && <p className='error'>{error}</p>}
          </form>
        ) : (
          <form key='login'>
            {/* single form input */}
            <div className='formGroup'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                placeholder='Email'
                required
                name='email'
                id='email'
              />
            </div>
            {/* end of single form input */}

            {/* single form input */}
            <div className='formGroup'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                placeholder='Password'
                required
                name='password'
                id='password'
              />
            </div>
            {/* end of single form input */}
            <button type='submit'>Login</button>
            <p onClick={() => setIsRegistered(true)}>
              Don't have an account? <b>Register</b>
            </p>
            {error && <p className='error'>{error}</p>}
          </form>
        )}
      </div>
    </div>
  )
}

export default AuthPage
