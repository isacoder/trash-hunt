import React, { Component } from 'react';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';
// styles
import '../assets/styles/item.css';
import Upload from './upload';

class Item extends Component {
  render () {
    return (
      <div>
        <div className='itemDetailContainer'>
          { typeof this.props.location.data !== 'undefined' ?
            <CloudinaryContext cloudName="yukinoda">
              <div className="catalogContainer" key={this.props.location.data.public_id}>
                <div className="imgContainer">
                  <Image publicId={this.props.location.data.public_id}>
                    <Transformation
                      height='180' crop="scale"
                    />
                  </Image>
                </div>
                <div className='imgDetailTitle'>Image Title</div>
                <div className="imgDetailDescription">Created at {this.props.location.data.created_at}</div>
              </div>
            </CloudinaryContext>
            :
            <div style={{marginTop: '60px'}}>
              No image selected
            </div>
          }
        </div>
        <Upload />
      </div>
    )
  }
}

export default Item;