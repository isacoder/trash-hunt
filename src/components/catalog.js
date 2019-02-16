import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';
// styles
import '../assets/styles/catalog.css';

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [],
      tag: this.props.tag
    }
  }

  componentDidMount() {
    // Request for images tagged xmas       
    axios.get(`https://res.cloudinary.com/yukinoda/image/list/v${Date.now() + '/' + this.state.tag}.json`)
      .then(res => {
        // console.log(res.data.resources);
        this.setState({ gallery: res.data.resources });
      })
      .catch((err) => {
        alert('no items found')
      });
  }

  uploadWidget() {
    // . . .
  }

  redirectItem = data => {
    console.log(data)
    this.props.history.push({
      pathname: '/item',
      data
      })
  }

  render() {
    return (
      <div className="main" style={{ textAlign: 'center'}}>
        <div className='galleryTitle'>Go get items now</div>
        <div className="gallery">
          <CloudinaryContext cloudName="yukinoda">
            {
              this.state.gallery.map(data => {
                return (
                  <div className="catalogContainer" key={data.public_id}>
                    <div className="imgContainer">
                      {/* <a target="_blank" href={`https://res.cloudinary.com/yukinoda/image/upload/f_auto,q_auto/${data.public_id}.jpg`} rel="noopener noreferrer"> */}
                      <Image publicId={data.public_id} onClick={() => {this.redirectItem(data)}} >
                        <Transformation
                          height='180' crop="scale"
                        />
                      </Image>
                      {/* </a > */}
                    </div>
                    <div className="imgDescription">Created at {data.created_at}</div>
                  </div>
                )
              })
            }
          </CloudinaryContext>
          <div className="clearfix"></div>
        </div>
      </div>

    );
  }
}

export default withRouter(Catalog);
