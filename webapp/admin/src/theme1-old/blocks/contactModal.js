import React from 'react';
import $ from "jquery";
import ContactForm from "./ContactForm.js";


import "./contactModal.css";


export default class ContactModal extends React.Component {
	constructor(props) {
		super(props);
	}
	componantDidMount(){
			var modal = document.getElementById('myModalOne');
      		
          
	}
OpenMyOrderModal(event){
    event.preventDefault();
    
    $('#myModalOne').show();
  }
Modalclose(event){
    event.preventDefault();
    
    $('#myModalOne').hide();
  }
	render() {
		return (
			<div>
				<button type="button" className="btn btn-lg madalbtn btnbg" onClick={this.OpenMyOrderModal.bind(this)}  >Contact Us
				</button>
				
				<div id="myModalOne" className="modal addressmodal col-lg-6 col-lg-offset-3">
                    <span className="addressmodalclose pull-right" onClick={this.Modalclose.bind(this)}>X</span>
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<form className="conatctform">
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12  bt30">
								<h3 className="text-center"> Drop Us a Line</h3>
							</div>
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 bt30">
								
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
									{/*<label class="col-md-4 col-lg-4 col-xs-4 col-sm-4 nopadding">Your Name</label>*/}
									<input className="form-control" name="from" type="text" placeholder="Your name"/>
								</div>
							</div>
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12  bt30">
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
									{/*<label class="col-md-12 col-lg-12 col-xs-12 col-sm-12 nopadding">Your Email address</label>*/}
									<input className="form-control" name="from" type="email" placeholder="Your@email.com"/>
								</div>
							</div>
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12  bt30">
								
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
									{/*<label class="col-md-12 col-lg-12 col-xs-12 col-sm-12 nopadding">Subject</label>*/}
									<input className="form-control" name="from" type="text" placeholder="Subject" />
								</div>
							</div>
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12  bt30">
								
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
									{/*<label class="col-md-12 col-lg-12 col-xs-12 col-sm-12 nopadding">Message</label>*/}
							          <textarea className="form-control" name="message" placeholder="How can we help?" rows="4"></textarea>
							        
								</div>
							</div>
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12  bt30">
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
									<button type="button" className="btn col-lg-7 col-md-7 col-xs-12 col-sm-12 sbtn">Send A Message</button>
								</div>
							</div>
						</form>
					</div>
					</div>
			</div>
		);
	}
}
