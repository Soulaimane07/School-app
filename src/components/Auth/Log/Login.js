import { useState } from "react"
import { Link, Redirect } from "react-router-dom"

function Login(props) {

    const submit = () => {
        // props.user = {
        //     'backgrounddefault':"./assets/images/bg.jpg",
        //     'background':"",
        //     'avatar':'./assets/images/avatar.jpg',
        //     'fname':{email}
        // }
        props.user.fname = {email}
        props.user.avatar = {email}
        props.user.background = {email}
        props.user.backgrounddefault = {email}
        props.setIsloged(true)
    }


    const emailhendler = e => {
        setEmail(e.target.value);
    }
    const passhandler = e => {
        setPassword(e.target.value);
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


  return (
    <div className='login'>
        <div className='logo'>
            <img src='/assets/images/logo.png' />
        </div>
        <div className='body'>
            <div className='bodyy'>
            <div className='header'>
                <div className='title'> Welcome back </div>
                <p> Enter your email and password to sign in </p>
            </div>
            <div className='form'>
                <div className='box'>
                    <label> Email </label>
                    <input type={'email'} onChange={emailhendler} />
                </div>
                <div className='box'>
                    <label> Password </label>
                    <input type={'password'} onChange={passhandler} />
                </div>
                <Link to='/' onClick={submit} className='button'>
                    Sign in
                </Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Login