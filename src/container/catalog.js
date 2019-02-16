import React, { Component } from 'react';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';
// styles
import '../assets/styles/catalog.css';

class Catalog extends Component {
  fetchImage () {
  }

  render() {
    this.fetchImage();

    return (
       <div>
        <h1>Hello, world!</h1>
        <CloudinaryContext cloudName="yukinoda">
            <Image publicId="sample">
                <Transformation width="200" crop="scale" angle="10"/>
            </Image>
        </CloudinaryContext>
      </div>
    )
  }
}

export default Catalog;
