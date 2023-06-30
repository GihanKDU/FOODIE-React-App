import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import w from '../img/w.png';
import Appstore from '../img/Appstore.png';
import Googleplay from '../img/Googleplay.png';
import AOS from 'aos';
import {   useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const HeroSection = () => {
 
  useEffect(() => {
    AOS.init({duration:1000});},[]);
  return (
    <section className="hero-section web-view" >
      <Container className="hero mt-50">
        <Row>
        <Col md={6}>
            <div className="right-section d-flex">
            
              <img data-aos="fade-right" className='section-img' src={w} alt="Logo" />
             
            </div>
          </Col> 
          <Col className='d-flex align-items-center' md={6}>
            <div data-aos="fade-left" className='d-flex '>
            <div className="left-section text-start  font-36 ">
              <div  className='font-bold heading-text'>Discover A <span className='heading-text-colored'>Diverse Range</span> of <span className='heading-text-colored'>Flavors</span> In<span className='heading-text-colored'> One</span> Place</div>
              
              <div className='d-flex align-items-center mt-20'>
                <div className='w-100'><Form.Control type="email" placeholder="Find nearest restaurant" /></div>
                <div className='d-flex align-items-center '><Button className='ml-20 button-primary'>Find</Button></div>
               
               </div>
               <div className='d-flex mt-30'>
               <Button className=" button-social"><img src={Appstore}  alt="Image" /></Button>
               <Button className=" ml-20 button-social"><img src={Googleplay}  alt="Image" /></Button>

               </div>
               
            
            </div>
            </div>
            
          </Col>
         
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
