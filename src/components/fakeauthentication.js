import React, { Component } from 'react';
import '../assets/styles/App.css';
import '../assets/styles/fakeAu.css'

class FakeAuthentication extends Component {
  render() {
    return (
      <div className="Wrapper">
        <div className="Title">
          Sign Up Now!
          <div className="FormWrapper">
            <div className="Title">Full Name</div>
            <input type="text" name="fullname" placeholder="John Doe"></input>
          </div>

          <div className="FormWrapper">
            <div className="Title">Email</div>
            <input type="text" name="email" placeholder="john.doe@demo.com"></input>
          </div>

          <div className="FormWrapper">
            <div className="Title">Password</div>
            <input type="text" name="password" placeholder="PineAppleJui€e"></input>
          </div>
        </div>
      </div>
    );
  }
}

export default FakeAuthentication;
