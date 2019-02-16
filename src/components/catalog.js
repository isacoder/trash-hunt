import React, { Component } from 'react';
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

  render() {
    return (
      <div className="main">
        <h1>Galleria</h1>
        <div className="gallery">
          <CloudinaryContext cloudName="yukinoda">
            {
              this.state.gallery.map(data => {
                return (
                  <div className="responsive" key={data.public_id}>
                    <div className="img">
                      <a target="_blank" href={`https://res.cloudinary.com/yukinoda/image/upload/${data.public_id}.jpg`} rel="noopener noreferrer">
                        <Image publicId={data.public_id}>
                          <Transformation
                            dpr="auto"
                            responsive_placeholder="blank"
                          />
                        </Image>
                      </a>
                      {/* <div className="desc">Created at {data.created_at}</div> */}
                    </div>
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

export default Catalog;
