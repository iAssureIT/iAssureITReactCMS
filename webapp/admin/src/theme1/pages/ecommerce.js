import React 			from 'react';
import { Helmet } 		from "react-helmet";

import Footer 			from '../common/Footer.js';
import Header 			from '../common/Header.js';
import "./ServicesList.css";
import Headernew 		from '../common/headernew.js';
import ServiceBanner 	from '../blocks/eCommerceBanner.js';
import Bdesignblock     from '../blocks/bdesignblock.js';
import EcommBlock1 		from '../blocks/ecommBlock-1.js';
import EcommBlock2 		from '../blocks/ecommBlock2.js';
import EcommBlock3 		from '../blocks/ecommBlock3.js';
import EcommBlock4		from '../blocks/ecommBlock4.js';
import Testimonials 	from '../blocks/Testimonials.js';
import ContactModal 	from '../blocks/contactModal.js';
import ScrollButton     from '../blocks/ScrollButton.js';





export default class Ecommerce extends React.Component {
		constructor(props) {
		super(props);
			this.state = {

			"description"		: "Corporate Websites & eCommerce Development",
			"keywords"			: "Cutting Edge, Responsive, Mobile Friendly",
			"author"			: "iAssureIT",
			"title"				: "iAssureIT-ecommerce",
			"bannerText"		: [
									{	
									title:"",
									titletext:""
									}
								  ],
			"EcommBlock1"		:[ 
									{	
									custTitleA:"CUSTOMISABLE",
									custtitletextA:"YOU DESERVE THE HIGHLY CUSTOMISABLE, LUXERIOUS & HAND CRAFTED ONLINE STORE OR ECOMMERCE WEBSITE FOR YOUR PRECIOUS CLIENT ENGAGEMENT",
									custparaA:"Cheap ecommerce sites give you the Cheap Result & Cheap Experience. Readymade ecommerce CMS has serious limitations at advanced levels. If you want truly great eCommerce Experience even at highly grown up levels, then Customised or tailormade eCommerce website is the only solution."
									},
									{	
									custTitleA:"USER EXPERIENCE",
									custtitletextA:"FOR ULTRA GREAT USER EXPERIENCE, YOUR ECOMMERCE WEBSITE MUST BE SUPER FAST,HIGHLY SECURED & MOBILE FRIENDLY",
									custparaA:"Cheap ecommerce sites give you the Cheap Result & Cheap Experience. Readymade ecommerce CMS has serious limitations at advanced levels. If you want truly great eCommerce Experience even at highly grown up levels, then Customised or tailormade eCommerce website is the only solution."
									}
								]
			
		};
	}

	componentDidMount(){
		this.setState({
			"description"		: "Corporate Websites & eCommerce Development",
			"keywords"			: "Cutting Edge, Responsive, Mobile Friendly",
			"author"			: "iAssureIT",
			"title"				: "iAssureIT-ecommerce",
			"bannerText"		:[ 
									{	
									title:"ECOMMERCE WEBSITE DEVELOPMENT",
									titletext:"YOU NEED <b>ECOMMERCE WEBSITE</b> THAT IS SUPER BEAUTIFUL, USER FRIENDLY & THAT GROWS YOUR BUSINESS EXPONETIALLY"
									}
								],
			"EcommBlock1"		:[ 
									{	
									custTitleA:"CUSTOMISABLE",
									custtitletextA:"YOU DESERVE THE HIGHLY CUSTOMISABLE, LUXERIOUS & HAND CRAFTED ONLINE STORE OR ECOMMERCE WEBSITE FOR YOUR PRECIOUS CLIENT ENGAGEMENT",
									custparaA:"Cheap ecommerce sites give you the Cheap Result & Cheap Experience. Readymade ecommerce CMS has serious limitations at advanced levels. If you want truly great eCommerce Experience even at highly grown up levels, then Customised or tailormade eCommerce website is the only solution."
									},
									{	
									custTitleA:"USER EXPERIENCE",
									custtitletextA:"FOR ULTRA GREAT USER EXPERIENCE, YOUR ECOMMERCE WEBSITE MUST BE SUPER FAST,HIGHLY SECURED & MOBILE FRIENDLY",
									custparaA:"Cheap ecommerce sites give you the Cheap Result & Cheap Experience. Readymade ecommerce CMS has serious limitations at advanced levels. If you want truly great eCommerce Experience even at highly grown up levels, then Customised or tailormade eCommerce website is the only solution."
									}
								]
			
		});
	}

	render() {
		return (
			<div className="container-fluid nopadding">
				<Helmet>
					<meta charset="UTF-8" />
					<meta name="description" content= {this.state.description}/>
					<meta name="keywords" content={this.state.keywords} />
					<meta name="author" content={this.state.author} />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<title>{this.state.title}</title>
				</Helmet>
				{/*<Headernew/>*/}
				<Headernew />
				{/* <ScrollButton /> */}

				<ContactModal/>


				<ServiceBanner bannerText = {this.state.bannerText}/>
				<Bdesignblock/>
				<EcommBlock1 EcommBlock1 = {this.state.EcommBlock1}/>
				<EcommBlock2/>
				<Bdesignblock/>
				<EcommBlock3/>
				<EcommBlock4/>
				<Bdesignblock/>
				<ScrollButton />

				<Testimonials/>
				<Footer />
			</div>
		);
	}
}
