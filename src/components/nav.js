import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// styles
import '../assets/styles/nav.css';

class Nav extends Component {
  render() {
    return (
      <div className='navHeader'>
        <Link to={`/`}>Home</Link>
        <Link to={`/upload`}>Upload</Link>
        <Link to={`/catalog`}>Catalog</Link>
      </div>
    );
  }
}

export default Nav;
