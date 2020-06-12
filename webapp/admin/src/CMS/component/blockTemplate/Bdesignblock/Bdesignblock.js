import React from 'react';
import "./Bdesignblock.css";
import axios from 'axios';


export default class Bdesignblock extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      blocks: {
        "blockTitle": "",
        "blockSubTitle": "",
        "blockDescription": "YOU DESERVE THE <br/>HIGHLY CUSTOMISABLE, LUXERIOUS & HAND CRAFTED ONLINE STORE OR ECOMMERCE WEBSITE FOR YOUR PRECIOUS CLIENT ENGAGEMENT",
        "blockComponentName": "",
        "blockType": "",
        "bgImage": "/images/D (1).png",
        "fgImage": "/images/ec11.png",
        "repeatedBlocks": [
        					{ 
        						Title: "Sample 1", 
        						SubTitle: "", 
        						Link: "", 
        						Image: "/images/4.png",
        						Description: ""
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
              })
            }
      this.setState({
                block_id:this.props.block_id
              });
}


	render() {
		return (
			<div className="container-fluid nopadding ecBox4" style={{backgroundImage:"url("+this.state.blocks.bgImage+")"}}>
				<img className="img-responsive pull-right" src={this.state.blocks.fgImage} alt="Bannerpng" style={{marginTop:"-1px",zIndex:"-1"}}/>
				<div className="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1 col-sm-12 col-xs-12">
					
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 centered">
						<div className="col-lg-10 col-lg-offset-1 col-md-10 col-sm-10 col-xl-10">
							
							<h1 className="font29" dangerouslySetInnerHTML={{ __html: this.state.blocks.blockDescription } }></h1>
						
							{/*<h5  className="wrdmore"><span><u> Read More</u></span> >> </h5>*/}
						</div>
					</div>
				</div>
				
			</div>
		);
	}
}
