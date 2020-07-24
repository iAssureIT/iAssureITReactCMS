import React, { Component } from 'react';
import $ from 'jquery';
import Rightsidebar from '../rightSidebar/Rightsidebar.js';
import axios from 'axios';
import {Route, withRouter}      from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Header.css';

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
      <div className="headerbgcolor">
        <header className="main-header newMain-header">
          <div className="padd0 pageHeader">

            <div className="col-lg-6 col-md-4 col-sm-4 col-xs-4 padd0">
              <div className="">
              <nav className="navbar clrwhtbgtp">
                  <div className="container-fluid">
                    <div className="navbar-header">
                      <a className="navbar-brand whtclrHeaderBrand" href="/"><b>iOG CMS</b></a>
                    </div>
                    <ul className="nav navbar-nav">
                      <li><a href="/cms/select-new-block">Blocks</a></li>
                      <li className=""><a href="/cms/create-new-page">Pages</a></li>
                      <li><a href="#" className="dropdown" id="blogbtnidA">
                      
                        <button className="dropbtn1" id="blogbtnid">Blogs 
                          <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                          <li className="dpdnBoxLi"><a href="/cms/blogs-form" className="whtclrHeaderBrand">Blogs</a></li>
                          <li className="dpdnBoxLi"><a href="/cms/AllBlogs" className="whtclrHeaderBrand">All Blogs</a></li>
                          
                          
                        </div>
                      </a></li>
                      
                      {/*
                      <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">Blogs Management
                        <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                          <li><a href="/cms-pages/blogs-form">Blogs Form</a></li>
                          <li><a href="/cms-pages/AllBlogs">Blogs List</a></li>
                        
                        </ul>
                      </li>
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
                  </div>
              </nav>
                {/*<div id="sidebarCollapse" onClick={this.toggleLeftNav.bind(this)} className="col-lg-2 col-md-2 col-sm-2 col-xs-2 onHoverEffect addLeftMargin hover ">
                  <i className="fa fa-bars headicon"></i>
                </div>*/}
                {/*<a href="javascript:void(0)" className="sidebar-toggle marginTop11 marginLeft12" onClick={this.toggleLeftNav.bind(this)} data-toggle="push-menu" role="button">
                  <i className="fa fa-bars headicon"></i>
               </a>*/}
              </div>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-8 col-xs-8 padd0 pull-right">
                {/*<div onClick={this.toggleNav.bind(this)} className="col-lg-1 col-md-1 col-sm-1 col-xs-1 pull-right nopadding textAlignCenter onHoverEffect hover">
                  <i className="fa fa-cogs headicon "></i>
                </div>*/}
                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 pull-right padd0">
                  <div className="col-md-8 pull-right">
                  {/*<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 bell_Icon">
                    <i className="fa fa-bell " onClick={this.bellNotification.bind(this)} aria-hidden="true"></i>
                     <div className="col-lg-12 col-md-12  bellnotification">
                         <p>You have {this.state.notifCount} notifications</p>
                          <div className="profiledetails">
                          {this.state.inAppNotifications && this.state.inAppNotifications.length > 0 ?
                              this.state.inAppNotifications.map((data, index) => {
                                return (
                                  <div className="msgborderbtm" key={index} id={data._id} onClick={this.viewAll.bind(this,data._id)}>
                                  <div dangerouslySetInnerHTML={{ __html: data.notifBody }} />
                                  </div>
                                )
                              })
                             
                            :
                            <div >
                              <div>
                                <p>You have no notifications</p>
                              </div>

                            </div>
                          }
                        </div>
                      </div>
                  </div>*/}
                  <div className="col-lg-12 col-md-7 col-sm-9 col-xs-12  hover logoutAct">
                    <div className="row hover" onClick={this.LogoutSectionHover.bind(this)}>
                      <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12 colorboxbefore hoverText onHoverEffect ">
                        
                        <span className="col-lg-11 nopadding ">
                          <img src="/images/useuser.png" className="userIcon"/>
                          <label><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.fullname ? this.state.fullname : ""}</b></label>
                        </span>
                        <span className="textAlignCenter" style={{"marginTop": "4px"}}>
                        </span>
                        
                      </span>
                    </div>
                     {/* <div className="arrow-up showme"></div>*/}
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 user-footer showme NOpadding">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopadding " >
                          
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  headerImageContainer padd0 ">
                            <p className="pull-right fntC1" style={{"cursor":"pointer"}} title="Close"  onClick={this.LogoutSectionHover.bind(this)}>X</p><br/>
                            {/* <img src="/images/person.png" height="80px" className=" marLeft " /> */}
                              <div className=" marLeft "  style={{"backgroundImage":`url(`+ (this.state.profileImage ? this.state.profileImage : "/images/person.png")+`)`, "height": "40%", "backgroundSize":"41% 100%","backgroundRepeat": "no-repeat"}}></div>
                            <div className="col-lg-12 col-md-6 col-sm-12 col-xs-12 marTop pull-right  padd0 ">
                              <h5 className="nomargin dropmailtext">
                                {this.state.fullname ? this.state.fullname : ""}
                              </h5>
                              <h6 className=" dropmailtext"> {this.state.email ? this.state.email : ""}</h6>
                            </div>
                          </div>
                        </div>
                        <div className="btnDiv col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <span className="">
                            <a className="profileTitle btnpadd" href={"/profile/"+this.state.user_ID}>
                              <button type="button" className="profilebtn">Profile</button>
                            </a>
                          </span> &nbsp;
                          <span className="pull-right">
                            <a className="profileTitle btnpadd" href="/login">
                              <button type="button" className="logoutbtn" onClick={this.logout.bind(this)}>Sign Out</button>
                            </a>
                          </span>
                        </div>
                      </div>
                  </div>
                
                </div>
                </div>
                
              </div>
          </div>
        </header>
        {/*<div id="mySidenav" className="sidenav">
          <Rightsidebar />
        </div>*/}
      </div>
    );
  }
}

export default withRouter(Header);