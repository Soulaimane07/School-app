import { useEffect, useState } from 'react'
import Subjectslist from '../../additions/lists/Subjectslist'
import List from './List'
import './Courses.css'
import Details from './Details'
import axios from 'axios'

function Courses(props) {

  const [subject, setsubject] = useState(1)
  const [cours, setcours] = useState(0)

  const subjects = [
      { 
        value: 'All',
      },
      { 
        value: 'Math', 
        courses: [
          {
            'image':'',
            'title':'Functions',
            'para':'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            'date':'28-10-2022'
          },
          {
            'image':'',
            'title':'Algebra',
            'para':'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            'date':'15-10-2022'
          },
          {
            'image':'',
            'title':'Expo',
            'para':'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            'date':'05-10-2022'
          },
        ]
      },
      { 
        value: 'Physics', 
        courses: [
          {
            'title':'',
            'para':'',
            'date':''
          }
        ]
      },
      { 
        value: 'SVT', 
        courses: [
          {
            'title':'',
            'para':'',
            'date':''
          }
        ]
      },
      { 
        value: 'Info', 
        courses: [
          {
            'title':'',
            'para':'',
            'date':''
          }
        ]
      },
  ]

  const [courses, setCourses] = useState([])

  useEffect(()=> {
    getCourses();
  }, [])  

  const getCourses = () => {
    axios.get(`http://127.0.0.1:8000/api/courses`)
    .then((response) => {
      setCourses(response.data)
    })
    .catch(error => console.error(`Error: ${error}`) )
  }

  console.log(courses[subject]);

  return (
    <div className='courses'>
        <Subjectslist data={props.subjects} subject={subject} setsubject={setsubject} />

        <div className='body'>
          <List data={courses[subject]} setcours={setcours} cours={cours} />
          <Details data={subjects[subject].courses[cours]} cours={cours} />
        </div>
    </div>
  )
}

export default Courses