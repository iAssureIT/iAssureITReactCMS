import React from 'react';
import './ContactUsForm.css';
import $                           from 'jquery';
import jQuery                      from 'jquery';
import axios 				               from 'axios';
import Swal from 'sweetalert';
import validate               from 'jquery-validation';
axios.defaults.baseURL = '';
axios.defaults.headers.post['Content-Type'] = 'application/json';


/*const formValid = formerrors=>{
  console.log("formerrors",formerrors);
  let valid = true;
  Object.values(formerrors).forEach(val=>{
  val.length>0 && (valid = false);
  })
  return valid;
  }

const clientnameRegex = RegExp(/^[A-za-z']+( [A-Za-z']+)*$/);
const emailRegex = RegExp (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

*/

export default class ContactUsForm extends React.Component {


	constructor(props) {
		super(props);
		     this.state={
          "name"      	: "",
          "email"   	: "",
          "Subject"   	: "",
          "message"     : "",
          "formerrors" :{
              clientName  : " ",
              clientEmail : " ",
          
        
        },
      };
        this.handleChange = this.handleChange.bind(this);
	}
componentDidMount(){
    $.validator.addMethod("emailRegex", function(value, element, regexpr) {        
      return regexpr.test(value);
    }, "Please enter valid Email Id");

    $("#ContactUsForm").validate({
      rules: {
        formname: {
          required: true,
        }, 
        formemail: {
          required: true,
          emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

        },
        subject: {
          required: true,
        }, 
        message: {
          required: true,
        }, 
      },
      errorPlacement: function(error, element) {
        if (element.attr("name") == "formname"){
          error.insertAfter("#formname");
        }
        if (element.attr("name") == "formemail"){
          error.insertAfter("#formemail");
        }
        /*if (element.attr("name") == "subject"){
          error.insertAfter("#subject");
        }
        if (element.attr("name") == "message"){
          error.insertAfter("#message");
        }*/
      }
    });
}
handleChange(event){
      event.preventDefault();
      const datatype = event.target.getAttribute('data-text');
      const {name,value} = event.target;
      const formerrors = this.state.formerrors;
     /*  switch (datatype){
        case 'clientName' : 
             formerrors.clientName = clientnameRegex.test(value)? '' : "Please enter valid name";
             break;

          case 'clientEmail' : 
            formerrors.clientEmail = emailRegex.test(value)? '' : "Please enter valid mail address";
            break;
        default :
        break;
      }*/
      this.setState({ 
      	formerrors,
        [name]:value,
        "name"          : this.refs.name.value,
        "email"         : this.refs.email.value,
        "Subject"       : this.refs.Subject.value,
        "message"       : this.refs.message.value,
      } );
    }
Submit(event){
    event.preventDefault();
    if($('#ContactUsForm').valid()){

    // var adminEmail = this.getAdminEmail();  //Get email id from company settings. Write API for that.
    var adminEmail = "info@iassureit.com";

    const formValues1 = {
        "email"         : this.state.email ,
        "subject"       : "Your Query/Feedback is sent successfully to www.iassureit.com!",
        "text"          : "", 
        "mail"          : 'Dear ' + this.state.name + ', <br/><br/>'+
                          
                          "<b>Your Email: </b>"  + this.state.email + '<br/><br/>'+
                          "Your following message has been successfully delivered to the admin! We will get back to you shortly. <br/> <br/> " + 
                          "===============================  <br/> <br/> " + 
                          "<pre> " + this.state.message+ "</pre>" + 
                          " <br/> <br/> =============================== " + 
                          "<br/><br/> Thank You, <br/> Support Team, <br/> www.iassureit.com " ,

      };
      console.log("notification",formValues1); 
      
        axios
        .post('http://qaiassureitapi.iassureit.com/send-email',formValues1)
        .then((res)=>{
          console.log("re==",res);
                   if(res.status === 200){
                    Swal("Thank you for contacting us. We will get back to you shortly.")
                    }
                })
                .catch((error)=>{
                  console.log("error = ", error);
                  
                });
             
       const formValues2 = {
        "email"         : adminEmail ,
        "subject"       : "New query/feedback arrived from Website!",
        "text"          : "",
        "mail"          : 'Dear Admin, <br/>'+
                          "Following new query/feedback came from website! <br/> <br/> " + 
                          "============================  <br/> <br/> " + 
                          "<b>Client Name: </b>"   + this.state.name + '<br/>'+
                          
                          "<b>Client Email: </b>"  + this.state.email + '<br/><br/>'+

                          "<pre> " + this.state.message + "</pre>" + 
                          "<br/><br/> ============================ " + 
                          "<br/><br/> This is a system generated email! " ,

      };
      console.log("notification",formValues2); 
      
        axios
        .post('http://qaiassureitapi.iassureit.com/send-email',formValues2)
        .then((res)=>{
          console.log("re==",res);
            
                  if(res.status === 200){
                    console.log("Mail Sent TO ADMIN successfully!")
                  }
                })
                .catch((error)=>{
                  console.log("error = ", error);
                  
                });
           
               this.refs.name.value  = "";
                this.refs.email.value = "";
                this.refs.Subject.value = "";
                this.refs.message.value = "";
              }
    }
	render() {
		const {formerrors} = this.state;
		return (
			<div className="container-fluid nopadding" >
				<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 p49">
							<form className="" id="ContactUsForm">
								<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12  nopadding" >
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  bt30 nopadding" id="formname">
										<input className="form-control" name="formname" type="text" ref="name" placeholder="Your name" value={this.state.name} onChange={this.handleChange.bind(this)}/>
									</div>
								</div>
								<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 nopadding">
									 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bt30 nopadding" id="formemail">
										<input className="form-control" name="formemail" type="email" data-text="clientEmail" placeholder="Your@email.com" ref="email" value={this.state.email} onChange={this.handleChange.bind(this)}/>
									 </div>
                </div>
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  nopadding">
                     <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bt30 nopadding" id="subject">
										  <input className="form-control" name="subject" type="text" placeholder="Subject" ref="Subject" value={this.state.Subject} onChange={this.handleChange.bind(this)} />
								    </div>
                </div>
								<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12   nopadding">
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bt30 nopadding " id="message" >
								      <textarea className="form-control" name="message" placeholder="How can we help?" rows="6" ref="message" value={this.state.message} onChange={this.handleChange.bind(this)} ></textarea>      
									</div>
								</div>
								<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 nopadding bt40">
								
                    <button type="button" className="col-lg-3 cusfcmpbtn col-lg-offset-9" onClick={this.Submit.bind(this)}>Send Message</button>
									
								</div>
							</form>
								
				</div>				
			</div>
		);
	}
}
