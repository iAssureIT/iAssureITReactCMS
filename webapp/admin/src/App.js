import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import History from './history.js';

import Example from './example.js';
// import Cmspage from './cmspage.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/collapse.js';
import Footer from './component/common/Footer/Footer';
import Header from './component/common/Header/Header';
import Sidebar from './component/common/Sidebar/Sidebar';

import CircleMenuBars from './component/circlemenubars.js';
import Cmspage from './component/cmspage.js';
import Awsfile from './component/Awsfile.js';
import DesignPageMaster from './component/designpagemaster/designpagemaster.js';
import Selectpagedesign from './component/selectpagedesign/selectpagedesign.js';

import ViewPage_1 from './component/createnewpage/viewpage_1.js';
import ViewPage_2 from './component/createnewpage/ViewPages.js';
import BlockDesignMaster from './component/blockdesignmaster/blockdesignmaster.js';
/*selectblockdesign*/
import SelectBlockDesign from './component/selectblockdesign/selectblockdesign.js';
/*createnewblock*/
import ViewBlock_1 from './component/createnewblock/viewblock1.js';
import ViewBlock_2 from './component/createnewblock/viewblock2.js';
function App() {
  return (
            <Router history={History}>
              <div className="">
                <header className="">
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12"> 
                    <Sidebar />
                  </div>

                  <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12"> 
                    <Header />
                  </div>

                  <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12 bgwrapper"style={{backgroundColor:"#eee"}}> 
                      <div className="contentWrapper">
                            {/*<Route path = "/" exact component = {App}/>*/}
                            <Route path = "/about" exact component = {CircleMenuBars} />
                            <Route path = "/cmspage/:id" exact component = {Cmspage} />
                            <Route path = "/example/:id" exact component = {Example} />
                            <Route path = "/aws" exact component = { Awsfile } />
                            <Route path = "/designpagemaster" exact component = { DesignPageMaster } />
                            <Route path = "/selectpagedesign" exact component = { Selectpagedesign } />
                            <Route path = "/viewpage1" exact component = { ViewPage_1 } />
                            <Route path = "/viewpage2/:id"exact component = { ViewPage_2 } />
                            <Route path = "/viewpage2" exact component = { ViewPage_2 } />
                            <Route path = "/blockdesignmaster" exact component = { BlockDesignMaster } />
                            <Route path = "/selectblockdesign" exact component = { SelectBlockDesign } />
                            <Route path = "/viewblock1" exact component = { ViewBlock_1 } />
                            <Route path = "/viewblock2" exact component = { ViewBlock_2 } /> 
                      </div>
                  </div>

                  <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12"> 
                    <Footer />
                  </div>
                  
                </header>
              </div>
               
            </Router>
  );
}

export default App;
