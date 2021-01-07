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
  Row, Spinner
} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {apiStatus} from "../../constants/apiStatus";

const Register = ({userCreateStatus, userCreate, changeUsername, changePassword, create}) => {
  const [showPassword, setShowPassword] = useState(false);

  const {username, password} = userCreate;
  const {status} = userCreateStatus;

  return (
      <Container className="my-5">

        <Row className="justify-content-center">
          <Col sm={4}>

            {status == apiStatus.LOADING
                ? <Spinner color="primary"/>
                : <h1 className="text-primary">Register your User</h1>}
            <Form>

              <FormGroup>
                <Input type="text" placeholder="Enter your Username" onChange={changeUsername} value={username}/>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <Input type={showPassword ? "text" : "password"} placeholder="Enter your Password"
                         onChange={changePassword} value={password}/>
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

              <Button color="primary" onClick={create}>Create</Button>

            </Form>
          </Col>
        </Row>
      </Container>
  )
}

export default Register;