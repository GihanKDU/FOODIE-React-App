import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import r1 from '../img/r1.png';
import r2 from '../img/r2.png';
import r3 from '../img/r3.png';
import r4 from '../img/r4.png';

import AOS from 'aos';
import {   useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Offers = () => {
 
  useEffect(() => {
    AOS.init({duration:1000});},[]);
  return (
    <section className="offer web-view " >
      <Container className=" mt-50">
        <Row>
       
          <Col className='d-flex align-items-center' md={12}>
            <div data-aos="fade-up" className='d-flex w-100 '>
            <div className="left-section text-center  w-100 font-36 ">
              <div  className='font-bold heading-text'>Today's<span className='heading-text-colored'> Offers</span> </div>
              <div  className=' font-20 heading-sentence'>Eat More, Spent Less </div>
              <div className=' mt-30 pointer '>
              <Row>
              <Col  md={3}>
              <Card style={{ width: '18rem' }}>
                    <img src={r1} alt="Image" />
                <Card.Body>
                    <div className='mt-10 font-16 d-flex justify-content-between'>
                    <div className='card-heading'>Hotel Shangri-La</div>
                    <div> <div className='rating-text'>4.2</div></div></div>
                    <div className='font-12 card-lable-small text-start'>Colombo - 02</div>
                    <div className='font-14 mt-5 card-lable text-start'>Spent LKR 1000, Save LKR 200</div>


                 </Card.Body>
                </Card>
              </Col>
              <Col  md={3}>
              <Card style={{ width: '18rem' }}>
                    <img src={r2} alt="Image" />
                <Card.Body>
                    <div className='mt-10 font-16 d-flex justify-content-between'>
                    <div className='card-heading'>Burger Hut</div>
                    <div> <div className='rating-text'>4.2</div></div></div>
                    <div className='font-12 card-lable-small text-start'>Colombo - 02</div>
                    <div className='font-14 mt-5 card-lable text-start'>Spent LKR 1000, Save LKR 200</div>


                 </Card.Body>
                </Card>
              </Col>
              <Col  md={3}>
              <Card style={{ width: '18rem' }}>
                    <img src={r3} alt="Image" />
                <Card.Body>
                    <div className='mt-10 font-16 d-flex justify-content-between'>
                    <div className='card-heading'>Cafe de Pizza</div>
                    <div> <div className='rating-text'>4.2</div></div></div>
                    <div className='font-12  card-lable-small text-start'>Colombo - 02</div>
                    <div className='font-14 mt-5 card-lable text-start'>Spent LKR 1000, Save LKR 200</div>


                 </Card.Body>
                </Card>
              </Col>
              <Col  md={3}>
              <Card style={{ width: '18rem' }}>
                    <img src={r4} alt="Image" />
                <Card.Body>
                    <div className='mt-10 font-16 d-flex justify-content-between'>
                    <div className='card-heading'>Drinks 110</div>
                    <div> <div className='rating-text'>4.2</div></div></div>
                    <div className='font-12 card-lable-small text-start'>Colombo - 02</div>
                    <div className='font-14 mt-5 card-lable text-start'>Spent LKR 1000, Save LKR 200</div>


                 </Card.Body>
                </Card>
              </Col>
              
              </Row>
              <Row className='mt-20'>
              <Col  md={3}>
              <Card style={{ width: '18rem' }}>
                    <img src={r4} alt="Image" />
                <Card.Body>
                    <div className='mt-10 font-16 d-flex justify-content-between'>
                    <div className='card-heading'>Drinks 110</div>
                    <div> <div className='rating-text'>4.2</div></div></div>
                    <div className='font-12 card-lable-small text-start'>Colombo - 02</div>
                    <div className='font-14 mt-5 card-lable text-start'>Spent LKR 1000, Save LKR 200</div>


                 </Card.Body>
                </Card>
              </Col>
              <Col  md={3}>
              <Card style={{ width: '18rem' }}>
                    <img src={r3} alt="Image" />
                <Card.Body>
                    <div className='mt-10 font-16 d-flex justify-content-between'>
                    <div className='card-heading'>Cafe de Pizza</div>
                    <div> <div className='rating-text'>4.2</div></div></div>
                    <div className='font-12  card-lable-small text-start'>Colombo - 02</div>
                    <div className='font-14 mt-5 card-lable text-start'>Spent LKR 1000, Save LKR 200</div>


                 </Card.Body>
                </Card>
              </Col>
              <Col  md={3}>
              <Card style={{ width: '18rem' }}>
                    <img src={r2} alt="Image" />
                <Card.Body>
                    <div className='mt-10 font-16 d-flex justify-content-between'>
                    <div className='card-heading'>Burger Hut</div>
                    <div> <div className='rating-text'>4.2</div></div></div>
                    <div className='font-12 card-lable-small text-start'>Colombo - 02</div>
                    <div className='font-14 mt-5 card-lable text-start'>Spent LKR 1000, Save LKR 200</div>


                 </Card.Body>
                </Card>
              </Col>
              
              <Col  md={3}>
              <Card style={{ width: '18rem' }}>
                    <img src={r1} alt="Image" />
                <Card.Body>
                    <div className='mt-10 font-16 d-flex justify-content-between'>
                    <div className='card-heading'>Hotel Shangri-La</div>
                    <div> <div className='rating-text'>4.2</div></div></div>
                    <div className='font-12 card-lable-small text-start'>Colombo - 02</div>
                    <div className='font-14 mt-5 card-lable text-start'>Spent LKR 1000, Save LKR 200</div>


                 </Card.Body>
                </Card>
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

export default Offers;
