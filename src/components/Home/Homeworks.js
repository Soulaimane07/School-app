import React from 'react'
import { Link } from 'react-router-dom'
import HeaderTo from '../../additions/Header/HeaderTo'
import './Homeworks.css'

function Homeworks(props) {

    const currenttime = new Date().getDate() + new Date().getFullYear() + new Date().getMonth()+1 
    // const deadline = Number(props.data.deadline.substring(0, 4)) + Number(props.data.deadline.substring(5, 7)) + Number(props.data.deadline.substring(8, 10))
    const timeleft = -currenttime

  return (
    <div className='homehomeworks'>
        <HeaderTo title='Homeworks' link='homeworks' />
        <div className='body'>
            {props.classes.map((item,key)=>(
                Number(item.deadline.substring(0, 4)) + Number(item.deadline.substring(5, 7)) + Number(item.deadline.substring(8, 10)) - currenttime > 0 &&
                    <Link onClick={()=> props.setDetails(true) & props.setSelected(item.id-1)} className='homework' to='/homeworks'  key={key}>
                        {item.title}
                        <span className='left'>  
                            {`${Number(item.deadline.substring(0, 4)) + Number(item.deadline.substring(5, 7)) + Number(item.deadline.substring(8, 10)) - currenttime}  days`} 
                        </span>
                    </Link>
            ))}
        </div>
    </div>
  )
}

export default Homeworks