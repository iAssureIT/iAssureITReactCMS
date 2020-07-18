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
			<div className="wrapper">
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
		);
	}
}	 
										
