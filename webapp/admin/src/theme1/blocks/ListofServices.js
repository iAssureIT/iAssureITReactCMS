import React from 'react';
import "./ListofServices.css"
export default class ListofServices extends React.Component {


	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="listofServicesBox">
				<div className="text-center">
					<h1 className="mtop30">
						<b>Services</b>
					</h1>
				</div>
				<div className="col-lg-10 col-lg-offset-2 col-md-10
				 col-md-offset-2 col-sm-10 col-sm-offset-2 col-xl-10 col-xl-offset-1">
				 	<div className="col-lg-3 col-md-3 col-sm-3 col-xl-3 hexListS1">
				 		<div className="col-lg-12">
							<img src="./images/4.png" className="inhexaImg1" alt="webAppImg"/>
							<h4 className="inhexaContext1 text-center">WEB APPS</h4>
						</div>

				 	</div>
				 	<div className="col-lg-3 col-md-3 col-sm-3 col-xl-3 hexListS1">
				 		<div className="col-lg-12">
							<img src="./images/5.png" className="inhexaImg1" alt="webAppImg"/>
							<h4 className="inhexaContext1 text-center">ENTERPRISE<br/> APPS</h4>
						</div>

				 	</div>
				 	<div className="col-lg-3 col-md-3 col-sm-3 col-xl-3 hexListS1">
				 		<div className="col-lg-12">
							<img src="./images/6.png" className="inhexaImg1" alt="webAppImg"/>
							<h4 className="inhexaContext1 text-center">MOBILE APPS</h4>
						</div>

				 	</div>

				</div>
				<div className="col-lg-10 col-lg-offset-2 col-md-10
				 col-md-offset-2 col-sm-10 col-sm-offset-2 col-xl-10 col-xl-offset-1">
				 	<div className="col-lg-3 col-md-3 col-sm-3 col-xl-3 hexListS1">
				 		<div className="col-lg-12">
							<img src="./images/7.png" className="inhexaImg1" alt="webAppImg"/>
							<h4 className="inhexaContext1 text-center">BUSINESS<br/> PORTAL</h4>
						</div>

				 	</div>
				 	<div className="col-lg-3 col-md-3 col-sm-3 col-xl-3 hexListS1">
				 		<div className="col-lg-12">
							<img src="./images/8.png" className="inhexaImg1" alt="webAppImg"/>
							<h4 className="inhexaContext1 text-center">STAFF AUGM<br/>ENTATION</h4>
						</div>

				 	</div>
				 	<div className="col-lg-3 col-md-3 col-sm-3 col-xl-3 hexListS1">
				 		<div className="col-lg-12">
							<img src="./images/9.png" className="inhexaImg1" alt="webAppImg"/>
							<h4 className="inhexaContext1 text-center">eCOMMERCE <br/>PORTAL</h4>
						</div>

				 	</div>

				</div>
				

			</div>
		);
	}
}
