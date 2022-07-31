import React from 'react';
import { Form, Nav, Navbar, NavDropdown, Container, Button } from 'react-bootstrap';
//import { Link } from 'react-router-dom';

const Header = () => {

return (


//Navbar

    <Navbar bg="primary" expand="lg" variant= "dark">
        <Container fluid>
        <Navbar.Brand>
        
        <Nav.Link href= "/" variant ="black" >
              
              UPNOTE
                
                </Nav.Link>
          
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

            <Nav className = 'm-auto'>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button type="button" class="btn btn-dark"> Search </Button>
           
          </Form>
            </Nav>

          <Nav>
            <Nav.Link href= "/mynotes" variant ="black" >
              
            MyNotes
              
              </Nav.Link>
           
            <NavDropdown title="Shamama Mihar" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>      
        </Navbar.Collapse>
        </Container>
      
    </Navbar>

//Navbar Ends



);

};

export default Header;