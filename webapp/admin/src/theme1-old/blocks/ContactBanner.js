import React from 'react';
import "./ContactBanner.css"

export default class ContactBanner extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-fluid nopadding">
				<div className="cAwrapper ">
					<h1 className="bText">We'd love to hear from you.</h1>
					<p className="bText">Whether you have a question about features, trials, pricing, <br/> need a demo, or anything else,<br/> our team is ready to answer all your questions</p>
				</div>
				
			</div>
		);
	}
}
