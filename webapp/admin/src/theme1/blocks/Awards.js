import React from 'react';
import './Awards.css';
export default class Awards extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-fluid nopadding">
				{/*Desktop View*/}
				<div className="AwardsWrapper container-fluid hidden-sm hidden-xs">
					<img className="img-responsive" src="./images/44.png" alt="AwardsBanner"/>
					<div className="col-lg-12 col-md-12 hidden-sm hidden-xs">
						<h1 className="text-center AwardsTitle">LOREM IPSUM DOLOR SIT AMET,<br/>
						CONSECTETUR ADIPISCING ELIT. SED</h1>
						<h4 className="text-center AwardsRead"><u>Read More</u>>></h4>
						<ul class="AwardsImg">
						  <li class="aImg1"> 
						  	<img className="img-responsive " src="./images/40.png" alt="AwardsBanner"/>
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
					</div>
				</div>
			{/*============================= Mobile View ================================*/}
				<div className="AwardsWrapperxs container-fluid hidden-lg hidden-md">
					<img className="img-responsive" src="./images/44.png" alt="AwardsBanner"/>
					<div className="col-xs-12 col-sm-12">
						<h1 className="text-center AwardsTitlexs">LOREM IPSUM DOLOR SIT AMET,<br/>
						CONSECTETUR ADIPISCING ELIT. SED</h1>
						<h4 className="text-center AwardsReadxs"><u>Read More</u>>></h4>
						<ul class="AwardsImgxs col-sm-12 col-xs-12">
						  <li class="aImg1xs col-sm-4 col-sm-offset-2 col-xs-5"> 
						  	<img className="img-responsive" src="./images/40.png" alt="AwardsBanner"/>
						  </li>
						  <li class="aImg2xs col-sm-4 col-sm-offset-1">
						  	<img className="img-responsive" src="./images/41.png" alt="AwardsBanner"/> 
						  </li>
						  <li class="aImg3xs col-sm-5 col-sm-offset-1"> 
						  	<img className="img-responsive" src="./images/42.png" alt="AwardsBanner"/>
						  </li>
						  <li class="aImg4xs col-sm-5 "> 
						  	<img className="img-responsive" src="./images/43.png" alt="AwardsBanner"/>
						  </li>
						</ul>
					</div>
				</div>

			</div>
		);
	}
}
