import React, { Component } from 'react';
// styles
import '../assets/styles/filter-list.css';

class FilterList extends Component {
  render () {
    return (
      <div>
        <div className={`filterListContainer ${this.props.openList ? 'openAnim' : null} + ${this.props.closeList ? 'closeAnim' : null}`}>
          <div className='filterListHeader'>
            Categories
          </div>
        </div>
      </div>
    )
  }
}

export default FilterList;