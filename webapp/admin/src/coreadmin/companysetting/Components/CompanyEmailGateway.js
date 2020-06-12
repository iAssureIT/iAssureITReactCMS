import React, { Component } from 'react';
import { render }           from 'react-dom';
import $ from "jquery";
import axios from 'axios';
import swal from 'sweetalert';


class CompanyEmailGateway extends Component{
   constructor(props) {
    super(props);
    this.state = {
      user : '',
      password : '',
      port:'',
      emailHost:'',
      projectName:''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
   
    $("#CompanyEmailGatewayForm").validate({
      rules: {
        user: {
          required: true,
        },
        password: {
          required: true,
        },
        port: {
          required: true,
        },
        emailHost: {
          required: true,
        },
        projectName: {
          required: true,
        }
      }
    });
  }
  componentWillReceiveProps(nextProps) {
    axios.get('/api/globalmaster/get/email')
    .then((response)=>{
      this.setState({
        user : response.data.user,
        password : response.data.password,
        port:response.data.port,
        emailHost:response.data.emailHost,
        projectName:response.data.projectName
      })
      $("#btnSubmit").html('Update');
    })
  }

  handleChange(event){
    const {name,value} = event.target;
    this.setState({ 
      [name]:value
    });
  }

 
  submitData(event){
    event.preventDefault();
     if($("#CompanyEmailGatewayForm").valid()){
      
      var formValues = {
        user : this.state.user,
        password : this.state.password,
        port : this.state.port,
        emailHost : this.state.emailHost,
        projectName : this.state.projectName,
        updatedBy : localStorage.getItem("user_ID")
      }
      axios.patch('/api/globalmaster/Email',formValues)
        .then((response) =>{
              swal({
                    title: "Email Info is added successfully!",
                    text: "Email Info is added successfully!",
              });
            
        })
        .catch((error)=> {
          swal({
                    title: "Failed to add Email info!",
                    text: "Failed to add Email info!",
              });
        })
    }else{
      swal("All fields are required")
    }
  }

  render(){
    return(
      <div className="">
        <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 companyDisplayForm">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h4 className="">Email Gateway</h4>
            </div>
               <hr className="compySettingHr" />
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <form id="CompanyEmailGatewayForm"  >
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pdcls">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 compForm compinfotp">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 nopadding">
                    <div className="form-group formht pdcls">
                        <div className="form-group margin15">
                            <label className="labelform" >User</label><span className="astrick">*</span>
                            <input value={this.state.user} onChange={this.handleChange} data-text="user" type="text" id="user" title="Please enter valid user" name="user" className="form-control CLcompanyAddress inputValid " required/>
                        </div>
                    </div> 
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 nopadding">
                    <div className="form-group formht pdcls">
                        <div className="form-group margin15">
                            <label className="labelform" >Password</label><span className="astrick">*</span>
                            <input value={this.state.password} onChange={this.handleChange} data-text="blockName" type="text" id="password" title="Please enter valid password" name="password" className="form-control CLcompanyAddress inputValid " required/>
                        </div>
                    </div> 
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 nopadding">
                    <div className="form-group formht pdcls">
                        <div className="form-group margin15">
                            <label className="labelform" >Project</label><span className="astrick">*</span>
                            <input value={this.state.projectName} onChange={this.handleChange} data-text="blockName" type="text" id="projectName" title="Please enter valid projectName" name="projectName" className="form-control CLcompanyAddress inputValid " required/>
                        </div>
                    </div> 
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 compForm">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 nopadding">
                    <div className="form-group formht pdcls">
                        <div className="form-group margin15">
                            <label className="labelform" >Port</label><span className="astrick">*</span>
                            <input value={this.state.port} onChange={this.handleChange} data-text="blockName" type="text" id="port" title="Please enter valid port" name="port" className="form-control CLcompanyAddress inputValid " required/>
                        </div>
                    </div> 
                  </div>
                  
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 nopadding">
                    <div className="form-group formht pdcls">
                        <div className="form-group margin15">
                            <label className="labelform" >Host</label><span className="astrick">*</span>
                            <input value={this.state.emailHost} onChange={this.handleChange} data-text="blockName" type="text" id="emailHost" title="Please enter valid emailHost" name="emailHost" className="form-control CLcompanyAddress inputValid " required/>
                        </div>
                    </div> 
                  </div>
                </div>
                
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  ">
                  <button className="col-lg-2 col-md-2 col-sm-12 col-xs-12 btn button3 pull-right" id="btnSubmit" onClick={this.submitData.bind(this)}>
                    Submit
                  </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      );
  }

 }

 export default CompanyEmailGateway;