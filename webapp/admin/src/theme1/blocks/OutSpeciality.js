import React from 'react';
import "./OutSpeciality.css";

export default class OutSpeciality extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-fluid nopadding">
			<div className="OurSpecialityHeight  hidden-sm hidden-xs">
				<div className="col-lg-12 col-md-12 hidden-sm hidden-xs bhead">
					<div className="col-lg-12 col-md-12 hidden-sm hidden-xs ">
						<ul className="dashBoxOS col-lg-2 col-lg-offset-5">
						  <li className="dash1OS"></li>
						  <li className="dash2OS"></li>
						  <li className="dash3OS"></li>
						</ul>
					</div>
					<div className="text-center">
						<h1>
							<b className="whiteclr">Our Speciality</b>
						</h1>
					</div>
				</div>
				<div className="col-lg-10 col-lg-offset-1 hidden-sm hidden-xs osDiv">
					<div className="row">
						<div className="col-lg-4 ">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 col1">
								<div className="iconCircle">
									<img src="/images/13.png" alt="enteprice" className="innerCircle"/>
								</div>
								<div className="sptextBox1">
									<h2 className="text-center"><b>Enteprice</b></h2>
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
										<p>Lorem Ipsum is simply dummy <br/>printing & typesetting industry.
									  	</p>
									</div>
									<p className="text-center rmore">Read More</p>
								</div>

							</div>
						</div>
						<div className="col-lg-4 ">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 col2">
								<div className="iconCircle">
									<img src="/images/14.png" alt="enteprice" className="innerCircle"/>
								</div>
								<div className="sptextBox1">
									<h2 className="text-center"><b>Startup World</b></h2>
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
										<p>Lorem Ipsum is simply dummy <br/>printing & typesetting industry.
									  </p>
									</div>
									<p className="text-center rmore">Read More</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 col1">
								<div className="iconCircle">
									<img src="/images/15.png" alt="enteprice" className="innerCircle"/>
								</div>
								<div className="sptextBox1">
									<h2 className="text-center"><b>eCommerce</b></h2>
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
										<p>Lorem Ipsum is simply dummy <br/>printing & typesetting industry.
									  </p>
									</div>
									<p className="text-center rmore">Read More</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
{/*====================================== Mobile view ===================================*/}
			<div className="xsOurSpecialityHeight col-xs-12 col-sm-12 hidden-lg hidden-md container-fluid">
				<div className="col-xs-12 col-md-sm hidden-lg hidden-md xsbhead">
					<div className="col-xs-12 col-sm-12 hidden-lg hidden-md ">
						<ul className="xsdashBoxOS col-xs-9 col-xs-offset-3	">
						  <li className="xsdash1OS"></li>
						  <li className="xsdash2OS"></li>
						  <li className="xsdash3OS"></li>
						</ul>
					</div>
					<div className="text-center">
						<h1>
							<b className="xswhiteclr">Our Speciality</b>
						</h1>
					</div>
				</div>
				<div className="col-xs-10 col-xs-offset-1 hidden-lg hidden-md xsosDiv">
					<div className="row">
						<div className="col-xs-12 ">
							<div className="col-xs-12 col-sm-12 hidden-lg hidden-md xscol1">
								<div className="xsiconCircle">
									<img src="/images/13.png" alt="enteprice" className="xsinnerCircle"/>
								</div>
								<div className="xssptextBox1">
									<h2 className="text-center"><b>Enteprice</b></h2>
									<div className="col-xs-12 col-sm-12 hidden-lg hidden-md">
										<p>Lorem Ipsum is simply dummy <br/>printing & typesetting industry.
									  	</p>
									</div>
									<p className="text-center xsrmore">Read More</p>
								</div>

							</div>
						</div>
						<div className="col-xs-12 ">
							<div className="col-xs-12 col-sm-12 hidden-lg hidden-md xscol2">
								<div className="xsiconCircle">
									<img src="/images/14.png" alt="enteprice" className="xsinnerCircle"/>
								</div>
								<div className="xssptextBox1">
									<h2 className="text-center"><b>Startup World</b></h2>
									<div className="col-xs-12 col-sm-12 hidden-lg hidden-md">
										<p>Lorem Ipsum is simply dummy <br/>printing & typesetting industry.
									  </p>
									</div>
									<p className="text-center xsrmore">Read More</p>
								</div>
							</div>
						</div>
						<div className="col-xs-12">
							<div className="col-xs-12 col-sm-12 hidden-lg hidden-md xscol1">
								<div className="xsiconCircle">
									<img src="/images/15.png" alt="enteprice" className="xsinnerCircle"/>
								</div>
								<div className="xssptextBox1">
									<h2 className="text-center"><b>eCommerce</b></h2>
									<div className="col-xs-12 col-sm-12 hidden-lg hidden-md">
										<p>Lorem Ipsum is simply dummy <br/>printing & typesetting industry.
									  </p>
									</div>
									<p className="text-center xsrmore">Read More</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

{/*======================================================================================*/}
		</div>
		);
	}
}
