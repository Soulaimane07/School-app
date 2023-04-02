import { useState } from 'react'
import Header from '../../additions/Header/Header'
import Details from '../Homeworks/Details'

import './Homeworks.css'
import Select from 'react-select'

import {BsCheckCircleFill} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'
import Create from './Create'


function Homeworks(props) {

    

    const details = props.details
    const selected = props.selected

    const setSelected = props.setSelected
    const setDetails = props.setDetails

    
    const [create, setCreate] = useState(false)


    const classes = props.classes

    const subjects = [
      { value: 'All', label: 'All' },
      { value: 'Math', label: 'Math' },
      { value: 'Physics', label: 'Physics' },
      { value: 'SVT', label: 'SVT' },
      { value: 'Info', label: 'Info' },
    ]
    const stats = [
      { value: 'All', label: 'All' },
      { value: 'Done', label: 'Done' },
      { value: 'Undone', label: 'Undone' },
    ]

    const [option, setoption] = useState(0)

    const [subjectselectedValue, setSubjectselectedValue] = useState('All');
    const [statselectedValue, setStatselectedValue] = useState('All');
 
    const subjecthandleChange = e => {
        setSubjectselectedValue(e.value);
    }
    const stathandleChange = e => {
        setStatselectedValue(e.value);
    }

  return (
    <div className='homeworks'>
        <Header setCreate={setCreate} title='Homeworks' button="Create Homework" option={option} setoption={setoption} />
        <div className='body'>
            {option == 0 &&
                <>
                <div className='controls'> 
                    <div className='subjects'> 
                        <span>Subject:</span> 
                        <Select value={subjects.find(obj => obj.value === subjectselectedValue)} options={subjects} defaultValue={subjects[0]} onChange={subjecthandleChange}/>
                    </div>
                    <div className='stat'> 
                        <span>Stat:</span> 
                        <Select value={stats.find(obj => obj.value === subjectselectedValue)} options={stats} defaultValue={stats[0]} onChange={stathandleChange}/>
                    </div>
                </div>

                {classes.map((item,key)=>(
                    <>
                    {subjectselectedValue == 'All' && statselectedValue == 'All' &&
                        <div onClick={()=>setSelected(key) & selected == key ? setDetails(false) : setDetails(true) & setCreate(false)} className={`class ${item.stat == 'Done' ? 'done' : 'undone'} ${selected == key && 'active'}`} key={key}>
                            <div className='title'> 
                                {item.title}
                                <span className='subject' style={{backgroundColor:`#${item.color}`}}> {item.subject} </span> 
                            </div>
                            <div className='time'> 
                                <div>{item.timeadded}</div>
                                <div className='border'></div>
                                <div>{item.deadline}</div> 
                            </div> 
                            <div className='stat'> 
                                <span className='icon'> {item.stat == 'Done' ? <BsCheckCircleFill /> : <AiFillCloseCircle />} </span>
                                {item.stat} 
                            </div>
                        </div>
                    }
                    {subjectselectedValue == item.subject && statselectedValue == item.stat &&
                        <div onClick={()=>setSelected(key) & selected == key ? setDetails(false) : setDetails(true) & setCreate(false)} className={`class ${item.stat == 'Done' ? 'done' : 'undone'} ${selected == key && 'active'}`} key={key}>
                            <div className='title'> 
                                {item.title}
                                <span className='subject' style={{backgroundColor:`#${item.color}`}}> {item.subject} </span> 
                            </div>
                            <div className='time'> 
                                <div>{item.timeadded}</div>
                                <div className='border'></div>
                                <div>{item.deadline}</div> 
                            </div> 
                            <div className='stat'> 
                                <span className='icon'> {item.stat == 'Done' ? <BsCheckCircleFill /> : <AiFillCloseCircle />} </span>
                                {item.stat} 
                            </div>
                        </div>
                    }
                    </>
                ))}

                {details && <Details selected={selected} setSelected={setSelected} data={classes[selected]} setDetails={setDetails} /> }
                {create && <Create setCreate={setCreate} user={props.user} subjects={subjects} /> } 
                </>
            }
        </div>
    </div>
  )
}

export default Homeworks