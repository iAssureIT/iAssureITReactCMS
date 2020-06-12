import React from 'react';
import { BrowserRouter as Router,Switch} from 'react-router-dom';
import { Route } from 'react-router';


/*========================================*/

import Footer from '../common/footer/Footer.js';
import Header from '../common/header/Header.js';
import Leftsidebar from '../common/leftSidebar/Leftsidebar.js';

import ViewPage1         from '../CMS/component/createnewpage/ViewPage1.js';

// import Sidebarcms from '../common/Sidebar/Sidebar';
/*
import CircleMenuBars from '../../component/circlemenubars.js';
import Cmspage from '../../component/cmspage.js';
import Awsfile from '../../component/Awsfile.js';
import DesignPageMaster from '../../component/designpagemaster/designpagemaster.js';
import Selectpagedesign from '../../component/selectpagedesign/selectpagedesign.js';

import ViewPage_1 from '../../component/createnewpage/viewpage_1.js';
import ViewPage_2 from '../../component/createnewpage/ViewPages.js';
import BlockDesignMaster from '../../component/blockdesignmaster/blockdesignmaster.js';

import SelectBlockDesign from '../../component/selectblockdesign/selectblockdesign.js';

import ViewBlock_1 from '../../component/createnewblock/viewblock1.js';
import ViewBlock_2 from '../../component/createnewblock/viewblock2.js';*/

/*========================================*/

import Homepage from '../theme1/pages/Homepage.js';
/*import ServicesList from '../pages/ServicesList.js';
import ContactUs from '../pages/ContactUs.js';
import Ecommerce from '../pages/ecommerce.js';
import Bussinessportal from '../pages/bussinessportal.js';*/
/*
import AboutUs from '../pages/AboutUs.js';
import Header from './Header.js';
import fullheader from './fullheader.js';
import headernew from './headernew.js';


import mobileApp from '../blocks/mobileApp.js';
import staffaBanner from '../blocks/staffaBanner.js';
import eCommerce from '../blocks/eCommerce.js';
import webapp from '../blocks/webapp.js';*/






const CmsRoute = (props) => {
  return (
    <Router>
    	<Switch>
    		<Route path = "/" exact component = {Homepage} />
    	{/*	<Route path = "/services" exact component = {ServicesList} />
    		<Route path = "/aboutus" exact component = {AboutUs} />
    		<Route path = "/header" exact component = {Header} />
            <Route path = "/fullheader" exact component = {fullheader} />
            <Route path = "/contactus" exact component = {ContactUs} />
            <Route path = "/mobileapp" exact component = {mobileApp} />
            <Route path = "/staffabanner" exact component = {staffaBanner} />
            <Route path = "/eCommerce" exact component = {eCommerce} />
            <Route path = "/webapp" exact component = {webapp} />
            <Route path = "/headernew" exact component = {headernew} />
            <Route path = "/ecommerce-page" exact component = {Ecommerce} />
            <Route path = "/bussinessportal-page" exact component = {Bussinessportal} />*/}
            <div className="">
                <header className="">
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                    <Leftsidebar />
                  </div>

                  <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                    <Header />
                  </div>

                  <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12 bgwrapper"style={{backgroundColor:"#eee"}}>
                      <div className="contentWrapper">
                            <Route path = "/ViewPage1" exact component = { ViewPage1 } />



                            {/*<Route path = "/" exact component = {App}/>*/}
                            {/* <Route path = "/about" exact component = {CircleMenuBars} />
                            <Route path = "/cmspage/:id" exact component = {Cmspage} />*/}
                            {/*<Route path = "/example/:id" exact component = {Example} />*/}
                           {/* <Route path = "/aws" exact component = { Awsfile } />
                            <Route path = "/designpagemaster" exact component = { DesignPageMaster } />
                            <Route path = "/selectpagedesign" exact component = { Selectpagedesign } />
                            <Route path = "/viewpage1" exact component = { ViewPage_1 } />
                            <Route path = "/viewpage2/:id"exact component = { ViewPage_2 } />
                            <Route path = "/viewpage2" exact component = { ViewPage_2 } />
                            <Route path = "/blockdesignmaster" exact component = { BlockDesignMaster } />
                            <Route path = "/selectblockdesign" exact component = { SelectBlockDesign } />
                            <Route path = "/viewblock1" exact component = { ViewBlock_1 } />
                            <Route path = "/viewblock2" exact component = { ViewBlock_2 } />*/}
                      </div>
                  </div>

                  <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                    <Footer />
                  </div>
                 
                </header>
              </div>
            
    	</Switch>
    </Router>
  )
}

export default CmsRoute;