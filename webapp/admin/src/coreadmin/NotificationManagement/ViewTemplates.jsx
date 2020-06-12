import React, { Component } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import $ from 'jquery';
import TemplateRow from './emails/TemplateRow.jsx';
import EmailTemplateRow from './emails/EmailTemplateRow.jsx';
import NotificationTemplateRow from './notifications/NotificationTemplateRow.jsx';
import AllNotificationTemplateRow from './notifications/AllNotificationTemplateRow.jsx';
import AllSMSTemplateRow from './sms/AllSMSTemplateRow.jsx';
import SMSTemplateRow from './sms/SMSTemplateRow.jsx';
import CKEditor from "react-ckeditor-component";
// import validator from 'validator';
import './notification.css';
import validate               from 'jquery-validation';

class ViewTemplates extends Component {


	constructor(props) {

		super(props);
		this.state = {
			templateType: props.templateType ? props.templateType : "Email",
			templateName: props.templateName ? props.templateName : "",
			subject: props.subject ? props.subject : "",
			editorEmail: null,
			editorNotification: null,
			editorSMS: null,
			contentError: '',
			defaultLabel: ' --Select-- ',
			subjecterror: '',
			templateNameerror: '',
			templateTypeerror: '',
			emailTemplates: {},
			notificationTemplates: {},
			smsTemplates: {},
			event:"",
			formerrors: {
				message: '',
				subject: '',

			},
			role:"",
			roleArray:[],
			status:"active",
			company:"All",
			companyArray:[],
			companyname:""
		};
		this.updateContent = this.updateContent.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangeNotification = this.onChangeNotification.bind(this);
		this.onChangeSMS = this.onChangeSMS.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.getEmailData = this.getEmailData.bind(this);
		this.deleteData = this.deleteData.bind(this);
		this.getNotiData = this.getNotiData.bind(this);
		this.getSmsData = this.getSmsData.bind(this);

	}
		handleChange(event) {

		const datatype = event.target.getAttribute('data-text');
		const { name, value } = event.target;
		let formerrors = this.state.formerrors;
		this.setState({
			formerrors,
			[name]: value
		});
	}


	componentDidMount() {
        this.getRoles();
        this.getCompany();
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem("token");
		$("html,body").scrollTop(0);
		this.getData();
		$.validator.addMethod("regxtemplateName", function (value, element, arg) {
			return arg !== value;
		}, "Please select the template Name ");
		$.validator.addMethod("regxEvent", function (value, element, arg) {
            return  arg !== value;
        }, "Please select the Event.");
        $.validator.addMethod("regxRole", function (value, element, arg) {
            return arg !== value;
        }, "Please select the Role.")
        $.validator.addMethod("regxStatus", function (value, element, arg) {
            return arg !== value;
        }, "Please select the Status.");
		/*$.validator.addMethod("regxtemplateType", function (value, element, arg) {
			return arg !== value;
		}, "Please select the template Type ");*/
		    $("#newTemplateForm").validate({
		      rules: {
		        event: {
                    required: true,
                    regxEvent: ""
                },
		         templateName: {
		          required: true,
		          regxtemplateName: ""
		        }, 
		        
		        subject: {
		          required: true,
		        }, 
		        role: {
                    required: true,
                    regxRole: ""
                },
                status: {
                    required: true,
                    regxStatus: "--Select Status--"
                },
		       /* editor: {
		          required: true,
		          regxeditor: this.state.editor
		        },*/      
      },
      errorPlacement: function(error, element) {
       /* if (element.attr("name") == "templateType"){
          error.insertAfter("#templateType");
        } */
        if (element.attr("name") == "event") {
                    error.insertAfter("#event");
                }
        if (element.attr("name") == "templateName"){
          error.insertAfter("#templateName");
        }
        if (element.attr("name") == "subject"){
          error.insertAfter("#subject");
        }
        if (element.attr("name") == "editorEmail"){
          error.insertAfter("#editorEmail");
        }
        if (element.attr("name") == "editorNotification"){
          error.insertAfter("#editorNotification");
        }
        if (element.attr("name") == "editorSMS"){
          error.insertAfter("#editorSMS");
        }
        if (element.attr("name") == "role") {
            error.insertAfter("#role");
        }
        if (element.attr("name") == "status") {
                    error.insertAfter("#status");
                }
      }
    });
	
	}

