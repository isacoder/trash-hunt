import React, { Component } from 'react';
import '../assets/styles/App.css';
import '../assets/styles/SignIn.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Sample1 extends Component {
  render() {
    return (
      <div>
        <div className="SUTitle">
          Sign In
        </div>

        <Container className="form-style-5">
          <Row>
            <Col xs={4}>
              <div className="FormTitle">Username</div>
            </Col>

            <Col xs={8}>
              <input className="Form" type="text" name="email" placeholder="Email.."></input>
            </Col>
          </Row>

          <Row>
            <Col xs={4}>
              <div className="FormTitle">Password</div>
            </Col>

            <Col xs={8}>
              <input className="Form" type="text" name="Password" placeholder="Password.."></input>
            </Col>
          </Row>

          <Row>
            <Col xs={6}>
              <div className="Button">
                Back
              </div>
            </Col>

            <Col xs={6}>
              <div className="Button">
                Login
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Sample1;
