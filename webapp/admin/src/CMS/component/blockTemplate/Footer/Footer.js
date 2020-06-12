import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="">
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopadding footerwrapper">
					<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 nopadding ht375px">
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 footerpart1">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<img className="" src="/images/Approved.png" width="75px"  alt="img"/>
								<h2>Sunt ut fuga at rem wisi eos <br/>vero ullo ab Superue iure?</h2>
				                <div className="custbtnhbtnonimgFooter col-lg-3">Get Started</div>
				                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				                <i className="fa fa-facebook-f mall15"></i><i className="fa fa-twitter mall15"></i><i className="fa fa-instagram mall15"></i>
				                </div>
								
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ht375px">
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="col-lg-3 col-md-3 col-sm-4 col-xs-4 footermenu">
								<ul className="">
								  <li className=""><b>truU</b> </li>
								  <li className="">Home  </li>
								  <li className="">How it works? </li>
								  <li className="">About us </li>
								  <li className="">FAQ </li>
								  <li className="">Contact </li>
								  <li className="">Privacy Policy </li>
								</ul>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 footermenu">
								<ul className="">
								  <li className=""><b>Services </b></li>
								  <li className="">Make an Appontment  </li>
								  <li className="">Request Consult </li>
								  
								</ul>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-4 col-xs-4 footermenu">
								<ul className="">
								  <li className=""><b>Contact </b></li>
								  <li className="">415-527-0263  </li>
								  <li className="">hello@truu.com </li>
								  <li className="">55 Broadway<br/> New york,NY 10006 </li>
								  
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
