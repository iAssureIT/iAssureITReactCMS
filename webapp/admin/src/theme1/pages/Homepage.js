import React from 'react';

import Banner 			        from '../blocks/Banner.js';
import Services 		        from '../blocks/Services.js';
import OutSpeciality 	        from '../blocks/OutSpeciality.js';
import IndustryDomains 	        from '../blocks/IndustryDomains.js';
import Portfolio 		        from '../blocks/Portfolio.js';
import Blogs 			        from '../blocks/Blogs.js';
import Videos 			        from '../blocks/Videos.js';
import Testimonials 	        from '../blocks/Testimonials.js';
import AddressOnGoogleMap 	    from '../blocks/AddressOnGoogleMap.js';
import FastrtrackFrameWork 	    from '../blocks/FasttrackFrameWork.js';
import AutoPilotPlatform        from '../blocks/AutoPilotPlatform.js';
import ContentmanagementSystem  from  '../blocks/ContentmanagementSystem.js';
import Endlesspossibility       from   '../blocks/Endlesspossibility.js';


import DemoAnim 	from '../blocks/demoAnim.js';


import ContactModal 	from '../blocks/contactModal.js';


import Footer 	from '../common/Footer.js';
import Header from '../common/Header.js';
/*import fullheader from '../common/fullheader.js';*/

import Headernew from '../common/headernew.js';


import HomepageBanner  from '../blocks/Banners/AppDevMain/HomepageBanner.js'


import { Helmet } from "react-helmet";

import pagehead 			from '../pagehead/pagehead.js';

import ScrollButton     from '../blocks/ScrollButton.js';



export default class Homepage extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {

			"description"		: "Corporate Websites & eCommerce Development",
			"keywords"			: "Cutting Edge, Responsive, Mobile Friendly",
			"author"			: "iAssureIT",
			"title"				: "iAssureITHomePage",
			

		};
	}

	render() {
		return (
			<div className="">
				{/*<pagehead/>*/}
				<Helmet>
					<meta charset="UTF-8" />
					<meta name="description" content= {this.state.description}/>
					<meta name="keywords" content={this.state.keywords} />
					<meta name="author" content={this.state.author} />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<title>{this.state.title}</title>
				</Helmet>
				 {/* <homeCarousel/>  */}
				{/* <Header /> */}
				
				<Headernew/>   
				<ContactModal/>
				<HomepageBanner />        
				 {/* <Banner />  */}
				
				
				  <Services />          
				  <FastrtrackFrameWork />                   
				 

				 <OutSpeciality />                 
				  <AutoPilotPlatform />             
				  <IndustryDomains />             
				  <ContentmanagementSystem />              
				{/*<Portfolio />
				<Blogs />
				<Videos />*/}
				 <Testimonials />                 
		         <Endlesspossibility />               
		         <AddressOnGoogleMap />              
			     <Footer />    
				  <ScrollButton />             
			</div>
		);
	}
}
