import React from 'react'

function Signup() {
  return (
    <div className='login'>
        <div className='header'>
            <div className='title'> Sign Up </div>
            <p> Enter your email and password to sign in </p>
        </div>
        <div className='body'>
            <div className='box'>
                <label> Email </label>
                <input type={'email'} />
            </div>
            <div className='box'>
                <label> Password </label>
                <input type={'password'} />
            </div>
            <div className='button'>
                <button>Sign In</button>
            </div>
        </div>
    </div>
  )
}

export default Signup