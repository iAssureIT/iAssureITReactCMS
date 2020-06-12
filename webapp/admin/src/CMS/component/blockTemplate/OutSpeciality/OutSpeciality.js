import React from 'react';
import "./OutSpeciality.css";
import axios from 'axios';

export default class OutSpeciality extends React.Component {


    constructor(props) {
    super(props);
    this.state = {
      blocks: {
        "blockTitle": "Our Speciality",
        "blockSubTitle": "We are passionate about our work",
        "blockDescription": 'iAssureIT is an innovative IT company with energetic, talented and ambitious pool of 30+ Software Engineers, passionate about bringing the disruptive change in technology arena.<br/>We are the Change Makers.<br/>&nbsp;&nbsp;&nbsp;&nbsp;Our world class quality application development with latest cutting-edge technologies used for rapid development and blazing fast performance.A tremendous journey of 7 years started in 2011. We have developed over 150+ projects of small and large sizes. Our clientele is spread across the globe, from countries like USA, Europien Countries, South Africa, Gulf Region, Singapore and Australia.<br/>&nbsp;&nbsp;&nbsp;&nbsp;iAssureIT has customers from various industry domains that include Start ups too. Our clients are from industries like Financial Services, Healthcare, Manufacturing, Pharmaceuticals, Real Estate, Shipping and Logistics, Education, etc. We have been helping them to craft their organizational level digital road map.',
        "blockComponentName": "",
        "blockType": "",
        "bgImage": "/images/1.png",
        "fgImage": "/images/37.png",
        "repeatedBlocks": [
        					{ 
        						Title: "<b>Enterprise<br/> Apps</b>", 
        						SubTitle: "", 
        						Link: "", 
        						Image: "/images/13.png",
        						Description: "We have indepth expertise in developing large scale Enterprise grade web & mobile apps."
        					},
        					{ 
        						Title: "<b>Startup <br/>Specialist</b>", 
        						SubTitle: "", 
        						Link: "", 
        						Image: "/images/14.png",
        						Description: "Specially made plans for Startups that are highly cost effective & value added services. Our quotations are absolutely unbeatable in the IT Industry."
        					},
        					{ 
        						Title: "<b>Customised eCommerce</b>", 
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
		var data = this.state.blocks.repeatedBlocks;

		return (
			<div className="container-fluid nopadding">
			<div className="OurSpecialityHeight  hidden-sm hidden-xs">
			<div className="mtop111">	
				<div className="col-lg-12 col-md-12 hidden-sm hidden-xs bhead">
					<div className="col-lg-12 col-md-12 hidden-sm hidden-xs ">
						<ul className="dashBoxOS col-lg-2 col-lg-offset-5 col-md-2 col-md-offset-5">
						  <li className="dash1OS"></li>
						  <li className="dash2OS"></li>
						  <li className="dash3OS"></li>
						</ul>
					</div>
					<div className="text-center">
						<h1>
							<b className="whiteclr">{this.state.blocks.blockTitle}</b>
						</h1>
					</div>
				</div>
				<div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 hidden-sm hidden-xs osDiv">
					<div className="row">
					{
                		data && data.length > 0 ?
		      				data.map((data, index)=>{
                					return(
											<div className="col-lg-4 col-md-4">
												<div className="col-lg-12 col-md-12 col1">
													<div className="iconCircle">
														<img src={data.Image} alt="enteprice" className="innerCircle"/>
													</div>
													<div className="sptextBox1">
														<h2 className="text-center" dangerouslySetInnerHTML={{ __html: data.Title } }></h2>
														<div className="col-lg-12 col-md-12">
															<p>{data.Description}
														  	</p>
														</div>
														{/*<p className="text-center rmore">Read More</p>*/}
													</div>

												</div>
											</div>
											);
	                					})
	                				:
	                				null
		                		}
						</div>
					</div>
				</div>
			</div>
{/*====================================== Mobile view ===================================*/}
			<div className="xsOurSpecialityHeight col-xs-12 col-sm-12 hidden-lg hidden-md container-fluid">
				<div className="col-xs-12 col-md-sm hidden-lg hidden-md xsbhead">
					<div className="col-xs-12 col-sm-12 hidden-lg hidden-md ">
						<ul className="xsdashBoxOS col-xs-9 col-xs-offset-3 col-sm-7 col-sm-offset-5">
						  <li className="xsdash1OS"></li>
						  <li className="xsdash2OS"></li>
						  <li className="xsdash3OS"></li>
						</ul>
					</div>
					<div className="text-center">
						<h1>
							<b className="xswhiteclr">{this.state.blocks.blockTitle}</b>
						</h1>
					</div>
				</div>
				<div className="col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 hidden-lg hidden-md xsosDiv">
					<div className="row">
						<div className="col-xs-12 col-sm-7 col-sm-offset-2">
							{
                		data && data.length > 0 ?
		      				data.map((data, index)=>{
                					return(
											<div className="col-xs-12 col-sm-12 hidden-lg hidden-md xscol1">
												<div className="xsiconCircle">
													<img src={data.Image} alt="enteprice" className="xsinnerCircle"/>
												</div>
												<div className="xssptextBox1">
													<h2 className="text-center" dangerouslySetInnerHTML={{ __html: data.Title } }></h2>
													<div className="col-xs-12 col-sm-12 hidden-lg hidden-md">
														<p>{data.Description}
													  	</p>
													</div>
													{/*<p className="text-center xsrmore">Read More</p>*/}
												</div>
											</div>
											);
	                					})
	                				:
	                				null
		                		}

						</div>
						
					</div>
				</div>
			</div>

{/*======================================================================================*/}
		</div>
		);
	}
}
