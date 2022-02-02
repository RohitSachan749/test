import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Test3 from "./Test3"

import {BrowserRouter} from 'react-router-dom'
import Navbar from './Layout/Navbar'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);



