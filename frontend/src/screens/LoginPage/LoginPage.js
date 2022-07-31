
//import express from "express";
import React, { useState } from "react";
import { Col,Row , Nav} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MainScreen from '../../components/MainScreen';
import "./LoginPage.css";
import axios from "axios";
import { set } from "mongoose";



    const LoginPage = () => {

      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [error, setError] = useState(false);
      const [loading, setLoading] = useState(false);
    
      const submitHandler = async (e) => {
        e.preventDefault();
         

        try {
                const config ={
          headers:{
              "content-type": "application/JSON"

        }  };

      
      setLoading(true)

      const {data} = await axios.post('/api/users/login',{

        email,password,
      },
      config
      );

          console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));



      setLoading(false)
} catch (error){
  set(error.response.data.message);

}
};



  return (
    
    <MainScreen title="LOGIN">
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
<Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value = {password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    <Row className="py-3">
    <Col> New User? <Nav.Link href= "/register" > Register Here</Nav.Link> </Col> </Row>

    </MainScreen>


  );
};

export default LoginPage;