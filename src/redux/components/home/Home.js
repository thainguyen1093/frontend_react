import React from 'react';
import {Link} from "react-router-dom";

const Home = () => (
    <div>
      <Link to="/user/:id">User</Link>
      <h1>hello home</h1>
    </div>
)

export default Home;