import React from 'react';
import './AppDevMain.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class AppDevMain extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="b1banerheight container-fluid b1banerheight2 ">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 logoBox">
							<img className="logoIMG img-responsive" src="./images/Logo.png" alt="logo"/>
						</div>
						<div className="container-fluid">
						<OwlCarousel className="owl-theme  owl-carousel homecarousel h715 homecarousal1 "loop nav={true}  autoplay={false} animateOut={'fadeOut'} animateIn={false} autoplaySpeed={900} items={1} dots={false} >
							
								<div className="item active ">
									<div className="col-lg-6 col-md-6 col-lg-offset-1 col-md-offset-1 col-sm-12 col-xs-12 nopadd slide1">
										<div className="mtop100">
											<span className="b1h1Title">APPLICATIONS
											</span><br/>
											<span className="b1h2Title">DEVELOPMENT <span className="b1h00">MAINTENANCE</span> 
											</span><br/>
											<span className="b1h3Title">Highly Professional,Reliable & Affordable Cost.
											</span>
										</div>	
									</div>
									<div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12 row ">
										<img className="b1bannerImg img-responsive" src="./images/b1graphic.png" alt="Bannerpng"/>
									</div>
							  </div>
						 
								<div className="item row">
									<div className="col-lg-6 col-md-6 col-lg-offset-1 col-md-offset-1 col-sm-6 col-xs-6 nopadd slide2">
										<div className="mtop180">
											<span className="h1TitleMobile">MOBILE
											</span><br/>
											<span className="h2TitleMobile">SOLUTIONS
											</span><br/>
											<span className="h3TitleMobile">We Build Robust & Scalable Mobile Applications.
											</span>
										</div>	
									</div>
									<div className=" col-lg-4 col-md-4 col-sm-6 col-xs-6 row">
										<img className="b1bannerImg2 img-responsive" src="./images/2.png" alt="Bannerpng"/>
									</div>
								</div>
						
						<div className="item">
								<div className="col-lg-6 col-md-6 col-lg-offset-1 col-md-offset-1 col-sm-6 col-xs-6 nopadd slide4">
									<div className="mtop100">
										<span className="b4h1TitleB4">STAFF
										</span><br/>
										<span className="b4h2TitleB4">AUGMENTATAION
										</span><br/>
										
									</div>	
								</div>
								<div className=" col-lg-5 col-md-5 col-sm-6 col-xs-6 row">
									<img className="b1bannerImg4 img-responsive" src="./images/Graphic4.png" alt="Bannerpng"/>
								</div>
							</div>
						
						  <div className="item">
								<div className="col-lg-6 col-md-6 col-lg-offset-1 col-md-offset-1 col-sm-6 col-xs-6 nopadd slide5">
									<div className="mtop100">
										<span className="b5h1TitleB5">CUSTOMISED ECOMMERCE 
										</span><br/>
										<span className="b5h2TitleB5">SOLUTIONS
										</span><br/>
										
									</div>	
								</div>
								<div className=" col-lg-5 col-md-5 col-sm-6 col-xs-6 row">
									<img className="b1bannerImg5 img-responsive" src="./images/Graphic_5.png" alt="Bannerpng"/>
								</div>
							</div>
						
                     </OwlCarousel>

					</div>
				</div>
				</div>				
			</div>
		);
	}
}	
					{/*  ================================ mobile view =====================================*/}
					{/* <div className="hidden-lg hidden-md col-xl-12 col-sm-12">
						<div className="hidden-lg hidden-md col-xs-12 col-sm-12 row logoBox">
							<img className="logoxsb1 img-responsive" src="./images/Logo.png" alt="logo"/>
							{/*<img className="menuimgxs img-responsive pull-right" src="./images/3menubar.png" alt="logo"/>*/}
						{/* </div> */}
						{/* <div className="hidden-lg hidden-md col-sm-12 col-xs-12">
							<div className="mtop100xs">
								<div className="h1Titlexs">Applications

								</div><br/>
								<div className="h2Titlexs">Development Maintenance */}
								{/* </div><br/>
								<div className="h3Titlexs">Highly Professional,Reliable & Affordable Cost.
								</div>
							</div>	
						</div> */}
						{/* <div className="hidden-lg hidden-md col-sm-12 col-xs-12 row">
							<img className="bannerImgxs img-responsive col-sm-offset-3" src="./images/2.png" alt="Bannerpng"/>
						</div>
					</div>	 */} 

