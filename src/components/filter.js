import React, { Component } from 'react';
// components
// import Catalog from '../components/catalog';
// styles
import '../assets/styles/filter.css';
// images
import filterButton from '../assets/images/filter-button.png';

class Filter extends Component {
  render() {
    return (
      <div>
        <img className="filterButton" src={filterButton} alt='filter' />
      </div>

    );
  }
}

export default Filter;
