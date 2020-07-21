import React from 'react';
import "./Services.css";
import $ from "jquery";
import axios from 'axios';

export default class Services extends React.Component {



	constructor(props) {
		super(props);
		this.state = {
		  blocks: {
			"blockTitle": "<b>Our</b> Speciality",
			"blockSubTitle": "We are passionate about our work",
			"blockDescription": 'iAssureIT is an innovative IT company with energetic, talented and ambitious pool of 30+ Software Engineers, passionate about bringing the disruptive change in technology arena.<br/>We are the Change Makers.<br/>&nbsp;&nbsp;&nbsp;&nbsp;Our world class quality application development with latest cutting-edge technologies used for rapid development and blazing fast performance.A tremendous journey of 7 years started in 2011. We have developed over 150+ projects of small and large sizes. Our clientele is spread across the globe, from countries like USA, Europien Countries, South Africa, Gulf Region, Singapore and Australia.<br/>&nbsp;&nbsp;&nbsp;&nbsp;iAssureIT has customers from various industry domains that include Start ups too. Our clients are from industries like Financial Services, Healthcare, Manufacturing, Pharmaceuticals, Real Estate, Shipping and Logistics, Education, etc. We have been helping them to craft their organizational level digital road map.',
			"blockComponentName": "",
			"blockType": "",
			"bgImage": "/images/1.png",
			"fgImage": "/images/37.png",
			"repeatedBlocks": [
								{ 
									Title: "<b>Enterprise<b/>", 
									SubTitle: "", 
									Link: "", 
									Image: "/images/13.png",
									Description: "We have indepth expertise in developing large scale Enterprise grade web & mobile apps."
								},
								{ 
									Title: "<b>Startup</b> World", 
									SubTitle: "", 
									Link: "", 
									Image: "/images/14.png",
									Description: "Specially made plans for Startups that are highly cost effective & value added services. Our quotations are absolutely unbeatable in the IT Industry."
								},
								{ 
									Title: "<b>eCommerce</b>", 
									SubTitle: "", 
									Link: "", 
									Image: "/images/15.png",
									Description: "Boost Your eCommerce business with our Flexible, Scalable & Robust eCommerce Platform AutoPilot with the blazing fast performance and SEO Friendly Online Stores"
								}
			],
	
		  
			"bgVideo"				: "",
			"fgVideo"				: "",
			"blockGroup"			: "",
			"blockAppearOnPage"		: ""
		  },
		  blockID:"",
		  block_id:""
		}; 
	
		
	  }
	componentDidMount(){
	/*console.log("==>",this.props.block_id);*/
			  {
				 axios
					.get('http://qaiassureitapi.iassureit.com/api/blocks/get/'+this.props.block_id)
					.then((response)=>{
						if(response.data){
							// console.log("ListofServices =",response.data);
						  this.setState({
							  blocks:response.data
						  });
						}                  
					  })           
					.catch(function(error){
					  console.log(error);
						if(error.message === "Request failed with status code 401")
						  {
							  // swal("Your session is expired! Please login again.","", "error");
						  }
				  })
				}
		  this.setState({
					block_id:this.props.block_id
				  });
	}

	render() {
		return (
			
				<div className="serviceswrapper">
				<div className="serviceheight">
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="col-lg-2 col-lg-offset-5 col-md-2 col-md-offset-5 col-sm-12 col-xs-12 dashboxwrapper">
                      <ul className="dashBox">
						  <li className="dash1"></li>
						  <li className="dash2"></li>
					      <li className="dash3"></li> 
				      </ul>
                    </div>
                </div>

				 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 textwrapper">
                    <div className="text-center ">
                        <span className="h1titble00">WHAT</span>
                       &nbsp; <span className="h1title01">WE DO</span>

                    </div>
                </div>	
				  	
				   <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12 Hexagonwrapper00">

						 <div className="hexagon1">
						   <div className="images1"></div>
						   <h1 className="heprizeapps">ENTERPRISE <span className="apps">APPS</span></h1>
						</div>   
						 <div className="hexagon2">
						   <h1 className="h1services">WHAT WE DO</h1>
						</div>   
						 <div className="hexagon3">
							<div className="images2"></div>
							<h1 className="hstaffaugmtion">STAFF AUGMEN-TATION</h1>
						</div>   
						   <div className="hexagon4">
							<div className="images3"></div>
							<h1 className="hwebapps">WEB  <br />APPS</h1>
						</div>    
						    <div className="hexagon5">
							<div className="images4"></div>
							<h1 className="hbportals">BUSINESS PORTALS</h1>
						</div>    
						   <div className="hexagon6">
							<div className="images5"></div>
							<h1 className="hmapps">MOBILE APPS</h1>
						</div>    
						    <div className="hexagon7">
							<div className="images6"></div>
							<h1 className="heportal">eCOMMERCE <span className="portal"> PORTAL</span></h1>
						</div>     
					</div>     


				</div>
			</div>
		
		);
	}
}
						