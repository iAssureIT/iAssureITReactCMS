import React from 'react';
import "./ContactForm.css";
import AddressBlock from "./AddressBlock.js";

export default class ContactForm extends React.Component {

	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 containerCon">
					
					<div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
						<form className="conatctform">
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12  bt30">
								<h3 className="text-center"> CONTACT US</h3>
							</div>
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 bt30">
								<label class="col-md-4 col-lg-4 col-xs-4 col-sm-4 labelmargin">Your Name</label>
								<div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
									<input className="form-control" name="from" type="text" placeholder="Your name"/>
								</div>
							</div>
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12  bt30">
								<label class="col-md-4 col-lg-4 col-xs-4 col-sm-4 labelmargin">Your Email address</label>
								<div className="col-lg-8 col-md-8 col-xs-8 col-sm-8">
									<input className="form-control" name="from" type="email" placeholder="Your@email.com"/>
								</div>
							</div>
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12  bt30">
								<label className="col-md-4 col-lg-4 col-xs-4 col-sm-4 labelmargin">Subject</label>
								<div className="col-lg-8 col-md-8 col-xs-8 col-sm-8">
									<input className="form-control" name="from" type="text" placeholder="Subject" />
								</div>
							</div>
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12  bt30">
								<label className="col-md-4 col-lg-4 col-xs-4 col-sm-4 labelmargin">Message</label>
								<div className="col-lg-8 col-md-8 col-xs-8 col-sm-8">
									<div>
							          <textarea className="form-control" name="message" placeholder="How can we help?" rows="4"></textarea>
							        </div>
								</div>
							</div>
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12  bt30">
								<button type="button" class="btn btn-success col-lg-2 col-md-2 col-xs-4 col-sm-4 pull-right">Submit</button>
							</div>
						</form>
					</div>{/* 1 st half*/}
					
					<div className="col-lg-5 col-md-5 col-sm-12 col-xs-10">
						<AddressBlock />
					</div>
					
				</div>
			</div>
		);
	}
}


/*
#323, Amanora Chambers,
Amanora Town Center East Block,
Opposite Magarpatta City,
Pune, India 400 028
Ph: +91 - 9923 393 733
*/