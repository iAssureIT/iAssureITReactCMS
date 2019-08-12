import React from 'react';
import "./Services.css";

export default class Services extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="serviceheight container-fluid">	
				<div className="col-lg-12 col-md-12 ">
					<div className="col-lg-12 col-md-12 hidden-sm hidden-xs">
						<ul className="dashBoxS col-lg-2 col-lg-offset-5">
						  <li className="dash1S "></li>
						  <li className="dash2S"></li>
						  <li className="dash3S"></li>
						</ul>
					</div>
					<div className="col-lg-12 col-md-12 hidden-sm hidden-xs">
						<div className="text-center">
							<h1 className="mtop30">
								<b>Services</b>
							</h1>
						</div>
						<div className="col-lg-2 col-lg-offset-5 col-md-2 col-lg-offset-5 hidden-sm hidden-xs hex1">
							<div className="col-lg-12">
								<img src="./images/5.png" className="hexaImg2" alt="webAppImg"/>
								<h4 className="hexaContext1 text-center">ENTERPRISE<br/> APPS</h4>
							</div>
						</div>
						
							<div className="col-lg-6 col-md-6 hidden-sm hidden-xs l1hex1">
								<div className="row">
									<div className="col-lg-4  col-md-2  hex1  pull-right">
										<div className="col-lg-12">
											<img src="./images/4.png" className="hexaImg3" alt="webAppImg"/>
											<h4 className="hexaContext2">WEB APPS</h4>
										</div>	
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 hidden-sm hidden-xs l1hex2">
								<div className="row">
									<div className="col-lg-4  col-md-4 col-sm-8 col-xl-4 pull-left hex1">
										<div className="col-lg-12">
											<img src="./images/6.png" className="hexaImg4" alt="webAppImg"/>
											<h4 className="hexaContext2">MOBILE <br/>APPS</h4>
										</div>
									</div>
								</div>
							</div>
						<div className="col-lg-2 col-lg-offset-5 col-md-2 col-lg-offset-5 hidden-sm hidden-xs hex2 l1hex3">
							<div className="col-lg-12">
								<h4 className="hexaContext3">SERVICES</h4>
							</div>
						</div>
						
							<div className="col-lg-6 col-md-6 hidden-sm hidden-xs l1hex4">
								<div className="row">
									<div className="col-lg-4  col-md-2 col-sm-2 col-xl-2 hex1 pull-right">
										<div className="col-lg-12">
												<img src="./images/7.png"className="hexaImg3" alt="webAppImg"/>
												<h4 className="hexaContext2">BUSINESS<br/> PORTAL</h4>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 hidden-sm hidden-xs l1hex5">
								<div className="row">
									<div className="col-lg-4  col-md-2 col-sm-2 col-xl-2 hex1 pull-left">
										<div className="col-lg-12">
											<img src="./images/8.png" className="hexaImg3" alt="webAppImg"/>
											<h4 className="hexaContext2">STAFF AUGM<br/>ENTATION</h4>
										</div>
									</div>
								</div>
							</div>
						<div className="col-lg-2 col-lg-offset-5 col-md-2 col-lg-offset-5 hidden-sm hidden-xs hex1 l1hex6">
							<div className="col-lg-12">
								<img src="./images/9.png" className="hexaImg2" alt="webAppImg"/>
								<h4 className="hexaContext1">eCOMMERCE <br/>PORTAL</h4>
							</div>
						</div>

					</div>
{/*====================================================== mobile view======================*/}
					<div className="col-xs-12 col-sm-12 hidden-lg hidden-md">
						<ul className="xsdashBoxS col-xs-7 col-xs-offset-3">
						  <li className="xsdash1S "></li>
						  <li className="xsdash2S"></li>
						  <li className="xsdash3S"></li>
						</ul>
					</div>
					<div className="col-xs-12 col-sm-12 hidden-lg hidden-md">
						<div className="text-center">
							<h1 className="xsmtop30">
								<b>Services</b>
							</h1>
						</div>
						<div className="col-xs-5 col-xs-offset-4 col-sm-5 col-sm-offset-4  hidden-lg hidden-md xshex1">
							<div className="col-xs-12">
								<img src="./images/5.png" className="xshexaImg2" alt="webAppImg"/>
								<h4 className="xshexaContext1 text-center">ENTERPRISE<br/> APPS</h4>
							</div>
						</div>
						
							<div className="hidden-lg hidden-md col-sm-6 col-xs-6 xsl1hex1">
								<div className="row">
									<div className="hidden-lg hidden-md col-sm-10 col-xs-10 xshex1  pull-right">
										<div className="col-xs-12">
											<img src="./images/4.png" className="xshexaImg3" alt="webAppImg"/>
											<h4 className="xshexaContext2">WEB APPS</h4>
										</div>	
									</div>
								</div>
							</div>
							<div className="hidden-lg hidden-md col-sm-6 col-sm-6 xsl1hex2">
								<div className="row">
									<div className="hidden-lg hidden-md col-sm-5 col-xs-5 pull-left xshex1">
										<div className="col-xs-12">
											<img src="./images/6.png" className="xshexaImg4" alt="webAppImg"/>
											<h4 className="xshexaContext2">MOBILE <br/>APPS</h4>
										</div>
									</div>
								</div>
							</div>
						<div className="col-xs-5 col-xs-offset-4 col-sm-5 col-sm-offset-4 hidden-lg hidden-md xshex2 xsl1hex3">
							<div className="col-xs-12">
								<h4 className="xshexaContext3">SERVICES</h4>
							</div>
						</div>
						
							<div className="col-xs-6 col-sm-6 hidden-lg hidden-md xsl1hex4">
								<div className="row">
									<div className="col-xs-10  col-sm-10 hidden-lg hidden-md xshex1 pull-right">
										<div className="col-xs-12">
												<img src="./images/7.png"className="xshexaImg3" alt="webAppImg"/>
												<h4 className="xshexaContext2">BUSINESS<br/> PORTAL</h4>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xs-6 col-sm-6 hidden-lg hidden-md xsl1hex5">
								<div className="row">
									<div className="col-xs-10  col-sm-10 hidden-lg hidden-md xshex1 pull-left">
										<div className="col-xs-12">
											<img src="./images/8.png" className="xshexaImg3" alt="webAppImg"/>
											<h4 className="xshexaContext2">STAFF AUGME<br/>NTATION</h4>
										</div>
									</div>
								</div>
							</div>
						<div className="col-xs-5 col-xs-offset-4 col-sm-5 col-sm-offset-4 hidden-lg hidden-md xshex1 xsl1hex6">
							<div className="col-lg-12">
								<img src="./images/9.png" className="xshexaImg2" alt="webAppImg"/>
								<h4 className="xshexaContext1">eCOMMERCE <br/>PORTAL</h4>
							</div>
						</div>

					</div>
				</div>

			</div>
		);
	}
}
