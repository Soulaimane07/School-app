import React from 'react'

function Details(props) {
  return (
    <div className='details'>
      <div>
        <div className='imagebox' style={{ backgroundImage: `url('/assets/images/defaultimage.jpg')`}}></div>
      </div>
      <div className='body'>
        <div className='title'> {props.data.title} </div>
        <p> {props.data.para} </p>
      </div>
    </div>
  )
}

export default Details