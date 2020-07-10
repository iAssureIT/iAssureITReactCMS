import React from 'react';
import $ from "jquery";
import ContactForm from "./ContactForm.js";
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
 


import "./contactModal.css";
export default class ContactModal extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	componantDidMount(){
// 			var modal = document.getElementById('myModalOne');
      		
          
// 	}
// OpenMyOrderModal(event){
//     event.preventDefault();
    
//     $('#myModalOne').show();
//   }
// Modalclose(event){
//     event.preventDefault();
    
//     $('#myModalOne').hide();
//   }
	render() {
		return (
			<div>
             	{/* <button type="button" className="btn btn-lg madalbtn btnbg" onClick={this.OpenMyOrderModal.bind(this)}  >Contact Us */}
             	<button type="button" className="btn btn-lg madalbtn btnbg" data-toggle="modal" data-target="#myModal"  >Contact Us
				</button>

				{/* <!-- Modal --> */}
				<div id="myModal" class="modal fade" role="dialog">
				<div class="modal-dialog">

					{/* <!-- Modal content--> */}
					<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Modal Header</h4>
					</div>
					<div class="modal-body">
						<p>Some text in the modal.</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					</div>
					</div>

				</div>
				</div>

				
				{/* <div id="myModalOne" className="modal addressmodal  backgtoundchange col-lg-12  col-md-12  col-sm-12 col-xs-12">
                    <span className="addressmodalclose pull-right" onClick={this.Modalclose.bind(this)}>X</span>
					<div className="bgimage1">
						<img src="/images/cmodel05.png" alt="cmodel05" className="modelimg1"></img>
					</div>
					<div className="bgimage2">
						<img src="/images/cmodel01.png" alt="cmodel04" className="modelimg2"></img>
					</div>
					<div className="bgimage4">
						<img src="/images/cmodel2.png" alt="cmodel2" className="modelimg4"></img>
					</div>
					<div className="bgimage5">
						<img src="/images/cmodel10.png" alt="cmodel10" className="modelimg5"></img>
					</div>
					<div className="bgimage7">
						<img src="/images/cmodel06.png" alt="cmodel06" className="modelimg7"></img>
					</div>

					<div className="bgimage8">
						<img src="/images/cmodel08.png" alt="cmodel08" className="modelimg8"></img>
					</div>

				 <div className="bgimage11">
						<img src="/images/arrow12.png" alt="cmodel08" className="modelimg11"></img>
					</div> 
					
					<form className="conatctform">
							 
						<div className="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-12 col-xs-12 contactmodealswrapper">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 connectwrapper">
								<div className="bgimage3">
								<img src="/images/cmodel04.png" alt="cmodel04" className="modelimg3"></img>
								</div>

								<div className="bgimage6">
						        <img src="/images/cmodel03.png" alt="cmodel03" className="modelimg6"></img>
					            </div>
								<div className="bgimage10">
						        <img src="/images/cmodel07.png" alt="cmodel07" className="modelimg10"></img>
					            </div>
								
								<h1 className="hiconnecttitle">Connect With Us</h1>

							</div>
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bgdiv1 ">
							
							   <input className="form-control bgcolor00" name="from" type="text" placeholder="Your name"/>

								 <div className="bgimage9">
										<img src="/images/cmodel09.png" alt="cmodel03" className="modelimg9"></img>
					            </div> 
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 bgdiv1">
							<input className="form-control bgcolor00" name="from" type="text" placeholder="Mobile"/>

							</div>
							<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 bgdiv1">
							<input className="form-control bgcolor00" name="from" type="text" placeholder="@gmail.com"/>

							</div>
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bgdiv1 ">
							
							   <input className="form-control bgcolor00" name="from" type="text" placeholder="Subject"/>
							</div>
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  bgdiv1">
									
							<textarea className="form-control bgcolor00" name="message" placeholder="How can we help?" rows="4"></textarea>
							        
							</div>
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
								<button type="button" className="btn col-lg-5 col-md-7 col-xs-12 col-sm-12 sbtn button1">Send A Message</button>
							</div>

						</div>
					</form>
					
					</div> */}

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
