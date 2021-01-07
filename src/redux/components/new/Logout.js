import React, {useState, useEffect} from 'react';
import {logout} from "../../../general/services/authService";
import {Container} from "reactstrap";

const Logout = () => {
  useEffect(() => {
    logout();
  });

  return (
      <Container className="my-5">
        <h1 className="text-primary">Logout successful</h1>
      </Container>
  )
}

export default Logout;