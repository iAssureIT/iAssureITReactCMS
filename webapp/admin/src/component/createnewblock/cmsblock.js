import React, { Component } from 'react';

import axios from 'axios';

class CmsBlock extends Component {

    constructor(props) {
        super(props);
        this.state = {
			basicBlockTitle 	: "",
			basicBlocksubTitle  : "",
			basicBlockBody		: "",
			componentName		: "",
			blockType			: "",
			buttonText		    : "Submit",
		
			
		};
    }
    	handleChange(event){
		event.preventDefault();
    	this.setState({
       		"basicBlockTitle"    : this.refs.basicBlockTitle.value,
			"basicBlocksubTitle" : this.refs.basicBlocksubTitle.value,
			"basicBlockBody"	 : this.refs.basicBlockBody.value,
			/*"componentName"		 : this.props.blockDetailsID ? this.props.blockDetailsID.componentName : null, 
			"blockType"			 : this.props.blockDetailsID ? this.props.blockDetailsID.blockType : null,*/ 
			
    	});
    	console.log("componentName",this.state.componentName);
    	console.log("blockType",this.state.blockType);
	}
	submitcmsBlockInfo(event){
		event.preventDefault();
		
		var formValues = {
			basicBlockTitle 	:  this.state.basicBlockTitle, 	
			basicBlocksubTitle	:  this.state.basicBlocksubTitle, 	
			basicBlockBody		:  this.state.basicBlockBody, 
		/*	componentName		:  this.props.blockDetailsID ? this.props.blockDetailsID.componentName : null,	
			blockType			:  this.props.blockDetailsID ? this.props.blockDetailsID.blockType : null,*/
						
		};
		console.log("formValues=>",formValues);
		axios
			.post('https://jsonplaceholder.typicode.com/posts',{ formValues })
		  	.then(function (response) {
		    // handle success
		    	console.log(response);
		  	})
		  	.catch(function (error) {
		    // handle error
		    	console.log(error);
		  	});

   		console.log("formValues =>",formValues);
	
			
	}

    render() {
        return (
        		<div className="row">
                    <div className="create-basic-block-wrapper col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="modalBlockHeading">
                               <h1 className="ctext">Create Block</h1>     
                        </div>
                        <form className="newTemplateForm">  
                        	<div className="row inputrow">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                	<div className="form-group">
                                    	<label className="label-category mtop22">Selected Block Design &nbsp;:&nbsp;{this.props.blockDetailsID ? this.props.blockDetailsID.designName : null}</label>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                  		{/*<img src={this.props.blockDetailsID ? this.props.blockDetailsID.designImage : null} className="img-responsive"  />*/}
                                    </div>
                                </div>
                        	</div>  
							<div className="row inputrow">
								<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
									<div className="form-group">
										<label className="label-category">Block Title<span className="astrick"></span></label>
										<input type="text" ref="basicBlockTitle" id="basicBlockName" value={this.state.basicBlockTitle} name="basicBlockTitle"  className="templateName col-lg-12 col-md-12 col-sm-12 col-xs-12 inputValid hinput30" onChange={this.handleChange.bind(this)} />
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
								    <div className="form-group">
								   		<label className="label-category">Sub Title<span className="astrick"></span></label>
								        <input type="text" ref="basicBlocksubTitle" id="basicBlocksubTitle" value={this.state.basicBlocksubTitle} name="basicBlocksubTitle"  className="templateName col-lg-12 col-md-12 col-sm-12 col-xs-12 inputValid hinput30" onChange={this.handleChange.bind(this)}/>
								    </div>
								</div>
							</div>
							<div className="row inputrow">
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								    <label className="label-category">Block Content<span className="astrick"></span></label>
								    {/*<textarea class="form-control" rows="5" id="comment"></textarea>*/}
								    <textarea  ref="basicBlockBody" id="basicBlockBody" name="basicBlockBody" value={this.state.basicBlockBody} className="subject bcolor col-lg-12 col-md-12 col-sm-12 col-xs-12" rows="6" onChange={this.handleChange.bind(this)}/>
								</div>
							</div>
                        	<div className="row inputrow ">
	                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
	                                <div className="" id="fileuploadelem">
	                                	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
		                                    <div className="form-group">
			                                    <label className="col-lg-12 col-md-12 col-sm-12 col-xs-12 label-category">Block Image:</label>
			                                    <input type="file" ref="basicPageImage" id="basicPageImage" name="basicPageImage"   className="subject col-lg-12 col-md-12 col-sm-12 col-xs-12" />
		                                    </div>
	                                	</div>
	                               </div>
		                            <div className="col-lg-6">
										
									</div>
	                            </div>
	                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
	                              <div className="row inputrow" id="fileupload">
	                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
	                                  <div className="form-group">
	                                   <label className="col-lg-12 col-md-12 col-sm-12 col-xs-12 label-category">Background Image:</label>
	                                    <input type="file" ref="backgroundImage" id="backgroundImage" name="backgroundImage"  className="subject col-lg-12 col-md-12 col-sm-12 col-xs-12"  />
	                                  </div>
	                                </div>
	                              </div>
	                              	<div className="col-lg-6">
										
									</div>
	                            </div>
                            </div>
                            <div className="row inputrow ">
                            	<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
	                              	<div className="" id="fileuploadelem">
		                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
		                                    <div className="form-group">
		                                    <label className="col-lg-12 col-md-12 col-sm-12 col-xs-12 label-category">Block Video:</label>
		                                    <input type="file" ref="basicPageImage" id="basicPageImage" name="basicPageImage"   className="subject col-lg-12 col-md-12 col-sm-12 col-xs-12" />
		                                    </div>
		                                </div>
	                                </div>
		                            <div className="row inputrow imgId">
		                                <div className="col-lg-6">
											
										</div>
		                            </div>
                            	</div>
	                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
	                                <div className="row inputrow" id="fileupload">
		                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
		                                    <div className="form-group">
			                                    <label className="col-lg-12 col-md-12 col-sm-12 col-xs-12 label-category">Background Video:</label>
			                                    <input type="file" ref="backgroundVideo" id="backgroundVideo" name="backgroundVideo"  className="subject col-lg-12 col-md-12 col-sm-12 col-xs-12" />
		                                    </div>
		                                </div>
	                                </div>
	                                <div className="row inputrow bgimgId">
	                                   <div className="col-lg-6">
											
										</div>
	                                </div>
	                            </div>
                            </div>
                          	<div className="savetemp col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            	<button  type="submit" className="col-lg-2 col-md-3 col-sm-6 col-xs-12 btn btn-primary pull-right sendtxtmsgbtn" onClick={this.submitcmsBlockInfo.bind(this)}>{this.state.buttonText}</button>
                          	</div>
                        </form>
                      </div>
                	</div>
				
            
        );
    }
}

export default CmsBlock;
