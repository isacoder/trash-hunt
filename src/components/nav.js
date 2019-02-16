import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// styles
import '../assets/styles/nav.css';
// images
import Logo from '../assets/images/trash-hunt.png';
import User from '../assets/images/user-icon.png';

class Nav extends Component {
  redirectCatalog = () => {
    this.props.history.push('/')
  }

  redirectProfile = () => {
    this.props.history.push('/profile')
  }

  render() {
    return (
      <div className='navHeader'>
        <img className='logo' src={Logo} alt='logo' height='34px' onClick={this.redirectCatalog} />
        <img className='userIcon' src={User} alt='user' height='34px' onClick={this.redirectProfile}  />
      </div>
    );
  }
}

export default withRouter(Nav);
