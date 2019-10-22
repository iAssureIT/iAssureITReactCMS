import React from 'react';
import "./Bdesignblock.css";

export default class Bdesignblock extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-fluid nopadding ecBox4">
				<img className="img-responsive pull-right" src="./images/ec11.png" alt="Bannerpng" style={{marginTop:"-1px",zIndex:"-1"}}/>
					<div className="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1 col-sm-12 col-xs-12">
						
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 centered">
							<div className="col-lg-10 col-lg-offset-1 col-md-10 col-sm-10 col-xl-10">
								
								<h1 className="b1h1"><b>YOU DESERVE THE <br/>HIGHLY CUSTOMISABLE, LUXERIOUS &
									HAND CRAFTED ONLINE STORE OR
									ECOMMERCE WEBSITE FOR YOUR
									PRECIOUS CLIENT ENGAGEMENT</b>
								</h1>
							
								{/*<h5  className="wrdmore"><span><u> Read More</u></span> >> </h5>*/}
							</div>
						</div>
					</div>
				
			</div>
		);
	}
}
