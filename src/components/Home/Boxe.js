import React from 'react'

function Boxe(props) {
  return (
    <div className='box' style={{backgroundColor: `#${props.bg}`}}>
        <div className='icon' style={{color:`#${props.color}`}} >
            {props.icon}
        </div>
        <div className='details'>
            <div className='number'>
                {props.number}
            </div>
            <div className='title'>
                {props.title}
            </div>
        </div>
    </div>
  )
}

export default Boxe