	componentWillReceiveProps(nextProps) {
		this.getData();
	}
	getRoles() {
        var data = {
	      "startRange": 0,
	      "limitRange": 100000,
	    }
	    axios.post('/api/roles/get/list', data)
	      .then((response) => {
	        this.setState({
	          roleArray: response.data
	        }, () => {
	        })
	      }).catch(function (error) {
	      });
    }
    getCompany() {
	    axios.get('/api/entitymaster/get/corporate')
	      .then((response) => {
	        this.setState({
	          companyArray: response.data
	        }, () => {
	        })
	      }).catch(function (error) {
	      });
    }
	AllNotificationTemplates() {
		const id = this.state.currentNotificationId;
		var notificationTemplates = this.state.notificationTemplates;
		if (notificationTemplates && notificationTemplates.length > 0) {
			for (var i = 0; i < notificationTemplates.length; i++) {
				if (notificationTemplates[i]._id === id) {
					$('.defaultNotification').css({ 'display': 'none' });
					return [notificationTemplates[i]];
				}
			}
		} else {
			return [];
		}
		return [];
	}
	getData() {
		axios({
			method: 'get',
			url: '/api/masternotifications/get/list',
		}).then((response) => {
			var emailTemplatesList = response.data.filter((a) => { return a.templateType === "Email" });
			var notificationTemplatesList = response.data.filter((a) => { return a.templateType === "Notification" });
			var smsTemplatesList = response.data.filter((a) => { return a.templateType === "SMS" });
			this.setState({
				emailTemplatesList: emailTemplatesList,
				notificationTemplatesList: notificationTemplatesList,
				smsTemplatesList: smsTemplatesList
			});

		}).catch(function (error) {

		});
	}
	AllsmsTemplates() {
		const id = this.state.currentSMSId;
		var smsTemplates = this.state.smsTemplates;
		if (smsTemplates && smsTemplates.length > 0) {
			for (var i = 0; i < smsTemplates.length; i++) {
				if (smsTemplates[i]._id === id) {
					$('.defaultSMS').css({ 'display': 'none' });
					return [smsTemplates[i]];
				}
			}
		} else {
			return [];
		}
		return [];
	}

	getId(id){
		axios.get('/api/masternotifications/get/'+id)
		.then((response) => {
			this.setState({
				emailTemplates: response.data
			})
			if(response.data.company === null){
				this.setState({
					companyname : 'All'
				})
			}else{
				var companyId = response.data.company ;
				axios.get('/api/entitymaster/get/one/'+companyId)
				.then((res)=>{
					this.setState({companyname : res.data.companyName})
				})
				.catch((error)=>{console.log(error)})
			}
		})
		.catch((error)=>{console.log(error)})
	}
	getEmailData(id) {
		if (id) {
			axios({
				method: 'get',
				// url: 'http://localhost:3048/api/masternotifications/'+id,
				url: '/api/masternotifications/get/' + id,
			}).then((response) => {
				this.setState({
					emailTemplates: response.data
				})
			});
		}
	}

	getNotiData(id) {
		if (id) {
			axios({
				method: 'get',
				// url: 'http://localhost:3048/api/masternotifications/'+id,
				url: '/api/masternotifications/get/' + id,
			}).then((response) => {
				this.setState({
					notificationTemplates: response.data
				})
			});
		}
	}

	getSmsData(id) {
		if (id) {
			axios({
				method: 'get',
				// url: 'http://localhost:3048/api/masternotifications/'+id,
				url: '/api/masternotifications/get/' + id,
			}).then((response) => {
				this.setState({
					smsTemplates: response.data
				})
			});
		}
	}


