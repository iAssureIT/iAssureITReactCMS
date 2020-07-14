import React from 'react';
import "./ServicesBanner.css";
import axios from 'axios';
export default class ServicesBanner extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
          blocks: {
            "blockTitle": "<b>SUPER</b> PERFORMANCE",
            
            "blockSubTitle": "We are passionate about our work",
            "blockDescription": "<span style='font-size:30px'><b>Lorem Ipsum </b> </span> is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Ipsum passages,<p style='margin-top:20px'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution Ipsum passages, and more recently with desktop publishing software </p>",
            "blockComponentName": "TemplateOverview",
            "blockType": "",
            "bgImage": "/images/ecom4.png",
            "fgImage": "/images/ecom5.png",
            "repeatedBlocks": [
                                
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
			<div>
				<div className="banerpageheight">
					<div className="banerSBheight">
						<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 logoBox">
						  <a href="/"><img className="logo img-responsive" src="./images/Logo.png" alt="logo"/></a>
							
						</div> 
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
							 <div className="pull-right mtop100SB"> 
								<span className="h1TitleSB">Our</span><br/>
								<span className="h2TitleSB">SERVICES</span><br/>
								<span className="h3TitleSB">With Cutting Edge Technology Expertise, <br/> Innovation & Creativity</span>
							 </div>	 
						</div>
						<div className=" col-lg-6 col-md-6 col-sm-12 col-xs-12 row">
							<img className="bannerImgSB img-responsive" src="./images/28.png" alt="Bannerpng"/>
						</div>
							
						</div> 

					</div>
					
						
				</div>
								
			</div>
				

);
}
}
						