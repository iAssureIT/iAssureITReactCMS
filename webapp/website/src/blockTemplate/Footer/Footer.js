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


				
				
					








































			