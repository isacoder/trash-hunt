import React, { Component } from 'react';
import '../assets/styles/profile.css';

class Profile extends Component {

  render() {
    return (
      <div className= 'Profile'>
        <h2> Hello Selina !</h2>
        <div className="avatar-photo">
          <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png" alt= 'user photo' />
        </div>
        <p><strong>Super saver</strong></p>
        <div className= 'Score'>
          <div className='value'>300</div>
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
}
export default Profile;
