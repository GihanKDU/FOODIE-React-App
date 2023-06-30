import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import m1 from '../img/m1.png';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


import AOS from 'aos';
import {   useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const MobileScreen = () => {

 
  useEffect(() => {
    AOS.init({duration:1000});},[]);
  return (
    <section className="quickmenu Mobile-view" >
      <Container className=" mt-50">
        <Row>
       
          <Col className='d-flex align-items-center' md={12}>
            <div data-aos="fade-up" className='d-flex w-100 '>
            <div className="left-section text-center  w-100 font-36 ">
              
              <div className='d-flex justify-content-between mt-30 '>
             
                <div>
                <img src={m1} className='w-100'  alt="Image" />

                </div>
            
       
              </div>
        
               
            
            </div>
            </div>
            
          </Col>
         
        </Row>

  
      </Container>
    </section>
  );
};

export default MobileScreen;
