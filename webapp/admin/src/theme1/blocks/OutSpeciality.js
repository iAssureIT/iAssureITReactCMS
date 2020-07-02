import React from 'react';
import "./OutSpeciality.css";

export default class OutSpeciality extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="specialhightwrapper">
			 
			 <div className="mtop111">	 
				 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bhead row">
					  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<ul className="dashBoxOS dasboxssp col-lg-2 col-lg-offset-5 col-md-2 col-md-offset-5 col-sm-12 col-xs-12">
						  <li className="dash1OS"></li>
						  <li className="dash2OS"></li>
						  <li className="dash3OS"></li>
						</ul>
					</div>
					</div> 
				</div>	 
					 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-12 col-xs-12 specialityheading">
                            <span className="ourheading">OUR</span >&nbsp;&nbsp;<span className="specialheading">SPECIALITY</span>
                        </div>

                  </div> 
					
					 <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 osDiv"> 
					 <div className="row"> 
					   <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
							 <div className="col-lg-12 col-md-12  col-sm-12 col-xs-12 col1"> 
								 <div className="iconCircle">
									<img src="/images/13.png" alt="enteprice" className="innerCircle"/> 
								</div> 
								  <div className="sptextBox1">
									<h2 className="text-center mheading">Enterprise</h2>
									 <div className="col-lg-12 col-md-12">
										<p className="paragraph">We have indepth expertise in developing large scale Enterprise grade web & mobile apps.
									  	</p>
									</div>
									<p className="text-center rmore">Read More</p>  
								</div>   

							</div> 
						 </div>     
						    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col1 ">
								<div className="iconCircle">
									<img src="/images/14.png" alt="enteprice" className="innerCircle"/>
								</div>
							 <div className="sptextBox1">
									<h2 className="text-center mheading">Startup World</h2>
									<div className="col-xl-12 col-lg-12 col-md-12">
										<p className="paragraph">Specially made plans for Startups that are highly cost effective & value added services. Our quotations are absolutely unbeatable in the IT Industry.
									  </p>
									</div> 
									 <p className="text-center rmore">Read More</p>    

									
								</div> 
							</div>
						</div>    
						   <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
							<div className="col-lg-12 col-md-12 col1">
								<div className="iconCircle">
									<img src="/images/15.png" alt="enteprice" className="innerCircle"/>
								</div>
								<div className="sptextBox1">
									<h2 className="text-center mheading">eCommerce</h2>
									 <div className="col-xl-12 col-lg-12 col-md-12">
										<p className="paragraph">Boost Your eCommerce business with our Flexible, Scalable & Robust eCommerce Platform AutoPilot with the blazing fast performance and SEO Friendly Online Stores
									  </p>
									</div> 
									  <p className="text-center rmore rmore00">Read More</p>  
								</div>
							</div>
						</div>   
					 </div> 
				 </div> 		 
				 </div>  
						   
				    
			 
		 ) 
		}
	}
 
			
 {/* ====================================== Mobile view ===================================  */}
 			 
			  {/* <div className=" xsOurSpecialityHeight col-xs-12 col-sm-12 hidden-lg hidden-md ">
 				<div className="col-xs-12 col-sm hidden-lg hidden-md xsbhead">
 					<div className="col-xs-12 col-sm-12 hidden-lg hidden-md ">
 						<ul className="xsdashBoxOS col-xs-9 col-xs-offset-3 col-sm-7 col-sm-offset-5">
 						  <li className="xsdash1OS"></li>
 						  <li className="xsdash2OS"></li>
 						  <li className="xsdash3OS"></li>
 						</ul>
 					</div>
 					<div className="text-center mainheading00">
 						<h1>
 							<b className="xswhiteclr">Our Speciality</b>
 						</h1>
 					</div>
 			
				 
 				<div className="col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 hidden-lg hidden-md xsosDiv ">
 					<div className="row">
 						<div className="col-xs-12 col-sm-7 col-sm-offset-2">
 							<div className="col-xs-12 col-sm-12 hidden-lg hidden-md xscol1 xscol01">
 								<div className="xsiconCircle">
 									<img src="/images/13.png" alt="enteprice" className="xsinnerCircle"/>
 								</div>
 								<div className="xssptextBox1">
 									<h2 className="text-center"><b>Enteprise</b></h2>
 									<div className="col-xs-12 col-sm-12 hidden-lg hidden-md">
 										<p className="xsparagraph">We have indepth expertise in developing large scale Enterprise grade web & mobile apps.
										 									  	</p>
 									</div>
									 <p className="text-center xsrmore2">Read More</p>
 									
 								</div>

							</div>
 						</div>
 						<div className="col-xs-12 col-sm-7 col-sm-offset-2">
 							<div className="col-xs-12 col-sm-12 hidden-lg hidden-md xscol1">
 								<div className="xsiconCircle">
 									<img src="/images/14.png" alt="enteprice" className="xsinnerCircle"/>
 								</div>
 								<div className="xssptextBox1">
 									<h2 className="text-center"><b>Startup World</b></h2>
									<div className="col-xs-12 col-sm-12 hidden-lg hidden-md">
 										<p className="xsparagraph">Specially made plans for Startups that are highly cost effective & value added services. Our quotations are absolutely unbeatable in the IT Industry.
 									  </p>									
									</div>
 									<p className="text-center xsrmore">Read More</p>
 								</div>
						</div>
					</div>
 						<div className="col-xs-12 col-sm-7 col-sm-offset-2">
 							<div className="col-xs-12 col-sm-12 hidden-lg hidden-md xscol1">
 								<div className="xsiconCircle">
 									<img src="/images/15.png" alt="enteprice" className="xsinnerCircle"/>
 								</div>
 								<div className="xssptextBox1">
 									<h2 className="text-center"><b>eCommerce</b></h2>
 									<div className="col-xs-12 col-sm-12 hidden-lg hidden-md">
 										<p className="xsparagraph">Boost Your eCommerce business with our Flexible, Scalable & Robust eCommerce Platform AutoPilot with the blazing fast performance and SEO Friendly Online Stores
									  </p>
								  </div>
								  <p className="text-center xsrmore1">Read More</p>
 									
 								</div>
 							</div>
						</div>
					</div>
				</div>
         	</div>
			</div>
			</div>
			

		
		
		 );
  }
  } */}
 

