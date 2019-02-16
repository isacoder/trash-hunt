import React, { Component } from 'react';
// styles
import '../assets/styles/nav.css';
// images
import Logo from '../assets/images/trash-hunt.png';
import User from '../assets/images/user-icon.png';

class Nav extends Component {
  render() {
    return (
      <div className='navHeader'>
        <img className='logo' src={Logo} alt='logo' height='34px' />
        <img className='userIcon' src={User} alt='user' height='34px' />
      </div>
    );
  }
}

export default Nav;
