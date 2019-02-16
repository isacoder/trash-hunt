import React, { Component } from 'react'
// styles
import '../assets/styles/upload.css';
// images
import uploadButton from '../assets/images/upload-button.png';

class Upload extends Component {
  componentDidMount = () => {
    this.widget = window.cloudinary.createUploadWidget({
      cloud_name: 'yukinoda', upload_preset: 'trash-hunt-items', 
      tags: ['my-item', 'gallery-item'], 
      sources: [
        "local"
      ],
      styles: {
        palette: {
          window: "#464040",
          sourceBg: "#292222",
          windowBorder: "#c7a49f",
          tabIcon: "#cc6600",
          inactiveTabIcon: "#E8D5BB",
          menuIcons: "#ebe5db",
          link: "#ffb107",
          action: "#ffcc00",
          inProgress: "#99cccc",
          complete: "#78b3b4",
          error: "#ff6666",
          textDark: "#4C2F1A",
          textLight: "#D8CFCF"
        },
        fonts: {
          default: null,
          "'Merriweather', serif": {
            url: "https://fonts.googleapis.com/css?family=Merriweather",
            active: true
          }
        }
      }
    },
      (error, result) => {
        console.log(result);
        if (result && result.event === "success") {
          this.widget.close()
        }
      }
    );
  }

  uploadWidget = () => {
    this.widget.open()
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
