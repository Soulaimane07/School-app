import React from 'react'
import {NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom'
import './Nav.css'

import {RiDashboardLine} from 'react-icons/ri'
import {BsCalendarWeek} from 'react-icons/bs'
import {MdSchool} from 'react-icons/md'
import Time from './Time'

function Nav() {

  const navitems = [
    {
      'title':'Dashboard',
      'icon':<RiDashboardLine />,
      'link':'/'
    },
    {
      'title':'Courses',
      'icon':<MdSchool />,
      'link':'/courses'
    },
    {
      'title':'Homeworks',
      'icon':<BsCalendarWeek />,
      'link':'/homeworks'
    },
    {
      'title':'Calendar',
      'icon':<BsCalendarWeek />,
      'link':'/calendar'
    },
    {
      'title':'Students',
      'icon':<RiDashboardLine />,
      'link':'/students'
    },
  ]

  return (
    <div className='nav'>
      <Link to='/' className='logo'>
        <img src='/assets/images/logo.png' />
      </Link>

      <Time />

      <div className='links'>
        {navitems.map((item,key)=>(
          <NavLink exact className='navitem' activeClassName='activeitem' to={item.link} key={key}>
            <div className='icon'>{item.icon}</div>
            <div className='title'>{item.title}</div>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Nav