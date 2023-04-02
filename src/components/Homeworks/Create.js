import {AiOutlineClose} from 'react-icons/ai'
import {BsFileEarmarkPlus} from 'react-icons/bs'
import { FaUser } from 'react-icons/fa';
import { useState } from 'react';
import { BsCalendarPlus } from 'react';

import DatePicker from 'react-date-picker';
import Select from 'react-select'
import axios from 'axios';



function Create(props) {

    const subjecthandler = e => {
        setsubject(e.value);
    }

    const handleChange = event => {
        settitle(event.target.value);
    };

    const datehandleChange = event => {
        setTimeadded(event.target.value);
    };

    const deadlinehandlechange = event => {
        setDeadline(event.target.value);
    };

    
    const [title, settitle] = useState('')
    const [creator, setcreator] = useState(props.user.fname)
    const [subject, setsubject] = useState('')
    const [timeadded, setTimeadded] = useState(`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`)
    const [deadline, setDeadline] = useState(`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`)
    const [color, setcolor] = useState('57cc99')
    
    let addDemande = async() => {
        const classe = {title:`${title}`, creator:`${creator}`, subject:`${subject}`, timeadded:`${timeadded}`, deadline:`${deadline}`, color:`${color}`}
        await axios.post( 'http://127.0.0.1:8000/api/homeworks' , classe)
        setclasses([classe, ...classes])
        window.location.reload(true);
    }

    const [classes, setclasses] = useState([])

  return (
    <div className='create details'>
        <div className='header'>
            <div className='title'>
                Create Homework
            </div>
            <button onClick={()=>props.setCreate(false)}> <AiOutlineClose /> </button>
        </div>

        <div className='body'>
                <div className='boooox'>
                    <div className='imagebox' style={{ backgroundImage: `url('/assets/images/defaultimage.jpg')`}}></div>
                </div>
                <div className='boooox'>
                    <label> Title </label>
                    <input className='input' required type={'text'} onChange={handleChange} />
                </div>
                <div className='boooox'>
                    <label> Creator </label>
                    <span className='input creator'> 
                        <div className='avatar image' style={{ backgroundImage: `url(${props.user.avatar})` }}>
                            {props.user.avatar == '' && <FaUser />} 
                        </div> 
                        {props.user.fname} 
                    </span>
                </div>
                <div className='boooox'>
                    <label> Subject </label>
                    <Select options={props.subjects} onChange={subjecthandler} />
                </div>
                <div className='boooox'>
                    <label> Created at </label>
                    <input className='input' type={'date'} value={timeadded}  onChange={datehandleChange} />
                </div>
                <div className='boooox'>
                    <label> Dead line </label>
                    <input className='input' type={'date'} value={deadline}  onChange={deadlinehandlechange} />
                </div>
        </div>

        <div className='buttons'>
            <button className='create' onSubmit={addDemande} onClick={ addDemande }>
                <span className='icon'> <BsFileEarmarkPlus /> </span>
                Create 
            </button>
        </div>
    </div>
  )
}

export default Create