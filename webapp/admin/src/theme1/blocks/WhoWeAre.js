import React from 'react';
import "./WhoWeAre.css";

export default class WhoWeAre extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-fluid nopadding">
				<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 wwrapper container-fluid hidden-sm hidden-xs ">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 wwBox2">
						
						<div className="col-lg-6 col-md-6 col-sm-6 col-xl-6">
							<div className="winfotext1 col-lg-10 col-md-10 col-sm-10 col-xl-10 pull-right">
								<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 ">
									<ul className="dashBoxWwA col-lg-4	">
									  <li className="dash1WwA"></li>
									  <li className="dash2WwA"></li>
									  <li className="dash3WwA"></li>
									</ul>
								</div>
								<h1 className="wheadingb1">Who<b> We Are?</b>
								</h1>
								<p className="wpara1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
								Sed feu-giat euismod leo sed efficitur. Sed quis ultricies
								ante. Donec quistristique magna.

								</p>	
								<p className="wpara1">Etiam sit amet maximus dui. Phasellus iaculis consequat 
								tempus. Sed lorem nunc, tempor a vehicula et, molestie 
								sedmetus. Morbi feugiat nulla tincidunt nisl mattis sollicitudin.
								</p>
								<h5  className="wrdmore"><span><u> Read More</u></span> >> </h5>

							</div>

						</div>
						<div className="col-lg-6 col-md-6 col-sm-6 col-xl-6 ">
							<img className="winfoImg1 img-responsive" src="./images/38.png" alt="Bannerpng"/>

						</div>

					</div>
					<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 wwBox1">
						<div className="col-lg-6 col-md-6 col-sm-6 col-xl-6 ">
							<img className="winfoImg1 img-responsive pull-right" src="./images/39.png" alt="Bannerpng"/>

						</div>
						<div className="col-lg-6 col-md-6 col-sm-6 col-xl-6">
							<div className="winfotext1 col-lg-10 col-md-10 col-sm-10 col-xl-10">
								<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 ">
									<ul className="dashBoxWwA col-lg-4	">
									  <li className="dash1WwA"></li>
									  <li className="dash2WwA"></li>
									  <li className="dash3WwA"></li>
									</ul>
								</div>
								<h1 className="wheadingb1">Mission<b> Vision</b>
								</h1>
								<p className="wpara1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
								Sed feu-giat euismod leo sed efficitur. Sed quis ultricies
								ante. Donec quistristique magna.

								</p>	
								<p className="wpara1">Etiam sit amet maximus dui. Phasellus iaculis consequat 
								tempus. Sed lorem nunc, tempor a vehicula et, molestie 
								sedmetus. Morbi feugiat nulla tincidunt nisl mattis sollicitudin.
								</p>
								<h5  className="wrdmore"><span><u> Read More</u></span> >> </h5>
							</div>
						</div>
					</div>
				</div>	

				{/*====================================================================================*/
				/*====================================================================================*/
				/*============================== Mobile View =========================================*/
				/*====================================================================================*/
				/*====================================================================================*/}
				<div className="col-xs-12 col-sm-12 wwrapperxs container-fluid hidden-lg hidden-md nopadding">
					<div className="col-xs-12 col-sm-12 wwBox2xs">
						<div className="col-xs-12  col-sm-12">
							<div className="winfotext1xs col-sm-12 col-xs-12">
								<div className="col-sm-12 col-xs-12 ">
									<ul className="dashBoxWwAxs col-xs-6 col-xs-offset-4 col-sm-6 col-sm-offset-5">
									  <li className="dash1WwAxs"></li>
									  <li className="dash2WwAxs"></li>
									  <li className="dash3WwAxs"></li>
									</ul>
								</div>
								<h1 className="wheadingb1xs">Who<b> We Are?</b>
								</h1>
								<p className="wpara1xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
								Sed feu-giat euismod leo sed efficitur. Sed quis ultricies
								ante. Donec quistristique magna.

								</p>	
								<p className="wpara1xs">Etiam sit amet maximus dui. Phasellus iaculis consequat 
								tempus. Sed lorem nunc, tempor a vehicula et, molestie 
								sedmetus. Morbi feugiat nulla tincidunt nisl mattis sollicitudin.
								</p>
								<h5  className="wrdmorexs"><span><u> Read More</u></span> >> </h5>

							</div>

						</div>
						<div className="col-sm-12 col-xs-12">
							<img className="winfoImg1xs img-responsive col-sm-offset-3" src="./images/38.png" alt="Bannerpng"/>

						</div>

					</div>
					<div className="col-sm-12 col-xs-12 wwBox1xs">
						<div className="col-sm-12 col-xs-12">
							<img className="winfoImg2xs img-responsive col-sm-offset-3" src="./images/39.png" alt="Bannerpng"/>

						</div>
						<div className="col-sm-12 col-xs-12">
							<div className="winfotext1xs col-sm-12 col-xs-12">
								<div className="col-sm-12 col-xs-12 ">
									<ul className="dashBoxWwAxs col-xs-10 col-xs-offset-4 col-sm-6 col-sm-offset-5">
									  <li className="dash1WwAxs"></li>
									  <li className="dash2WwAxs"></li>
									  <li className="dash3WwAxs"></li>
									</ul>
								</div>
								<h1 className="wheadingb1xs">Mission<b> Vision</b>
								</h1>
								<p className="wpara1xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
								Sed feu-giat euismod leo sed efficitur. Sed quis ultricies
								ante. Donec quistristique magna.

								</p>	
								<p className="wpara1xs">Etiam sit amet maximus dui. Phasellus iaculis consequat 
								tempus. Sed lorem nunc, tempor a vehicula et, molestie 
								sedmetus. Morbi feugiat nulla tincidunt nisl mattis sollicitudin.
								</p>
								<h5  className="wrdmorexs"><span><u> Read More</u></span> >> </h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
