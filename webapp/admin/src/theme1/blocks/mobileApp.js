import React from 'react';
import "./mobileApp.css";


export default class mobileApp extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		return (
			
				<div className="banerheightma container-fluid ">
				<div className="col-lg-12 col-md-12 hidden-sm hidden-xs container">
					<div className="col-lg-12 col-md-12 hidden-sm hidden-xs logoBox">
						<img className="logo img-responsive" src="./images/Logo.png" alt="logo"/>
					
					</div>
					<div className="col-lg-6 col-md-6 col-lg-offset-1 col-md-offset-1 hidden-sm hidden-xs">
						<div className="pull-right mtop100">
							<span className="h1Title">
							</span><br/>
							<span className="h3Titlema">MOBILE APP
							</span><br/>
							<span className="h2Titlema">DEVELOPMENT
							</span>
						</div>	
					</div>
					<div className=" col-lg-5 col-md-5 hidden-sm hidden-xs row">
						<img className="bannerImgma img-responsive" src="./images/2ma.png" alt="Bannerpng"/>
					</div>
				</div>

	{/*  ================================ mobile view =====================================*/}
				<div className="hidden-lg hidden-md col-xl-12 col-sm-12">
					<div className="hidden-lg hidden-md col-xs-12 col-sm-12 row logoBox">
						<img className="logoxs img-responsive" src="./images/Logo.png" alt="logo"/>
						{/*<img className="menuimgxs img-responsive pull-right" src="./images/3menubar.png" alt="logo"/>*/}
					</div>
					<div className="hidden-lg hidden-md col-sm-12 col-xs-12">
						<div className="mtop100xs">
							<div className="h1Titlexs">MOBILITY
							</div><br/>
							<div className="h2Titlexs">SOLUTIONS
							</div><br/>
							<div className="h3Titlexs">We Build Robust & Scalable<br/> Mobile Applications
							</div>
						</div>	
					</div>
					<div className="hidden-lg hidden-md col-sm-12 col-xs-12 row">
						<img className="bannerImgxs img-responsive col-sm-offset-3" src="./images/2.png" alt="Bannerpng"/>
					</div>
				</div>	
				
				
			</div>
			
		);
	}
}
