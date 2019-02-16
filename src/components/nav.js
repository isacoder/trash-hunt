import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// styles
import '../assets/styles/nav.css';

class Nav extends Component {
  render() {
    return (
      <div className='navHeader'>
        <Container>
          <Row>
            <Col xs={3}>
              <Link to={`/item`}>Item</Link>
            </Col>
            <Col xs={3}>
              <Link to={`/upload`}>Upload</Link>
            </Col>
            <Col xs={3}>
              <Link to={`/catalog`}>Catalog</Link>
            </Col>
            <Col xs={3}>
              <Link to={`/profile`}>Profile</Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Nav;
