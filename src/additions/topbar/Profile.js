import React from 'react'

import { FaUser } from 'react-icons/fa';

function Profile(props) {
  return (
    <div className='profile'>
        <div className='avatar image' style={{ backgroundImage: `url(${props.user.avatar})` }}>
          {props.user.avatar == '' && <FaUser />} 
        </div>
        <div>
            <p> {props.user.fname} </p>
        </div>
    </div>
  )
}

export default Profile