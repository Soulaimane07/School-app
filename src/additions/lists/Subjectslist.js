import React from 'react'

function Subjectslist(props) {
  return (
    <div className='list'>
        {/* {props.data.map((subject,key)=>(
            <button onClick={()=> props.setsubject(key)} className={props.subject == key && 'active'} >
                {subject.title}
            </button>
        ))} */}
    </div>
  )
}

export default Subjectslist