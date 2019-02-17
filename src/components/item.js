import React, { Component } from 'react';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';
import { withRouter } from 'react-router-dom';
// styles
import '../assets/styles/item.css';

class Item extends Component {
  collect = () => {
    this.redirectProfile()
  }

  redirectProfile = () => {
    this.props.history.push('/profile')
  }

  render () {
    return (
      <div>
        <div className='itemDetailContainer'>
          { typeof this.props.location.data !== 'undefined' ?
            <CloudinaryContext cloudName='yukinoda'>
              <div className='catalogContainer' key={this.props.location.data.public_id}>
                <div className='imgDetailTitle'>Image Title</div>
                <div className='imgContainer'>
                  <Image publicId={this.props.location.data.public_id}>
                    <Transformation
                      height='180' crop='scale' fetchFormat="auto" quality="auto"
                    />
                  </Image>
                </div>
                <div className='imgDetailDescription'>
                  Created at {this.props.location.data.created_at}
                </div>
              </div>
              <hr />
            </CloudinaryContext>
            :
            <div style={{marginTop: '60px'}}>
              No image selected
              <div className='collectButton'>
                Collect
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default withRouter(Item);