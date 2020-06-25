import React from 'react';
import "./Services.css";
import $ from "jquery";

export default class Services extends React.Component {

	constructor(props) {
		super(props);
	} 
	componentDidMount(){
		/*$(window).scroll(function () {
        if ($(this).scrollTop() > 135) {
        $('#ahex1').addClass('ahex0'); 
        $('#ahex2').addClass('ahex1'); 
        $('#ahex3').addClass('ahex2');
        $('#ahex4').addClass('ahex4'); 
        $('#ahex5').addClass('ahex1'); 
        $('#ahex6').addClass('ahex1'); 
        $('#ahex7').addClass('ahex2'); 
        $('#ahex8').addClass('ahex3');   		       
        }else
        {
        	$('#ahex1').removeClass('ahex0');
        	$('#ahex2').removeClass('ahex1');
        	$('#ahex3').removeClass('ahex2');
        	$('#ahex4').removeClass('ahex1');
        	$('#ahex5').removeClass('ahex1');
        	$('#ahex6').removeClass('ahex1');
        	$('#ahex7').removeClass('ahex2');
        	$('#ahex8').removeClass('ahex3');           
        }<div className="col-xs-12 col-sm-12 hidden-lg hidden-md">
						<ul className="xsdashBoxS col-sm-7 col-sm-offset-5 col-xs-7 col-xs-offset-3">
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
						<div className="col-xs-6 col-xs-offset-3 col-sm-5 col-sm-offset-4  hidden-lg hidden-md xshex1">
							<div className="col-xs-12 col-sm-12 ">
								<img src="./images/5.png" className="xshexaImg2" alt="webAppImg"/>
								<h4 className="xshexaContext1 text-center">ENTERPRISE<br/> APPS</h4>
							</div>
						</div>
						
							<div className="hidden-lg hidden-md col-sm-6 col-xs-6 xsl1hex1">
								<div className="row">
									<div className="hidden-lg hidden-md col-sm-10 col-xs-12 xshex1  pull-right">
										<div className="col-xs-12 col-sm-12">
											<img src="./images/4.png" className="xshexaImg3" alt="webAppImg"/>
											<h4 className="xshexaContext2">WEB APPS</h4>
										</div>	
									</div>
								</div>
							</div>
							<div className="hidden-lg hidden-md col-xs-6 col-sm-6 xsl1hex2">
								<div className="row">
									<div className="hidden-lg hidden-md col-sm-10 col-xs-12 pull-left xshex1">
										<div className="col-xs-12 col-sm-12">
											<img src="./images/6.png" className="xshexaImg4" alt="webAppImg"/>
											<h4 className="xshexaContext2">MOBILE <br/>APPS</h4>
										</div>
									</div>
								</div>
							</div>
						<div className="col-xs-6 col-xs-offset-3 col-sm-5 col-sm-offset-4 hidden-lg hidden-md xshex2 xsl1hex3">
							<div className="col-xs-12 col-sm-12">
								<h4 className="xshexaContext3">SERVICES</h4>
							</div>
						</div>
						
							<div className="col-xs-6 col-sm-6 hidden-lg hidden-md xsl1hex4">
								<div className="row">
									<div className="col-xs-12  col-sm-10 hidden-lg hidden-md xshex1 pull-right">
										<div className="col-xs-12 col-sm-12">
												<img src="./images/7.png"className="xshexaImg3" alt="webAppImg"/>
												<h4 className="xshexaContext2">BUSINESS<br/> PORTAL</h4>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xs-6 col-sm-6 hidden-lg hidden-md xsl1hex5">
								<div className="row">
									<div className="col-xs-12  col-sm-10 hidden-lg hidden-md xshex1 pull-left">
										<div className="col-xs-12 col-sm-12">
											<img src="./images/8.png" className="xshexaImg3" alt="webAppImg"/>
											<h4 className="xshexaContext2">STAFF AUGME<br/>NTATION</h4>
										</div>
									</div>
								</div>
							</div>
						<div className="col-xs-6 col-xs-offset-3 col-sm-5 col-sm-offset-4 hidden-lg hidden-md xshex1 xsl1hex6">
							<div className="col-xs-12 col-sm-12">
								<img src="./images/9.png" className="xshexaImg2" alt="webAppImg"/>
								<h4 className="xshexaContext1">eCOMMERCE <br/>PORTAL</h4>
							</div>
					
    	});*/
	}

