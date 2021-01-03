import React from 'react';
import {RootLayout} from "./redux/components";
import {BrowserRouter} from "react-router-dom";

const App = () => (
    <BrowserRouter>
      <RootLayout/>
    </BrowserRouter>
)

export default App;