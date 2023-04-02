import React from 'react'
import './HeaderTo.css'
import { Link } from 'react-router-dom'


import {RiArrowRightSLine} from 'react-icons/ri'

function HeaderTo(props) {

  return (
    <Link to={props.link} className='headerTo'>
        <h4> {props.title} </h4>
        <button> <RiArrowRightSLine /> </button>
    </Link>
  )
}

export default HeaderTo