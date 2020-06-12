import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
/*import 'bootstrap/js/collapse.js';*/
import axios from 'axios';

// import CmsRoute from './theme1/common/CmsRoute.js';
// import Layout from './coreAdmin/Layout/Layout.js';
import CmsRoute from './lib/CmsRoute.js';

// axios.defaults.baseURL = 'http://qaiassureitapi.iassureit.com';
axios.defaults.baseURL = 'http://localhost:3060';
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
