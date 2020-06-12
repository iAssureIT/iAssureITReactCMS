import React from 'react';
import $ from "jquery";

import './ConFormWithAddress.css';

import ContactUsForm from '../Contactusform/Contactusform.js';

export default class ConFormWithAddress extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount(){
		$("#LocationBox").hover(function(){
			$("#Location").toggleClass("tran90");
		});
		$("#WhatsAppBox").hover(function(){
			$("#WhatsApp").toggleClass("tran90");
		});
		$("#MailBox").hover(function(){
			$("#mail").toggleClass("tran90");
		});
	}
	render() {
		return (
			<div className="cfwa-Wrapper">
				<div className="ContactWrap hidden-xs hidden-sm">
	                <div className="padd50">
	                    <div className="col-md-12 col-lg-12">
	                        <div className="section-title">
	                           
	                        </div>
	                    </div>
	               		<div className="col-lg-12 col-md-12 formwrap">
	               			<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 lg4">
	               				<div className="col-lg-12 h133" id="LocationBox">
	               					<div className="row">
	               						<div className="col-lg-3">
	               							<div className="squre1">
	               								<img src="/img/cu1.png" className="ml45" id="Location" height="55px" width="55px"/>
	               								<img src="/img/Location.png" className="middleIcon" height="30px"/>
	               							</div>
	               							{/*<img src="/img/location.png" className="ml45" height="45px"/>*/}
	               						</div>
	               						<div className="col-lg-9 m5">
	               							<div className="text-center"><b>Our Location</b> </div>
											<div className="text-center">#323, Amanora Chambers,Amanora Town Center East Block,
												,Pune,<br/> India 411 028.
											</div>
	               						</div>

	               					</div>

	               				</div>
	               				<div className="col-lg-12 h133" id="WhatsAppBox">
	               					<div className="row">
	               						<div className="col-lg-3">
											{/*<img src="/img/whatsapp1.png" className="ml45" height="45px"/>*/}
											<div className="squre1">
	               								<img src="/img/cu1.png" className="ml45 " id="WhatsApp" height="55px" width="55px"/>
	               								<img src="/img/WhatsApp.png" className="middleIcon" height="30px"/>
	               							</div>
	               							
	               						</div>
	               						<div className="col-lg-9 m13">
	               							<div className="text-center"><b>Whatsapp Message Only</b> </div>
											<p className="text-center">
											+91 - 9923 393 733
											</p>
	               						</div>
	               					</div>
	               				</div>
	               				<div className="col-lg-12 h133" id="MailBox">
	               					<div className="row">
		               					<div className="col-lg-3 ">
	               							{/*<img src="/img/mail.png" className="ml45" height="45px"/>*/}
	               							<div className="squre1">
	               								<img src="/img/cu1.png" className="ml45" id="mail" height="55px" width="55px"/>
	               								<img src="/img/Mail.png" className="middleIcon" height="30px"/>
	               							</div>
	               						</div>
	               						<div className="col-lg-9 m13">
	               							<div className="text-center"><b>Write us Mail</b> </div>
											<p className="text-center"> info@iassureit.com
											</p>
	               						</div>
	               					</div>
	               				</div>
	               			</div>
	               			<div className="col-lg-8 lg8">
	               				<div className="col-lg-12 h460 nopadding">
	               					<ContactUsForm/>
	               				</div>
	               			</div>
	                	
	                	</div>
	                </div>

            	</div>

            {/*=============================================================*/}


            	<div className="ContactWrapmobile hidden-lg hidden-md">
	                <div className="">
	                    <div className="col-xs-12 col-sm-12">
	                        <div className="section-title">
	                           
	                        </div>
	                    </div>
	               		<div className="formwrap">
	               			<div className="col-sm-5 col-xs-12 lg4">
	               				<div className="col-lg-12 h133" id="LocationBox">
	               					<div className="row">
	               						<div className="col-xs-3">
	               							<div className="squre1">
	               								<img src="/img/cu1.png" className="ml45" id="Location" height="55px" width="55px"/>
	               								<img src="/img/Location.png" className="middleIcon" height="30px"/>
	               							</div>
	               							{/*<img src="/img/location.png" className="ml45" height="45px"/>*/}
	               						</div>
	               						<div className="col-xs-9 m5">
	               							<div className="text-center"><b>Our Location</b> </div>
											<div className="text-center">#323, Amanora Chambers,Amanora Town Center East Block,
												,Pune,<br/> India 411 028.
											</div>
	               						</div>

	               					</div>

	               				</div>
	               				<div className="col-lg-12 h133" id="WhatsAppBox">
	               					<div className="row">
	               						<div className="col-xs-3">
											{/*<img src="/img/whatsapp1.png" className="ml45" height="45px"/>*/}
											<div className="squre1">
	               								<img src="/img/cu1.png" className="ml45 " id="WhatsApp" height="55px" width="55px"/>
	               								<img src="/img/WhatsApp.png" className="middleIcon" height="30px"/>
	               							</div>
	               							
	               						</div>
	               						<div className="col-xs-9 m13">
	               							<div className="text-center"><b>Whatsapp Message Only</b> </div>
											<p className="text-center">
											+91 - 9923 393 733
											</p>
	               						</div>
	               					</div>
	               				</div>
	               				<div className="col-lg-12 h133" id="MailBox">
	               					<div className="row">
		               					<div className="col-xs-3 ">
	               							{/*<img src="/img/mail.png" className="ml45" height="45px"/>*/}
	               							<div className="squre1">
	               								<img src="/img/cu1.png" className="ml45" id="mail" height="55px" width="55px"/>
	               								<img src="/img/Mail.png" className="middleIcon" height="30px"/>
	               							</div>
	               						</div>
	               						<div className="col-xs-9 m13">
	               							<div className="text-center"><b>Write us Mail</b> </div>
											<p className="text-center"> info@iassureit.com
											</p>
	               						</div>
	               					</div>
	               				</div>
	               			</div>
	               			<div className="col-xs-12 col-sm-7 lg8">
	               				<div className="col-xs-12 col-sm-12 h460 nopadding">
	               					<ContactUsForm/>
	               				</div>
	               			</div>
	                	
	                	</div>
	                </div>

            	</div>
				
			</div>
		);
	}
}