	getNotificationId(id) {
		
		axios.get('/api/masternotifications/get/'+id)
		.then((response) => {
			this.setState({
				notificationTemplates: response.data
			})
			if(response.data.company === null){
				this.setState({
					companyname : 'All'
				})
			}else{
				var companyId = response.data.company ;
				axios.get('/api/entitymaster/get/one/'+companyId)
				.then((res)=>{
					this.setState({companyname : res.data.companyName})
				})
				.catch((error)=>{console.log(error)})
			}
		})
		.catch((error)=>{console.log(error)})

	}
	getSmsId(id) {
		
		axios.get('/api/masternotifications/get/'+id)
		.then((response) => {
			this.setState({
				smsTemplates: response.data
			})
			if(response.data.company === null){
				this.setState({
					companyname : 'All'
				})
			}else{
				var companyId = response.data.company ;
				axios.get('/api/entitymaster/get/one/'+companyId)
				.then((res)=>{
					this.setState({companyname : res.data.companyName})
				})
				.catch((error)=>{console.log(error)})
			}
		})
		.catch((error)=>{console.log(error)})
	}

	deleteData(type, id) {
		if (type && id) {
			if (type === "Email") {
				var emailarray = [...this.state.emailTemplatesList]; // make a separate copy of the array
				var index = emailarray.findIndex((obj) => { return obj._id === id });
				if (index !== -1) {
					emailarray.splice(index, 1);
					this.setState({ emailTemplatesList: emailarray, emailTemplates: {} }, () =>
						this.getData());
				}
			} else if (type === "Notification") {
				var notificationarray = [...this.state.notificationTemplatesList]; // make a separate copy of the array
				var notificationindex = notificationarray.findIndex((obj) => { return obj._id === id });
				if (notificationindex !== -1) {
					notificationarray.splice(notificationindex, 1);
					this.setState({ notificationTemplatesList: notificationarray, notificationTemplates: {} });
				}
			} else if (type === "SMS") {
				var smsarray = [...this.state.smsTemplatesList]; // make a separate copy of the array
				var smsindex = smsarray.findIndex((obj) => { return obj._id === id });
				if (smsindex !== -1) {
					smsarray.splice(smsindex, 1);
					this.setState({ smsTemplatesList: smsarray, smsTemplates: {} });
				}
			}
		}
	}

	selectType(type,event) {
		const target = event.target;
		const name = target.name;
		this.setState({
			templateType: type,
		})

	}
	updateContent(newContent) {
		this.setState({
			editorEmail: newContent,
			editorNotification: newContent,
			editorSMS: newContent
		})
	}
	onChangeEmail(evt) {
		var newContent = evt.editor.getData();
		this.setState({
			editorEmail: newContent
		}, () => {
			if (this.state.editorEmail) {
				this.setState({
					contentError: ''
				});
			} else {
				this.setState({
					contentError: ''
				})
			}
		})
	}
	onChangeNotification(evt) {
		var newContent = evt.editor.getData();
		this.setState({
			editorNotification: newContent
		}, () => {
			if (this.state.editorNotification) {
				this.setState({
					contentError: ''
				});
			} else {
				this.setState({
					contentError: ''
				})
			}
		})
	}
	onChangeSMS(evt) {
		var newContent = evt.editor.getData();
		this.setState({
			editorSMS: newContent
		}, () => {
			if (this.state.editorSMS) {
				this.setState({
					contentError: ''
				});
			} else {
				this.setState({
					contentError: ''
				})
			}
		})
	}

