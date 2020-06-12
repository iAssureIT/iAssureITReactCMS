import React from 'react';
import './AppDevMain.css';
import axios from 'axios';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class AppDevMain extends React.Component {


    constructor(props) {
    super(props);
    this.state = {
      blocks: {
        "blockTitle": "Who<b> We Are?</b>",
        "blockSubTitle": "We are passionate about our work",
        "blockDescription": 'iAssureIT is an innovative IT company with energetic, talented and ambitious pool of 30+ Software Engineers, passionate about bringing the disruptive change in technology arena.<br/>We are the Change Makers.<br/>&nbsp;&nbsp;&nbsp;&nbsp;Our world class quality application development with latest cutting-edge technologies used for rapid development and blazing fast performance.A tremendous journey of 7 years started in 2011. We have developed over 150+ projects of small and large sizes. Our clientele is spread across the globe, from countries like USA, Europien Countries, South Africa, Gulf Region, Singapore and Australia.<br/>&nbsp;&nbsp;&nbsp;&nbsp;iAssureIT has customers from various industry domains that include Start ups too. Our clients are from industries like Financial Services, Healthcare, Manufacturing, Pharmaceuticals, Real Estate, Shipping and Logistics, Education, etc. We have been helping them to craft their organizational level digital road map.',
        "blockComponentName": "",
        "blockType": "",
        "bgImage": "/images/1.png",
        "fgImage": "/images/37.png",
        "repeatedBlocks": [
        					{ 
        						Title: "Sample 1", 
        						SubTitle: "", 
        						Link: "", 
        						Image: "/images/b1graphic.png",
        						Description: '<span className="b1h1Title">Applications</span><br/><span className="b1h2Title">Development Maintenance</span><br/><span className="b1h3Title">Highly Professional,Reliable & Affordable Cost.</span>'
        					},
        					{ 
        						Title: "Sample 2", 
        						SubTitle: "", 
        						Link: "", 
        						Image: "/images/2.png",
        						Description: '<span className="b1h1Title">Applications</span><br/><span className="b1h2Title">Development Maintenance</span><br/><span className="b1h3Title">Highly Professional,Reliable & Affordable Cost.</span>'
        					},
        					{ 
        						Title: "Sample 3", 
        						SubTitle: "", 
        						Link: "", 
        						Image: "/images/Graphic_3.png",
        						Description: '<span className="b1h1Title">Applications</span><br/><span className="b1h2Title">Development Maintenance</span><br/><span className="b1h3Title">Highly Professional,Reliable & Affordable Cost.</span>'
        					},
        					{ 
        						Title: "Sample 4", 
        						SubTitle: "", 
        						Image: "/images/Graphic4.png",
        						Link: "", 
        						Description: '<span className="b1h1Title">Applications</span><br/><span className="b1h2Title">Development Maintenance</span><br/><span className="b1h3Title">Highly Professional,Reliable & Affordable Cost.</span>'
        					},
        					{ 
        						Title: "Sample 5", 
        						SubTitle: "", 
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
			<div>
				<div className="b1banerheight container-fluid ">
					<div className="col-lg-12 col-md-12 hidden-sm hidden-xs">
						<div className="col-lg-12 col-md-12 hidden-sm hidden-xs logoBox">
							<img className="logoIMG img-responsive" src="./images/Logo.png" alt="logo"/>
						</div>
						<OwlCarousel className="owl-theme  owl-carousel homecarousel h715" loop nav={true}  autoplay={true} animateOut={'fadeOut'} animateIn={false} autoplaySpeed={900} items={1}  dots={false} >
							

						{
                		data && data.length > 0 ?
		      				data.map((data, index)=>{
                					return(
										<div className="item active ">
											<div className="col-lg-6 col-md-6 col-lg-offset-1 col-md-offset-1 hidden-sm hidden-xs nopadd">
												<div className="mtop100" dangerouslySetInnerHTML={{ __html: data.Description } }></div>	
											</div>
											<div className=" col-lg-5 col-md-5 hidden-sm hidden-xs row">
												<img className="b1bannerImg img-responsive" src={data.Image} alt="Bannerpng"/>
											</div>
										</div>
										);
	                					})
	                				:
	                				null
		                		}
							{/*<div className="item row">
								<div className="col-lg-6 col-md-6 col-lg-offset-1 col-md-offset-1 hidden-sm hidden-xs nopadd">
									<div className="mtop180">
										<span className="h1TitleMobile">MOBILE
										</span><br/>
										<span className="h2TitleMobile">SOLUTIONS
										</span><br/>
										<span className="h3TitleMobile">We Build Robust & Scalable Mobile Applications.
										</span>
									</div>	
								</div>
								<div className=" col-lg-5 col-md-5 hidden-sm hidden-xs row">
									<img className="b1bannerImg2 img-responsive" src="./images/2.png" alt="Bannerpng"/>
								</div>
							</div>
							<div className="item">
								<div className="col-lg-3 col-md-3 col-lg-offset-1 col-md-offset-1 hidden-sm hidden-xs nopadd">
									<div className="mtop100">
										<span className="b1h1Title">Award Winning
										</span><br/>
										<span className="b1h2Title">IT Company
										</span><br/>
										<span className="b1h3Title">
										</span>
									</div>	
								</div>
								<div className=" col-lg-7 col-md-7 hidden-sm hidden-xs row">
									<img className="b1bannerImg3 img-responsive" src="./images/Graphic_3.png" alt="Bannerpng"/>
								</div>
							</div>
							<div className="item">
								<div className="col-lg-6 col-md-6 col-lg-offset-1 col-md-offset-1 hidden-sm hidden-xs nopadd">
									<div className="mtop100">
										<span className="b4h1TitleB4">STAFF
										</span><br/>
										<span className="b4h2TitleB4">AUGMENTATAION
										</span><br/>
										
									</div>	
								</div>
								<div className=" col-lg-5 col-md-5 hidden-sm hidden-xs row">
									<img className="b1bannerImg4 img-responsive" src="./images/Graphic4.png" alt="Bannerpng"/>
								</div>
							</div>
							<div className="item">
								<div className="col-lg-6 col-md-6 col-lg-offset-1 col-md-offset-1 hidden-sm hidden-xs nopadd">
									<div className="mtop100">
										<span className="b5h1TitleB5">Customised eCommerce
										</span><br/>
										<span className="b5h2TitleB5">SOLUTIONS
										</span><br/>
										
									</div>	
								</div>
								<div className=" col-lg-5 col-md-5 hidden-sm hidden-xs row">
									<img className="b1bannerImg5 img-responsive" src="./images/Graphic_5.png" alt="Bannerpng"/>
								</div>
							</div>*/}
						</OwlCarousel>

					</div>
					{/*  ================================ mobile view =====================================*/}
					<div className="hidden-lg hidden-md col-xl-12 col-sm-12">
						<div className="hidden-lg hidden-md col-xs-12 col-sm-12 row logoBox">
							<img className="logoxsb1 img-responsive" src="./images/Logo.png" alt="logo"/>
							{/*<img className="menuimgxs img-responsive pull-right" src="./images/3menubar.png" alt="logo"/>*/}
						</div>
						<div className="hidden-lg hidden-md col-sm-12 col-xs-12">
							<div className="mtop100xs">
								<div className="h1Titlexs">Applications

								</div><br/>
								<div className="h2Titlexs">Development Maintenance
								</div><br/>
								<div className="h3Titlexs">Highly Professional,Reliable & Affordable Cost.
								</div>
							</div>	
						</div>
						<div className="hidden-lg hidden-md col-sm-12 col-xs-12 row">
							<img className="bannerImgxs img-responsive col-sm-offset-3" src="./images/2.png" alt="Bannerpng"/>
						</div>
					</div>	
				</div>				
			</div>
		);
	}
}
