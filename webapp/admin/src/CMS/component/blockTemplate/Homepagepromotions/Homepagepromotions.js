import React from 'react';
import './Homepagepromotions.css';
import axios from 'axios';


export default class Homepagepromotions extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      blocks: {
        "blockComponentName"  : "Typecomponent1",
        "blockType"       : "simple",
        blockTitle : "CALCULATE THE PRICE OF <br/>A BETTER SMILE",
        blockSubTitle : "PROMOTIONS",
        blockDescription : "We are excited to serve the San Francisco Bay Areal As a celebration of our opening. We are offering special promotional pricing for the first few days-schedule a risk-free appointment,this pricing won't last. And the best part-we come to you! ",
        bgImage: "/images/sm1.jpg",
        fgImage: "/images/homepage2.jpg",
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
    return (
     
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopadding ht850px">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopadding">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 firstsubDiv">
	           <div className="col-lg-8 col-lg-offset-1">
	            <h3 className="DivText" dangerouslySetInnerHTML={ { __html:this.state.blocks.blockTitle}}></h3>
	            <button className="calBtn">Calculate</button>
	           </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6  imgDiv NOPadding">
                 
                   <img src={this.state.blocks.fgImage} width="100%" alt="img"/>
               
            </div>
        </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopadding">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 nopadding secondDiv">
             {/*<div><img src="/images/passportPhoto.jpg" /></div>*/}
                   <img src={this.state.blocks.bgImage} width="100%" alt="img"/>

            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 secondsubDiv">
               <div className="col-lg-9 col-lg-offset-2">
                 <h3 className="Div2Text" dangerouslySetInnerHTML={ { __html:this.state.blocks.blockSubTitle}}></h3>
                 <p className="" dangerouslySetInnerHTML={ { __html:this.state.blocks.blockDescription}}></p>
                  <button className="Div2Btn col-lg-11">Get your best  smile for less thsn $149 per month</button>
                  <button className="Div2Btn col-lg-11">Get your best  smile and bite for less thsn $149 per month</button>
               </div>
            </div>
          </div> 
      </div>

    );
  }

}
