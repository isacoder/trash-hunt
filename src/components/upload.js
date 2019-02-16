import React, { Component } from 'react';
import {cloudinary} from 'cloudinary-react';

class Upload extends Component {
  uploadWidget() {
    cloudinary.openUploadWidget({ cloud_name: 'yukinoda', upload_preset: 'trash-hunt-items'},
      function (error, result) {
        console.log(result);
      });
  }
  render() {
    return (
      <div className="main">
        <h1>Galleria</h1>
        <div className="upload">
          <button onClick={this.uploadWidget.bind(this)} className="upload-button">
            Add Image
                    </button>
        </div>
      </div>

    );
  }
}

export default Upload;
