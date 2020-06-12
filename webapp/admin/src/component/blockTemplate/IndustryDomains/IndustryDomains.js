import React from 'react';
import "./IndustryDomains.css";
import axios from 'axios';

export default class IndustryDomains extends React.Component {

	constructor(props) {
		super(props);
		this.state={
      blocks: {
        "blockTitle": "Industry Domains",
        "blockSubTitle": "We are passionate about our work",
        "blockDescription": "<p>A Data Historian or Process Historian or Operational Historian is a software program that records and retrieves production and process data by time; it stores the information in a time series database that uses minimal disk space and enables fast retrieval. Time series information is often displayed in a trend or as tabular data over a time range.</p>\n",
        "blockComponentName": "",
        "blockType": "",
        "bgImage": "/images/1.png",
        "fgImage": "/images/37.png",
        "repeatedBlocks": [
        					{ 
        						Title: "Finance Industry", 
        						SubTitle: "", 
        						Link: "", 
        						Image: "/images/18.png"
        					},
        					{ 
        						Title: "Manufactuering Industry", 
        						SubTitle: "", 
        						Link: "", 
        						Image: "/images/19.png"	
        					},
        					{ 
        						Title: "Transport Industry", 
        						SubTitle: "", 
        						Link: "", 
        						Image: "/images/20.png"
        					},
        					{ 
        						Title: "Healthcare Industry", 
        						SubTitle: "", 
        						Image: "/images/21.png",
        						Link: "", 
        						Description: ""
        					},{ 
        						Title: "Real Estate Industry", 
        						SubTitle: "", 
        						Image: "/images/22.png",
        						Link: ""
        						
        					},{ 
        						Title: "Education Industry", 
        						SubTitle: "", 
        						Image: "/images/23.png",
        						Link: ""
        					},
        					{ 
        						Title: "eCommerce Industry", 
        						SubTitle: "", 
        						Image: "/images/24.png",
        						Link: ""
        					},
        					{ 
        						Title: "Travel Industry", 
        						SubTitle: "", 
        						Image: "/images/25.png",
        						Link: ""
        					},
        					{ 
        						Title: "Startup Industry", 
        						SubTitle: "", 
        						Image: "/images/26.png",
        						Link: ""
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
    	// console.log("all data ",data);
		return (
			<div className=" container-fluid nopadding">
				<div className="industryDomainsHt container-fluid hidden-sm hidden-xs">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 ">
						<ul className="dashBoxID col-lg-2 col-lg-offset-5 col-md-2 col-md-offset-5">
						  <li className="dash1ID "></li>
						  <li className="dash2ID"></li>
						  <li className="dash3ID"></li>
						</ul>
					</div>
					<div className="col-lg-12 col-md-12 col-xl-12 ">
						<div className="text-center">
							<h1>
								<b>{this.state.blocks.blockTitle}</b>
							</h1>
						</div>
					</div>
					<div className="col-lg-12 col-md-12 col-xl-12">
						<div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 iDomainBlock">
						
							{
		                		data && data.length > 0 ?
				      				data.map((data, index)=>{
		                					return(
	                							<div key={index} className="col-lg-4 col-md-4">
													<div className="idcol1">
														<div className="col-lg-5 col-md-5 row">
															<img src={data.Image} alt="enteprise" className="innerDomain1"/>
														</div>
														<div className="col-md-7 col-lg-7 row">
															<h3 className="domainTitle text-center">{data.Title}</h3>
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
			{/*=========== mobile view ================================*/}
				<div className="xsindustryDomainsHt container-fluid hidden-lg hidden-md">
					<div className="col-xs-12 col-sm-12 hidden-lg hidden-md ">
						<ul className="xsdashBox col-xs-8 col-xs-offset-3 col-sm-offset-4 col-sm-7 ">
						  <li className="xsdash1 "></li>
						  <li className="xsdash2"></li>
						  <li className="xsdash3"></li>
						</ul>
					</div>
					<div className="col-xs-12 col-sm-12 hidden-lg hidden-md">
						<div className="text-center">
							<h1>
								<b>{this.state.blocks.blockTitle}</b>
							</h1>
						</div>
					</div>
					<div className="hidden-lg hidden-md col-xs-12 col-sm-12">
						<div className="col-xs-10 col-xs-offset-1 xsiDomainBlock">
						
							{
		                		data && data.length > 0 ?
				      				data.map((data, index)=>{
		                					return(
	                							<div key={index} className="col-lg-4 col-md-4">
													<div className="idcol1">
														<div className="col-lg-5 col-md-5 row">
															<img src={data.Image} alt="enteprise" className="innerDomain1"/>
														</div>
														<div className="col-md-7 col-lg-7 row">
															<h3 className="domainTitle text-center">{data.Title}</h3>
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
		);
	}
}
