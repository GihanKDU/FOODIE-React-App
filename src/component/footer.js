import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Appstore from '../img/Appstore.png';
import Googleplay from '../img/Googleplay.png';
import Button from 'react-bootstrap/Button';

const Footer = () => {
  return (
    <footer className="footer web-view mt-40">
      <Container>
        <Row>
          <Col className='text-start' md={4}>
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo felis sed tortor commodo, in tempus urna venenatis.</p>
            <div className='d-flex'>
            <Button className=" button-social"><img src={Appstore}  alt="Image" /></Button>
            <Button className=" ml-20 button-social"><img src={Googleplay}  alt="Image" /></Button>
            </div>
          </Col>
          <Col  md={4}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
            
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@example.com</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
            <p className="text-center">&copy; {new Date().getFullYear()} FOODIE. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
