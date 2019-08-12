import React from 'react';

export default class ContactUs extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-fluid">
				<ContactBanner />

				<ContactForm />

				<AddressBlock />

				<AddressOnGoogleMap />

				<Footer />
			</div>
		);
	}
}
