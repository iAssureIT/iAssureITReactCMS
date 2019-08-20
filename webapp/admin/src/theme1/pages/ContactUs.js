import React from 'react';
import ContactBanner 	from '../blocks/ContactBanner.js';
import ContactForm 	from '../blocks/ContactForm.js';
import AddressOnGoogleMap 	from '../blocks/AddressOnGoogleMap.js';

import Footer 			from '../common/Footer.js';
import Header from '../common/Header.js';
import "./ServicesList.css";





export default class ContactUs extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-fluid nopadding">
				<Header/>

				<ContactBanner />

				<ContactForm />

				<AddressOnGoogleMap />
				
				

				<br/>
				<Footer />
			</div>
		);
	}
}
