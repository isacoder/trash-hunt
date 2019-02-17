import React, { Component } from 'react';
// components
import Item from './item';
// styles
import '../assets/styles/item.css';

class CollectionItem extends Component {
  state = {
    data: this.props.location.data
  }

  render() {
    return (
      <div>
        <Item
          data={this.state.data}
        />
      </div>
    )
  }
}

export default CollectionItem;