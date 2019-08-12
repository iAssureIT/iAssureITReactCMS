import React from 'react';
import "./WhoWeAre.css";

export default class WhoWeAre extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-fluid">
			<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 wwrapper">
				<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 wwBox2">
					
					<div className="col-lg-6 col-md-6 col-sm-6 col-xl-6">
						<div className="winfotext1 col-lg-10 col-md-10 col-sm-10 col-xl-10 pull-right">
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
			</div>
		);
	}
}
