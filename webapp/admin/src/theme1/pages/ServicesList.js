import React from 'react';
import "./ServicesList.css"
import { Helmet } 		from "react-helmet";

import ServicesBanner 	from '../blocks/ServicesBanner.js';
import ListofServices 	from '../blocks/ListofServices.js';
import WhyiAssure 		from '../blocks/WhyiAssure.js';
import Technologies 	from '../blocks/Technologies.js';
import Testimonials 	from '../blocks/Testimonials.js';
/*import Portfolio 		from '../blocks/Portfolio.js';*/
import Header 			from '../common/Header.js';
import Footer 			from '../common/Footer.js';

import Headernew 		from '../common/headernew.js';


export default class ServicesList extends React.Component {
	constructor(props) {
		super(props);
			this.state = {

			"description"		: "Corporate Websites & eCommerce Development",
			"keywords"			: "Cutting Edge, Responsive, Mobile Friendly",
			"author"			: "iAssureIT",
			"title"				: "iAssureIT-Service",
		};
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
				{/*<Header/>*/}
				<Headernew/>
				
				<ServicesBanner />

				<ListofServices />

				<WhyiAssure />

				<Technologies />

				{/*<Portfolio />*/}
				<Testimonials />

				<Footer />
			</div>
		);
	}
}
