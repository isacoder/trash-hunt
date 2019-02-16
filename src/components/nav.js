import React, { Component } from 'react';
// styles
import '../assets/styles/nav.css';
// images
import Logo from '../assets/images/trash-hunt.png';

class Nav extends Component {
  render() {
    return (
      <div className='navHeader'>
        <img src={Logo} alt='logo' height='80%' />
      </div>
    );
  }
}

export default Nav;
