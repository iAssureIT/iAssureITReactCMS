import React from 'react';
import "./IndustryDomains.css";
import axios from 'axios';

export default class IndustryDomains extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
          blocks: {
            "blockTitle": "<b>INDUSTRY</b> DOMAINS",
            
            "blockSubTitle": "We are passionate about our work",
            "blockDescription": "<span style='font-size:30px'><b>Lorem Ipsum </b> </span> is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Ipsum passages,<p style='margin-top:20px'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution Ipsum passages, and more recently with desktop publishing software </p>",
            "blockComponentName": "TemplateOverview",
            "blockType": "",
            "bgImage": "/images/002.png",
            "fgImage": "/images/001.png",
            "repeatedBlocks": [
                                
                                { 
                                    Title: "Finance Industry", 
                                    SubTitle: "", 
                                    Image: "/images/50.png",
                                    Link: "", 
									Description: ""
									
									
								},

								{ 
                                    Title: "Manufactuering Industry", 
                                    SubTitle: "", 
                                    Image: "/images/50.png",
                                    Link: "", 
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
	//  var data = this.state.allData;
    	// console.log("all data ",data);
		return (
			<div className=" container-fluid nopadding">
				<div className="industryDomainsHt container-fluid">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 ">
						<ul className="dashBoxID col-lg-2 col-lg-offset-5 col-md-2 col-md-offset-5">
						  <li className="dash1ID "></li>
						  <li className="dash2ID"></li>
						  <li className="dash3ID"></li>
						</ul>
					</div>
					<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12  industrydomain ">
						<div className="text-center">
							<div className="hmaintitle" dangerouslySetInnerHTML={ { __html:this.state.blocks.blockTitle}} ></div>
						</div>
					</div>
					
					<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 row">
						<div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12 iDomainBlock">
							<div className="col-lg-4 col-md-4">
								<div className="idcol1">
									<img src="/images/50.png" alt="18" className="center"/> 
									<div className="text-center htitle">
									<h3 className="xshmview00">Finance Industry</h3>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4">
								<div className="idcol1">
								  <img src="/images/51.png" alt="18" className="center"/> 
								  <div className="text-center htitle">
										<h3 className="xshmview">Manufactuering Industry</h3>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4">
								<div className="idcol1">
								<img src="/images/52.png" alt="18" className="center"/> 
								<div className="text-center htitle">
										<h3 className="xshmview">Transport Industry</h3>
								</div>
							</div>

							</div>
							<div className="col-lg-4 col-md-4">
								<div className="idcol1">
								<img src="/images/53.png" alt="18" className="center"/> 
								<div className="text-center htitle">
										<h3 className="xshmview">Healthcare Industry</h3>
									</div>


								</div>

							</div>
							<div className="col-lg-4 col-md-4">
								<div className="idcol1">
								<img src="/images/54.png" alt="18" className="center"/>
								<div className="text-center htitle">
										<h3 className="xshmview">Real Estate Industry</h3>
									</div> 


								</div>

							</div>
							<div className="col-lg-4 col-md-4">
								<div className="idcol1">
								<img src="/images/55.png" alt="18" className="center"/> 
								<div className="text-center htitle">
										<h3 className="xshmview">Education Industry</h3>
									</div>


								</div>

							</div>
							<div className="col-lg-4 col-md-4">
								<div className="idcol1">
								<img src="/images/56.png" alt="18" className="center"/> 
								<div className="text-center htitle">
										<h3 className="xshmview">eCommerce Industry</h3>
									</div>


								</div>

							</div>
							<div className="col-lg-4 col-md-4">
								<div className="idcol1">
								<img src="/images/57.png" alt="18" className="center"/> 
								<div className="text-center htitle">
										<h3 className="xshmview000">Travel Industry</h3>
									</div>


								</div>

							</div>
							<div className="col-lg-4 col-md-4">
								<div className="idcol1">
								<img src="/images/58.png" alt="18" className="center"/>
								<div className="text-center htitle">
										<h3 className="xshmview">Start Up Industry</h3>
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
			