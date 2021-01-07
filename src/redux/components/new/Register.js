import React, {useState} from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row
} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col sm={4}>
            <h1 className="text-primary">Register your User</h1>
            <Form>

              <FormGroup>
                <Input type="text" placeholder="Enter your Username"/>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <Input type={showPassword ? "text" : "password"} id="password" placeholder="Enter your Password"/>
                  <InputGroupAddon addonType="append">
                    <Button outline color="info" onClick={() => setShowPassword(!showPassword)}>
                      <FontAwesomeIcon icon={showPassword ? "eye" : "eye-slash"}/>
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <Input type="select">
                  <option value="">Gender...</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Input>
              </FormGroup>

              <Button color="primary">Create</Button>

            </Form>
          </Col>
        </Row>
      </Container>
  )
}

export default Register;