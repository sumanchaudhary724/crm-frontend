import React from 'react'
import propTypes from 'prop-types';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'


export const LoginForm= ({handleOnChange, handleOnSubmit, formSwitcher, email, pass}) => {
  return (
    <Container>
        <Row>
            <Col>
            <h1>Client Login</h1>
            <hr/>
            <Form autoComplete='off' onSubmit={handleOnSubmit}>
               <Form.Group>
                 <Form.Label>Email Address</Form.Label>
                 <Form.Control type="email" name="email" value={email} onChange={handleOnChange} placeholder="Enter Email" required/>
               </Form.Group>

               <Form.Group>
                 <Form.Label>Password</Form.Label>
                 <Form.Control type="password" name="password" value={pass} onChange={handleOnChange} placeholder="password" required/>
               </Form.Group>
                 
              
               <br/>
               <Button type="submit">Login</Button>
               <br/>
               <hr/>
               <a href='#!'onClick={() => formSwitcher('reset')}>Forget Password?</a>
            </Form>
            </Col>
        </Row>
       

    </Container>
  );
};

LoginForm.propTypes ={
    handleOnChange: propTypes.func.isRequired,
    handleOnSubmit: propTypes.func.isRequired,
    formSwitcher: propTypes.func.isRequired,
    email: propTypes.string.isRequired,
    pass: propTypes.string.isRequired
};
