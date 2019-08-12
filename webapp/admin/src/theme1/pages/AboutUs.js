import React 			from 'react';
import AboutBanner 		from '../blocks/AboutBanner.js';
import WhoWeAre 		from '../blocks/WhoWeAre.js';
import Awards 			from '../blocks/Awards.js';
import OurTeam 			from '../blocks/OurTeam.js';
import MissionVision 	from '../blocks/MissionVision.js';

import Header from '../common/Header.js';
import Footer 			from '../common/Footer.js';

import "./ServicesList.css";

export default class AboutUs extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-fluid nopadding">
				<Header/>
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
