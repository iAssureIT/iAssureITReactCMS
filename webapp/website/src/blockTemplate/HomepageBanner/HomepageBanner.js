import React from 'react';
import './AppDevMain.css';
import axios from 'axios';
import $ 			from 'jquery';
import 'bootstrap/js/carousel.js';
import 'bootstrap/js/collapse.js';







export default class HomepageBanner extends React.Component {


		constructor(props) {
        super(props);
        this.state = {
          blocks: {
            "blockTitle": "",
            
            "blockSubTitle": "We are passionate about our work",
            "blockDescription": " ", 
            "blockComponentName": "TemplateOverview",
            "blockType": "",
            "bgImage": "/images/b1background.png",
            "fgImage": "/images/0002.png",
            "repeatedBlocks": [
                                
                                { 
                                    Title: "APPLICATION", 
                                    SubTitle: "DEVELOPMENT &MAINTENANCE", 
                                    Image: "/images/b1graphic.png",
                                    Link: "", 
                                    Description: "Highly Professional,Reliable & Affordable Cost."
								},
								{ 
                                    Title: " MOBILE", 
                                    SubTitle: "SOLUTIONS", 
                                    Image: "/images/2.png",
                                    Link: "", 
                                    Description: "We Build Robust & Scalable Mobile Applications."
								},
								{ 
                                    Title: "STAFF", 
                                    SubTitle: "AUGMENTATAION", 
                                    Image: "/images/Graphic4.png",
                                    Link: "", 
                                    Description: ""
								},
								{ 
                                    Title: "CUSTOMISED ECOMMERCE ", 
                                    SubTitle: "SOLUTIONS", 
                                    Image: "/images/Graphic_5.png",
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
    $(document).ready(function(){
			

			  $("#cItemHBpage div:nth-child(1)").addClass("active");


		});
              {
                 axios
                    .get('/api/blocks/get/'+this.props.block_id)
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
			<div className="carouselBannerwrapper">
				<div className="b1banerheight" style={{backgroundImage:"url("+this.state.blocks.bgImage+")"}}>
				  	
					

					<div id="myCarousel" className="carousel " data-ride="carousel"  data-interval="false" data-pause="hover">
									
							  		<div className="carousel-inner" id="cItemHBpage">
									{
									  	this.state.blocks.repeatedBlocks.map((result, index)=>{
									  	
									  	return(
											    <div className="item " key={index} >
									    			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 homepagecontentwrapp">
														<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 slide1">
															<div className="mtop100">
																<div className="b1h1Title"  dangerouslySetInnerHTML={ { __html:result.Title}}></div><br/>
																<div className="b1h2Title"  dangerouslySetInnerHTML={ { __html:result.SubTitle}}></div><br/>
																<div className="b1h3Title"  dangerouslySetInnerHTML={ { __html:result.Description}}></div>
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 appIMGwrapp">
															<img className="b1bannerImg img-responsive" src={result.Image} alt="Bannerpng"/>


														</div>
												
													</div>
											    </div>
									    	)
											})
									}	
									</div>
									<a class="left carousel-control carousel-control-prev" href="#myCarousel" data-slide="prev">
										<div className="glyphicon glyphicon-chevron-left"></div>
										<span class="sr-only">Previous</span>
									</a>
									<a class="right carousel-control carousel-control-next" href="#myCarousel" data-slide="next">
									   <div className="glyphicon glyphicon-chevron-right"></div>
										<span class="sr-only">Next</span>
									</a>
								</div>
            </div>
			</div>				
			
			
		);
	}
}	 

