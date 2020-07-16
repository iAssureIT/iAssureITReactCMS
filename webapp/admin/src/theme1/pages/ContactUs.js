import React from 'react';
import ContactBanner 	from '../blocks/ContactBanner.js';
import ContactForm 	from '../blocks/ContactForm.js';
import AddressOnGoogleMap 	from '../blocks/AddressOnGoogleMap.js';
import { Helmet } from "react-helmet";
import Footer   from '../common/Footer.js';
import Header from '../common/Header.js';
import "./ServicesList.css";

import Headernew 		from '../common/headernew.js';




export default class ContactUs extends React.Component {


	constructor(props) {
		super(props);
			this.state = {

			"description"		: "Corporate Websites & eCommerce Development",
			"keywords"			: "Cutting Edge, Responsive, Mobile Friendly",
			"author"			: "iAssureIT",
			"title"				: "iAssureIT-Contact-Us",
			

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

				<ContactBanner />

				<ContactForm />

				{/* <AddressOnGoogleMap /> */}
				{/* <Footer /> */}
			</div>
		);
	}
}
