import Topbar from './additions/topbar/Topbar';
import './App.css';

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Homeworks from './components/Homeworks/Homeworks';

import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Auth from './components/Auth/Auth';
import Courses from './components/Courses/Courses';


function App() {
  const user = {
    'backgrounddefault':"./assets/images/bg.jpg",
    'background':"./assets/images/bg.jpg",
    'avatar':'./assets/images/avatar.jpg',
    'fname':'Soulaimane Ouhmida'
  }



  const [classesData, setClassesdata] = useState([])
  const [subjects, setSubjects] = useState([])
  const baseurl = 'http://127.0.0.1:8000/api/'

  useEffect(()=> {
    getClassesData();
    getSubjects();
  }, [])  

  const getClassesData = () => {
    axios.get(`${baseurl}homeworks`)
    .then((response) => {
      setClassesdata(response.data)
    })
    .catch(error => console.error(`Error: ${error}`) )
  }

  const getSubjects = () => {
    axios.get(`${baseurl}subjects`)
    .then((response) => {
      setSubjects(response.data)
    })
    .catch(error => console.error(`Error: ${error}`) )
  }

  const classes = classesData

  const [details, setDetails] = useState(false)
  const [selected, setSelected] = useState()

  const [ isLoged, setIsloged ] = useState(true)


    return (
    <div className='app'>
      <Router>
        {isLoged ?
        <>
          <Nav />
          <div className='content'>
              <Topbar user={user} setIsloged={setIsloged} />
            <Switch>
              <Route exact path='/'>
                <Home 
                  classes={classes} 
                  selected={selected} 
                  setSelected={setSelected} 
                  details={details} 
                  setDetails={setDetails}
                />
              </Route>
              <Route path='/profile'>
                <Profile user={user} />
              </Route>
              <Route path='/homeworks'>
                <Homeworks 
                  selected={selected} 
                  setSelected={setSelected} 
                  details={details} 
                  setDetails={setDetails} 
                  classes={classes} 
                  user={user} 
                />
              </Route>
              <Route path='/courses'>
                <Courses subjects={subjects} />
              </Route>
            </Switch>
          </div>
        </>
        :
        <Route path='/auth'>
          <Auth setIsloged={setIsloged} user={user} />
        </Route>
        }
      </Router>
    </div>
  );
}

export default App;
