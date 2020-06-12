import React from 'react';
import "./Testimonials.css";
import $ from "jquery";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';

export default class Testimonials extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      blocks: {
        "blockTitle": "Client Testimonials",
        "blockSubTitle": "We are passionate about our work",
        "blockDescription": 'iAssureIT is an innovative IT company with energetic, talented and ambitious pool of 30+ Software Engineers, passionate about bringing the disruptive change in technology arena.<br/>We are the Change Makers.<br/>&nbsp;&nbsp;&nbsp;&nbsp;Our world class quality application development with latest cutting-edge technologies used for rapid development and blazing fast performance.A tremendous journey of 7 years started in 2011. We have developed over 150+ projects of small and large sizes. Our clientele is spread across the globe, from countries like USA, Europien Countries, South Africa, Gulf Region, Singapore and Australia.<br/>&nbsp;&nbsp;&nbsp;&nbsp;iAssureIT has customers from various industry domains that include Start ups too. Our clients are from industries like Financial Services, Healthcare, Manufacturing, Pharmaceuticals, Real Estate, Shipping and Logistics, Education, etc. We have been helping them to craft their organizational level digital road map.',
        "blockComponentName": "",
        "blockType": "",
        "bgImage": "/images/1.png",
        "fgImage": "/images/37.png",
        "repeatedBlocks": [
        					{ 
        						Title: "Mr Paras Surana,", 
        						SubTitle: "Director - Prabandhan Management Consulting", 
        						Link: "", 
        						Image: "/images/6.png",
        						Description: "One important thing which differentiates iAssureIT from other IT companies is the thought process of complete team & their will to provide the best of features, thinking completely out of the box & without bothering the extra efforts which would go in from their end implementing these.Really happy & satisfied with the quality of the work."
        					},
        					{ 
        						Title: "Mr Mohd Imran,",
        						SubTitle: "Founder & CEO - Mag InfoTech, Hydrabad",
        						Link: "", 
        						Image: "/images/6.png",
        						Description: "Very much overwhelmed and satisfied with iAssureIT work.These guys have tremendous potential to handle any size of the project and I strongly recommend this company to others.The best of the company is they are 100% committed to work and provide out of the box service. Working with iAssureIT is simply an amazing and memorable experience.Keep up the good work guys and you rock !!!"
        					},
        					{ 
        						Title: "Nitin Thakrey,",
        						SubTitle: "Operations Director - Innowave IT Solutions",
        						Link: "", 
        						Image: "/images/6.png",
        						Description: "It's an IT company, which provides innovative IT solutions using latest technology."
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


/*    componentDidMount(){
		$(".owl-carousel").owlCarousel({
		loop: true,
		autoplay: true,
		items: 1,
		nav: true,
		autoplayHoverPause: true,
		animateOut: 'slideOutUp',
		animateIn: 'slideInUp',
		});
	}*/

	render() {
		var data =this.state.blocks.repeatedBlocks;
		console.log("data==>",data);
		return (
				<div className="container-fluid nopadding">
					<div className="TestimonialsHT container-fluid hidden-sm hidden-xs">
						<div className="col-lg-12 col-md-12">
							<ul className="dashBoxTm col-lg-2 col-lg-offset-5 col-md-2 col-md-offset-5">
							  <li className="dash1Tm"></li>
							  <li className="dash2Tm"></li>
							  <li className="dash3Tm"></li>
							</ul>
						</div>
						<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
							<div className="text-center">

								<h1>
									<b>{this.state.blocks.blockTitle}</b>
								</h1>
							</div>
						</div>
						{/*<div id="mercury" class="orbit">
					        <div class="planet"></div> 
					      </div>*/}
						<div className="col-lg-12 col-md-12 hidden-sm hidden-xs">
							<div className="col-lg-9 col-md-9">
								<div className="col-lg-10 col-md-11  testimonialBox col-lg-offset-1">
									<OwlCarousel className="owl-theme arrows owl-carousel" loop  autoplay={true} animateOut={false} animateIn={false} autoplaySpeed={500} items={1} nav dots={false}>
										{
					                		data && data.length > 0 ?
							      				data.map((data, index)=>{
		                							return(
													    <div className="item col-lg-12">
												    	<div className="testimonialList col-lg-12 col-md-12 col-sm-12">
													    	<h3 className="hlimit600">{data.Description}
														    </h3>
														    <div className="col-sm-12 col-lg-8 col-md-8">
														    	<div className="col-md-3 col-lg-3 col-sm-2">
														    		<img src={data.Image} alt="example" className="img-responsive profileTesti"/>
														    	</div>
														    	<div className="col-md-8 col-lg-8 col-sm-10">
																    <h4 className="custName"><span className="nmclr">{data.Title}</span><br/>
																    {data.SubTitle}</h4>
														    	</div>
														    </div>
												    	</div>
												    	  </div>
													);
	                							})
	                						:
	                						null
		                				}				
									
									 
									</OwlCarousel>


								</div>
							</div>
						</div>						
					</div>
{/*============================= Mobile View =======================================*/}
					<div className="TestimonialsHT container-fluid hidden-lg hidden-md">
						<div className="col-xs-12 col-sm-12">
							<ul className="dashBoxTm col-xs-9 col-xs-offset-3 col-sm-5 col-sm-offset-5">
							  <li className="dash1Tm"></li>
							  <li className="dash2Tm"></li>
							  <li className="dash3Tm"></li>
							</ul>
						</div>
						<div className="col-xs-12 col-sm-12">
							<div className="text-center">

								<h1>
									<b>Client Testimonials</b>
								</h1>
							</div>
						</div>
						<div className="col-xs-12 col-sm-12 hidden-lg hidden-md">
							
								<div className="col-xs-12 col-sm-10 testimonialBoxxs">
									<OwlCarousel className="owl-theme arrows" loop autoplay={true} items={1} nav dots={false}>
									    {
					                		data && data.length > 0 ?
							      				data.map((data, index)=>{
		                							return(
													    <div className="item col-xs-12 col-sm-10">
													    	<div className="testimonialListxs col-xs-12 col-sm-12">
														    	<h3 className="hlimit600xs">{data.Description}
															    </h3>
															    <div className="col-sm-12 col-xs-12 bgw">
															    	<div className="col-xs-4 col-sm-4 row">
															    		<img src={data.Image} alt="example" className="img-responsive profileTesti"/>
															    	</div>
															    	<div className="col-xs-8 col-sm-8">
																	    <h4 className="custName"><span className="nmclr">{data.Title}</span><br/>
																	    {data.SubTitle}</h4>
															    	</div>
															    </div>
													    	</div>
													    </div>
									   				 );
	                							})
	                						:
	                						null
		                				}	
									    
									</OwlCarousel>
								</div>
						
						</div>						
					</div>
				</div>
		);
	}
}


/*

*/