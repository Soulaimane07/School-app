import React from 'react'

function Profile() {
  return (
    <div className='profile'>
        <div className='image' style={{ backgroundImage: `url("./assets/images/avatar.jpg")` }}>
        </div>
        <div className='details'>
            <p> Soulaimane Ouhmida </p>
            <span> Student </span>
        </div>
    </div>
  )
}

export default Profile