import React from 'react'
import Search from './Search'
import Profile from './Profile'
import './Topbar.css'

import {Link} from 'react-router-dom'

import {FiLogOut} from 'react-icons/fi'

function Topbar(props) {
  return (
    <div className='topbar'>
        <div className='left'> {window.location.pathname} </div>
        
        <Link to='/profile' >
          <Profile user={props.user} />
        </Link>

        <div className='right'>
            <div className='search'>
                <Search />
            </div>
            <Link to='/auth' onClick={()=> props.setIsloged(false)} className='logout'> <FiLogOut /> </Link>
        </div>
    </div>
  )
}

export default Topbar