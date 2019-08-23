import React from 'react';
import { BrowserRouter as Router,Switch} from 'react-router-dom';
import { Route } from 'react-router';

import Homepage from '../pages/Homepage.js';
import ServicesList from '../pages/ServicesList.js';
import ContactUs from '../pages/ContactUs.js';

import AboutUs from '../pages/AboutUs.js';
import Header from './Header.js';
import fullheader from './fullheader.js';
import headernew from './headernew.js';


import mobileApp from '../blocks/mobileApp.js';
import staffaBanner from '../blocks/staffaBanner.js';
import eCommerce from '../blocks/eCommerce.js';
import webapp from '../blocks/webapp.js';






const CmsRoute = (props) => {
  return (
    <Router>
    	<Switch>
    		<Route path = "/homepage" exact component = {Homepage} />
    		<Route path = "/services" exact component = {ServicesList} />
    		<Route path = "/aboutus" exact component = {AboutUs} />
    		<Route path = "/header" exact component = {Header} />
            <Route path = "/fullheader" exact component = {fullheader} />
            <Route path = "/contactus" exact component = {ContactUs} />
            <Route path = "/mobileapp" exact component = {mobileApp} />
            <Route path = "/staffabanner" exact component = {staffaBanner} />
            <Route path = "/eCommerce" exact component = {eCommerce} />
            <Route path = "/webapp" exact component = {webapp} />
            <Route path = "/headernew" exact component = {headernew} />
            
            





    	</Switch>
    </Router>
  )
}

export default CmsRoute;