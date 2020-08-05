import React from 'react';
import { BrowserRouter as Router,Switch} from 'react-router-dom';
import { Route } from 'react-router';


/*========================================*/

import CircleMenuBars from '../CMS/component/circlemenubars.js';
import Cmspage from '../CMS/component/cmspage.js';
import ViewPage_1 from '../CMS/component/createnewpage/ViewPage1.js';
import ViewPage_2 from '../CMS/component/createnewpage/Viewpage.js';
import ViewBlock_1 from '../CMS/component/createnewblock/viewblock1.js';
import ViewBlock_2 from '../CMS/component/createnewblock/ViewBlock_2.js';
import ViewBlock_3 from '../CMS/component/createnewblock/ViewBlock_3.js';
import MasterPage from '../CMS/component/MasterPage/MasterPage.js';
import Typemaster from '../CMS/component/Typemaster/Typemaster.js';
import CmsHeader from '../CMS/component/common/Header/Header.js'; 
import CmsDashBoard from '../CMS/CmsDashBoard/CmsDashBoard.js'; 
import $                  from 'jquery';
import HeaderAdmin from '../coreadmin/common/header/Header.js'; 

/*blogs*/

import SingleBlogPage                   from '../CMS/component/Blogs/SingleBlogPage/SingleBlogPage.js';
// import AllBlog                          from './component/AllBlog/AllBlog.js';
// import Blogcomponents                   from './component/Blogcomponents/Blogcomponents.js';
// import AllBlogsList                     from '../allBlocks/AllBlogsList/AllBlogsList.js';
import Login from '../coreadmin/systemSecurity/Login.js';
import SignUp from '../coreadmin/systemSecurity/SignUp.js';
import ForgotPassword from '../coreadmin/systemSecurity/ForgotPassword.js';
import ConfirmOtp from '../coreadmin/systemSecurity/ConfirmOtp.js';
import ResetPassword from '../coreadmin/systemSecurity/ResetPassword.js';
/*============================ /Blog==============================================*/

/*import Rightsidebar     from '../common/rightSidebar/Rightsidebar.js';*/
import BlogsFormPage    from "../CMS/component/Blogs/BlogsForm/BlogsFormPage.js";
import AllBlogs          from "../CMS/component/Blogs/AllBlogs/AllBlogs.js";
import JobForm          from "../CMS/component/JobApplication/JobApplication.js";



/*========================================*/

import Homepage from '../theme1/pages/Homepage.js';
import ServicesList from '../theme1/pages/ServicesList.js';
import ContactUs from '../theme1/pages/ContactUs.js';
import Ecommerce from '../theme1/pages/ecommerce.js';
import Bussinessportal from '../theme1/pages/bussinessportal.js';

import AboutUs from '../theme1/pages/AboutUs.js';
import Header from '../theme1/common/Header.js';
import fullheader from '../theme1/common/fullheader.js';
import headernew from '../theme1/common/headernew.js';


import mobileApp from '../theme1/blocks/mobileApp.js';
import staffaBanner from '../theme1/blocks/staffaBanner.js';
import eCommerce from '../theme1/blocks/eCommerce.js';
import webapp from '../theme1/blocks/webapp.js';
import Responsive from '../Responsive.js';

export default class CmsLayout extends React.Component {


    constructor(props) {
        super();
        this.state = {
            loggedIn: false,
        }
    }

    componentDidMount() {
                $(window).scroll(function() {
                var height = $(window).scrollTop();
                if (height > 100) {
                    $('#back2Top').fadeIn();
                } else {
                    $('#back2Top').fadeOut();
                }
            });
            $(document).ready(function() {
                $("#back2Top").click(function(event) {
                    event.preventDefault();
                    $("html, body").animate({ scrollTop: 0 }, "slow");
                    return false;
                });

            });
        const token = localStorage.getItem("token");
        if (token !== null && token !== "undefined") {
            this.setState({
                loggedIn: true
            })
        } else { }

    }

    logout() {
        var token = localStorage.removeItem("token");
        if (token !== null && token !== "undefined") {
            this.setState({
                loggedIn: false
            })
        }
    }




    render(){
        if (this.state.loggedIn) {

        return (
            <Router>
            	<Switch>
            		   
                    <Route path = "/homepage" exact component = {Homepage} />
                    <Route path = "/responsive" exact component = {Responsive} />

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
                    <Route path = "/ecommerce-page" exact component = {Ecommerce} />
                    <Route path = "/bussinessportal-page" exact component = {Bussinessportal} />
                    
                    <div>
                    <HeaderAdmin />
                    <Route path= "/cms/masterpage/:pageurl"          component={ MasterPage } /> 
                    <Route path="/"                      exact strict component={CmsDashBoard}  />
                    <Route path="/cms/create-new-page"                         exact strict component={ViewPage_1}  />
                    <Route path="/cms/new-page-add-block"                         exact strict component={ViewPage_2}  />
                    <Route path="/cms/new-page-add-block/:id"                     exact strict component={ViewPage_2}  />
                    <Route path="/cms/select-new-block"                        exact strict component={ViewBlock_1}  />
                    <Route path="/cms/create-new-block"                        exact strict component={ViewBlock_2}  />
                    <Route path="/cms/view-blocks"                        exact strict component={ViewBlock_3}  />
                    <Route path="/cms/typemaster"                 exact strict component={Typemaster}  />
                    <Route path="/cms/typemaster/:editId"                  strict component={Typemaster}  />
                    
                    
                    <Route path="/cms/singleblog"           component={ SingleBlogPage }  />   
                    <Route path="/cms/blogs-form"           component={ BlogsFormPage }  />   
                    <Route path="/cms/blogs-form/:blogURL"          component={ BlogsFormPage }  />   
                    <Route path="/cms/AllBlogs"           component={ AllBlogs }  />   
                    <Route path="/cms/singleblog/:selectedUrl"          component={ SingleBlogPage }  />   
                    {/*<Route path="/cms/contact-us"          component={ SingleBlogPage }  />   */}
                    {/* <Route path="/cms/job-application"           component={ JobForm }  /> */} 
                   {/* <Route path="/cms/homepage"           component={ CmsHomepage }  />  */} 
                                                         
                    </div>
                    
            	</Switch>
            </Router>
          )
        } else {
            return (
                <div>
                    <Router >
                        <Switch >
                            
                            <Route path="/" exact strict component={Login} />
                            <Route path="/login" exact strict component={Login} />
                            <Route path="/signup" exact strict component={SignUp} />
                            <Route path="/forgotpassword" exact strict component={ForgotPassword} />
                            <Route path="/reset-pwd/:user_ID" exact strict component={ResetPassword} />
                            <Route path="/confirm-otp/:userID" exact strict component={ConfirmOtp} />
                        </Switch>
                    </Router>
                </div>
            );
        }
    }
}

