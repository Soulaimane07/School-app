import React from 'react'

function List(props) {
  return (
    <div className='lists'>
        <div className='title'>
            {/* <h2> {props.data.title} Courses </h2> */}
        </div>
        <div>
            {/* {props.data.courses.map((course,key)=>(
                <div onClick={()=> props.setcours(key)} className={`course ${props.cours == key && 'active'}`}> 
                    <div>
                        <div className='imagebox' style={{ backgroundImage: `url('/assets/images/defaultimage.jpg')`}}></div>
                    </div>
                    <div>
                        <div className='title'> {course.title} </div>
                        <p> {course.para.substr(0, 80)}... </p>
                        <span> {course.date} </span>
                    </div>
                </div>
            ))} */}
        </div>
    </div>
  )
}

export default List