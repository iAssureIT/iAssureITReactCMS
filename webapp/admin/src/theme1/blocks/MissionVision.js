import React from 'react';
import "./MissionVision.css"

export default class MissionVision extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			
			<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 MVwrapper">
				<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 mvBox2">
					
					<div className="col-lg-6 col-md-6 col-sm-6 col-xl-6">
						<div className="mvinfotext1 col-lg-10 col-md-10 col-sm-10 col-xl-10 pull-right">
							<h1 className="mvheadingb1"><b>Advantage</b>
							</h1>
							<p className="mvpara1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Sed feu-giat euismod leo sed efficitur. Sed quis ultricies
							ante. Donec quistristique magna.

							</p>	
							<p className="mvpara1">Etiam sit amet maximus dui. Phasellus iaculis consequat 
							tempus. Sed lorem nunc, tempor a vehicula et, molestie 
							sedmetus. Morbi feugiat nulla tincidunt nisl mattis sollicitudin.
							</p>
							<h5  className="mvrdmore"><span><u> Read More</u></span> >> </h5>

						</div>

					</div>
					<div className="col-lg-6 col-md-6 col-sm-6 col-xl-6 ">
						<img className="mvinfoImg1 img-responsive" src="./images/46.png" alt="Bannerpng"/>

					</div>

				</div>
				<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 mvBox1">
					<div className="col-lg-6 col-md-6 col-sm-6 col-xl-6 ">
						<img className="mvinfoImg1 img-responsive pull-right" src="./images/47.png" alt="Bannerpng"/>

					</div>
					<div className="col-lg-6 col-md-6 col-sm-6 col-xl-6">
						<div className="mvinfotext1 col-lg-10 col-md-10 col-sm-10 col-xl-10">
							<h1 className="mvheadingb1">Why<b>Choose ?</b>
							</h1>
							<p className="mvpara1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Sed feu-giat euismod leo sed efficitur. Sed quis ultricies
							ante. Donec quistristique magna.

							</p>	
							<p className="mvpara1">Etiam sit amet maximus dui. Phasellus iaculis consequat 
							tempus. Sed lorem nunc, tempor a vehicula et, molestie 
							sedmetus. Morbi feugiat nulla tincidunt nisl mattis sollicitudin.
							</p>
							<h5  className="mvrdmore"><span><u> Read More</u></span> >> </h5>
						</div>
					</div>
				</div>
			</div>	
			
		);
	}
}
