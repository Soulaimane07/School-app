import './Profile.css'

import { AiOutlinePlus } from 'react-icons/ai';

function Profile(props) {
  return (
    <div className='profilepage'>
        <div className='back' style={{ backgroundImage: props.user.background == "" ? `url(${props.user.backgrounddefault})` : `url(${props.user.background})` }} >
            <div className='avatar' style={{ backgroundImage: `url(${props.user.avatar})`  }}>
                {props.user.avatar == "" &&  <AiOutlinePlus className='add' />}
            </div> 
        </div>
    </div>
  )
}

export default Profile