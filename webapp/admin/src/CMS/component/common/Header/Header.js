import React, {Component} from 'react';
import "./header.css";
import $ from 'jquery';
// import Leftsidebar from './coreadmin/common/leftSidebar/Leftsidebar.js';

import Rightsidebar from '../../../../coreadmin/common/rightSidebar/Rightsidebar.js';
import axios from 'axios';
import {Route, withRouter}      from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
// import './Header.css';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      showNotification: false,
      inAppNotifications:[],
      notifCount:0
    }
  }

  componentDidMount() {
    const Token = localStorage.getItem("token");
    const user_ID = localStorage.getItem("user_ID");
    console.log("user_ID",user_ID);
    this.setState({
      user_ID : user_ID
    });
    const email = localStorage.getItem("emailId");
    const fullname = localStorage.getItem("fullName");
    axios.get('/api/users/get/' + user_ID)
      .then((res) => {
        this.setState({
          email: res.data.email,
          fullname: res.data.firstname+' '+res.data.lastname,
        });
      })
      .catch((err) => {
      })
    axios.get('/api/notifications/get/list/Unread/'+user_ID)
      .then(notifications => {
        this.setState({ 
          inAppNotifications: notifications.data ,
          notifCount: notifications.data.length
        })
      })
      .catch(error => {
      })
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  toggleLeftNav(event) {
    event.preventDefault()
    $('#sidebar').toggleClass('active')
    $('#headerid').toggleClass('headereffect');
    $('#dashbordid').toggleClass('dashboardeffect')
    var sideBar = $("#sidebar").hasClass("active")
    localStorage.setItem('sideBar', sideBar);

  }

  toggleNav(event) {
    event.preventDefault()
    var currentWidth = document.getElementById("mySidenav").style.width;
    if (currentWidth === "230px") {
      document.getElementById("mySidenav").style.width = "0";
    } else {
      document.getElementById("mySidenav").style.width = "230px";
    }
  }

  logout() {
    var token = localStorage.removeItem("token");
    if (token !== null) {
      this.setState({
        loggedIn: false
      }, () => {
        localStorage.removeItem("emailId")
        localStorage.removeItem("center_ID")
        localStorage.removeItem("centerName")
        localStorage.removeItem("fullName")
      })
    }
  }
  LogoutSectionHover(event) {
    $(".colorboxbefore").toggleClass("colorbox");
    $('.showme').toggle();
  }
  bellNotification(event) {
    $('.bellnotification').toggle();
    const user_ID = localStorage.getItem("user_ID");
    axios.get('/api/notifications/get/list/Unread/'+user_ID)
      .then(notifications => {
        console.log('notifications: ',notifications)
        this.setState({ inAppNotifications: notifications.data,notifCount: notifications.data.length })
      })
      .catch(error => {
      })
  }
  viewAll(id,event){
    $('.bellnotification').toggle();
    axios.put('/api/notifications/put/'+id)
    .then((res)=>{
      this.props.history.push("/ViewAllNotification");
    })
    .catch((err)=>{
      console.log(err)
    })
    

  }
  showDropdown(event)
  {
     $("#showhide").addClass("showhim");
     $("#showhidearrow").addClass("showhim");

  }
   hideDropdown(event)
  {
     $("#showhide").removeClass("showhim");
     $("#showhidearrow").removeClass("showhim");

  }
  render() {
    return (
      <div>
        <header className="main-header newMain-header headerComp">
            <div className="padd0 pageHeader">
            	<div className="col-lg-7 col-md-7 col-sm-6 col-xs-6 padd0 pull-left">
	              <div className="colorWhtNavBartxt">
                <nav className="navbar clrwhtbgtp">
                 
                    <div className="navbar-header">
                      <a className="navbar-brand" href="#">iAssureIT CMS</a>
                    </div>
                    <ul className="nav navbar-nav">
                      <li><a href="/cms/select-new-block">Blocks</a></li>
                      <li className=""><a href="/cms/create-new-page">Pages</a></li>
                      <li><a href="/cms/blogs-form">Blogs</a></li>
                      {/*
                      <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">Blogs Management
                        <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                          <li><a href="/cms-pages/blogs-form">Blogs Form</a></li>
                          <li><a href="/cms-pages/AllBlogs">Blogs List</a></li>
                        
                        </ul>
                      </li>*/}
                      {/*
                      <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">Job Management
                        <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                          <li><a href="/cms-pages/job-application">Job Application</a></li>
                          <li><a href="#">Job List</a></li>
                        
                        </ul>
                      </li>*/}
                      
                      
                    </ul>
                
                </nav>
	              	
	                {/*<a href="javascript:void(0)" className="sidebar-toggle marginTop11 marginLeft12" onClick={this.toggleLeftNav.bind(this)} data-toggle="push-menu" role="button">
	                  <i className="fa fa-bars headicon"></i>
	               </a>*/}
	              </div>
	            </div>

            
            </div>
        </header>
       {/* <div id="mySidenav" className="sidenav">
          <Rightsidebar />
        </div>*/}
      </div>
    );
  }
}

export default withRouter(Header);

