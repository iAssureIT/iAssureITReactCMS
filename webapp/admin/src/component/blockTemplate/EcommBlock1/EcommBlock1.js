import React from 'react';
import "./EcommBlock1.css";
import axios from 'axios';

export default class EcommBlock1 extends React.Component {


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
        						Title: "YOU DESERVE THE<br/><b>HIGHLY CUSTOMISABLE, LUXERIOUS & HAND CRAFTED ONLINE STORE</b> OR  ECOMMERCE WEBSITE FOR<b> YOUR  PRECIOUS CLIENT ENGAGEMENT</b>", 
        						SubTitle: "", 
        						Link: "", 
        						Image: "/images/eca19.png",
        						Description: "Cheap ecommerce sites give you the Cheap Result & Cheap Experience. Readymade ecommerce CMS has serious limitations at advanced levels. If you want truly great eCommerce Experience  even at highly grown up levels, then Customised or tailormade eCommerce website is the only solution."
        					},
        					{ 
        						Title: "<b>FOR ULTRA GREAT USER EXPERIENCE,</b> YOUR ECOMMERCE WEBSITE MUST BE SUPER FAST, <b>HIGHLY SECURED & MOBILE FRIENDLY</b>", 
        						SubTitle: "", 
        						Link: "", 
        						Image: "/images/ec12.png",
        						Description: "Cheap ecommerce sites give you the Cheap Result & Cheap Experience. Readymade ecommerce CMS has serious limitations at advanced levels. If you want truly great eCommerce Experience  even at highly grown up levels, then Customised or tailormade eCommerce website is the only solution."
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

	render() {
		console.log("ecb1",this.props);
		return (
			<div className="container-fluid nopadding">
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 wwrapper container-fluid nopadding" >
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ecBox1">{/**/}
						<div className="col-lg-5 col-md-5 col-sm-6 col-xl-6 ">
							<img className=" img-responsive pull-right" src={this.state.blocks.repeatedBlocks[0].Image} alt="Bannerpng"/>
						</div>
						<div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
							<div className="ecb1fotext col-lg-10 col-md-10 col-sm-10 col-xl-10">
								<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 ">
									<ul className="dashBoxWwA col-lg-4">
									  <li className="dash2WwA"></li>
									</ul>
								</div>
								<h1 className="b1h1" dangerouslySetInnerHTML={{ __html:this.state.blocks.repeatedBlocks[0].Title}}></h1>
								<p className="ecparab1 col-lg-10 col-md-10 row" dangerouslySetInnerHTML={{ __html:this.state.blocks.repeatedBlocks[0].Description}}></p>
								{/*<h5  className="wrdmore"><span><u> Read More</u></span> >> </h5>*/}
							</div>
						</div>
					</div>
					<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 ecBox2">
						<div className="col-lg-7 col-md-7 col-sm-6 col-xl-6">
							<div className="ecb1fotext2 col-lg-10 col-md-10 col-sm-10 col-xl-10 pull-right">
								<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 ">
									<ul className="dashBoxWwA col-lg-4	">
									  
									  <li className="dash2WwA"></li>
									  
									</ul>
								</div>
								
								<h1 className="b1h1" dangerouslySetInnerHTML={{ __html:this.state.blocks.repeatedBlocks[1].Title}}></h1>
								<p className="wparab1" dangerouslySetInnerHTML={{ __html:this.state.blocks.repeatedBlocks[1].Description}}></p>
								{/*<h5  className="wrdmore"><span><u> Read More</u></span> >> </h5>*/}
							</div>
						</div>
						<div className="col-lg-5 col-md-5 col-sm-6 col-xl-6 ">
							<img className="img-responsive" src={this.state.blocks.repeatedBlocks[1].Image} style={{position:"absolute",zIndex:"1"}} alt="Bannerpng"/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
