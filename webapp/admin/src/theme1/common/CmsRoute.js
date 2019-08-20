import React from 'react';
import { BrowserRouter as Router,Switch} from 'react-router-dom';
import { Route } from 'react-router';

import Homepage from '../pages/Homepage.js';
import ServicesList from '../pages/ServicesList.js';
import ContactUs from '../pages/ContactUs.js';

import AboutUs from '../pages/AboutUs.js';
import Header from './Header.js';


const CmsRoute = (props) => {
  return (
    <Router>
    	<Switch>
    		<Route path = "/homepage" exact component = {Homepage} />
    		<Route path = "/services" exact component = {ServicesList} />
    		<Route path = "/aboutus" exact component = {AboutUs} />
    		<Route path = "/header" exact component = {Header} />
            <Route path = "/contactus" exact component = {ContactUs} />



    	</Switch>
    </Router>
  )
}

export default CmsRoute;