	submitTemplate(event) {
		event.preventDefault();
		var event = this.state.event;
		var role = this.state.role;
		var company = this.state.company;
		var status = this.state.status;
		var templateType = this.state.templateType;
		var subject = this.state.subject;
		var emailContent = this.state.editorEmail;
		var notificationContent = this.state.editorNotification;
		var smsContent = this.state.editorSMS;
		if(company == 'All'){
			company = null
		}
		if(event && role){
			if(templateType == 'Email'){
				if(subject === "" & emailContent === null || emailContent === ""){
					swal("For Email Template Subject & Message are mandatory")
							// $('#createNotifyModal').hide();
							// $('.modal-backdrop').remove();
				}else{
					
					var formValues = {
						"event":event,
						"templateType": templateType,
						"role": role,
						"status":status,
						"company":company,
						"subject": subject,
						"content": emailContent,
					}
					axios.post('/api/masternotifications/post', formValues)
				  	.then(function (response) {
				    // handle success
				    	if(response.data.message === "Notification Details already exists"){
				    		swal("Email Template already exists")
				    		
				    	}else{
				    		
					    	swal({
								title: "Email Template added successfully",		
							});
						}
				    	 // window.location.reload();
				  	})
				  	.catch(function (error) {
				    // handle error
				    	console.log(error);
				  	});
					// console.log("im in sucess message");
					
					axios({
						method: 'get',
						url: '/api/masternotifications/get/list',
					}).then((response) => {
						var emailTemplatesList = response.data.filter((a) => { return a.templateType === "Email" });
						var notificationTemplatesList = response.data.filter((a) => { return a.templateType === "Notification" });
						var smsTemplatesList = response.data.filter((a) => { return a.templateType === "SMS" });
						this.setState({
							emailTemplatesList: emailTemplatesList,
							notificationTemplatesList: notificationTemplatesList,
							smsTemplatesList: smsTemplatesList
						});

						this.setState({
									subject: "",
									editorEmail: null
								});
					}).catch(function (error) {
					});
				}
			}else if(templateType == 'Notification'){
				if(notificationContent === null || notificationContent === ""){
					swal("Please enter message")
				}else{
					var formValues = {
						"event":event,
						"templateType": templateType,
						"role": role,
						"status":status,
						"company":company,
						"content": notificationContent,
					}
					axios.post('/api/masternotifications/post', formValues)
				  	.then(function (response) {
				    // handle success
				    	if(response.data.message === "Notification Details already exists"){
				    		swal("Notification Template already exists")
				    		
				    	}else{
				    		
					    	swal({
								title: "Notification template added successfully",		
							});
						}
				    	 // window.location.reload();
				  	})
				  	.catch(function (error) {
				    // handle error
				    	console.log(error);
				  	});
					// console.log("im in sucess message");
					
					axios({
						method: 'get',
						url: '/api/masternotifications/get/list',
					}).then((response) => {
						var emailTemplatesList = response.data.filter((a) => { return a.templateType === "Email" });
						var notificationTemplatesList = response.data.filter((a) => { return a.templateType === "Notification" });
						var smsTemplatesList = response.data.filter((a) => { return a.templateType === "SMS" });
						this.setState({
							emailTemplatesList: emailTemplatesList,
							notificationTemplatesList: notificationTemplatesList,
							smsTemplatesList: smsTemplatesList
						});
						this.setState({
									editorNotification: null
								});
						
					}).catch(function (error) {});
				}
			}else{
				if(smsContent === null || smsContent === ""){
					swal("Please enter message")
				}else{
					var formValues = {
						"event":event,
						"templateType": templateType,
						"role": role,
						"status":status,
						"company":company,
						"content": smsContent,
					}
					axios.post('/api/masternotifications/post', formValues)
				  	.then(function (response) {
				    // handle success
				    	if(response.data.message === "Notification Details already exists"){
				    		swal("SMS Template already exists")
				    		
				    	}else{
				    		
					    	swal({
								title: "SMS template added successfully",		
							});
						}
				    	 // window.location.reload();
				  	})
				  	.catch(function (error) {
				    // handle error
				    	console.log(error);
				  	});
					// console.log("im in sucess message");
					
					axios({
						method: 'get',
						url: '/api/masternotifications/get/list',
					}).then((response) => {
						var emailTemplatesList = response.data.filter((a) => { return a.templateType === "Email" });
						var notificationTemplatesList = response.data.filter((a) => { return a.templateType === "Notification" });
						var smsTemplatesList = response.data.filter((a) => { return a.templateType === "SMS" });
						this.setState({
							emailTemplatesList: emailTemplatesList,
							notificationTemplatesList: notificationTemplatesList,
							smsTemplatesList: smsTemplatesList
						});
						this.setState({
									editorSMS: null
								});
						
					}).catch(function (error) {});
				}
			}
		}else{
			swal("Please select Event & Role")
		}
		
	}

