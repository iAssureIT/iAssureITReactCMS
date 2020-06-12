import React from 'react';
import "./EcommBlock3.css";
import axios from 'axios';


export default class EcommBlock3 extends React.Component {


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
        						Title: "BUSINESS GROWS", 
        						SubTitle: "YOU NEED TRULY PROFESSIONAL <br/>SUPPORT TO MAINTAIN & <br/>ENHANCE YOUR WEBSITE, <br/><b>WHEN YOUR BUSINESS GROWS</b>", 
        						Link: "", 
        						Image: "/images/ec14.png",
        						Description: "Cheap ecommerce sites give you the Cheap Result & Cheap Experience. Readymade ecommerce CMS has serious limitations at advanced levels. If you want truly great eCommerce Experience  even at highly grown up levels, then Customised or tailormade eCommerce website is the only solution."
        					},
        					{ 
        						Title: "ONLINE STORES", 
        						SubTitle: "<b>FEATURE RICH ECOMMERCE ONLINE STORES</b>", 
        						Link: "", 
        						Image: "/images/ec17.png",
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
		return (
			<div className="container-fluid nopadding">
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopadding">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopadding">
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopadding ecBox4ab">
							<div className="col-lg-6 col-lg-offset-1 col-md-6 col-sm-6 col-xs-6 ecBox5a">
								<div className="col-lg-12 col-md-12 col-sm-10 col-xl-10 pull-right">
									<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 ">
										<ul className="dashBoxWwA col-lg-4">
										  <li className="dash2WwA"></li>
										</ul>
									</div>
									<h1 className="b1h1"><b><span style={{fontSize:"50px",color:"#376bff"}}>{this.state.blocks.repeatedBlocks[0].Title}</span> 
									</b></h1><h1 className="b1h1"  dangerouslySetInnerHTML={{ __html:this.state.blocks.repeatedBlocks[0].SubTitle}}></h1>
									<p className="wparab1"  dangerouslySetInnerHTML={{ __html:this.state.blocks.repeatedBlocks[0].Description}}></p>
									{/*<h5  className="wrdmore"><span><u> Read More</u></span> >> </h5>*/}
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 ">
								<img className="img-responsive ecimgec14" src={this.state.blocks.repeatedBlocks[0].Image} alt="Bannerpng"/>
							</div>
						</div>
						<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 ecBox7">
						<div className="col-lg-5 col-md-5 col-sm-6 col-xl-6 ">
							<img className="img-responsive ec4mtop100" src={this.state.blocks.repeatedBlocks[1].Image} alt="Bannerpng"/>
						</div>
						<div className="col-lg-7 col-md-7 col-sm-6 col-xl-6">
							<div className="col-lg-10 col-md-10 col-sm-10 col-xl-10 pull-right">
								<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 ">
									<ul className="dashBoxWwA col-lg-4	">
									  
									  <li className="dash2WwA"></li>
									  
									</ul>
								</div>
									<h1 className="b1h1"><b><span style={{fontSize:"50px",color:"#fff"}}>{this.state.blocks.repeatedBlocks[1].Title}</span> 
									</b></h1><h1 className="b1h1"  dangerouslySetInnerHTML={{ __html:this.state.blocks.repeatedBlocks[1].SubTitle}}></h1>
									<p className="wparab1"  dangerouslySetInnerHTML={{ __html:this.state.blocks.repeatedBlocks[1].Description}}></p>
								{/*<h5  className="wrdmore"><span><u> Read More</u></span> >> </h5>*/}
							</div>
						</div>
						
					</div>
						
					</div>
				</div>
			</div>
		);
	}
}

{/*<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ecBox5">
							<div className="col-lg-4 col-lg-offset-1 col-md-4 col-sm-6 col-xl-6 ">
								<img className="img-responsive pull-right egimg1" src="./images/ec15.png" alt="Bannerpng"/>
							</div>
							<div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
								<div className="col-lg-10 col-md-10 col-sm-10 col-xl-10">
									<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 ">
										<ul className="dashBoxWwA col-lg-4">
										  <li className="dash2WwA"></li>
										</ul>
									</div>
									<h1 className="b1h1"><b>YOU DESERVE THE <br/>HIGHLY CUSTOMISABLE, LUXERIOUS &
										HAND CRAFTED ONLINE STORE OR
										ECOMMERCE WEBSITE FOR YOUR
										PRECIOUS CLIENT ENGAGEMENT</b>
									</h1>
									<p className="wparab1">Cheap ecommerce sites give you the Cheap Result & 
										Cheap Experience. Readymade ecommerce CMS has serious limitations
										 at advanced levels. If you want truly great eCommerce Experience 
										 even at highly grown up levels, then Customised or tailormade eCommerce
										 website is the only solution.
									</p>
									
								</div>
							</div>
						</div>*/}