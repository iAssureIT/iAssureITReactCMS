import React from 'react';
import './Footer.css'
export default class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="footerBlock">
				<div className="col-lg-12 col-md-12 hidden-sm hidden-xs footerTop">
					<div className="row mtop70">
						<div className="col-lg-3 col-md-3 col-lg-3 col-xs-3">
							<ul class="">
								<li class="clrwt"><b>Menu</b></li>
							  	<li class="">Home</li>
							  	<li class="">Who We Are</li>
							  	<li class="">What We Do</li>
							  	<li class="">Portfolio</li>
							  	<li class="">Contact Us</li>
							</ul>
						</div>
						<div className="col-lg-3 col-md-3 col-lg-3 col-xs-3">
							<ul class="">
								<li class="clrwt"><b>Support</b></li>
							  	<li class="">Careers</li>
							  	<li class="">Resources</li>
							  	<li class="">Blog</li>
							  	<li class="">Contact Us</li>
							</ul>
						</div>
						<div className="col-lg-3 col-md-3 col-lg-3 col-xs-6">
							<ul class="">
								<li class="clrwt"><b>Address</b></li>
							  	<li class="">#323,Amanora Chambers,Magarpatta,<br/>
							  		Pune,Maharastra 411028</li>
							  	<li class=""> +91 99233 93733</li>
							</ul>
						</div>
						<div className="col-lg-3 col-md-3 col-lg-3 col-xs-9">
							<ul class="pull-right">
								<li class="clrwt lm"><b>Connect</b></li>
							  	<li class="">
							  		<img src="/images/fb.png" alt="Facebook" className="fbPng"/>
							  		<img src="/images/tw.png" alt="Twitter" className="fbPng"/>
							  		<img src="/images/li.png" alt="Linkdin" className="fbPng"/>
							  	</li>
							  	<li class=""><button  class="contactBtn">Click To Contact</button></li>
							</ul>
						</div>
					</div>	
				</div>
				<div className="col-lg-12 col-md-12 hidden-sm hidden-xs footerBottom">
					<div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7">
						<ul class="mtop10">
							<li class="">Copyright &copy; 2019 iAssure International Technologies Pvt. Ltd All rights reserved</li>	
						</ul>
					</div>
					<div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-5 copyr2">
						<ul class="pull-right bpadding">
							<li class="">Privacy Policy</li>
						  	<li class="">Terms of Use</li>
						  	<li class="">Site Map</li>
						</ul>
					</div>
				</div>

			{/* mobile view */}
			<div className="hidden-lg hidden-md col-sm-12 col-xs-12 footerTop">
					<div className="row ">
						<div className="col-lg-3 col-md-3 col-lg-3 col-xs-3">
							<ul class="">
								<li class="clrwt"><b>Menu</b></li>
							  	<li class="">Home</li>
							  	<li class="">Who We Are</li>
							  	<li class="">What We Do</li>
							  	<li class="">Portfolio</li>
							  	<li class="">Contact Us</li>
							</ul>
						</div>
						<div className="col-lg-3 col-md-3 col-lg-3 col-xs-3">
							<ul class="">
								<li class="clrwt"><b>Support</b></li>
							  	<li class="">Careers</li>
							  	<li class="">Resources</li>
							  	<li class="">Blog</li>
							  	<li class="">Contact Us</li>
							</ul>
						</div>
						<div className="col-lg-3 col-md-3 col-lg-3 col-xs-6">
							<ul class="">
								<li class="clrwt"><b>Address</b></li>
							  	<li class="">#323,Amanora Chambers,Magarpatta,<br/>
							  		Pune,Maharastra 411028</li>
							  	<li class=""> +91 99233 93733</li>
							</ul>
						</div>
						<div className="col-lg-3 col-md-3 col-lg-3 col-xs-9">
							<ul class="pull-right">
								<li class="clrwt lm"><b>Connect</b></li>
							  	<li class="">
							  		<img src="/images/fb.png" alt="Facebook" className="fbPng"/>
							  		<img src="/images/tw.png" alt="Twitter" className="fbPng"/>
							  		<img src="/images/li.png" alt="Linkdin" className="fbPng"/>
							  	</li>
							  	<li class=""><button  class="contactBtn">Click To Contact</button></li>
							</ul>
						</div>
					</div>	
				</div>
				<div className="col-xs-12 col-sm-12 hidden-lg hidden-md footerBottom">
					<div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7">
						<ul class="mtop10">
							<li class="">Copyright &copy; 2019 iAssure International Technologies Pvt. Ltd All rights reserved</li>	
						</ul>
					</div>
					<div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-5 copyr2">
						<ul class="pull-right bpadding">
							<li class="">Privacy Policy</li>
						  	<li class="">Terms of Use</li>
						  	<li class="">Site Map</li>
						</ul>
					</div>
				</div>
				
			</div>
		);
	}
}
