import React from 'react';
import "./AboutBanner.css"
import axios from 'axios';


export default class AboutBanner extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      blocks: {
        "blockTitle": "ABOUT US",
        "blockSubTitle": "We are passionate about our work",
        "blockDescription": "<p>A Data Historian or Process Historian or Operational Historian is a software program that records and retrieves production and process data by time; it stores the information in a time series database that uses minimal disk space and enables fast retrieval. Time series information is often displayed in a trend or as tabular data over a time range.</p>\n",
        "blockComponentName": "TemplateOverview",
        "blockType": "",
        "bgImage": "/images/1.png",
        "fgImage": "/images/37.png",
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
              })
            }
      this.setState({
                block_id:this.props.block_id
              });
}

	render() {
		return (
			<div className="ABOUTbanerheight container-fluid" style={{backgroundImage:"url("+this.state.blocks.bgImage+")"}}>
				<div className="col-lg-12 col-md-12 hidden-sm hidden-xs">
					<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 logoBox">
						{/*<img className="logoab img-responsive" src="./images/Logo.png" alt="logo"/>*/}
						{/*<img className="menuimgab img-responsive pull-right" src="./images/3menubar.png" alt="logo"/>*/}
					</div>
					<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div className="pull-right mtop305">
							
							<span className="h2Title monFont">{this.state.blocks.blockTitle}
							</span><br/>
							<span className="h3Title monFont">{this.state.blocks.blockSubTitle}
							</span>
						</div>	
					</div>
					<div className=" col-lg-5 col-md-5 col-sm-6 col-xs-6 row">
						<img className="abbannerImg img-responsive" src={this.state.blocks.fgImage} alt="Bannerpng"/>
					</div>
				</div>
				<div className="col-xs-12 col-sm-12 hidden-lg hidden-md">
					<div className="col-xs-12 col-sm-12 hidden-lg hidden-md logoBox">
						<img className="logoabxs img-responsive" src="./images/Logo.png" alt="logo"/>
						{/*<img className="menuimgabxs img-responsive pull-right" src="./images/3menubar.png" alt="logo"/>*/}
					</div>
					<div className="col-xs-12 col-sm-12 hidden-lg hidden-md">
						<div className="mtop305xs text-center">
							
							<span className="h2Titlexs">{this.state.blocks.blockTitle}
							</span><br/>
							<span className="h3Titlexs">{this.state.blocks.blockSubTitle}
							</span>
						</div>	
					</div>
					<div className="col-xs-12 col-sm-12 hidden-lg hidden-md row">
						<img className="abbannerImgxs img-responsive col-sm-offset-3" src={this.state.blocks.fgImage} alt="Bannerpng"/>
					</div>
				</div>	
				
				
			</div>
		);
	}
}