	closeModal(event){
		event.preventDefault();
		$('#createNotifyModal').hide();
    	$(".modal-backdrop").remove();
    	 window.location.reload();
	}


	getInfo(event){
		event.preventDefault();
		window.open('/NotificationVariableList','_blank');
	}


	render() {
		const {formerrors} = this.state;
		/*const { formerrors } = this.state;
		const required = (value) => {
			if (!value.toString().trim().length) {
				return <span className="error"></span>;
			}
		};

		const email = (value) => {
			if (!validator.isEmail(value)) {
				return <span className="error">T{`${value} is not a valid email.`}</span>
			}
		};

		const lt = (value, props) => {
			// get the maxLength from component's props
			if (!value.toString().trim().length > props.maxLength) {
				// Return jsx
				return <span className="error">The value exceeded {props.maxLength} symbols.</span>
			}
		};*/
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="formWrapper">
						<section className="content">
							<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 pageContent ">
								<div className="row">
									<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 titleaddcontact">
										<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 contactdeilsmg pageHeader">
											Notification Management
										</div>
										<hr className="hr-head container-fluid row" />
									</div>
									<div className="">
										<section className="">
											<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
												<div className="col-lg-3 col-md-3  col-sm-6 col-xs-12" id="createmodalcl">
													<button className="addexamform addForm clickforhideshow col-lg-12 col-md-12 col-sm-12 col-xs-12 " data-toggle="modal" data-target="#createNotifyModal"><i className="fa fa-plus" aria-hidden="true"></i><b> &nbsp;&nbsp;&nbsp;Add Template</b></button>
												</div>
												
											</div>
											<div className="modal modalHide col-lg-12 col-md-12 col-sm-12 col-xs-12 overflowHiddenxy" id="createNotifyModal" tabIndex="-1" role="dialog" aria-labelledby="createNotifyModal" aria-hidden="true">
												<div className="modal-dialog modal-lg" role="document">
													<div className="modal-content modalContent col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
														<div className="modal-header adminModal-header col-lg-12 col-md-12 col-sm-12 col-xs-12">
															<h4 className="CreateTempModal col-lg-8 col-md-8 col-sm-8 col-xs-8" id="exampleModalLabel">Create Template</h4>
															<div className="col-lg-4 col-md-4 NOpadding">
															<div className="col-lg-5 col-md-6 pull-right">
																<div className="adminCloseCircleDiv marginRT col-lg-6 col-md-6 col-sm-6 col-xs-6 NOpadding-left NOpadding-right">
																	<button type="button" className="adminCloseButton btn" onClick={this.getInfo.bind(this)}>
																		<span aria-hidden="true"><i className="fa fa-info" aria-hidden="true"></i></span>
																	</button>
																</div> &nbsp; &nbsp;
																<div className="adminCloseCircleDiv col-lg-6 col-md-6 col-sm-6 col-xs-6 NOpadding-left NOpadding-right">
																	<button type="button" className="adminCloseButton" onClick={this.closeModal.bind(this)} aria-label="Close">
																		<span aria-hidden="true">&times;</span>
																	</button>
																</div>
															</div>
															</div>
														</div>
														<div className="modal-body adminModal-body col-lg-12 col-md-12 col-sm-12 col-xs-12">
															<div className="col-md-12 rowPadding">
															<div className="col-md-3">
																<label className="labelform col-lg-12 col-md-12 col-sm-12 col-xs-12">Event <sup className="astrick">*</sup></label>
			                                                    <select id="event" className="form-control col-lg-12 col-md-12 col-sm-12 col-xs-12" value={this.state.event} ref="event" name="event" onChange={this.handleChange.bind(this)}>
			                                                        <option disabled value="">--Select Event--</option>
			                                                        <option value="Sign Up">Sign Up</option>
																	<option value="Forgot Password">Forgot Password</option>
																	<option value="User Activated">User Activated</option>
																	<option value="User Blocked">User Blocked</option>
																	<option value="TripBooking">Trip Booking</option>
																	<option value="ManagerApproval">Manager Approval</option>
																	<option value="ManagerRejection">Manager Rejection</option>
																	<option value="TripAllocatedToVendor">Trip Allocated to Vendor</option>
																	<option value="Vendor allocates (Car + Driver)">Vendor allocates (Car + Driver)</option>
																	<option value="Informs Corporate Employee">Informs Corporate Employee</option>
																	<option value="Trip Started">Trip Started</option>
																	<option value="Reached Pick up point">Reached Pick up point</option>
																	<option value="OTP Verified & Trip begins">OTP Verified & Trip begins</option>
																	<option value="Reached Destination">Reached Destination</option>
																	<option value="Returned back & Trip-End-OTP">Returned back & Trip-End-OTP</option>
																	<option value="EndTrip">End Trip</option>
																	<option value="GenerateInvoice">Generate Bill / Invoice</option>
																	<option value="EmployeeCancelsTrip">Employee Cancels Trip</option>
																	<option value="AdminCancelsTrip">Admin Cancels Trip</option>
																	<option value="VendorCancelsTrip">Vendor Cancels Trip</option>
																	<option value="VendorAcceptsTrip">Vendor Accepts Booking</option>
																	<option value="VendorRejectsTrip">Vendor Rejects Booking</option>
																	<option value="DriverApproved">Driver Approved Booking</option>
																	<option value="DriverRejected">Driver Rejected Booking</option>
																	<option value="Vendor Changes Driver">Vendor Changes Driver</option>
			                                                    </select>   
															</div>
															<div className="col-md-3">
																<label className="labelform col-lg-12 col-md-12 col-sm-12 col-xs-12">Role<sup className="astrick">*</sup></label>
			                                                    <select id="role" className="form-control col-lg-12 col-md-12 col-sm-12 col-xs-12" value={this.state.role} ref="role" name="role" onChange={this.handleChange.bind(this)}>
			                                                        <option disabled value="">--Select Role--</option>
			                                                        {
			                                                            this.state.roleArray && this.state.roleArray.length > 0 ?
			                                                                this.state.roleArray.map((data, i)=>{
			                                                                    return(
			                                                                        <option key={i} value={data.role}>{data.role} </option>
			                                                                    );
			                                                                })
			                                                            :
			                                                            null
			                                                        }
			                                                    </select>
															</div>
															<div className="col-md-3">
																<label className="labelform col-lg-12 col-md-12 col-sm-12 col-xs-12">Status<sup className="astrick">*</sup></label>
			                                                    <select id="status" className="form-control col-lg-12 col-md-12 col-sm-12 col-xs-12" value={this.state.status} ref="status" name="status" onChange={this.handleChange.bind(this)}>
			                                                        <option disabled value="">--Select Status--</option>
			                                                        <option> active </option>
																	<option> inactive </option>
			                                                    </select>
															</div>
															<div className="col-md-3">
																<label className="labelform col-lg-12 col-md-12 col-sm-12 col-xs-12">Company</label>
			                                                    <select id="company" className="form-control col-lg-12 col-md-12 col-sm-12 col-xs-12" value={this.state.company} ref="company" name="company" onChange={this.handleChange.bind(this)}>
			                                                        <option disabled value="All">--Select Company--</option>
			                                                        {
			                                                            this.state.companyArray && this.state.companyArray.length > 0 ?
			                                                                this.state.companyArray.map((data, i)=>{
			                                                                    return(
			                                                                        <option key={i} value={data._id}>{data.companyName} </option>
			                                                                    );
			                                                                })
			                                                            :
			                                                            null
			                                                        }
			                                                    </select>
															</div>
															</div>
															<div className="col-md-12">
																<ul className="nav nav-pills nav-justified">
																  <li className="active defaultColor" value="Email" onClick={this.selectType.bind(this,"Email")}><a data-toggle="pill" href="#email">Email</a></li>
																  <li className="defaultColor" value="Notification" onClick={this.selectType.bind(this,"Notification")}><a data-toggle="pill" href="#notification">Notification</a></li>
																  <li className="defaultColor" value="SMS" onClick={this.selectType.bind(this,"SMS")}><a data-toggle="pill" href="#sms">SMS</a></li>
																</ul>

																<div className="tab-content">
																  <div id="email" className="tab-pane fade in active">
																    <div className="row rowPadding subjectRow col-lg-12 col-md-12 col-sm-12 col-xs-12">
																	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
																		<div className="form-group">
																			<label className="col-lg-12 col-md-12 col-sm-12 col-xs-12 labelform">Subject <span className="astrick">*</span></label>
																			<input type="text" name="subject" data-text="subject"  id="subject" value={this.state.subject} onChange={this.handleChange.bind(this)} className="subject form-control col-lg-12 col-md-12 col-sm-12 col-xs-12 inputValid" required />
																		</div>
																	</div>
																	</div>
																	<div className="row rowPadding col-lg-12 col-md-12 col-sm-12 col-xs-12">
																		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
																			<div className="form-group">
																				<label className="col-lg-12 col-md-12 col-sm-12 col-xs-12 labelform">Message <span className="astrick">*</span></label>
																				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding" id="editorEmail">
																					<CKEditor activeClass="p15"  name="editorEmail" data-text="message" className="editorEmail" content={this.state.editorEmail} events={{ "change": this.onChangeEmail }}/>
																				</div>
																			</div>
																		</div>
																	</div>
																  </div>
																  <div id="notification" className="tab-pane fade">
																    <div className="row rowPadding col-lg-12 col-md-12 col-sm-12 col-xs-12">
																		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
																			<div className="form-group">
																				<label className="col-lg-12 col-md-12 col-sm-12 col-xs-12 labelform">Message <span className="astrick">*</span></label>
																				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding" id="editorNotification">
																					<CKEditor activeClass="p15"  name="editorNotification" data-text="message" className="editorNotification" content={this.state.editorNotification} events={{ "change": this.onChangeNotification }}/>
																				</div>
																			</div>
																		</div>
																	</div>
																  </div>
																  <div id="sms" className="tab-pane fade">
																    <div className="row rowPadding col-lg-12 col-md-12 col-sm-12 col-xs-12">
																		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
																			<div className="form-group">
																				<label className="col-lg-12 col-md-12 col-sm-12 col-xs-12 labelform">Message <span className="astrick">*</span></label>
																				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding" id="editorSMS">
																					<CKEditor activeClass="p15"  name="editorSMS" data-text="message" className="editorSMS" content={this.state.editorSMS} events={{ "change": this.onChangeSMS }}/>
																				</div>
																			</div>
																		</div>
																	</div>
																  </div>
																</div>
															</div>
															<form className="newTemplateForm col-lg-12 col-md-12 col-sm-12 col-xs-12" id="newTemplateForm">
																
																

																
																<div className=" paddingtop-down col-lg-12 col-md-12 col-sm-12 col-xs-12">
																	<button type="submit" onClick={this.submitTemplate.bind(this)} className="col-lg-3 col-md-3 col-sm-6 col-xs-12 btn pull-right button3 outlinebox">Save Template</button>
																	{/*<button type="submit" onClick={this.updateTemplate.bind(this)} className="btn pull-right col-lg-3 col-md-3 col-sm-6 col-xs-12 btnUpdate">Update Template</button>*/}
																</div>
															</form>
														</div>
													</div>
												</div>
											</div>
											<div className="box-body">
												<div className="notifTabs col-lg-9 col-lg-offset-3 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
													<ul className="nav nav-pills nav-pillss notifTab col-lg-12 col-md-12 col-sm-12 col-xs-12">
														<li className="active  col-lg-3 col-md-3 col-sm-4 col-xs-12">
															<a data-toggle="pill" href="#emailTemplates" > Email
															</a>
														</li>
														<li className="col-lg-3 col-md-3 col-sm-4 col-xs-12 ">
															<a data-toggle="pill" href="#smsTemplates">
																SMS
															</a>
														</li>
														<li className="col-lg-3 col-md-3 col-sm-4 col-xs-12 ">
															<a data-toggle="pill" href="#notificationTemplates">
																In-App Notification
															</a>
														</li>
													</ul>
												</div>
												<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
													<h4 className=""><i className="fa fa-envelope" aria-hidden="true"></i> Template Library </h4>
												</div>
												<div className="">
													<div className="tab-content">
														<div id="emailTemplates" className="tab-pane fade in active table-wrapper-scroll-y">
															<div className="">
																<div className="sidertemplatebar col-lg-3 col-md-3 col-xs-12 col-sm-12 my-custom-scrollbar">
																	<div className="row">
																		{/*{ this.AllTemplates().map( (templateData, index)=>{*/}
																		<TemplateRow getId={this.getId.bind(this)} emailTemplatesList={this.state.emailTemplatesList} />
																		{/*}) 
																		}*/}
																	</div>
																</div>
																<div className="saveTemplateWrapper col-lg-9 col-md-9 col-xs-12 col-sm-12">
																	<div className="defaultMsg">
																		<h1>Please Select The Template</h1>
																		<i className="fa fa-hand-o-left" aria-hidden="true"></i>
																	</div>
																	{this.state.emailTemplates ? <EmailTemplateRow deleteData={this.deleteData.bind(this)} getData={this.getData.bind(this)} getEmailData={this.getEmailData.bind(this)} emailtemplateValues={this.state.emailTemplates} company={this.state.companyname} /> : null}
																</div>
															</div>
														</div>
														<div id="notificationTemplates" className="tab-pane fade">
															<div className="">
																<div className="sidertemplatebar col-lg-3 col-md-3 col-xs-12 col-sm-12">
																	<div className="row">
																		<NotificationTemplateRow getNotificationId={this.getNotificationId.bind(this)} notificationTemplatesList={this.state.notificationTemplatesList}  />
																	</div>
																</div>
																<div className="saveTemplateWrapper col-lg-9 col-md-9 col-xs-12 col-sm-12">
																	<div className="defaultNotification">
																		<h1>Please Select The Template</h1>
																		<i className="fa fa-hand-o-left" aria-hidden="true"></i>
																	</div>
																	{this.state.notificationTemplates ? <AllNotificationTemplateRow deleteData={this.deleteData.bind(this)} getNotiData={this.getNotiData.bind(this)} company={this.state.companyname} notificationtemplateValues={this.state.notificationTemplates} /> : null}
																</div>
															</div>
														</div>
														<div id="smsTemplates" className="tab-pane fade">
															<div className="">
																<div className="sidertemplatebar col-lg-3 col-md-3 col-xs-12 col-sm-12">
																	<div className="row">
																		<SMSTemplateRow getSmsId={this.getSmsId.bind(this)} smsTemplatesList={this.state.smsTemplatesList} />
																	</div>
																</div>
																<div className="saveTemplateWrapper col-lg-9 col-md-9 col-xs-12 col-sm-12">
																	<div className="defaultSMS">
																		<h1>Please Select The Template</h1>
																		<i className="fa fa-hand-o-left" aria-hidden="true"></i>
																	</div>
																	{this.state.smsTemplates ? <AllSMSTemplateRow deleteData={this.deleteData.bind(this)} getSmsData={this.getSmsData.bind(this)} company={this.state.companyname} smstemplateValues={this.state.smsTemplates} /> : null}
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</section>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>

		);
	}
}
export default ViewTemplates;