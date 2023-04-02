import React from 'react'
import Boxe from './Boxe'
import './Home.css'

import {SlNotebook} from 'react-icons/sl'
import {RiDashboardLine} from 'react-icons/ri'
import {BsCalendarWeek} from 'react-icons/bs'
import {MdSchool} from 'react-icons/md'

import {Link} from 'react-router-dom'
import Today from './Today'
import Homeworks from './Homeworks'

function Home(props) {

  const boxes = [
    {
      'title':'Courses',
      'icon':<SlNotebook />,
      'number':10,
      'color':'4B76E6',
      'bg':'E8EEFF',
      'link':'/courses'
    },
    {
      'title':'Classes Homeworks',
      'icon':<RiDashboardLine />,
      'number': props.classes.length,
      'color':'604BE8',
      'bg':'E7E4FC',
      'link':'/homeworks'
    },
    {
      'title':'Calendar',
      'icon':<BsCalendarWeek />,
      'number':4,
      'color':'06D6A0',
      'bg':'DBFFED',
      'link':'/calendar'
    },
    {
      'title':'Students',
      'icon':<MdSchool />,
      'number':3,
      'color':'FF9F04',
      'bg':'FFF8ED',
      'link':'/students'
    },
  ]

  return (
    <div className='home'>
      <div className='boxes'>
        {boxes.map((box,key)=>(
          <Link to={box.link} className="boxx" key={key}>
            <Boxe title={box.title} icon={box.icon} number={box.number} color={box.color} bg={box.bg} />
          </Link>
        ))}
      </div>

      <div className='boxes'>
        <Today />
        <Homeworks 
          classes={props.classes} 
          selected={props.selected} 
          setSelected={props.setSelected} 
          details={props.details} 
          setDetails={props.setDetails}  
        />
      </div>

    </div>
  )
}

export default Home