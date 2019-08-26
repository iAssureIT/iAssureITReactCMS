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
							<ul className="">
								<li className="clrwt"><b>Menu</b></li>
							  	<li className="">Home</li>
							  	<li className="">Who We Are</li>
							  	<li className="">What We Do</li>
							  	<li className="">Portfolio</li>
							  	<li className="">Contact Us</li>
							</ul>
						</div>
						<div className="col-lg-3 col-md-3 col-lg-3 col-xs-3">
							<ul className="">
								<li className="clrwt"><b>Support</b></li>
							  	<li className="">Careers</li>
							  	<li className="">Resources</li>
							  	<li className="">Blog</li>
							  	<li className="">Contact Us</li>
							</ul>
						</div>
						<div className="col-lg-3 col-md-3 col-lg-3 col-xs-6">
							<ul className="">
								<li className="clrwt"><b>Address</b></li>
							  	<li className="">#323,Amanora Chambers,Magarpatta,<br/>
							  		Pune,Maharastra 411028</li>
							  	<li className=""> +91 99233 93733</li>
							</ul>
						</div>
						<div className="col-lg-3 col-md-3 col-lg-3 col-xs-9">
							<ul className="pull-right">
								<li className="clrwt lm"><b>Connect</b></li>
							  	<li className="">
							  		<img src="/images/fb.png" alt="Facebook" className="fbPng"/>
							  		<img src="/images/tw.png" alt="Twitter" className="fbPng"/>
							  		<img src="/images/li.png" alt="Linkdin" className="fbPng"/>
							  	</li>
							  	<li className=""><button  className="contactBtn">Click To Contact</button></li>
							</ul>
						</div>
					</div>	
				</div>
				<div className="col-lg-12 col-md-12 hidden-sm hidden-xs footerBottom">
					<div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7">
						<ul className="mtop10">
							<li className="">Copyright &copy; 2019 iAssure International Technologies Pvt. Ltd All rights reserved</li>	
						</ul>
					</div>
					<div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-5 copyr2">
						<ul className="pull-right bpadding">
							<li className="">Privacy Policy</li>
						  	<li className="">Terms of Use</li>
						  	<li className="">Site Map</li>
						</ul>
					</div>
				</div>

			{/* mobile view */}
			<div className="hidden-lg hidden-md col-sm-12 col-xs-12 footerTopxs">
					<div className="row ">
						<div className="col-sm-4 col-xs-4 row">
							<ul className="">
								<li className="clrwt"><b>Menu</b></li>
							  	<li className="">Home</li>
							  	<li className="">Who We Are</li>
							  	<li className="">What We Do</li>
							  	<li className="">Portfolio</li>
							  	<li className="">Contact Us</li>
							</ul>
						</div>
						<div className="col-sm-3 col-xs-3">
							<ul className="">
								<li className="clrwt"><b>Support</b></li>
							  	<li className="">Careers</li>
							  	<li className="">Resources</li>
							  	<li className="">Blog</li>
							  	<li className="">Contact Us</li>
							</ul>
						</div>
						<div className="col-sm-5 col-xs-5">
							<ul className="pull-right">
								<li className="clrwt"><b>Address</b></li>
							  	<li className="">#323,<br/>Amanora Chambers,<br/>Magarpatta,
							  		Pune,<br/>Maharastra 411028</li>
							  	<li className=""> +91 99233 93733</li>
							</ul>
						</div>
						<div className=" col-sm-9 col-xs-9">
							<ul className="pull-right">
								<li className="clrwt lm"><b>Connect</b></li>
							  	<li className="">
							  		<img src="/images/fb.png" alt="Facebook" className="fbPng"/>
							  		<img src="/images/tw.png" alt="Twitter" className="fbPng"/>
							  		<img src="/images/li.png" alt="Linkdin" className="fbPng"/>
							  	</li>
							  	<li className=""><button  className="contactBtn">Click To Contact</button></li>
							</ul>
						</div>
					</div>	
				</div>
				<div className="col-xs-12 col-sm-12 hidden-lg hidden-md footerBottomxs">
					<div className="col-xs-12 col-sm-12">
						<ul className="mtop10">
							<li className="">Copyright &copy; 2019 iAssure International Technologies Pvt. Ltd All rights reserved</li>	
							<li className="">Privacy Policy Terms of Use Site Map.</li>
						</ul>
					</div>
				{/*	<div className="col-sm-5 col-xs-5 copyr2">
						<ul className="pull-right">
							<li className="">Privacy Policy Terms of Use Site Map</li>
						  	
						</ul>
					</div>*/}
				</div>
				
			</div>
		);
	}
}
