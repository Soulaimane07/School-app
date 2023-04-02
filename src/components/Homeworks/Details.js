import {AiOutlineClose} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'
import {BsBoxArrowInDownLeft} from 'react-icons/bs'

function Details(props) {

  const currenttime = new Date().getDate() + new Date().getFullYear() + new Date().getMonth()+1 
  const deadline = Number(props.data.deadline.substring(0, 4)) + Number(props.data.deadline.substring(5, 7)) + Number(props.data.deadline.substring(8, 10))
  const timeleft = deadline-currenttime

  return (
    <div className='details'>
        <div className='header'>
            <div className='title'>
                {props.data.title}
                <span className='subject' style={{backgroundColor:`#${props.data.color}`}}> {props.data.subject} </span>
            </div>
            <button onClick={()=>props.setDetails(false)}> <AiOutlineClose /> </button>
        </div>
        
        <div className={`stat ${props.data.stat == 'Done' ? 'done' : 'undone'}`}> {props.data.stat} </div>
        
        <div className='time'> 
            <div>{props.data.timeadded}</div>
            <div className='border'></div>
            <div>{props.data.deadline}</div> 
        </div> 

        <div className='body'>
          <div className='image' style={{ backgroundImage: `url('/assets/images/defaultimage.jpg')`}}></div>
          <table>
            <tr>
              <th>Title</th>
              <td>{props.data.title}</td>
            </tr>

            <tr>
              <th>Created by</th>
              <td>{props.data.creator}</td>
            </tr>

            <tr>
              <th>Created at</th>
              <td>{props.data.timeadded}</td>
            </tr>

            <tr>
              <th>Dead line</th>
              <td>{props.data.deadline}</td>
            </tr>

            <tr>
              <th>Time Left</th>
              <td>{timeleft > 0 ? timeleft : 0} days</td>
            </tr>
          </table>
        </div>

        <div className='buttons'>
          {timeleft <= 0 
            ? ''
            : props.data.stat == 'Done' 
              ? <button className='done'><span className='icon'> <FiEdit /> </span> Edit </button>
              : <button className='undone'><span className='icon'> <BsBoxArrowInDownLeft /> </span> Insert </button>
          }
        </div>
    </div>
  )
}

export default Details