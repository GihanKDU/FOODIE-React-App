import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import f1 from '../img/f1.png';
import f2 from '../img/f2.png';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


import AOS from 'aos';
import {   useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Ratings = () => {
    const [value, setValue] = React.useState(2);
 
  useEffect(() => {
    AOS.init({duration:1000});},[]);
  return (
    <section className="ratings web-view" >
      <Container className=" mt-50">
        <Row>
       
          <Col className='d-flex align-items-center' md={6}>
            <div data-aos="fade-up" className='d-flex w-100 '>
            <div className="left-section text-center  w-100 font-36 ">
              
              <div className='d-flex justify-content-between mt-30 '>
             
                <div>
                <img src={f1} className='w-100'  alt="Image" />

                </div>
            
       
              </div>
        
               
            
            </div>
            </div>
            
          </Col>

          <Col className='d-flex align-items-center' md={6}>
            <div data-aos="fade-up" className='d-flex w-100 '>
            <div className="left-section text-start    ">
              <div className='font-16 feedback-heading'>WHAT THEY SAY</div>
              <div className='font-36 font-bold heading-text'>What Our <span className='heading-text-colored'>Customers</span></div>
              <div className='font-36 font-bold heading-text'>Say About Us</div>
              <div className='font-16 feedback-text ' >“FOODIE is the best. Besides the many and delicious meals, the service is also very good, especially in the very  fast delivey. I highly recommend FOODIE to you”.</div>
              
              <div className=''>
                <div className='d-flex mt-20'>
                  
                  <img src={f2} className='f-img'  alt="Image" />
                  
                  <div className='ml-20'>
                  <div className='font-16 f-user'>Theresa Jordan</div>
                  <div className='font-12 f-hobby'>food lover</div>
                  <div className=''>
                <Box
                  sx={{
                    '& > legend': { mt: 2 },
                  }}
                >

                  <Rating className='font-16'
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />

                </Box>
                </div>
                  </div>
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

export default Ratings;
