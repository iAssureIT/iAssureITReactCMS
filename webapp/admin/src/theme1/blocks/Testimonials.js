import React from 'react';
import "./Testimonials.css";
import axios from 'axios';
import $ 			from 'jquery';




export default class Testimonials extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
          blocks: {
            "blockTitle": "blockTitle here",
            
            "blockSubTitle": "We are passionate about our work",
            "blockDescription": "Lorem Ipsum",
            "blockComponentName": "TemplateOverview",
            "blockType": "",
            "bgImage": "/images/002.png",
            "fgImage": "/images/001.png",
            "repeatedBlocks": [
                                
                                { 
                                    Title: "Mr Paras Surana", 
                                    SubTitle: "Director - Prabandhan Management Consulting", 
                                    Image: "/images/t1.jpeg",
                                    Link: "", 
									                  Description: "One important thing which differentiates iAssureIT from other IT companies is the thought process of complete team & their will to provide the best of features, thinking completely out of the box & without bothering the extra efforts which would goin from their end implementing these.Really happy & satisfied with the quality of the work.",
									
									
								},

								{ 
                                    Title: "Mr. Imran,", 
                                    SubTitle: "Director - Prabandhan Management Consulting", 
                                    Image: "/images/t2.jpeg",
                                    Link: "", 
								                   	Description: "One important thing which differentiates iAssureIT from other IT companies is the thought process of complete team & their will to provide the best of features, thinking completely out of the box & without bothering the extra efforts which would goin from their end implementing these.Really happy & satisfied with the quality of the work.",
									
									
									
								},
								{ 
                                    Title: "Mr Mohd Imran,", 
                                    SubTitle: "Director - Prabandhan Management Consulting", 
                                    Image: "/images/t3.jpeg",
                                    Link: "", 
									Description: "One important thing which differentiates iAssureIT from other IT companies is the thought process of complete team & their will to provide the best of features, thinking completely out of the box & without bothering the extra efforts which would goin from their end implementing these.Really happy & satisfied with the quality of the work.",
									
									
									
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
    		$(document).ready(function(){
			  	$("#cItemHBpageTest div:nth-child(1)").addClass("active");
			});
              {
                 axios
                    .get('/api/blocks/get/'+this.props.block_id)
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
		// var data =this.state.Testimonials;
				return (
				<section className="testimonialwrapper">
					<div className="col-lg-2 col-lg-offset-5 col-md-2 col-md-offset-5 col-sm-12 col-xs-12 dashBoxTmwrapp">
                        <ul className="dashBoxTm">
                            <li className="dash1Tm"></li>
                            <li className="dash2Tm"></li>
                            <li className="dash3Tm"></li> 
                        </ul>
					</div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 clienttestmonials">
					<h1>
	                     <b>Client Testimonials</b>
                     </h1> 
                </div>  
				<div className="col-lg-12 col-md-12 col-sm- col-xs-12 row"> 
					<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12"> 
					   <div className="col-lg-10 col-md-11 col-lg-offset-1 col-sm-12 col-xs-12 testimonialBox"> 
						  <div id="myCarouselT" className="carousel slide" data-ride="carousel">
							 

									<div className="carousel-inner" id="cItemHBpageTest">
									{
									  	this.state.blocks.repeatedBlocks.map((result, index)=>{
									  	
									  	return(

			                      <div className="item  itemwrapp">
				                        <div className="carousel-caption">
														<div className="testContent"   dangerouslySetInnerHTML={ { __html:result.Description}}></div>
													</div>
												     <div className="testimonialWriter"dangerouslySetInnerHTML={ { __html:result.Title}}></div> 
													 <div className="writerDetails" dangerouslySetInnerHTML={ { __html:result.SubTitle}}></div>    
												     <div className="img-area">
				                           <img src="/images/t1.jpeg" alt="t1" className="d-block" />
			                       </div> 
										        </div>
										        )
											})
									}	
								
								 
								</div>
								<a className="left carousel-control test-carousel-control-left" href="#myCarouselT" data-slide="prev">
									<div className="glyphicon glyphicon-chevron-left"></div>
									<span className="sr-only">Previous</span>
								</a>
								<a className="right carousel-control test-carousel-control-right" href="#myCarouselT" data-slide="next">
									<div className="glyphicon glyphicon-chevron-right"></div>
									<span className="sr-only">Next</span>
								</a>
							</div>
						</div> 
					</div>  
			  </div>	
		</section>
	   );
	}
}
