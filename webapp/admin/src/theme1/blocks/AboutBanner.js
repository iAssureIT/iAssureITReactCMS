import React from 'react';
import "./AboutBanner.css"
export default class AboutBanner extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="ABOUTbanerheight container-fluid">
				<div className="col-lg-12 col-md-12 hidden-sm hidden-xs">
					<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 logoBox">
						<a href="/" ><img className="logoab img-responsive" src="./images/Logo.png" alt="logo"/></a>
						{/*<img className="menuimgab img-responsive pull-right" src="./images/3menubar.png" alt="logo"/>*/}
					</div>
					<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div className="pull-right mtop305">
							
							<span className="h2Title monFont">ABOUT US
							</span><br/>
							<span className="h3Title monFont">We are passionate about our work
							</span>
						</div>	
					</div>
					<div className=" col-lg-5 col-md-5 col-sm-6 col-xs-6 row">
						<img className="abbannerImg img-responsive" src="./images/37.png" alt="Bannerpng"/>
					</div>
				</div>
				<div className="col-xs-12 col-sm-12 hidden-lg hidden-md">
					<div className="col-xs-12 col-sm-12 hidden-lg hidden-md logoBox">
						<img className="logoabxs img-responsive" src="./images/Logo.png" alt="logo"/>
						{/*<img className="menuimgabxs img-responsive pull-right" src="./images/3menubar.png" alt="logo"/>*/}
					</div>
					<div className="col-xs-12 col-sm-12 hidden-lg hidden-md">
						<div className="mtop305xs text-center">
							
							<span className="h2Titlexs">ABOUT US
							</span><br/>
							<span className="h3Titlexs">We are passionate about our work
							</span>
						</div>	
					</div>
					<div className="col-xs-12 col-sm-12 hidden-lg hidden-md row">
						<img className="abbannerImgxs img-responsive col-sm-offset-3" src="./images/37.png" alt="Bannerpng"/>
					</div>
				</div>	
				
				
			</div>
		);
	}
}
