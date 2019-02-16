import React, { Component } from 'react'
// styles
import '../assets/styles/upload.css';
// images
import uploadButton from '../assets/images/upload-button.png';

class Upload extends Component {
  uploadWidget() {
    window.cloudinary.openUploadWidget({ cloud_name: 'yukinoda', upload_preset: 'trash-hunt-items', tags: ['gallery-item','my-item']},
      (error, result) => {
        console.log(result);
      });
  }
  render() {
    return (
      <div>
        <img className="uploadButton" src={uploadButton} alt='upload' onClick={this.uploadWidget} />
      </div>

    );
  }
}

export default Upload;
