import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import t1 from '../img/t1.png';
import t2 from '../img/t2.png';
import t3 from '../img/t3.png';
import c4 from '../img/c4.png';
import c5 from '../img/c5.png';

import AOS from 'aos';
import {   useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Services = () => {
 
  useEffect(() => {
    AOS.init({duration:1000});},[]);
  return (
    <section className="service web-view" >
      <Container className=" mt-50">
        <Row>
       
          <Col className='d-flex align-items-center' md={12}>
            <div data-aos="fade-up" className='d-flex w-100 '>
            <div className="left-section text-center  w-100 font-36 ">
              <div  className='font-bold heading-text'>What We<span className='heading-text-colored'> Serve</span> </div>
              <div  className=' font-20 heading-sentence'>Food Delivery Partner </div>
              <div className=' mt-30 '>
                <Row>
                    <Col md={4}>
                    <div>
                    <img src={t1}  alt="Image" />
                    <div className='mt-10 font-bold font-20'>Easy To Order</div>
                    <div className='mt-10 font-16'>You only need a few steps in ordering food</div>
                </div>
                    </Col>
                    <Col md={4}>
                    <div>
                    <img src={t2}  alt="Image" />
                    <div className='mt-10 font-bold font-20'>Fastest Delivery</div>
                    <div className='mt-10 font-16'>Delivery that is always ontime even faster</div>
                </div>
                    </Col>
                    <Col md={4}>
                    <div>
                    <img src={t3}  alt="Image" />
                    <div className='mt-10 font-bold font-20'>Best Quality</div>
                    <div className='mt-10 font-16'>Not only fast for us quality is also number one</div>
                </div>
                    </Col>
                </Row>
              
                
             
            
            
              </div>
        
               
            
            </div>
            </div>
            
          </Col>
         
        </Row>
      </Container>
    </section>
  );
};

export default Services;
