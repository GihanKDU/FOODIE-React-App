import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import c1 from '../img/c1.png';
import c2 from '../img/c2.png';
import c3 from '../img/c3.png';
import c4 from '../img/c4.png';
import c5 from '../img/c5.png';

import AOS from 'aos';
import {   useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const QuickMenu = () => {
 
  useEffect(() => {
    AOS.init({duration:1000});},[]);
  return (
    <section className="quickmenu web-view" >
      <Container className=" mt-50">
        <Row>
       
          <Col className='d-flex align-items-center' md={12}>
            <div data-aos="fade-up" className='d-flex w-100 '>
            <div className="left-section text-center  w-100 font-36 ">
              <div  className='font-bold heading-text'>Quick<span className='heading-text-colored'> Menu</span> </div>
              <div  className=' font-20 heading-sentence'>Picked for you </div>
              <div className='d-flex justify-content-between mt-30 '>
              <Button className=" ml-20 button-circle">
                <div>
                <img src={c1}  alt="Image" />
                <div className='mt-10 font-20'>Sri Lankan Food</div>
                </div>
              </Button>
              <Button className=" ml-20 button-circle">
                <div>
                <img src={c2}  alt="Image" />
                <div className='mt-10 font-20'>Indian Food</div>
                </div>
              </Button>
              <Button className=" ml-20 button-circle">
                <div>
                <img src={c3}  alt="Image" />
                <div className='mt-10 font-20'>Chinese Food</div>
                </div>
              </Button>
              <Button className=" ml-20 button-circle">
                <div>
                <img src={c4}  alt="Image" />
                <div className='mt-10 font-20'>Fast Food</div>
                </div>
              </Button>
              <Button className=" ml-20 button-circle">
                <div>
                <img src={c5}  alt="Image" />
                <div className='mt-10 font-20'>Drinks</div>
                </div>
              </Button>
            
              </div>
        
               
            
            </div>
            </div>
            
          </Col>
         
        </Row>
      </Container>
    </section>
  );
};

export default QuickMenu;
