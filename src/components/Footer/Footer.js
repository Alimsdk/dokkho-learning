import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
     
                 <section className="mt-5 footer">
           <footer>
             <Container>
             <Row>
             <Col >
              <Link className="text-white text-decoration-none" to="/home">Home</Link>            <br/>
              <Link className="text-white text-decoration-none" to="/about">About</Link> <br/>
              <Link className="text-white text-decoration-none" to="/services">Services</Link> <br/>
              <Link className="text-white text-decoration-none" to="/tutor">Teach on Dokkho</Link> <br/>
             </Col>
             <Col>
              <h5>Address: motijheel , Dhaka</h5>
              <p className="m-1">Email : dokkho@learning.com</p>
              <p>contact : 0179******</p>
             </Col>
              
             </Row>
             </Container>
           </footer>
            </section>
        
    );
};

export default Footer;