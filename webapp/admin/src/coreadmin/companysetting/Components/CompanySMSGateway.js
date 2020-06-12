import React, { Component } from 'react';
import { render } from 'react-dom';
import $ from "jquery";
import axios from 'axios';
import swal from 'sweetalert';
class GoogleApiKey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authID    : "", 
      authToken : "", 
      sourceMobile : "", 
      smsid   : "",    
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    this.getData();
  }
 
  handleChange(event){
    const {name,value} = event.target;
    this.setState({ 
      [name]:value
    });
  }  
  getData(){
    var type = 'SMS';
    axios.get('/api/projectsettings/get/'+type)
            .then((response) => {
              console.log("response.data._id smsid===>",response.data._id);
                this.setState({ 
                  smsid        : response.data._id,
                  smsauthID    : response.data.authID, 
                  smsauthToken : response.data.authToken, 
                  smssourceMobile : response.data.sourceMobile, 
                });
            })
            .catch((error) => {});
}
  submit(event){
      event.preventDefault();
        var formvalue ={
          authID    : this.state.authID, 
          authToken : this.state.authToken, 
          sourceMobile : this.state.sourceMobile, 
          type      : 'SMS',
          createdBy : localStorage.getItem("user_ID")
        }
        console.log("formvalue===>",formvalue);
          axios.post('/api/projectsettings/post',formvalue)
          .then((response)=> {
            console.log("response===>",response.data);
            this.getData();
            swal({                
                  text: "SMS Gateway details added successfully!",
                });
            
            this.setState({
              authID    : "", 
              authToken : "", 
              sourceMobile : "", 
            })
            this.getData();
          })
          .catch((error)=> {
            swal({                
                  text: "Failed to add SMS Gateway details!",
                });
          })
        
  
      // }
  
  }
  update(event){
    event.preventDefault();
      var formvalues ={
        authID    : this.state.authID, 
        authToken : this.state.authToken, 
        sourceMobile : this.state.sourceMobile, 
        type      : 'SMS',
        createdBy : localStorage.getItem("user_ID")
      }
        axios.patch('/api/projectsettings/patch/SMS',formvalues)
        .then((response)=> {
          this.getData();
          swal({                
                text: "SMS Gateway details Updated successfully!",
              });
          this.setState({
              authID    : "", 
              authToken : "", 
              sourceMobile : "", 
          })
        })
        .catch((error)=> {
          swal({                
                text: "Failed to Updated SMS Gateway details!",
              });
        })
      

    // }

}
  edit(event) {
        var authID    = this.state.smsauthID;
        var authToken = this.state.smsauthToken;
        var sourceMobile = this.state.smssourceMobile;
        this.getData();
        this.setState({ 
            authID : authID,
            authToken : authToken,
            sourceMobile : sourceMobile,
        });
    }
  
  deletegooglekeyapi(event){
    // event.preventDefault();
    console.log("this.getData();")
    // this.setState({deleteID: event.currentTarget.getAttribute('data-id')})
    $('#deleteModal').show();
  }
  closeModal(event){
    event.preventDefault();
    $('#deleteModal').hide(); 
  }
  confirmDelete(event){
    event.preventDefault();
    axios.delete('/api/paymentgateway/delete/'+this.state.deleteID)
    .then((response)=> {
      swal({                
            text: "Payment Gateway details Deleted successfully!",
          });
      $('#deleteModal').hide(); 
      this.getData();
    })
    .catch((error)=> {
      swal({                
            text: "Failed to Delete payment gateway details!",
          });
    })
    
  }
  render() {
    return (
      <div className="">
        <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 companyDisplayForm">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h4 className="">SMS Gateway</h4>
          </div>
          <hr className="compySettingHr" />
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <form id="CompanyPaymentGatewayForm">
              <div className="form-margin col-lg-6 col-md-6 col-xs-12 col-sm-12  valid_box ">
                <label className="labelform">Auth ID <span className="requiredsign">*</span></label>
                <input type="text" style={{ textTransform: 'capitalize' }}
                  className="form-control UMname has-content"
                  id="authID" ref="authID" name="authID" placeholder="Auth ID" 
                  value={this.state.authID} onChange={this.handleChange} /> 
              </div>
              
              <div className="form-margin col-lg-6 col-md-6 col-xs-12 col-sm-12  valid_box ">
                <label className="labelform">Auth Token <span className="requiredsign">*</span></label>
                <input type="text" style={{ textTransform: 'capitalize' }}
                  className="form-control UMname has-content"
                  id="authToken" ref="authToken" name="authToken" placeholder="Auth Token" 
                  value={this.state.authToken} onChange={this.handleChange} /> 
              </div>
              
              <div className="form-margin col-lg-6 col-md-6 col-xs-12 col-sm-12  valid_box ">
                <label className="labelform">Source Mobile <span className="requiredsign">*</span></label>
                <input type="text" style={{ textTransform: 'capitalize' }}
                  className="form-control UMname has-content"
                  id="sourceMobile" ref="sourceMobile" name="sourceMobile" placeholder="Source Mobile" 
                  value={this.state.sourceMobile} onChange={this.handleChange} /> 
              </div>
              
              <div className=" col-lg-12 col-md-12 col-xs-12 col-sm-12 ">
                {
                    this.state.smsid === undefined ?
                        <button className="col-lg-3 col-md-2 col-xs-12 col-sm-12 col-xs-12 pull-right btn button3 topMargin outlinebox" type="submit" onClick={this.submit.bind(this)} >Submit</button>
                    :
                        <button className="col-lg-3 col-md-2 col-xs-12 col-sm-12 col-xs-12 pull-right btn button3 topMargin outlinebox" type="update" onClick={this.update.bind(this)} >Update</button>
                }
                
              </div>
            </form>
            <div className="table-responsive topmr40 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <table className="table iAssureITtable-bordered table-striped table-hover">
                <thead className="tempTableHeader">
                  <tr className="">
                    <th className="umDynamicHeader srpadd textAlignCenter"> Sr No. </th>
                    <th className="umDynamicHeader srpadd textAlignCenter"> Auth ID </th>
                    <th className="umDynamicHeader srpadd textAlignCenter"> Auth Token </th>
                    <th className="umDynamicHeader srpadd textAlignCenter"> Source Mobile </th>
                    <th className="umDynamicHeader srpadd textAlignCenter"> Action </th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="textAlignCenter">{1}</td>
                    <td className="textAlignCenter">{this.state.smsauthID}</td>
                    <td className="textAlignCenter">{this.state.smsauthToken}</td>
                    <td className="textAlignCenter">{this.state.smssourceMobile}</td>
                    <td className="textAlignCenter">
                    <span>
                        <button title="Edit"   onClick={this.edit.bind(this)}><i className="fa fa-pencil" ></i></button> &nbsp; &nbsp;
                        {/* <button title="Delete" onClick={this.deletegooglekeyapi.bind(this)}> <i className="fa fa-trash redFont" ></i></button>  */}
                    </span>
                    </td>
                </tr>
                </tbody>
              </table>
            </div>
            <div className="modal" id="deleteModal" role="dialog">
                <div className="adminModal adminModal-dialog col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="modal-content adminModal-content col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1 col-xs-12 noPadding">
                      <div className="modal-header adminModal-header col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="adminCloseCircleDiv pull-right  col-lg-1 col-lg-offset-11 col-md-1 col-md-offset-11 col-sm-1 col-sm-offset-11 col-xs-12 NOpadding-left NOpadding-right">
                            <button type="button" className="adminCloseButton" data-dismiss="modal" onClick={this.closeModal.bind(this)}>&times;</button>
                          </div>
                        </div>
                        <div className="modal-body adminModal-body col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <h4 className="blackLightFont textAlignCenter examDeleteFont col-lg-12 col-md-12 col-sm-12 col-xs-12">Are you sure, do you want to delete?</h4>
                      </div>
                        <div className="modal-footer adminModal-footer col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <button type="button" className="btn adminCancel-btn col-lg-7 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-8 col-sm-offset-1 col-xs-10 col-xs-offset-1" data-dismiss="modal" onClick={this.closeModal.bind(this)}>CANCEL</button>
                                  </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                              <button type="button" className="btn examDelete-btn col-lg-7 col-lg-offset-5 col-md-7 col-md-offset-5 col-sm-8 col-sm-offset-3 col-xs-10 col-xs-offset-1" data-dismiss="modal" onClick={this.confirmDelete.bind(this)} >DELETE</button>
                          </div>
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
export default GoogleApiKey;







// import React, { Component } from 'react';
// import { render }           from 'react-dom';
// import $ from "jquery";
// import axios from 'axios';
// import swal from 'sweetalert';
// import PhoneInput               from 'react-phone-input-2';


// class CompanySMSGateway extends Component{
//    constructor(props) {
//     super(props);
//     this.state = {
//       authID : '',
//       authToken : '',
//       sourceMobile:''
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleChangeMobile = this.handleChangeMobile.bind(this);
//   }
//   handleChange(event){
//     const {name,value} = event.target;
//     this.setState({ 
//       [name]:value
//     });
//   }

//   componentWillReceiveProps(nextProps) {
//     axios.get('/api/globalmaster/get/sms_details')
//     .then((response)=>{
//       this.setState({
//         authID : response.data.authID,
//         authToken : response.data.authToken,
//         sourceMobile:response.data.sourceMobile,
//       })
//       $("#btnSubmit").html('Update');
//     })
//   }

//   handleChangeMobile(event){ 
//     this.setState({
//       sourceMobile : event
//     },()=>{ 
//       if(this.state.sourceMobile){
//         this.setState({
//           sourceMobileError : this.state.sourceMobile === "+" ? 'Please enter valid mobile number.' : ""
//         })
//       } 
//     })
//   }

//   submitSMSInfo(event){
//     event.preventDefault();
//     if (this.state.authID && this.state.authToken && this.state.sourceMobile) {
      
//       var formValues = {
//         authID : this.state.authID,
//         authToken : this.state.authToken,
//         sourceMobile : this.state.sourceMobile,
//         updatedBy : localStorage.getItem("user_ID")
//       }
//       axios.patch('/api/globalmaster/SMS',formValues)
//         .then((response) =>{
//               swal({
//                     title: "SMS Info is added successfully!",
//                     text: "SMS Info is added successfully!",
//               });
//             this.setState({
//               authID:'',
//               authToken:'',
//               sourceMobile:''
//             })
//         })
//         .catch((error)=> {
//           swal({
//                     title: "Failed to add SMS info!",
//                     text: "Failed to add SMS info!",
//               });
//         })
//     }else{
//       swal("All fields are required")
//     }
//   }

//   render(){
//     return(
//       <div className="">
//         <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 companyDisplayForm">
//             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
//                 <h4 className="">SMS Gateway</h4>
//             </div>
//                <hr className="compySettingHr" />
//           <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
//             <form id="CompanySMSGatewayForm"  >
//               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdcls">
//                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 compForm compinfotp">
//                   <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 nopadding">
//                     <div className="form-group formht pdcls">
//                         <div className="form-group margin15">
//                             <label className="labelform" >Auth ID</label><span className="astrick">*</span>
//                             <input value={this.state.authID} onChange={this.handleChange} data-text="AuthID" type="text" id="authID" title="Please enter valid AuthID" name="authID" className="form-control CLcompanyAddress inputValid " required/>
//                         </div>
//                     </div> 
//                   </div>
//                   <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 nopadding">
//                     <div className="form-group formht pdcls">
//                         <div className="form-group margin15">
//                             <label className="labelform" >Auth Token</label><span className="astrick">*</span>
//                             <input value={this.state.authToken} onChange={this.handleChange} data-text="blockName" type="text" id="authToken" title="Please enter valid Auth Token" name="authToken" className="form-control CLcompanyAddress inputValid " required/>
//                         </div>
//                     </div> 
//                   </div>
//                   <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 nopadding">
//                     <div className="form-group formht pdcls">
//                         <div className="form-group margin15">
//                             <label className="labelform" >Source Number</label><span className="astrick">*</span>
//                             <PhoneInput
//                                 country={'in'}
//                                 value={this.state.sourceMobile}
//                                 name="sourceMobile"
//                                 inputProps={{
//                                   name: 'sourceMobile',
//                                   required: true
//                                 }}
//                                 onChange={this.handleChangeMobile.bind(this)}
//                               />
//                         </div>
//                     </div> 
//                   </div>
               
//                 </div>
                
//               </div>
//               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  ">
//                   <button className="col-lg-2 col-md-2 col-sm-12 col-xs-12 btn button3 pull-right" id="btnSubmit" onClick={this.submitSMSInfo.bind(this)}>
//                     Submit
//                   </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       );
//   }

//  }

//  export default CompanySMSGateway;