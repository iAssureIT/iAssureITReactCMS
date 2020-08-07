import React from 'react';
import "./ContactForm.css";
import AddressBlock         from "./AddressBlock.js";
import axios 				from 'axios';
import swal                 from 'sweetalert2';


    // const formValid = formerrors=>{
	// 	console.log("formerrors",formerrors);
	// 	let valid = true;
	// 	Object.values(formerrors).forEach(val=>{
	// 	val.length>0 && (valid = false);
	// 	})
	// 	return valid;
	// }
	// const clientnameRegex = RegExp(/^[A-za-z']+( [A-Za-z']+)*$/);
    // const emailRegex = RegExp (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);



export default class ContactForm extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
          blocks: {
            "blockTitle": "<b>OUR LOCATIONS</b>",
            
            "blockSubTitle": "",
            "blockDescription": "",
            "blockComponentName": "TemplateOverview",
            "blockType": "",
            "bgImage": "/images/002.png",
            "fgImage": "/images/001.png",
            "repeatedBlocks": [
                                
                                { 
                                    Title: "Delhi (INDIA)", 
                                    SubTitle: "#323, Amanora Chambers <br/> Magarpatta,  Pune,<br/> Maharastra 411228", 
                                    Image: "/images/ctlocation.png",
                                    Link: "", 
									Description: ""
									
									
								},

								{ 
                                    Title: "Mumbai (INDIA)", 
                                    SubTitle: "#323, Amanora Chambers <br/> Magarpatta,  Pune,<br/> Maharastra 411228", 
                                    Image: "/images/ctlocation.png",
                                    Link: "", 
									Description: ""
									
									
								},
								{ 
                                    Title: "Bengaluru (INDIA)", 
                                    SubTitle: "#323, Amanora Chambers <br/> Magarpatta,  Pune,<br/> Maharastra 411228", 
                                    Image: "/images/ctlocation.png",
                                    Link: "", 
									Description: ""
									
									
								},
								
								
																
								
								
								
            ],
            "bgVideo"				: "",
            "fgVideo"				: "",
            "blockGroup"			: "",
            "blockAppearOnPage"		: ""
          },
          blockID:"",
          block_id:""
        };   
      }
    componentDidMount(){
    /*console.log("==>",this.props.block_id);*/
              {
                 axios
                    .get('http://qaiassureitapi.iassureit.com/api/blocks/get/'+this.props.block_id)
                    .then((response)=>{
                        if(response.data){
                            // console.log("ListofServices =",response.data);
                          this.setState({
                              blocks:response.data
                          });
                        }                  
                      })           
                    .catch(function(error){
                      console.log(error);
                  })
                }
          this.setState({
                    block_id:this.props.block_id
                  });
    }







	// constructor(props) {
	// 	super(props);
	// 	this.state={
	// 		"name"      	: "",
	// 		"email"      	: "",
	// 		"Subject"   	: "",
	// 		"message"       : "",
	// 		formerrors   :{
	// 			          clientName  : " ",
	// 			           clientEmail : " "
				
			  
	// 		  },
	// 		};
	// 		  this.handleChange = this.handleChange.bind(this);
		  
	// }
	// handleChange(event){
	// 	event.preventDefault();
	// 	const datatype = event.target.getAttribute('data-text');
	// 	const {name,value} = event.target;
	// 	const formerrors = this.state.formerrors;
	// 	console.log("datatype",datatype);
	// 	switch (datatype){
  
  
	// 	case 'clientName' : 
	// 		 formerrors.clientName = clientnameRegex.test(value)? '' : "Please enter valid name";
	// 		 break;
  
	// 	case 'clientEmail' : 
	// 		formerrors.clientEmail = emailRegex.test(value)? '' : "Please enter valid mail address";
	// 		break;
  
		
			  
	// 	default :
	// 	break;
  
	// 	}
	// 	this.setState({ 
	// 		formerrors,
	// 	    [name]:value,
	// 	       "name"               : this.refs.name.value,
	// 	        "email"             : this.refs.email.value,
	// 	        "Subject"           : this.refs.Subject.value,
	// 	         "message"          : this.refs.message.value
	// 	} );
	//   }

	//   handleChange(event){
	// 	event.preventDefault();
	// 	this.setState({
	// 	  "name"         : this.refs.name.value,
	// 	  "email"        : this.refs.email.value,
	// 	  "Subject"      : this.refs.Subject.value,
	// 	  "message"      : this.refs.message.value,
	  
		  
		  
	// 	})
	// }


	// Submit(event){
	// 	event.preventDefault();
	// 	var adminEmail = this.getAdminEmail();  Get email id from company settings. Write API for that.
	// 	var adminEmail = "";
	
	// 	const formValues1 = {
	// 		"email"         : this.state.email ,
	// 		"subject"       : "Your Query/Feedback is sent successfully to www..com!",
	// 		"message"          : "", 
	// 		"mail"          : 'Dear' + this.state.name + ', <br/><br/>'+
							  
	// 						  "<b>Your Email: </b>"  + this.state.email + '<br/><br/>'+
	// 						  "Your following message has been successfully delivered to the admin! We will get back to you shortly. <br/> <br/> " + 
	// 						  "===============================  <br/> <br/> " + 
	// 						  "<pre> " + this.state.message+ "</pre>" + 
	// 						  " <br/> <br/> =============================== " + 
	// 						  "<br/><br/> Thank You, <br/> Support Team, <br/> www..com " ,
	
	// 	  };
	// 	  console.log("notification",formValues1); 

		   
      
	// 	  axios
	// 	  .post('/send-email',formValues1)
	// 	  .then((res)=>{
	// 				 if(res.status === 200){
	// 				  swal("Thank you for contacting us. We will get back to you shortly.")
	// 				  }
	// 			  })
	// 			  .catch((error)=>{
	// 				console.log("error = ", error);
					
	// 			  });

	// 			  const formValues2 = {
	// 				"email"         : adminEmail ,
	// 				"subject"       : "New query/feedback arrived from Website!",
	// 				"message"          : "",
	// 				"mail"          : 'Dear Admin, <br/>'+
	// 								  "Following new query/feedback came from website! <br/> <br/> " + 
	// 								  "============================  <br/> <br/> " + 
	// 								  "<b>Client Name: </b>"   + this.state.name + '<br/>'+
									  
	// 								  "<b>Client Email: </b>"  + this.state.email + '<br/><br/>'+
			
	// 								  "<pre> " + this.state.message + "</pre>" + 
	// 								  "<br/><br/> ============================ " + 
	// 								  "<br/><br/> This is a system generated email! " ,
			
	// 			  };
	// 			  console.log("notification",formValues2); 
				  
	// 				axios
	// 				.post('/send-email',formValues2)
	// 				.then((res)=>{
	// 						  if(res.status === 200){
	// 							console.log("Mail Sent TO ADMIN successfully!")
	// 						  }
	// 						})
	// 						.catch((error)=>{
	// 						  console.log("error = ", error);
							  
	// 						});
					   
	// 					   this.refs.name.value  = "";
	// 						this.refs.email.value = "";
	// 						this.refs.Subject.value = "";
	// 						this.refs.message.value = "";
	// 			}
	// 		     Submit(event){
	// 			event.preventDefault();
			   
				 
	// 			  var dataArray={
	// 			  "name"         : this.refs.name.value,
	// 			  "email"        : this.refs.email.value,
	// 			  "Subject"      : this.refs.Subject.value,
	// 			  "message"      : this.refs.message.value,
			
				 
	// 			}
	// 			console.log("dataArray =>",dataArray);
						
	// 	} 
	  
	render() {
		return (
			
				<div className="contactformBgwrapp">
					
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contactmainwrapp">
							<div className="row">
							<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 addresswrapp">
							   <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 mtop30cf">
								   <div className="text-center">
									   <div className="locationstext"dangerouslySetInnerHTML={ { __html:this.state.blocks.blockTitle}}></div>
								   </div>
								</div>

								{
										this.state.blocks.repeatedBlocks && this.state.blocks.repeatedBlocks.length > 0 ?
										this.state.blocks.repeatedBlocks.map((data, index)=>{
										return(
									
								<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 bt020">
									
									
								   <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12  rect-block">
										<img src={data.Image} alt="ctlocation"/>
									</div>	
								   <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 bttitle20">
									  <div className="locationtitle1" dangerouslySetInnerHTML={{ __html: data.Title } }></div>
									  <div className="locationtitle2" dangerouslySetInnerHTML={{ __html: data.SubTitle } }></div>  
								  </div>
								</div>

								   	);
								})
							:
							null
								}

						</div>
							
						<div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 contactformwrapp">
						     <div className="cformbgimage1">
					            <img src="/images/cmodel05.png" alt="cmodel05"/>
				             </div>
							  <div className="cformbgimage2">
						         <img src="/images/cmodel01.png" alt="cmodel04"/> 
					         </div>
							 <div className="cformbgimage4">
						         <img src="/images/cmodel2.png" alt="cmodel2"/>
				            </div>
							<div className="cformbgimage5">
						        <img src="/images/cmodel10.png" alt="cmodel10"/>
				           </div> 
						   <div className="cformbgimage7">
						        <img src="/images/cmodel06.png" alt="cmodel06"/>
				          </div>
						  <div className="cformbgimage8 pull-right">
						      <img src="/images/cmodel08.png" alt="cmodel08"/>
				          </div>
						  <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 contactformwrapp2">
						     <div className="cformbgimage3">
							    <img src="/images/cmodel04.png" alt="cmodel04"/>
						     </div>
							 <div className="cformbgimage6">
						       <img src="/images/cmodel03.png" alt="cmodel03"/>
					         </div>
							 <div className="cformbgimage10">
						        <img src="/images/cmodel07.png" alt="cmodel07"/>
					         </div>
							
							  <h1 className="h1connecttitle">Connect With Us</h1>
							  <form>
							     <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bgdiv2">
								 <input className="form-control bg0color0" name="from" type="text" placeholder="Your name"/>

							     </div>
								 <div className="row">
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bgdiv1">
										<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
										<div className="cformbgimage9">
							                <img src="/images/cmodel09.png" alt="cmodel03"></img>
					                    </div>
											<input className="form-control bg0color0" name="from" type="text" placeholder="Mobile"/>
										</div>
										<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
											<input className="form-control bg0color0" name="from" type="text" placeholder="@gmail.com"/>
										</div>
								    </div>
							    </div>
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bgdiv1">
							      <input className="form-control bg0color0" name="from" type="text" placeholder="Subject"/>
						        </div>
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  bgdiv1">
								  <textarea className="form-control bg0color0" name="message" placeholder="How can we help?" rows="4"></textarea>
							    </div>
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
								   <button type="button" className="btn col-lg-5 col-md-7 col-xs-12 col-sm-12 button2">Send A Message</button>
							    </div>
							 </form>
						</div>
					</div>
				</div>
			</div>
		</div>
	
		);
	}
}

							