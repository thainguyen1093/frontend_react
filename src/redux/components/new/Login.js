import React from 'react';
import {Container, Row, Col, InputGroup, InputGroupAddon, Input, InputGroupText, Label, Button} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link, useRouteMatch} from "react-router-dom";

const Login = () => {
  let {path, url} = useRouteMatch();
  return (
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col className="col-4 border order-primary">
            <InputGroup>
              <Label><h1 className="text-primary">Login to your User</h1></Label>
            </InputGroup>
            <br/>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <FontAwesomeIcon icon="user"/>
                </InputGroupText>
              </InputGroupAddon>
              <Input placeholder="username"/>
            </InputGroup>
            <br/>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="fas fa-key"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input type={"password"} placeholder="password"/>
            </InputGroup>
            <br/>
            <InputGroup>
              <Label check>
                <Input addon type="checkbox" id="rememberMe"/>{' '}
                Remember me
              </Label>
            </InputGroup>
            <br/>
            <InputGroup>
              <Col md={{size: 4, offset: 5}}>
                <Button color="primary">Login</Button>
              </Col>
            </InputGroup>
            <br/>
            <br/>
            <InputGroup>
              <Label check>
                Don't have an account? <Link to={`/new/register`}>Register</Link>
              </Label>
            </InputGroup>
            <br/>
            <InputGroup>
              <Label check>
                <Link to={`/new/forgot-password`}>Forgot your password?</Link>
              </Label>
            </InputGroup>
          </Col>
        </Row>
      </Container>
  )
}

export default Login;