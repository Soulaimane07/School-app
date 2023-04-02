import React from 'react'
import Header from '../../additions/Header/HeaderTo'

function Today() {

    const today = [
        {
            'title':'8:30',
            'plan':'school',
            'color':'06D6A0'
        },
        {
            'title':'9:30',
            'plan':'',
            'color':''
        },
        {
            'title':'10:30',
            'plan':'Math',
            'color':'4B76E6'
        },
        {
            'title':'11:30',
            'plan':'Physics',
            'color':'FF9F04'
        },
        {
            'title':'12:30',
            'plan':'',
            'color':''
        },
        {
            'title':'13:30',
            'plan':'',
            'color':''
        },
        {
            'title':'14:00',
            'plan':'',
            'color':''
        },
        {
            'title':'15:00',
            'plan':'',
            'color':''
        },
        {
            'title':'16:00',
            'plan':'',
            'color':''
        },
        {
            'title':'17:00',
            'plan':'',
            'color':''
        },
        {
            'title':'18:00',
            'plan':'',
            'color':''
        },
        {
            'title':'19:00',
            'plan':'',
            'color':''
        },
    ]

  return (
    <div className='today'>
        <Header title='Today' link='calendar' />
        <div className='body'>
            {today.map((item,key)=>(
                <div className='todaybox' key={key}>
                    <div className='title'>
                        {item.title}
                    </div>
                    <div className={`plan ${item.plan == '' && 'empty'}`} style={{backgroundColor: `#${item.color}`}} >
                        {item.plan == '' ? 'Empty' : item.plan}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Today