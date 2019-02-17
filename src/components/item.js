import React, { Component } from 'react';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';
// styles
import '../assets/styles/item.css';

class Item extends Component {
  state = {
    data: this.props.data
  }

  render () {
    return (
      <div>
        <div className='itemDetailContainer'>
          { typeof this.state.data !== 'undefined' ?
            <CloudinaryContext cloudName='yukinoda'>
              <div className='catalogContainer' key={this.state.data.public_id}>
                <div className='imgDetailTitle'>Image Title</div>
                <div className='imgContainer'>
                  <Image publicId={this.state.data.public_id}>
                    <Transformation
                      height='180' crop='scale' fetchFormat="auto" quality="auto"
                    />
                  </Image>
                </div>
                <div className='imgDetailDescription'>
                  Created at {this.state.data.created_at}
                </div>
              </div>
            </CloudinaryContext>
            :
            <div style={{marginTop: '60px'}}>
              No image selected
            </div>
          }
        </div>
      </div>
    )
  }
}

export default Item;