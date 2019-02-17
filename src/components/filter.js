import React, { Component } from 'react';
// components
import FilterList from './filter-list';
// styles
import '../assets/styles/filter.css';
// images
import filterButton from '../assets/images/filter-button.png';
// import closeButton from '../assets/images/close-button.png';


class Filter extends Component {
  state = {
    listOpened: false,
    firstOpen: true
  }

  renderFilterList = () => {
    this.setState({
      firstOpen: false
    })

    this.setState({
      listOpened: true
    })
  }

  closeButton = () => {
    this.setState({
      listOpened: false
    })
  }

  render() {
    return (
      <div>
        <img className="filterButton" src={filterButton} alt='filter' onClick={this.renderFilterList} />
        {this.state.listOpened ? 
          <div>
            <FilterList openList />
            {/* <img src={closeButton} alt='close' className='closeButton' onClick={this.closeButton} /> */}
            <div className='closeButton' onClick={this.closeButton}>
              X
            </div>
          </div>
          : 
          <div>
            {this.state.firstOpen ? null : <FilterList closeList />}
          </div>
        }
      </div>
    );
  }
}

export default Filter;
