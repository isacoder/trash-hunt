import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// components
import Item from './item';
// styles
import '../assets/styles/item.css';

class MyItem extends Component {
  state = {
    data: this.props.location.data
  }

  collect = () => {
    this.redirectProfile()
  }

  redirectProfile = () => {
    this.props.history.push('/profile')
  }

  render() {
    return (
      <div>
        {typeof this.state.data !== 'undefined' ?
          <div>
            <Item  
              data={this.state.data}
            />
            <hr />
            <div>
              <div className='collectButton' onClick={this.collect}>
                Collect
              </div>
            </div>
            <hr />
          </div>
          :
          <Item />
        }
      </div>
    )
  }
}

export default withRouter(MyItem);