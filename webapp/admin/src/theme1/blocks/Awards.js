import React from 'react';
import './Awards.css';
export default class Awards extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			
			<div className="AwardsWrapper container-fluid">
				<img className="img-responsive" src="./images/44.png" alt="AwardsBanner"/>
					<div className="col-lg-12 col-md-12 hidden-sm hidden-xs">
						<h1 className="text-center AwardsTitle">LOREM IPSUM DOLOR SIT AMET,<br/>
						CONSECTETUR ADIPISCING ELIT. SED</h1>
						<h3 className="text-center AwardsRead"><u>Read More</u>>></h3>
						<ul class="AwardsImg">
						  <li class="aImg1"> 
						  	<img className="img-responsive" src="./images/40.png" alt="AwardsBanner"/>
						  </li>
						  <li class="aImg2">
						  	<img className="img-responsive" src="./images/41.png" alt="AwardsBanner"/> 
						  </li>
						  <li class="aImg3"> 
						  	<img className="img-responsive" src="./images/42.png" alt="AwardsBanner"/>
						  </li>
						  <li class="aImg4"> 
						  	<img className="img-responsive" src="./images/43.png" alt="AwardsBanner"/>
						  </li>
						</ul>
						{/*<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
								<div className="row">
									<div className="col-lg-3 col-md-3 col-sm-3 col-xl-3">
										<img className="img-responsive" src="./images/40.png" alt="AwardsBanner"/>
									</div>
									<div className="col-lg-3 col-md-3 col-sm-3 col-xl-3">
										<img className="img-responsive" src="./images/41.png" alt="AwardsBanner"/>
									</div>
									<div className="col-lg-3 col-md-3 col-sm-3 col-xl-3">
										<img className="img-responsive" src="./images/42.png" alt="AwardsBanner"/>
									</div>
									<div className="col-lg-3 col-md-3 col-sm-3 col-xl-3">
										<img className="img-responsive" src="./images/43.png" alt="AwardsBanner"/>
									</div>
								</div>
							</div>
						</div>*/}


					</div>
				
			</div>
		);
	}
}
