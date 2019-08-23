import React from 'react';

export default class AddressBlock extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				
						<div className="xsheight">
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 mtop30cf">
								<h1 className="headone"> Get in Touch</h1>
							</div>
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 bt20">
								<div className="col-lg-2 col-md-2 col-xs-2 col-sm-2">
									<img src="/images/loca.png" height="45px"/>
								</div>
								<div className="col-lg-10 col-md-10 col-xs-10 col-sm-10">
									<label className=""><b>Visit Us:</b> </label><br/>
									<p>#323, Amanora Chambers,Amanora Town Center East Block,
										Opposite Magarpatta City,Pune, India 400 028
									</p>

								</div>
							</div>
						
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 bt20">
								<div className="col-lg-2 col-md-2 col-xs-2 col-sm-2">
									<img src="/images/mail.png" height="45px"/>

								</div>
								<div className="col-lg-10 col-md-10 col-xs-10 col-sm-10">
									<label className=""><b>Mail Us:</b> </label><br/>
									<p>info@iassureit.com
									</p>

								</div>
							</div>
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 bt20">
								<div className="col-lg-2 col-md-2 col-xs-2 col-sm-2">
									<img src="/images/phn.png" height="45px"/>

								</div>
								<div className="col-lg-10 col-md-10 col-xs-10 col-sm-10">
									<label className=""><b>Phone Us:</b> </label><br/>
									<p>+91 - 9923 393 733
									</p>

								</div>
							</div>
							
						</div>
					
			</div>
		);
	}
}


/*
<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12  bt30 ml25">
								<label className="cName"><b>iAssure International Technologies Pvt Ltd.</b> </label><br/>
								<label className="compaddress">#323, Amanora Chambers,<br/>
								Amanora Town Center East Block, <br/>
								Opposite Magarpatta City, <br/>
								Pune, India 400 028 <br/>
								Ph: +91 - 9923 393 733 </label>
							</div>

*/