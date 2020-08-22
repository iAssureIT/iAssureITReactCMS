import React from 'react';
// import ContactForm from "./ContactForm.js";

import 'bootstrap/js/modal.js';
 


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

				
             	
             	<button type="button" className="btn btn-lg madalbtn btnbg " data-toggle="modal" data-target="#contactpage"  >Contact Us
				</button>

				
				<div id="contactpage" class="modal fade modalwrapphight" role="dialog">
				<div class="modal-dialog modalhight">
				 <div className="bgimage1">
					<img src="/images/cmodel05.png" alt="cmodel05" className="modelimg1 img-responsive"></img>
				</div> 
				<div className="bgimage2">
						<img src="/images/cmodel01.png" alt="cmodel04" className="modelimg2 img-responsive"></img>
					</div>

				 <div className="bgimage4">
						<img src="/images/cmodel2.png" alt="cmodel2" className="modelimg4 img-responsive"></img>
				</div> 
				 <div className="bgimage5">
						<img src="/images/cmodel10.png" alt="cmodel10" className="modelimg5 img-responsive"></img>
				</div> 
				<div className="bgimage7">
						<img src="/images/cmodel06.png" alt="cmodel06" className="modelimg7 img-responsive"></img>
				</div>
				<div className="bgimage8">
						<img src="/images/cmodel08.png" alt="cmodel08" className="modelimg8 img-responsive"></img>
				</div>
				<div className="bgimage11">
						<img src="/images/arrow12.png" alt="cmodel08" className="modelimg11 img-responsive"></img>
				</div>  
				
				<div class="modal-content ">
					<div class="modal-header modal-header00">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
				    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						 <div className="bgimage3">
							<img src="/images/cmodel04.png" alt="cmodel04" className="modelimg3 img-responsive"></img>
						</div> 
						<div className="bgimage6">
						    <img src="/images/cmodel03.png" alt="cmodel03" className="modelimg6 img-responsive"></img>
					    </div> 
						 <div className="bgimage10">
						   <img src="/images/cmodel07.png" alt="cmodel07" className="modelimg10 img-responsive"></img>
					    </div> 

					      <h1 className="hiconnecttitle">Connect With Us</h1>
					   </div>
					   <form>
					    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bgdiv1">
						 <div className="bgimage9">
							<img src="/images/cmodel09.png" alt="cmodel03" className="modelimg9 img-responsive"></img>
					     </div>
						  <input className="form-control bgcolor00" name="from" type="text" placeholder="Your name"/>
					    </div>
						<div className="row">
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bgdiv1">
						    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
							   <input className="form-control bgcolor00" name="from" type="text" placeholder="Mobile"/>

							</div>
							<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
							<input className="form-control bgcolor00 wrapwidth" name="from" type="text" placeholder="your email here"/>

							</div>
							</div>

						</div>
							 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bgdiv1">
							
							   <input className="form-control bgcolor00" name="from" type="text" placeholder="Subject"/>
							</div> 
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  bgdiv1">
									
							<textarea className="form-control bgcolor00" name="message" placeholder="How can we help?" rows="4"></textarea>
							        
							</div> 
							 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
								<button type="button" className="btn col-lg-5 col-md-7 col-xs-12 col-sm-12 sbtn button1">Send A Message</button>
							</div> 
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
		);
	}
}
			