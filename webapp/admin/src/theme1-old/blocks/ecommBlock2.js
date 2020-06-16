import React from 'react';
import "./EcommBlock.css";

export default class EcommBlock2 extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-fluid nopadding">
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 wwrapper container-fluid nopadding">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ecBox3">
						<div className="col-lg-5 col-md-5 col-sm-6 col-xl-6 ">
							<img className="img-responsive pull-right" src="./images/ec13.png" alt="Bannerpng"/>
						</div>
						<div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
							<div className="winfotext1 col-lg-10 col-md-10 col-sm-10 col-xl-10">
								<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 ">
									<ul className="dashBoxWwA col-lg-4">
									  <li className="dash2WwA"></li>
									</ul>
								</div>
								<h1 className="b1h1"><b><span style={{fontSize:"50px",color:"#376bff"}}>DIGITAL MARKEING </span></b>
								<br/> YOU SHOULD ATTRACT HUGE BUSINESS WITH SEO & <b> DIGITAL MARKETING</b>
								</h1>
								<p className="wparab1">Cheap ecommerce sites give you the Cheap Result & 
									Cheap Experience. Readymade ecommerce CMS has serious limitations
									 at advanced levels. If you want truly great eCommerce Experience 
									 even at highly grown up levels, then Customised or tailormade eCommerce
									 website is the only solution.
								</p>
								{/*<h5  className="wrdmore"><span><u> Read More</u></span> >> </h5>*/}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
