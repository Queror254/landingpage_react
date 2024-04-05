import React from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar expand="lg" variant="dark" fixed="top"  className="z-10" style={{padding:15, backgroundColor:"rgba(0, 0, 0, 0.6)"}}>
      <Container>
        <Navbar.Brand className='Nav_brand' href="#">RoadKing</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
         
          <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            {/**
            <Nav.Link href="#action1" className='hover:underline'>Home</Nav.Link>
            <Nav.Link href="#action2" className='hover:underline'>Link</Nav.Link>
            <Nav.Link href="#action3" className='hover:underline'>Link</Nav.Link>
            **/} 
          </Nav>
          
          <Form className="d-flex float-end" style={{color:'white', padding:10,}}>
            <h3 style={{fontSize:15,}}>Call Us: +254795115155</h3>
          </Form>
  </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
