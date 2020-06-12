import React from 'react';
import "./eCommerceBanner.css"
import axios from 'axios';

export default class eCommerceBanner extends React.Component {


    constructor(props) {
    super(props);
    this.state = {
    	"bannerText"		:
									{	
									title:"ECOMMERCE WEBSITE DEVELOPMENT",
									titletext:""
									},
      blocks: {
        "blockTitle": "ECOMMERCE WEBSITE DEVELOPMENT",
        "blockSubTitle": "YOU NEED <b>ECOMMERCE WEBSITE</b> THAT IS SUPER BEAUTIFUL, USER FRIENDLY & THAT GROWS YOUR BUSINESS EXPONETIALLY",
        "blockDescription": 'iAssureIT is an innovative IT company with energetic, talented and ambitious pool of 30+ Software Engineers, passionate about bringing the disruptive change in technology arena.<br/>We are the Change Makers.<br/>&nbsp;&nbsp;&nbsp;&nbsp;Our world class quality application development with latest cutting-edge technologies used for rapid development and blazing fast performance.A tremendous journey of 7 years started in 2011. We have developed over 150+ projects of small and large sizes. Our clientele is spread across the globe, from countries like USA, Europien Countries, South Africa, Gulf Region, Singapore and Australia.<br/>&nbsp;&nbsp;&nbsp;&nbsp;iAssureIT has customers from various industry domains that include Start ups too. Our clients are from industries like Financial Services, Healthcare, Manufacturing, Pharmaceuticals, Real Estate, Shipping and Logistics, Education, etc. We have been helping them to craft their organizational level digital road map.',
        "blockComponentName": "",
        "blockType": "",
        "bgImage": "/images/ecnw.png",
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
			
			var data = this.state.bannerText;
			console.log("props",data);
			
				return (
				/*{ 	data && data.length > 0 ?
					data.map((data, index)=>{
					return(
					key={index}
					*/
						<div  className="ecbheight container-fluid col-lg-12 col-md-12 hidden-sm hidden-xs" style={{backgroundImage:"url("+this.state.blocks.bgImage+")"}}>
							
								
								<div className="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1 hidden-sm hidden-xs">
									<div className="mtop150ec">
									
										<div className="t2title text-center" dangerouslySetInnerHTML={{ __html:this.state.blocks.blockTitle}} >
										</div>
										<p className="col-lg-8 col-lg-offset-2 text-center t3title" dangerouslySetInnerHTML={{ __html:this.state.blocks.blockSubTitle}}></p>
									</div>	
								</div>
								
						</div>
					/*);
				})
				:
				null*/
			);
	}
}
/*YOU NEED ECOMMERCE WEBSITE THAT IS<br/>
							SUPER BEAUTIFUL, USER FRIENDLY & THAT GROWS YOUR<br/>BUSINESS EXPONETIALLY*/