import React from 'react';

import $ from "jquery";

import "./fullheader.css"

export default class fullheader extends React.Component {


	constructor(props) {
		super(props);
	}

	handleContent(event){
		$(document).ready(function(){
		  $(".customSpan").click(function(){
		  $(".overlay1").addClass("overlay1a");
		  $(".hcol1").addClass("commomcol1");
		  $(".hcol2").addClass("commomcol2");
		  $(".hcol3").addClass("commomcol3");




		  	
		  
		  });
		  $(".closebtn1").click(function(){
		  	 /*$(".overlay1").css("width", "0%");*/
		  $(".hcol1").addClass("rcommomcol1");
		  $(".hcol2").addClass("rcommomcol2");
		  $(".hcol3").addClass("rcommomcol3");

		  	 window.location.reload(true);
		  	 
		  
		  });
		});


	}

	render() {
		return (
			<div className="col-lg-12">
				<div id="myNav" className="overlay1">
				<a href="javascript:void(0)" className="closebtn1">&times;</a>
				  	<div className="col-lg-4 hcol1">
				  		<a href="/homepage">
					  	<div className="col-lg-12 hcol1a">
					  		<h1 className="text-center mtop50">Home </h1>
					  	</div>
					  	</a>
					  	<a href="/services">
						<div className="col-lg-12 hcol1b mtop50">
					  		<h1 className="text-center">Services</h1>
						</div>
						</a>
				  	</div>
				  	<div className="col-lg-4 hcol2">
				  		<div className="col-lg-12 hcol1a">
					  		<h1 className="text-center mtop50">About us </h1>
					  	</div>
						<div className="col-lg-12 hcol1b mtop50">
					  		<h1 className="text-center">Portfolio</h1>
						</div>
				  	</div>
				    <div className="col-lg-4 hcol3">
					    <div className="col-lg-12 hcol1a">
					  		<h1 className="text-center mtop50"> Contact Us</h1>
					  	</div>
						<div className="col-lg-12 hcol1b mtop50">
					  		<h1 className="text-center"></h1>
						</div>
				    </div>
				</div>
				
				<span className="customSpan pull-right" onClick={this.handleContent.bind(this)} >&#9776;</span>
			</div>
		);
	}
}
