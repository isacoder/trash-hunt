import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';
// styles
import '../assets/styles/catalog.css';
import Upload from './upload';

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [],
      tag: this.props.tag,
      pathName: this.props.pathName
    }
  }

  componentDidMount() {
    // Request for images tagged xmas       
    axios.get(`https://res.cloudinary.com/yukinoda/image/list/v${Date.now() + '/' + this.state.tag}.json`)
      .then(res => {
        this.setState({ gallery: res.data.resources });
      })
      .catch((err) => {
        console.log('no items found')
      });
  }

  uploadWidget() {
    // . . .
  }

  redirectItem = data => {
    // console.log(data)
    this.props.history.push({
      pathname: this.state.pathName,
      data
      })
  }

  render() {
    return (
      <div>
        <div className="main" style={{ textAlign: 'center'}}>
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
                            height='180' crop="scale" fetchFormat="auto" quality="auto"
                          />
                        </Image>
                        {/* </a > */}
                      </div>
                      <div className="imgTitle">Image Title</div>
                    </div>
                  )
                })
              }
            </CloudinaryContext>
            <div className="clearfix"></div>
          </div>
        </div>
        <Upload />
      </div>
    );
  }
}

export default withRouter(Catalog);
