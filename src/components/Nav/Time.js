import React from 'react'
import {CiClock1} from 'react-icons/ci'

function Time() {
  return (
    <div className='clock'>
        <div className='icon'>
            <CiClock1 />
        </div>
        <div className='day'> {new Date().toDateString()}  </div>
        {/* <div className='time'> {new Date().getHours()}:{new Date().getMinutes()} </div> */}
    </div>
  )
}

export default Time