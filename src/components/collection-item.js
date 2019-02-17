import React, { Component } from 'react';
// components
import Item from './item';
// styles
import '../assets/styles/item.css';

class CollectionItem extends Component {
  render() {
    return (
      <div>
        <Item />
      </div>
    )
  }
}

export default CollectionItem;