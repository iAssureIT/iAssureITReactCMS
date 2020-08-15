import React from 'react';
import "./AddressOnGoogleMap.css";
import $ from "jquery";

export default class AddressOnGoogleMap extends React.Component {


	constructor(props) {
		super(props);
	}
	componentDidMount(){
	
		  $("#mapouter").show();
		  $("#mapouterxs").show();
		  

	}
	render() {
		return (
			<div className="gmapwrapper">
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div className="text-center Glocationmap">
						<h1 className="location">
							<b> Our Location</b>
						</h1>
					</div>
				</div>
				<div class="demogmap_canvas col-md-12 col-lg-12 col-sm-12 col-xs-12">
					<div className="mapouter" id="mapouter">
						<div class="gmap_canvas">
							<iframe width="100%" height="480" id="gmap_canvas" src="https://maps.google.com/maps?q=iAssureIT%20hadapsar&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
							</iframe>
							{/* <a href="https://www.emojilib.com">emojilib.com</a> */}
						</div>
					</div>
					
				</div>

				</div>
		);
	}
}




				
				


