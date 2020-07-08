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
				
				<div id="myModalOne" className="modal addressmodal  backgtoundchange col-lg-12  col-md-12  col-sm-12 col-xs-12">
                    <span className="addressmodalclose pull-right" onClick={this.Modalclose.bind(this)}>X</span>
						 <form className="conatctform">
							 
						<div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-xs-12 contactmodealswrapper">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 connectwrapper">
								<h1 className="hiconnecttitle">Connect With Us</h1>

							</div>
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bgdiv1 ">
							
							   <input className="form-control bgcolor" name="from" type="text" placeholder="Your name"/>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 bgdiv1">
							<input className="form-control bgcolor" name="from" type="text" placeholder="Mobile"/>

							</div>
							<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 bgdiv1">
							<input className="form-control bgcolor"name="from" type="text" placeholder="@gmail.com"/>

							</div>
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bgdiv1 ">
							
							   <input className="form-control bgcolor" name="from" type="text" placeholder="Subject"/>
							</div>
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  bgdiv1">
									
							<textarea className="form-control bgcolor" name="message" placeholder="How can we help?" rows="4"></textarea>
							        
							</div>
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
								<button type="button" className="btn col-lg-4 col-md-7 col-xs-12 col-sm-12 sbtn button1">Send A Message</button>
							</div>

						</div>
						
						</form>
					
					</div>
			</div>
		);
	}
}
				{/* <button type="button" className="btn btn-lg madalbtn btnbg" onClick={this.OpenMyOrderModal.bind(this)}  >Contact Us
				</button>
				
				<div id="myModalOne" className="modal addressmodal  backgtoundchange col-lg-6 col-lg-offset-3">
                    <span className="addressmodalclose pull-right" onClick={this.Modalclose.bind(this)}>X</span>
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<form className="conatctform">
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12  bt30">
								<h3 className="text-center"> Connect with us</h3>
							</div>
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 bt30">
								
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
							
									<input className="form-control" name="from" type="text" placeholder="Your name"/>
								</div>
							</div>
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12  bt30">
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
									
									<input className="form-control" name="from" type="email" placeholder="Your@email.com"/>
								</div>
							</div>
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12  bt30">
								
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
									
									<input className="form-control" name="from" type="text" placeholder="Subject" />
								</div>
							</div>
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12  bt30">
								
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
									
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
} */}
