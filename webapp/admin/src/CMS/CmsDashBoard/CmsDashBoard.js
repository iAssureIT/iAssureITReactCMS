import React from 'react';
import './CmsDashBoard.css';

export default class CmsDashBoard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="App container-fluid" >
                    <div className="row" >
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" >
                        	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" >
                        		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" >
                        			<h2>Dashboard
                        			</h2>
                        		</div>
                        		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
	                        		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 boxItem1">
	                        			<p className="fs30">
	                        				Welcome to iAssureIT CMS
	                        			</p>
	                        			<p className="fs20">
	                        				We've assembled some Links to get you started:
	                        			</p>
	                        			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding" >
	                        				<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 NOpadding" >
	                        					<div className="fs20 mtop10">Get Started
	                        					</div>
	                        					<button type="button" className="btn btn-primary col-lg-8 col-md-8 col-sm-8 col-xs-8 custBtn NOpadding">Customized your site</button>
			                        			<br/>
			                        			
	                        				</div>
	                        				<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4" >
	                        					<div className="f20s mtop10">Next step</div>

	                        					<div className="fs16">
	                        						<a href='/cms/create-new-page' data-toggle="tooltip" title="Click here Create new page">
	                        							<i className="fa fa-plus w20px"></i> &nbsp;&nbsp;Create new page
	                        						</a>
	                        					</div>
	                        					<div className="fs16"> <i className="fa fa-edit w20px"></i> &nbsp;&nbsp;Write your first blog post</div>
	                        					<div className="fs16">
	                        						<i className="fa fa-desktop w20px"></i> &nbsp;&nbsp;View your site
	                        					</div>
	                        				</div>
	                        				<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4" >
	                        					<div className="f20s mtop10">More actions
	                        					</div>

	                        					<div className="fs16"><i className="fa fa-file w20px"></i> &nbsp;&nbsp; Manage your widgets or menu</div>
	                        					<div className="fs16"><i className="fa fa-comment w20px"></i> &nbsp;&nbsp; Turn comments On or Off</div>
	                        					<div className="fs16"><i className="fa fa-graduation-cap w20px"></i> &nbsp;&nbsp; Learn more about getting started</div>
	                        			
	                        				</div>

	                        			</div>
									</div>
								</div>
                        		
                        		<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12  " >
                        			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 boxItem2" >
	                        			<div className="fs20 mtop10">At a Glance</div><hr/>
	                        			<div className="fs16 col-lg-6 col-md-6 col-sm-12 col-xs-12  "><i className="fa fa-file"></i> &nbsp;&nbsp; 21 Posts</div>
	                        			<div className="fs16 col-lg-6 col-md-6 col-sm-12 col-xs-12  "><i className="fa fa-file"></i> &nbsp;&nbsp; 12 Pages</div>
	                        			<div className="fs16 col-lg-6 col-md-6 col-sm-12 col-xs-12  "><i className="fa fa-comment"></i> &nbsp;&nbsp; 14 Posts</div>



                        			</div>
                        			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 boxItem2" >
	                        			<div className="fs20 mtop10">Activity</div><hr/>
	                        			<div className="fs20 mtop10">Recently published</div>
	                        			<div className="fs16 col-lg-6 col-md-6 col-sm-12 col-xs-12  ">Oct 11, 10.04 AM</div>
	                        			<div className="fs16 col-lg-6 col-md-6 col-sm-12 col-xs-12  ">Lorem Ipsum</div>
	                        			<div className="fs16 col-lg-6 col-md-6 col-sm-12 col-xs-12  ">Oct 11, 10.04 AM</div>
	                        			<div className="fs16 col-lg-6 col-md-6 col-sm-12 col-xs-12  ">Lorem Ipsum</div>
	                        			<div className="fs16 col-lg-6 col-md-6 col-sm-12 col-xs-12  ">Oct 11, 10.04 AM</div>
	                        			<div className="fs16 col-lg-6 col-md-6 col-sm-12 col-xs-12  ">Lorem Ipsum</div>
	                        			<div className="fs16 col-lg-6 col-md-6 col-sm-12 col-xs-12  ">Oct 11, 10.04 AM</div>
	                        			<div className="fs16 col-lg-6 col-md-6 col-sm-12 col-xs-12  ">Lorem Ipsum</div>
	                        			



                        			</div>
                        			
	                        	</div>
	                        	<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 " >
	                        		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 boxItem3" >
	                        			<div className="fs20 mtop10">Quick draft</div><hr/>
	                        			<form>
										    <div className="form-group">
											    <label for="formGroupExampleInput">Title </label>
											    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Title input"/>
											</div>
											<div className="form-group">
											    <label for="formGroupExampleInput2">Description</label>
											    <textarea type="text" className="form-control" row="5" id="formGroupExampleInput2" placeholder="Description input"/>
											</div>
											<button className="btn btn-primary" type="submit">Draft</button>
										</form>
										<div className="line5"></div>
                        			</div>
                        		
	                        	</div>


                        	


							
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
