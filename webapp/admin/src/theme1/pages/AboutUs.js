import React 			from 'react';
import AboutBanner 		from '../blocks/AboutBanner.js';
import WhoWeAre 		from '../blocks/WhoWeAre.js';
import Awards 			from '../blocks/Awards.js';
import OurTeam 			from '../blocks/OurTeam.js';
import MissionVision 	from '../blocks/MissionVision.js';
import { Helmet } from "react-helmet";

import Header from '../common/Header.js';
import Footer 			from '../common/Footer.js';
import Headernew 		from '../common/headernew.js';


import "./ServicesList.css";

export default class AboutUs extends React.Component {


	constructor(props) {
		super(props);
			this.state = {

			"description"		: "Corporate Websites & eCommerce Development",
			"keywords"			: "Cutting Edge, Responsive, Mobile Friendly",
			"author"			: "iAssureIT",
			"title"				: "iAssureIT-About",
			

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
				<AboutBanner />

				<WhoWeAre />

				<Awards />
			
				<OurTeam />

				<MissionVision />
	{/*

				<Portfolio />

				<Testimonials />
	*/}
				<Footer />
			</div>
		);
	}
}