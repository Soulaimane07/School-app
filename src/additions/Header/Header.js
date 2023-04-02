import './Header.css'

import {RiAddCircleFill} from 'react-icons/ri'

function Header(props) {

  return (
    <div className='header'>
        <div className='title'> {props.title} </div>
        <div className='options'>
            <li className={`${props.option == 0 && 'active'}`} onClick={()=>props.setoption(0)} > Classes </li>
            <li className={`${props.option == 1 && 'active'}`} onClick={()=>props.setoption(1)} > Individual </li>
        </div>
        <button onClick={()=> props.setCreate(true)} className='add'>{props.button} <span> <RiAddCircleFill /> </span> </button>
    </div>
  )
}

export default Header