import React from 'react';
import "./Testimonials.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class Testimonials extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="TestimonialsHT container-fluid hidden-sm hidden-xs">
				<div className="col-lg-12 col-md-12">
					<ul className="dashBox col-lg-2	col-lg-offset-5">
					  <li className="dash1 "></li>
					  <li className="dash2"></li>
					  <li className="dash3"></li>
					</ul>
				</div>
				<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 ">
					<div className="text-center">

						<h1>
							<b>Client Testimonials</b>
						</h1>
					</div>
				</div>
				{/*<div id="mercury" class="orbit">
			        <div class="planet"></div> 
			      </div>*/}
				<div class="col-lg-12 col-md-12 hidden-sm hidden-xs">
					<div class="col-lg-9 col-md-9 col-sm-7 col-xl-7">
						<div class="col-lg-10 col-md-10 col-sm-12 col-xl-12 testimonialBox col-lg-offset-1">
							<OwlCarousel className="owl-theme arrows" loop autoplay={true} items={1} nav dots={false}>
							    <div class="item col-lg-12">
							    	<div className="testimonialList col-lg-12 col-md-12 col-sm-12">
								    	<h3>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
									    	sed do eiusmod tempor incididunt ut labore et dolore magna 
									    	aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
									    	mollit anim id est laborum."
									    </h3>
									    <div className="col-sm-12 col-lg-8 col-md-8">
									    	<div className="col-md- col-lg-3 col-sm-2">
									    		<img src="./images/6.png" alt="example" className="img-responsive profileTesti"/>
									    	</div>
									    	<div className="col-md-8 col-lg-8 col-sm-10">
											    <h4 className="custName"><span className="nmclr">Joan Doe</span><br/>
											    CEO,Adevertising Corp</h4>
									    	</div>
									    </div>
							    	</div>

							    </div>
							    <div class="item col-lg-12">
							    	<div className="testimonialList col-lg-12 col-md-12 col-sm-12">
								    	<h3>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
									    	sed do eiusmod tempor incididunt ut labore et dolore magna 
									    	aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
									    	mollit anim id est laborum."
									    </h3>
									    <div className="col-sm-12 col-lg-8 col-md-8">
									    	<div className="col-md- col-lg-3 col-sm-2">
									    		<img src="./images/6.png" alt="example" className="img-responsive profileTesti"/>
									    	</div>
									    	<div className="col-md-8 col-lg-8 col-sm-10">
											    <h4 className="custName"><span className="nmclr">Joan Doe</span><br/>
											    CEO,Adevertising Corp</h4>
									    	</div>
									    </div>
							    	</div>
							    </div>
							    <div class="item col-lg-12">
							    	<div className="testimonialList col-lg-12 col-md-12 col-sm-12">
								    	<h3>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
									    	sed do eiusmod tempor incididunt ut labore et dolore magna 
									    	aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
									    	mollit anim id est laborum."
									    </h3>
									    <div className="col-sm-12 col-lg-8 col-md-8">
									    	<div className="col-md- col-lg-3 col-sm-2">
									    		<img src="./images/6.png" alt="example" className="img-responsive profileTesti"/>
									    	</div>
									    	<div className="col-md-8 col-lg-8 col-sm-10">
											    <h4 className="custName"><span className="nmclr">Joan Doe</span><br/>
											    CEO,Adevertising Corp</h4>
									    	</div>
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


/*

*/