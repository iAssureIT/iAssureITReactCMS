import React from 'react';
import "./headernew.css";
import $ from "jquery";

export default class Headernew extends React.Component {


	constructor(props) {
		super(props);
	}
		handleContent(event){
		$(document).ready(function(){
		  $(".customSpan").click(function(){
		  $(".openMenu").addClass("openMenu1");
		  });
		  $(".closebtn1").click(function(){ 
		  $(".openMenu").removeClass("openMenu1");
		  	/*window.location.reload(true);*/

		  });
		  
		  /*$("#home").hover(function(){
		  $(".openMenu").addClass("homehover");
		  
		  });
		  $("#Services").hover(function(){
		  $(".openMenu").addClass("Serviceshover");
		  
		  });
		   $("#aboutus").hover(function(){
		  $(".openMenu").addClass("aboutushover");
		  
		  });
		   $("#portfolio").hover(function(){
		  $(".openMenu").addClass("portfoliohover");
		  
		  }); $("#contactus").hover(function(){
		  $(".openMenu").addClass("contactushover");
		  
		  });*/
		});


	}

	render() {
		return (
			<div>
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 logoBox headernewlogobox">
					    <a href="/" ><img className="logoab img-responsive" src="/images/Logo.png" alt="logo"/></a>
					</div>
				<div id="myNav" className="openMenu">
					<a href="javascript:void(0)" className="closebtn1">&times;</a>
					<div className="topm text-center">
				  		<a href="/masterpage/home-page">
							<h1 className="home">Home</h1>
						</a>
					  	
					  	<a href="/aboutus-page">
							<h1 className="aboutus">About Us </h1>
						</a>
						<a href="/services-page">						
							<h1 className="Services">Services</h1>
						</a>
						<a href="/ecommerce-page">						
							<h1 className="Services">eCommerce</h1>
						</a>
						
						<a href="/contactus-page">
							<h1 className="aboutus">Contact Us </h1>
						</a>
					</div>
				</div>
				<span className="customSpan pull-right" onClick={this.handleContent.bind(this)} >&#9776;</span>
				
			</div>
		);
	}
}
