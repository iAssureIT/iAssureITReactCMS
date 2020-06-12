import React from 'react';
import "./ListofServices.css";
import axios from 'axios';


export default class ListofServices extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      blocks: {
        "blockTitle": "Overview",
        "blockSubTitle": "",
        "blockDescription": "<p>A Data Historian or Process Historian or Operational Historian is a software program that records and retrieves production and process data by time; it stores the information in a time series database that uses minimal disk space and enables fast retrieval. Time series information is often displayed in a trend or as tabular data over a time range.</p>\n",
        "blockComponentName": "TemplateOverview",
        "blockType": "",
        "bgImage": "",
        "fgImage": "https://iogiassureit.s3.amazonaws.com/iOG/dataHistorian.png",
        "repeatedBlocks": [
        					{ 
        						Title: "Sample 1", 
        						SubTitle: "", 
        						Link: "", 
        						Image: "/images/4.png",
        						Description: ""
        					},
        					{ 
        						Title: "Sample 2", 
        						SubTitle: "", 
        						Link: "", 
        						Image: "/images/4.png",
        						Description: ""
        					},
        					{ 
        						Title: "Sample 3", 
        						SubTitle: "", 
        						Link: "", 
        						Image: "/images/4.png",
        						Description: ""
        					},
        					{ 
        						Title: "Sample 4", 
        						SubTitle: "", 
        						Image: "/images/4.png",
        						Link: "", 
        						Description: ""
        					},
        					{ 
        						Title: "Sample 5", 
        						SubTitle: "", 
        						Image: "/images/4.png",
        						Link: "", 
        						Description: ""
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
		// console.log("===>",this.state.blocks.repeatedBlocks);
		return (
			<div className="container-fluid nopadding">
				<div className="listofServicesBox hidden-xs hidden-sm">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 ">
						<ul className="dashBoxLs col-lg-4 col-lg-offset-5 col-md-4 col-md-offset-5">
						  <li className="dash1Ls"></li>
						  <li className="dash2Ls"></li>
						  <li className="dash3Ls"></li>
						</ul>
					</div>
					<div className="text-center">
						<h1 className="mtop30">
							{this.state.blocks.blockTitle}
						</h1>
					</div>
					<div className="col-lg-9 col-lg-offset-2 col-md-10
					 col-md-offset-2 col-sm-10 col-sm-offset-2 col-xl-10 col-xl-offset-1">

					 {

					 	this.state.blocks.repeatedBlocks && this.state.blocks.repeatedBlocks.length>0 ?
					 	this.state.blocks.repeatedBlocks.map((data,index)=>{
					 		return(
							 		<div key={index} className="hexListS1">
								 		<div className="col-lg-12">
											<img src={data.Image} className="inhexaImg1" alt="webAppImg"/>
											<h4 className="inhexaContext1 text-center">{data.Title}</h4>
										</div>
								 	</div>
						 	);

					 	})
					 	: null

					 }
					</div>
					{/*<div className="col-lg-10 col-lg-offset-2 col-md-10
					 col-md-offset-2 col-sm-10 col-sm-offset-2 col-xl-10 col-xl-offset-1">
					 	<div className="col-lg-3 col-md-3 col-sm-3 col-xl-3 hexListS1">
					 		<div className="col-lg-12">
								<img src="/images/7.png" className="inhexaImg1" alt="webAppImg"/>
								<h4 className="inhexaContext1 text-center">BUSINESS<br/> PORTAL</h4>
							</div>

					 	</div>
					 	<div className="col-lg-3 col-md-3 col-sm-3 col-xl-3 hexListS1">
					 		<div className="col-lg-12">
								<img src="/images/8.png" className="inhexaImg1" alt="webAppImg"/>
								<h4 className="inhexaContext1 text-center">STAFF AUGMENTATION</h4>
							</div>

					 	</div>
					 	<div className="col-lg-3 col-md-3 col-sm-3 col-xl-3 hexListS1">
					 		<div className="col-lg-12">
								<img src="/images/9.png" className="inhexaImg1" alt="webAppImg"/>
								<h4 className="inhexaContext1 text-center">eCOMMERCE <br/>PORTAL</h4>
							</div>
					 	</div>
					</div>*/}
				</div>
		{/*=========================================== mobile view ==========*/}

			<div className="listofServicesBoxxs hidden-lg hidden-md">
				<div className="hidden-lg hidden-md col-sm-12 col-xs-12 ">
					<ul className="dashBoxLsxs col-sm-5 col-sm-offset-5 col-xs-7 col-xs-offset-2">
					  <li className="dash1Lsxs"></li>
					  <li className="dash2Lsxs"></li>
					  <li className="dash3Lsxs"></li>
					</ul>
				</div>
				<div className="text-center">
					<h1 className="mtop30xs">
						<b>Services</b>
					</h1>
				</div>
				<div className="col-xs-12 col-sm-12 hidden-lg hidden-md">
				 	<div className="col-xs-6 col-sm-4 hidden-lg hidden-md hexListS1xs">
				 		<div className="col-xs-12 col-sm-12">
							<img src="./images/4.png" className="inhexaImg1xs" alt="webAppImg"/>
							<h4 className="inhexaContext1xs text-center">WEB APPS</h4>
						</div>

				 	</div>
				 	<div className="hidden-lg hidden-md col-sm-4 col-xs-6 hexListS1xs">
				 		<div className="col-xs-12 col-sm-12">
							<img src="./images/5.png" className="inhexaImg1xs" alt="webAppImg"/>
							<h4 className="inhexaContext1xs text-center">ENTERPRISE<br/> APPS</h4>
						</div>

				 	</div>
				 	<div className="hidden-lg hidden-md col-sm-4 col-xs-6 hexListS1xs">
				 		<div className="col-xs-12 col-sm-12">
							<img src="./images/6.png" className="inhexaImg1xs" alt="webAppImg"/>
							<h4 className="inhexaContext1xs text-center">MOBILE APPS</h4>
						</div>

				 	</div>
				 	<div className="col-xs-6 col-sm-4 hidden-lg hidden-md hexListS1xs">
				 		<div className="col-xs-12 col-sm-12">
							<img src="./images/7.png" className="inhexaImg1xs" alt="webAppImg"/>
							<h4 className="inhexaContext1xs text-center">BUSINESS<br/> PORTAL</h4>
						</div>

				 	</div>
				 	<div className="col-xs-6 col-sm-4 hidden-lg hidden-md hexListS1xs">
				 		<div className="col-xs-12 col-sm-12">
							<img src="./images/8.png" className="inhexaImg1xs" alt="webAppImg"/>
							<h4 className="inhexaContext1xs text-center">STAFF AUGMENTA<br/>TION</h4>
						</div>

				 	</div>
				 	<div className="col-xs-6 col-sm-4 hidden-lg hidden-md hexListS1xs">
				 		<div className="col-xs-12 col-sm-12">
							<img src="./images/9.png" className="inhexaImg1xs" alt="webAppImg"/>
							<h4 className="inhexaContext1xs text-center">eCOMMERCE <br/>PORTAL</h4>
						</div>
				 	</div>
				</div>
			</div>

		</div>
		);
	}
}
