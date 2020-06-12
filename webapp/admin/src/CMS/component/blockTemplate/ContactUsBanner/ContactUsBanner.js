import React from 'react';
import './ContactUsBanner.css';

export default class ContactUsBanner extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-fluid ContactUsBannerWrap" style={{padding:"0px"}}>
				<div className="container-fluid ContactUsBannerBox" style={{padding:"0px"}}>
					<div className="cusbannertxt page-title">
						<h1>Contact Us</h1>
						{/*<ul class="page-breadcrumb">
		                    <li><a href="/">Home</a></li>
		                    <li>Contact Us</li>
		                </ul>*/}
					</div>
				
				</div>
			</div>
		);
	}
}
