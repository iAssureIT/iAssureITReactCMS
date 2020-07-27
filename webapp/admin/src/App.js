import React from 'react';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
//  import 'bootstrap/dist/js/bootstrap.min.js';


/*import 'bootstrap/js/collapse.js';*/
import axios from 'axios';

// import CmsRoute from './theme1/common/CmsRoute.js';
// import Layout from './coreAdmin/Layout/Layout.js';
import CmsRoute from './lib/CmsRoute.js';

// axios.defaults.baseURL = 'http://qaiassureitapi.iassureit.com';
// axios.defaults.baseURL = 'http://localhost:6066';
// axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.baseURL =  process.env.REACT_APP_BASE_URL;
console.log("REACT_APP_BASE_URL",axios.defaults.baseURL);
// axios.defaults.baseURL = 'http://localhost:6065';
axios.defaults.headers.post['Content-Type'] = 'application/json';
function App() {
  return (
        <div className="">
          <CmsRoute />
         {/* <Layout />*/}
        </div>              
  );
}
export default App;
