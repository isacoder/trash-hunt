import React from 'react'
import "./UserProfile.css"

const userProfile = (props) => {
  return (
    <div className= 'UserProfile'>
      <h2> Hello {props.name} !</h2>
      <div className="avatarPhoto">
        <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png" alt= 'user photo' />
      </div>
      <p><strong>{props.title}</strong></p>
      <div className= 'Score'>
        <div className='value'>{props.score}</div>
        <div className='star-points'>
          <div className='star-letter'>P</div>
          <div className='star'>
            <img src="https://res.cloudinary.com/misfotitos/image/upload/c_thumb,w_200,g_face/v1550277153/Junction2019/star.png"  alt="rating start yellow" />

          </div>
        </div>
      </div>
    </div>
  )

}

export default userProfile