	render() {
		return (
			<div className="serviceheight container-fluid">	
				<div className="col-lg-12 col-md-12 ">
					<div className="col-lg-12 col-md-12 hidden-sm hidden-xs">
						<ul className="dashBoxS col-lg-2 col-lg-offset-5 col-md-2 col-md-offset-5">
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
						<div id="ahex1" className="col-lg-2 col-lg-offset-5 col-md-2 col-md-offset-5 hidden-sm hidden-xs hex1 ">
							<div className="col-lg-12 col-md-12">
								<img src="./images/5.png" className="hexaImg2" alt="webAppImg"/>
								<h4 className="hexaContext1 text-center">ENTERPRISE<br/> APPS</h4>
							</div>
						</div>
						
							<div id="ahex2" className="col-lg-6 col-md-6 hidden-sm hidden-xs l1hex1">
								<div className="row">
									<div className="col-lg-4  col-md-4  hex1  pull-right">
										<div className="col-lg-12 col-md-12">
											<img src="./images/4.png" className="hexaImg3" alt="webAppImg"/>
											<h4 className="hexaContext2">WEB APPS</h4>
										</div>	
									</div>
								</div>
							</div>
							<div id="ahex3" className="col-lg-6 col-md-6 hidden-sm hidden-xs l1hex2">
								<div className="row">
									<div className="col-lg-4  col-md-4 pull-left hex1">
										<div className="col-lg-12 col-md-12">
											<img src="./images/6.png" className="hexaImg4" alt="webAppImg"/>
											<h4 className="hexaContext2">MOBILE <br/>APPS</h4>
										</div>
									</div>
								</div>
							</div>
						<div id="ahex4" className="col-lg-2 col-lg-offset-5 col-md-2 col-md-offset-5 hidden-sm hidden-xs hex2 l1hex3">
							<div className="col-lg-12 col-md-12">
								<h4 className="hexaContext3">SERVICES</h4>
							</div>
						</div>
						
							<div id="ahex5" className="col-lg-6 col-md-6 hidden-sm hidden-xs l1hex4">
								<div className="row">
									<div className="col-lg-4  col-md-4 hex1 pull-right">
										<div className="col-lg-12 col-md-12">
												<img src="./images/7.png"className="hexaImg3" alt="webAppImg"/>
												<h4 className="hexaContext2">BUSINESS<br/> PORTAL</h4>
										</div>
									</div>
								</div>
							</div>
							<div id="ahex7" className="col-lg-6 col-md-6  hidden-sm hidden-xs l1hex5">
								<div className="row">
									<div className="col-lg-4  col-md-4 hex1 pull-left">
										<div className="col-lg-12 col-md-12">
											<img src="./images/8.png" className="hexaImg3" alt="webAppImg"/>
											<h4 className="hexaContext2">STAFF AUGM<br/>ENTATION</h4>
										</div>
									</div>
								</div>
							</div>
						<div id="ahex8" className="col-lg-2 col-lg-offset-5 col-md-2 col-md-offset-5 hidden-sm hidden-xs hex1 l1hex6">
							<div className="col-lg-12 col-md-12">
								<img src="./images/9.png" className="hexaImg2" alt="webAppImg"/>
								<h4 className="hexaContext1">eCOMMERCE <br/>PORTAL</h4>
							</div>
						</div>

					</div>
{/*====================================================== mobile view======================*/}
					<div className="col-xs-12 col-sm-12 hidden-lg hidden-md row mobilewrapper row">
						<ul className="xsdashBoxS col-sm-7 col-sm-offset-5 col-xs-7 col-xs-offset-3 row">
						  <li className="xsdash1S "></li>
						  <li className="xsdash2S"></li>
						  <li className="xsdash3S"></li>
						</ul>
					
					<div className="col-xs-12 col-sm-12 hidden-lg hidden-md row">
						<div className="text-center">
							<h1 className="xsmtop30">
								<b>Services</b>
							</h1>
						</div>
						<div className="col-xs-6 col-xs-offset-3 col-sm-5 col-sm-offset-4  hidden-lg hidden-md xshex1 row">
							<div className="col-xs-12 col-sm-12 ">
								<img src="./images/5.png" className="xshexaImg2" alt="webAppImg"/>
								<h4 className="xshexaContext1  xshexaContext01 text-center">ENTERPRISE<br/> APPS</h4>
							</div>
						</div>
						
							<div className="hidden-lg hidden-md col-sm-6 col-xs-6 xsl1hex1">
								<div className="row">
									<div className="hidden-lg hidden-md col-sm-10 col-xs-12 xshex1  pull-right">
										<div className="col-xs-12 col-sm-12">
											<img src="./images/4.png" className="xshexaImg3" alt="webAppImg"/>
											<h4 className="xshexaContext2">WEB APPS</h4>
										</div>	
									</div>
								</div>
							</div>
							<div className="hidden-lg hidden-md col-xs-6 col-sm-6 xsl1hex2">
								<div className="row">
									<div className="hidden-lg hidden-md col-sm-10 col-xs-12 pull-left xshex1">
										<div className="col-xs-12 col-sm-12">
											<img src="./images/6.png" className="xshexaImg4" alt="webAppImg"/>
											<h4 className="xshexaContext2">MOBILE <br/>APPS</h4>
										</div>
									</div>
								</div>
							</div>
						<div className="col-xs-6 col-xs-offset-3 col-sm-5 col-sm-offset-4 hidden-lg hidden-md xshex2 xsl1hex3">
							<div className="col-xs-12 col-sm-12">
								<h4 className="xshexaContext3 htitleservices">SERVICES</h4>
							</div>
						</div>
						
							<div className="col-xs-6 col-sm-6 hidden-lg hidden-md xsl1hex4">
								<div className="row">
									<div className="col-xs-12  col-sm-10 hidden-lg hidden-md xshex1 pull-right">
										<div className="col-xs-12 col-sm-12">
												<img src="./images/7.png"className="xshexaImg3" alt="webAppImg"/>
												<h4 className="xshexaContext2">BUSINESS<br/> PORTAL</h4>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xs-6 col-sm-6 hidden-lg hidden-md xsl1hex5">
								<div className="row">
									<div className="col-xs-12  col-sm-10 hidden-lg hidden-md xshex1 pull-left">
										<div className="col-xs-12 col-sm-12">
											<img src="./images/8.png" className="xshexaImg3" alt="webAppImg"/>
											<h4 className="xshexaContext2">STAFF AUGME<br/>NTATION</h4>
										</div>
									</div>
								</div>
							</div>
						<div className="col-xs-6 col-xs-offset-3 col-sm-5 col-sm-offset-4 hidden-lg hidden-md xshex1 xsl1hex6">
							<div className="col-xs-12 col-sm-12">
								<img src="./images/9.png" className="xshexaImg2" alt="webAppImg"/>
								<h4 className="xshexaContext1">eCOMMERCE <br/>PORTAL</h4>
							</div>
						</div>
					</div>
					</div>
				</div>

			</div>
		);
	}
}
