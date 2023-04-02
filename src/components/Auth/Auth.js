import './Auth.css'
import Login from './Log/Login'

function Auth(props) {
  return (
    <div className='auth'>
      <div className='sign'>
        <Login user={props.user} setIsloged={props.setIsloged} />
      </div>
      <div className='news'>
        News
      </div>
    </div>
  )
}

export default Auth