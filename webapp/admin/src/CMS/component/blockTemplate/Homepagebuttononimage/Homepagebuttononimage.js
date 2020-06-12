import React from 'react';
import './Homepagebuttononimage.css';
import axios from 'axios';

export default class Homepagebuttononimage extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      blocks: {
        "blockComponentName"  : "Typecomponent1",
        "blockType"       : "simple",
        blockTitle : "SEEING IS <br/>BELIVEING !<br/>",
        blockSubTitle : "See your new smile in less then<br/>60 seconds.<br/>",
        fgImage: "/images/homepage2.jpg",
        bgImage: "/images/homepage2.jpg",
      },
      blockID:"",
      block_id:""
    }; 

    
  }
componentDidMount(){
/*console.log("==>",this.props.block_id);*/
          {
             axios
                .get('/api/blocks/get/'+this.props.block_id)
                .then((response)=>{
                    if(response.data){
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
	render() {
    console.log("blocksubTitle",this.state.blocks)
		return (
		        <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 nopadding">
    					<div className="Imgcontainer" style={{backgroundImage:"url("+this.state.blocks.bgImage+")"}}>
                <div className="backgBlocak">
                  <div className="imgbtnctnt">
                    <div className="fontsize47ss" dangerouslySetInnerHTML={ { __html:this.state.blocks.blockTitle}}></div>
                    <div className="fontsize40ss" dangerouslySetInnerHTML={ { __html:this.state.blocks.blockSubTitle}}></div>
                    <div className="col-lg-2 col-lg-offset-5 col-md-2 nopadding">
                      <a href="/">
                        <div className="custbtnhbtnonimg">Learn more</div>
                      </a>
                    </div>      
                  </div>
              </div>
            </div>

					</div>
			
		);
	}
}
              {/*<img  width="100%" className="videoHt"
              src={this.state.blocks.bgImage}  alt="img"/>*/}
             {/* <div className="Imgcontent">
                    
                    <div className="imgbtnctnt">
                      <div className="fontsize47ss" dangerouslySetInnerHTML={ { __html:this.state.blocks.blockTitle}}></div>
                      <div className="fontsize40ss" dangerouslySetInnerHTML={ { __html:this.state.blocks.blockSubTitle}}></div>
                      <div className="col-lg-2 col-lg-offset-5 col-md-2 nopadding">
                                    <a href="/">
                                      <div className="custbtnhbtnonimg">Learn more</div>
                                    </a>
                        </div>
                       
                    </div>
                    
                </div>*/}