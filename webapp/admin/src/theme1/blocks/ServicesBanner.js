import React from 'react';
import "./ServicesBanner.css"
export default class ServicesBanner extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="banerSBheight hidden-sm hidden-xs">
					<div className="col-lg-12 col-md-12 hidden-sm hidden-xs row">{/*3menubar*/}
						<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 logoBox">
							<img className="logo img-responsive" src="./images/Logo.png" alt="logo"/>
							{/*<img className="menuimg img-responsive pull-right" src="./images/3menubar.png" alt="logo"/>*/}
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
							<div className="pull-right mtop100SB">
								<span className="h1TitleSB">iAssureIT
								</span><br/>
								<span className="h2TitleSB">SERVICES
								</span><br/>
								<span className="h3TitleSB">Lorem ipsum dolor sit amet,
								</span>
							</div>	
						</div>
						<div className=" col-lg-6 col-md-6 col-sm-12 col-xs-12 row">
							<img className="bannerImgSB img-responsive" src="./images/28.png" alt="Bannerpng"/>
						</div>
					</div>		
				</div>
		{/*  == === ==== ====== ====== mobile view ====== ===== ==== === == */}
				<div className="banerSBheightxs hidden-lg hidden-md">
					<div className="hidden-lg hidden-md col-xs-12 col-sm-12 row">{/*3menubar*/}
						<div className="hidden-lg hidden-md col-xs-12 col-sm-12 logoBox">
							<img className="logo img-responsive" src="./images/Logo.png" alt="logo"/>
							{/*<img className="menuimg img-responsive pull-right" src="./images/3menubar.png" alt="logo"/>*/}
						</div>
						<div className="hidden-lg hidden-md col-sm-12 col-xs-12">
							<div className="mtop100SBxs">
								<span className="h1TitleSBxs">iAssureIT
								</span><br/>
								<span className="h2TitleSBxs">SERVICES
								</span><br/>
								<span className="h3TitleSBxs">Lorem ipsum dolor sit amet,
								</span>
							</div>	
						</div>
						<div className="hidden-lg hidden-md col-sm-6 col-sm-offset-3 col-xs-12 row">
							<img className="bannerImgSBxs img-responsive" src="./images/28.png" alt="Bannerpng"/>
						</div>
					</div>		
				</div>
			</div>

		);
	}
}
