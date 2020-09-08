import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes  from './lib/Routes.js';
import axios from 'axios';
// import * as moment from "moment";
// import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';


axios.defaults.baseURL =  process.env.REACT_APP_BASE_URL;
console.log("REACT_APP_BASE_URL",axios.defaults.baseURL);
// axios.defaults.baseURL = 'http://localhost:6065';
axios.defaults.headers.post['Content-Type'] = 'application/json';
function App() {
  return (
    <div className="App">

    <Routes />

     </div>
  );
}

export default App;
