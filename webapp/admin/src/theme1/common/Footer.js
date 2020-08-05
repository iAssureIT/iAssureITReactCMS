import React from 'react';
import './Footer.css'
export default class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="footerBlock">
			<div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12 footerTop">
				<div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 wrap1">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 subwrapp1">
					<ul className="footer1">
						<li className="menubartitle1"><b>Menu</b></li>
						<a href="/"><li className="footertitle1">Home</li></a>
						<a href="/cms/masterpage/demo-1"><li className="footertitle1">About Us</li></a>
						<a href="/services"><li className="footertitle1">Portfolio</li></a>
						<a href="/contactus"><li className="footertitle1">Contact Us</li></a> 
						<li className="footertitle1">Career</li>
						<li className="footertitle1">Resources</li>
							   
						</ul>
					</div>
				</div>
				 <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 wrap2">
				    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 subwrapp2">
						<ul className="footer2">
							<li className="menubartitle2"><b>Services</b></li>
							<li className="footertitle2">Enterprise Apps</li>
							<li className="footertitle2">Business Portails</li> 
							<li className="footertitle2">eCommerce Portails</li> 
							<li className="footertitle2">Staff Augumentation</li>  
							<li className="footertitle2">Web Apps</li>
							<li className="footertitle2">Mobile Apps</li>  
						</ul>
					</div> 

				 </div> 
				 <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 wrap3">
				    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 subwrapp3">
				      <ul className="footer3">
					    <li className="menubartitle3"><b>Address</b></li>
					    <li className="footertitle3"><i class="fas fa-map-marker-alt"></i> 323 Amanora Chambers Magarpatta Pune Maharastra 411028</li>
					    <li className="footertitle3"> +91 99233 93733</li>  
				      </ul>
				   </div>
				</div> 
				 <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 wrap4">
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 subwrapp4">
				<ul className="footer4">
					 <li className="menubartitle4"><b>Connect with us</b>
					   <img src="/images/fb.png" alt="Facebook" className="facebookpng"/> 
					   <img src="/images/tw.png" alt="Twitter" className="twitter"/>  
					  <img src="/images/li.png" alt="Linkdin" className="linkdin"/> 
					</li>	    
							  
					<li className=""><button  className="contactBtn">Click To Contact</button></li>  
				</ul>
				  </div>
				</div>  
			</div>
		 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 footerBottom"> 
			 <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7">
				 <ul className="mtop10">
					<li className="copyright">Copyright &copy; 2019 iAssure International Technologies Pvt. Ltd All rights reserved</li>	
				 </ul>
			</div>	
		</div> 
	</div>
	);
}
}		


				
				
					








































			// <div className="footerBlock">
			// 	<div className="col-lg-12 col-md-12 hidden-sm hidden-xs footerTop">
			// 		<div className="row mtop70">
			// 			<div className="col-lg-3 col-md-3 col-lg-3 col-xs-3">
			// 				<ul className="f1ooter">
			// 					<li className="clrwt"><b>Menu</b></li>
			// 				  	<a href="/"><li className="">Home</li></a>
			// 				  	<a href="/aboutus"><li className="">About Us</li></a>
			// 				  	<a href="/services"><li className="">Services</li></a>
			// 				  	{/*<li className="">Portfolio</li>*/}
			// 				  	<a href="/contactus"><li className="">Contact Us</li></a>
			// 				</ul>
			// 			</div>
			// 			<div className="col-lg-3 col-md-3 col-lg-3 col-xs-3">
			// 				<ul className="">
			// 					<li className="clrwt"><b>Support</b></li>
			// 				  	<li className="">Careers</li>
			// 				  	<li className="">Resources</li>
			// 				  	<li className="">Blog</li>
			// 				  	<li className="">Contact Us</li>
			// 				</ul>
			// 			</div>
			// 			<div className="col-lg-3 col-md-3 col-lg-3 col-xs-6">
			// 				<ul className="">
			// 					<li className="clrwt"><b>Address</b></li>
			// 				  	<li className="">#323,Amanora Chambers,Magarpatta,<br/>
			// 				  		Pune,Maharastra 411028</li>
			// 				  	<li className=""> +91 99233 93733</li>
			// 				</ul>
			// 			</div>
			// 			<div className="col-lg-3 col-md-3 col-lg-3 col-xs-9">
			// 				<ul className="pull-right">
			// 					<li className="clrwt lm"><b>Connect</b></li>
			// 				  	<li className="">
			// 				  		<img src="/images/fb.png" alt="Facebook" className="fbPng"/>
			// 				  		<img src="/images/tw.png" alt="Twitter" className="fbPng"/>
			// 				  		<img src="/images/li.png" alt="Linkdin" className="fbPng"/>
			// 				  	</li>
			// 				  	<li className=""><button  className="contactBtn">Click To Contact</button></li>
			// 				</ul>
			// 			</div>
			// 		</div>	
			// 	</div>
			// 	<div className="col-lg-12 col-md-12 hidden-sm hidden-xs footerBottom">
			// 		<div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7">
			// 			<ul className="mtop10">
			// 				<li className="">Copyright &copy; 2019 iAssure International Technologies Pvt. Ltd All rights reserved</li>	
			// 			</ul>
			// 		</div>
			// 		<div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-5 copyr2">
			// 			<ul className="pull-right bpadding">
			// 				<li className="">Privacy Policy</li>
			// 			  	<li className="">Terms of Use</li>
			// 			  	<li className="">Site Map</li>
			// 			</ul>
			// 		</div>
			// 	</div>

			// {/* mobile view */}
			// <div className="hidden-lg hidden-md col-sm-12 col-xs-12 footerTopxs">
			// 		<div className="row ">
			// 			<div className="col-sm-4 col-xs-4 row">
			// 				<ul className="">
			// 					<li className="clrwt"><b>Menu</b></li>
			// 				  	<li className="">Home</li>
			// 				  	<li className="">Who We Are</li>
			// 				  	<li className="">What We Do</li>
			// 				  	<li className="">Portfolio</li>
			// 				  	<li className="">Contact Us</li>
			// 				</ul>
			// 			</div>
			// 			<div className="col-sm-3 col-xs-3">
			// 				<ul className="">
			// 					<li className="clrwt"><b>Support</b></li>
			// 				  	<li className="">Careers</li>
			// 				  	<li className="">Resources</li>
			// 				  	<li className="">Blog</li>
			// 				  	<li className="">Contact Us</li>
			// 				</ul>
			// 			</div>
			// 			<div className="col-sm-5 col-xs-5">
			// 				<ul className="pull-right">
			// 					<li className="clrwt"><b>Address</b></li>
			// 				  	<li className="">#323,<br/>Amanora Chambers,<br/>Magarpatta,
			// 				  		Pune,<br/>Maharastra 411028</li>
			// 				  	<li className=""> +91 99233 93733</li>
			// 				</ul>
			// 			</div>
			// 			<div className=" col-sm-9 col-xs-9">
			// 				<ul className="pull-right">
			// 					<li className="clrwt lm"><b>Connect</b></li>
			// 				  	<li className="">
			// 				  		<img src="/images/fb.png" alt="Facebook" className="fbPng"/>
			// 				  		<img src="/images/tw.png" alt="Twitter" className="fbPng"/>
			// 				  		<img src="/images/li.png" alt="Linkdin" className="fbPng"/>
			// 				  	</li>
			// 				  	<li className=""><button  className="contactBtn">Click To Contact</button></li>
			// 				</ul>
			// 			</div>
			// 		</div>	
			// 	</div>
			// 	<div className="col-xs-12 col-sm-12 hidden-lg hidden-md footerBottomxs">
			// 		<div className="col-xs-12 col-sm-12">
			// 			<ul className="mtop10">
			// 				<li className="">Copyright &copy; 2019 iAssure International Technologies Pvt. Ltd All rights reserved</li>	
			// 				<li className="">Privacy Policy Terms of Use Site Map.</li>
			// 			</ul>
			// 		</div>
			// 	{/*	<div className="col-sm-5 col-xs-5 copyr2">
			// 			<ul className="pull-right">
			// 				<li className="">Privacy Policy Terms of Use Site Map</li>
						  	
			// 			</ul>
			// 		</div>*/}
			// 	</div>
				
			// </div>
		// );
	// }
// }
