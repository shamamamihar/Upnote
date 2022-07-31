import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className='main'>
        
        <Row>
            <Container>
                <div className= "intro-text">
                <h1  className="title">Welcome to Upnote </h1>                    
                </div>
    
                    <div className= 'buttonContainer'>
                        <a href ='/login'>
                           <Button size='lg' className = 'LandingButton'> Login </Button>
                        </a>
                        <a href ='/register'>
                           <Button size='lg' className = 'LandingButton' > Sign Up </Button>
                        </a>
                    </div>

            </Container>
             </Row>
             </div>
 

  );
};

export default LandingPage;