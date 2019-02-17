import React, { Component } from 'react';
// styles
import '../assets/styles/filter-list.css';

class FilterList extends Component {
  // renderFilterItem = () => {
  //   return (
  //     <div>
  //       <span className='filterListItem'>
  //         Aaaaaaaaa
  //       </span>
  //     </div>
  //   )
  // }

  render() {
    return (
      <div>
        <div className={`filterListContainer ${this.props.openList ? 'openAnim' : null} + ${this.props.closeList ? 'closeAnim' : null}`}>
          <div className='filterListHeader'>
            Categories
          </div>
          <div className='filterList'>
            {/* {this.renderFilterItem} */}
            <span className='filterListItem'>
              Instrument
            </span>
            <br />
            <span className='filterListItem'>
              Hardware
            </span>
            <br />
            <span className='filterListItem'>
              Food
            </span>
            <br />
            <span className='filterListItem'>
              Metal
            </span>
            <br />
            <span className='filterListItem'>
              Clothes
            </span>
            <br />
            <span className='filterListItem'>
              Magazines
            </span>
            <br />
            <span className='filterListItem'>
              Games
            </span>
            <br />
            <span className='filterListItem'>
              Movies
            </span>
            <br />
          </div>
        </div>
      </div>
    )
  }
}

export default FilterList;