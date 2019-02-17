import React, { Component } from 'react';
// components
import Item from './item';
// styles
import '../assets/styles/item.css';

class MyItem extends Component {
  render() {
    return (
      <div>
        <Item />
        <hr />
        <div>
          <div className='collectButton' onClick={this.collect}>
            Collect
          </div>
        </div>
        <hr />
      </div>
    )
  }
}

export default MyItem;