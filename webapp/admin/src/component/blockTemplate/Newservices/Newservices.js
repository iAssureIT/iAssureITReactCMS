import React, { Component } from 'react';
import { render } from 'react-dom';
import $                 from "jquery";
import swal from 'sweetalert';
import axios                  from 'axios';
import './Newservices.css';

export default class Newservices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: {
        "blockTitle": "",
        "blockSubTitle": "",
        "blockDescription": "",
        "blockComponentName": "",
        "blockType": "",
        "bgImage": "/images/1.png",
        "fgImage": "/images/37.png",
        "repeatedBlocks": [
        					{
                          "Title"       : "WEB APPS",
                          "SubTitle"    : "Read More",
                          "Description" : "Some dummy text here Some dummy text here Some dummy text here Some dummy text here",
                          "Image"       : "/images/4.png",
                          "Link"        : "/xyz"
                      },
                      {
                        "Title"         : "ENTERPRISE APPS",
                          "SubTitle"    : "Read More",
                          "Description" : "Some dummy text here Some dummy text here Some dummy text here Some dummy text here",
                          "Image"       : "/images/5.png",
                          "Link"        : "/abc"
                      },
                      {
                        "Title"         : "MOBILE APPS",
                          "SubTitle"    : "Read More",
                          "Description" : "Some dummy text here Some dummy text here Some dummy text here Some dummy text here",
                          "Image"       : "/images/6.png",
                          "Link"        : "/xyz"
                      },
                      {
                          "Title"       : "BUSINESS PORTALS",
                          "SubTitle"    : "Read More",
                          "Description" : "Some dummy text here Some dummy text here Some dummy text here Some dummy text here",
                          "Image"       : "/images/7.png",
                          "Link"        : "/xyz"
                      },
                      {
                        "Title"         : "STAFF AUGMENTATION",
                          "SubTitle"    : "Read More",
                          "Description" : "Some dummy text here Some dummy text here Some dummy text here Some dummy text here",
                          "Image"       : "/images/8.png",
                          "Link"        : "/abc"
                      },
                      {
                        "Title"         : "eCOMMERCE PORTALS",
                          "SubTitle"    : "Read More",
                          "Description" : "Some dummy text here Some dummy text here Some dummy text here Some dummy text here",
                          "Image"       : "/images/9.png",
                          "Link"        : "/xyz"
                      }
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
                    if(error.message === "Request failed with status code 401")
                      {
                          // swal("Your session is expired! Please login again.","", "error");
                      }
              })
            }
      this.setState({
                block_id:this.props.block_id
              });
}
   handleChange(event){
     const target = event.target;
     const name   = target.name;
     this.setState({
      [name]: event.target.value,
     });
  }
 
 

render() {
var data = this.state.blocks.repeatedBlocks;
     return (
  
      	<div className="h500">
			<div className="col-lg-offset-1 col-lg-10 col-md-12 col-sm-12 col-xs-12 formht">
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				{
					data && data.length>0?
					data.map((result, index)=>{
					return(
						
						<div className=" col-lg-4 col-md-4 col-sm-4 col-xs-4  ">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mainDiv NOPadding">
								<div className="divbox">
								  	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 boxheader">
									   	<div className="roundDiv" >
											<img className="img-responsive faIconImg" src={result.Image} alt=""/>
									    	
									    </div>
								  	</div>
								  	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									    <h5 className="text-center tepeatedTitle">{result.Title}</h5>
									    <p className="text-justify">{result.Description}</p>
									    {/*<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									    	<div className="text-center readMoretxt">{result.SubTitle}</div>
									    </div> */}
								    </div>
								</div>
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 endline">
								</div>
							</div>
						</div>
					
					 )
					})
					: null
					}
				</div>	
			</div>
      	</div>
      );
  }
}
