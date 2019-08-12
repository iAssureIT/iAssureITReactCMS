import React from 'react';

import Banner 			from '../blocks/Banner.js';
import Services 		from '../blocks/Services.js';
import OutSpeciality 	from '../blocks/OutSpeciality.js';
import IndustryDomains 	from '../blocks/IndustryDomains.js';
import Portfolio 		from '../blocks/Portfolio.js';
import Blogs 			from '../blocks/Blogs.js';
import Videos 			from '../blocks/Videos.js';
import Testimonials 	from '../blocks/Testimonials.js';
import Footer 	from '../common/Footer.js';
import Header from '../common/Header.js';

export default class Homepage extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="">
				<Header/>
				<Banner />
				<Services />
				<OutSpeciality />
				<IndustryDomains />
				{/*<Portfolio />
				<Blogs />
				<Videos />*/}
				<Testimonials />
				<Footer />
			</div>
		);
	}
}
