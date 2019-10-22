import React from 'react';
import "./EcommBlock.css";

export default class EcommBlock1 extends React.Component {

	constructor(props) {
		super(props);
	}
	render() {
		console.log("ecb1",this.props);
		return (
			<div className="container-fluid nopadding">
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 wwrapper container-fluid nopadding">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ecBox1">
						<div className="col-lg-5 col-md-5 col-sm-6 col-xl-6 ">
							<img className=" img-responsive pull-right" src="./images/eca19.png" alt="Bannerpng"/>
						</div>
						<div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
							<div className="ecb1fotext col-lg-10 col-md-10 col-sm-10 col-xl-10">
								<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 ">
									<ul className="dashBoxWwA col-lg-4">
									  <li className="dash2WwA"></li>
									</ul>
								</div>
								<h1 className="b1h1"><b><span style={{fontSize:"50px",color:"#376bff"}}>{this.props.EcommBlock1[0].custTitleA}</span></b><br/>
									{this.props.EcommBlock1[0].custtitletextA}
									{/*
										YOU DESERVE THE<br/> 
									<b>HIGHLY CUSTOMISABLE, LUXERIOUS &
									 HAND CRAFTED ONLINE STORE</b> OR 
									 ECOMMERCE WEBSITE FOR<b> YOUR 
									 PRECIOUS CLIENT ENGAGEMENT</b>*/}
								</h1>
								<p className="ecparab1 col-lg-10 col-md-10 row">{/*Cheap ecommerce sites give you the Cheap Result & 
									Cheap Experience. Readymade ecommerce CMS has serious limitations
									 at advanced levels. If you want truly great eCommerce Experience 
									 even at highly grown up levels, then Customised or tailormade eCommerce
									 website is the only solution.*/}
									 {this.props.EcommBlock1[0].custparaA}
								</p>
								{/*<h5  className="wrdmore"><span><u> Read More</u></span> >> </h5>*/}
							</div>
						</div>
					</div>
					<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 ecBox2">
						<div className="col-lg-7 col-md-7 col-sm-6 col-xl-6">
							<div className="ecb1fotext2 col-lg-10 col-md-10 col-sm-10 col-xl-10 pull-right">
								<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 ">
									<ul className="dashBoxWwA col-lg-4	">
									  
									  <li className="dash2WwA"></li>
									  
									</ul>
								</div>
								<h1 className="b1h1"><span style={{fontSize:"50px"}}><b>{this.props.EcommBlock1[1].custTitleA}</b></span><br/>
									{/*<b>FOR ULTRA GREAT USER
									EXPERIENCE,</b> YOUR ECOMMERCE 
									WEBSITE MUST BE SUPER FAST, 
									<b>HIGHLY SECURED & MOBILE
									FRIENDLY</b>*/}
									{this.props.EcommBlock1[1].custtitletextA}
								</h1>
								<p className="wparab1">{/*Cheap ecommerce sites give you the Cheap Result & 
									Cheap Experience. Readymade ecommerce CMS has serious limitations
									 at advanced levels. If you want truly great eCommerce Experience 
									 even at highly grown up levels, then Customised or tailormade eCommerce
									 website is the only solution.*/}
									 {this.props.EcommBlock1[1].custparaA}
								</p>
								{/*<h5  className="wrdmore"><span><u> Read More</u></span> >> </h5>*/}
							</div>
						</div>
						<div className="col-lg-5 col-md-5 col-sm-6 col-xl-6 ">
							<img className="img-responsive" src="./images/ec12.png" style={{position:"absolute",zIndex:"1"}} alt="Bannerpng"/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
