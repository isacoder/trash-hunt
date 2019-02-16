import React, { Component } from 'react';
import '../assets/styles/App.css';
import '../assets/styles/fakeAu.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class FakeAuthentication extends Component {
  render() {
    return (
      <div>
        <div className="SUTitle">
          Sign Up Now!
        </div>

        <Container className="form-style-5">
          <Row>
            <Col xs={4}>
              <div className="FormTitle">Full Name</div>
            </Col>

            <Col xs={8}>
              <input
                type="text"
                name="fullname"
                placeholder="Fullname.." />
            </Col>
          </Row>

          <Row>
            <Col xs={4}>
              <div className="FormTitle">Email</div>
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
        </Container>
      </div>
    );
  }
}

export default FakeAuthentication;
