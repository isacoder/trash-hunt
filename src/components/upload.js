import React, { Component } from 'react';

class Upload extends Component {
  uploadWidget() {
    window.cloudinary.openUploadWidget({ cloud_name: 'yukinoda', upload_preset: 'trash-hunt-items'},
      (error, result) => {
        console.log(result);
      });
  }
  render() {
    return (
      <div className="main">
        <h1>Uploading form</h1>
        <div className="upload">
          <button onClick={this.uploadWidget} className="upload-button">
            Add Image
          </button>
        </div>
      </div>

    );
  }
}

export default Upload;
