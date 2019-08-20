import React from 'react';

export default class AddressBlock extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				
						<div className="xsheight">
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12  bt30">
								<h3 className="text-center"> CONTACT INFO</h3>
							</div>
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12  bt30 ml25">
								<label className="cName"><b>iAssure International Technologies Pvt Ltd.</b> </label><br/>
								<label className="compaddress">#323, Amanora Chambers,<br/>
								Amanora Town Center East Block, <br/>
								Opposite Magarpatta City, <br/>
								Pune, India 400 028 <br/>
								Ph: +91 - 9923 393 733 </label>
							</div>
						</div>
					
			</div>
		);
	}
}
