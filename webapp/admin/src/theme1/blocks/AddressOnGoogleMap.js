import React from 'react';
import "./AddressOnGoogleMap.css";
import $ from "jquery";

export default class AddressOnGoogleMap extends React.Component {


	constructor(props) {
		super(props);
	}
	componentDidMount(){
	/*	$(".text").click(function(){
			
		  $("#mapcontainer").hide();
		  $("#mapouter").show();
		});
		$(".textxs").click(function(){
			
		  $("#mapcontainerxs").hide();
		  $("#mapouterxs").show();
		});
	*/
		  $("#mapouter").show();
		  $("#mapouterxs").show();
		  

	}
/*	toggleHidden(){

	}*/

	render() {
		return (
			<div className="gmapwrapper">
				<div class="demogmap_canvas col-md-12 col-lg-12 hidden-xs hidden-sm">
					
					{/*<div class="mapcontainer" id="mapcontainer">
					  <img src="/images/demomap.png" alt="Avatar" class="image" style={{width:"100%"}}/>
					  <div class="middle">
					    <div class="text">Click here to view Map</div>
					    
					  </div>
					</div>*/}
					<div class="mapouter" id="mapouter">
						<div class="gmap_canvas">
							<iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=iAssureIT%20hadapsar&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
							</iframe>
							<a href="https://www.emojilib.com">emojilib.com</a>
						</div>
					</div>
					
				</div>
			{/*mobile view*/}
				<div className="demogmap_canvasxs  hidden-lg hidden-md">
					
					
					<div className="mapouterxs" id="mapouterxs">
						<div className="gmap_canvas">
							<iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=iAssureIT%20hadapsar&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
							</iframe>
							<a href="https://www.emojilib.com">emojilib.com</a>
						</div>
					</div>
					
				</div>
				
				
			</div>
		);
	}
}

/*
<div class="mapouter">
					<div class="gmap_canvas col-lg-offset-2">
						<iframe width="1000" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=iAssureIT%20hadapsar&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
						</iframe>
						<a href="https://www.emojilib.com">emojilib.com</a>
					</div>
				</div>*/