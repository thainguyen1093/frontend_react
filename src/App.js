import React from 'react';
import RootRouter from "./redux/components/RootRouter";
import {BrowserRouter} from "react-router-dom";

const App = () => (
    <BrowserRouter>
      <RootRouter/>
    </BrowserRouter>
)

export default App;