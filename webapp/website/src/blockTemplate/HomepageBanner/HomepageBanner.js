import React from 'react';
import './AppDevMain.css';
import axios from 'axios';
import $ 			from 'jquery';
import jQuery 			from 'jquery';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/carousel.js';
import 'bootstrap/js/collapse.js';

// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class HomepageBanner extends React.Component {


		constructor(props) {
        super(props);
        this.state = {
          blocks: {
            "blockTitle": "ECOMMERCE PLATFORM",
            
            "blockSubTitle": "We are passionate about our work",
            "blockDescription": " ", 
            "blockComponentName": "TemplateOverview",
            "blockType": "",
            "bgImage": "/images/dexpertize.png",
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
			<div className="carouselBannerwrapper" style={{backgroundImage:"url("+this.state.blocks.bgImage+")"}}>
				<div className="b1banerheight">
					<div id="myCarousel" className="carousel " data-ride="carousel"  data-interval="false" data-pause="hover">
									
							  		<div className="carousel-inner" id="cItemHBpage">
									{
									  	this.state.blocks.repeatedBlocks.map((result, index)=>{
									  	
									  	return(
											    <div className="item " key={index}>
									    			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 carouselbannerwrapp">
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

// ===============================owl carousel===========================
{/* <div className="wrapper">
				<div className="col-lg-12 col-md-12  col-sm-12 col-xs-12 nopadd">
				<div className="b1banerheight container-fluid b1banerheight2 ">
				  <div className="col-lg-12 col-md-12  col-sm-12 col-xs-12">
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 logoBox">
						
						<img className="logoIMG img-responsive"src="./images/Logo.png" alt="logo"/>  
						</div>
					 
						<OwlCarousel className="owl-theme  owl-carousel homecarousel h715 homecarousal1 "loop nav={true}  autoplay={true} animateOut={'fadeOut'} animateIn={false} autoplaySpeed={900} items={1} dots={false} >
							
								<div className="item active row ">
									<div className="col-lg-6 col-md-6 col-lg-offset-1 col-md-offset-1 col-sm-12 col-xs-12 nopadd slide1">
										<div className="mtop100">
											<div className="b1h1Title">APPLICATION
											</div><br/>
											<div className="b1h2Title">DEVELOPMENT</div> <div className="b1h00"> &MAINTENANCE</div><br/>
											
											<div className="b1h3Title">Highly Professional,Reliable & Affordable Cost.
											</div>
										</div>	
									</div>
									<div className="row">
									<div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12 row ">
										<img className="b1bannerImg img-responsive" src="./images/b1graphic.png" alt="Bannerpng"/>
									</div>
									</div>
							  </div>
						 
								 <div className="item row">
									<div className="col-lg-6 col-md-6 col-lg-offset-1 col-md-offset-1 col-sm-12 col-xs-12 nopadd slide2">
										<div className="mtop180">
											<div className="h1TitleMobile">MOBILE
											</div><br/>
											<div className="h2TitleMobile">SOLUTIONS
											</div><br/>
											<div className="h3TitleMobile">We Build Robust & Scalable Mobile Applications.
											</div>
										</div>	
									</div>
									<div className="row">
									<div className=" col-lg-5 col-md-5 col-sm-12 col-xs-12 row">
										<img className="b1bannerImg2 img-responsive" src="./images/2.png" alt="Bannerpng"/>
									</div>

									</div>
						      </div> 
							 
						 <div className="item row">
								<div className="col-lg-6 col-md-6 col-lg-offset-1 col-md-offset-1 col-sm-12 col-xs-12 nopadd slide4">
									<div className="mtop100">
										<div className="b4h1TitleB4">STAFF
										</div><br/>
										<div className="b4h2TitleB4">AUGMENTATAION
										</div><br/>
										
									</div>	
								</div>
								<div className="row">
								<div className=" col-lg-5 col-md-5 col-sm-12 col-xs-12 row">
									<img className="b1bannerImg4 img-responsive" src="./images/Graphic4.png" alt="Bannerpng"/>
								</div>

								</div>
							</div>
						 
						   <div className="item row">
								<div className="col-lg-6 col-md-6 col-lg-offset-1 col-md-offset-1 col-sm-12 col-xs-12 nopadd slide5">
									<div className="mtop100">
										<div className="b5h1TitleB5">CUSTOMISED ECOMMERCE 
										</div><br/>
										<div className="b5h2TitleB5">SOLUTIONS
										</div><br/>
										
									</div>	
								</div>
								<div className="row">
									<div className=" col-lg-5 col-md-5 col-sm-12 col-xs-12 row">
										<img className="b1bannerImg5 img-responsive" src="./images/Graphic_5.png" alt="Bannerpng"/>
									</div>

								</div>							
							</div> 
						
                     </OwlCarousel>

					 
				</div>
				 </div>				
			</div>
			</div>
 */}
