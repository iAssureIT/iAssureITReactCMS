import React from 'react';
import "./ContactBanner.css"

export default class ContactBanner extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="contacwrapp">
				<div className="cAwrapper ">
					
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contatcbannertext ">
						<div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-xs-12 contactbannertitlewrapp ">
						     <div className="text-center ">
					            <h1 className="bText">We'd love to hear from you.</h1>
							</div> 
					  </div>
					  <div className=" col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-xs-12 cbannerptext"> 
					  <p className="pText">Whether you have a question about features, trials, pricing,need a demo, or anything else,our team is ready to answer all your questions</p>
					</div>
					</div> 

					
					
			</div>
				
			</div>
		);
	}
}
