import React from 'react';
import "./ServicesList.css"

import ServicesBanner 	from '../blocks/ServicesBanner.js';
import ListofServices 	from '../blocks/ListofServices.js';
import WhyiAssure 		from '../blocks/WhyiAssure.js';
import Technologies 	from '../blocks/Technologies.js';
import Testimonials 	from '../blocks/Testimonials.js';
/*import Portfolio 		from '../blocks/Portfolio.js';*/
import Header from '../common/Header.js';
import Footer 			from '../common/Footer.js';

export default class ServicesList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-fluid nopadding">
				<Header/>
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
