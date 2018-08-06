import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {BrowserRouter} from 'react-router-dom';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import '../node_modules/mdbreact/dist/css/mdb.css';
ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>
, document.getElementById("content"));