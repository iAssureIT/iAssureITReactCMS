import React from 'react';
import axios from 'axios';

import './Homepagefeature.css';

export default class Homepagefeature extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      blocks: {
        "blockComponentName"  	: "Typecomponent1",
        "blockType"       		: "simple",
        blockTitle 				: "This is Block Title",
        blockDescription 		: "This is a Description. Some text goes here. You can replace the text as per your choice.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fgImage 				: "/images/homepage2.jpg",
        bgImage 				: "/images/homepage2.jpg",
        repeatedBlocks 		    :[
        							{
							        	Title :"CONVENIENCE",
							        	"Description":"No office visits, high tech remote monitoring",
							        	"Image":"/images/Approved.png",
       							 	},
        							{
							        	Title :"INVISALIGN",
							        	"Description":"Highest proven quality in clear aligner orthodontics",
							        	"Image":"/images/Approved.png",
       							 	},
        							{
							        	Title :"AFFORDABLE",
							        	"Description":"ILw/flexible per month pmt. calculator demo",
							        	"Image":"/images/Approved.png",
       							 	},
        							{
							        	Title :"COMFORTABLE",
							        	"Description":"No impressions (3D scan), with you 24/7",
							        	"Image":"/images/Approved.png",
       							 	},
        							{
							        	Title :"SAFETY",
							        	"Description":"No DIY, dedicated Ortho,clinical exam,safe referrals.Infectious-related",
							        	"Image":"/images/Approved.png",
       							 	}
       							]
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
			<div className="hfwrapper">
					<div className="ImgcontainerHF"  style={{backgroundImage:"url("+this.state.blocks.bgImage+")"}}>
					  	{/*<img  width="100%" className="videoHF"
						  src={this.state.blocks.bgImage}  alt="img"/>*/}
							
				    		<div className=" backgBlocakHF">
				    			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 headingofHF">
				    				<h1> DESIGNED WITH YOU IN MIND!
				    				</h1>

				    			</div>
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
									<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 ">
									{
						    	Array.isArray(this.state.blocks.repeatedBlocks) && this.state.blocks.repeatedBlocks.length > 0
						    	? 
						    		this.state.blocks.repeatedBlocks.slice(0,3).map((result, index)=>{
										// console.log('result', result);
									return(
										<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
											<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 box1q">
												<div className="imgincirle">
													<img className="" src={result.Image}  alt="img"/>
												</div>
												<div className="text-center mtop15HF">
													<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
														<h4>{result.Title}</h4>
														<h5>{result.Description}</h5>
													</div>
												</div>
							    
						    				</div>
						    			</div>
										)
								})
						    	:""
						    	}

										{/**/}
						    		</div>
						    		<div className="col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12 ">
										<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 ">
											{
						    	Array.isArray(this.state.blocks.repeatedBlocks) && this.state.blocks.repeatedBlocks.length > 0
						    	? 
						    		this.state.blocks.repeatedBlocks.slice(3,5).map((result, index)=>{
										// console.log('result', result);
									return(
											<div className="col-lg-6 col-md-5 col-sm-12 col-xs-12 ">
												<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 box1q">
													<div className="imgincirle">
														<img className="" src={result.Image}  alt="img"/>
													</div>
													<div className="text-center mtop15HF">
														<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
															<h4>{result.Title}</h4>
															<h5>{result.Description}</h5>
														</div>
													</div>
								    
							    				</div>
							    			</div>
										
										)
								})
						    	:""
						    	}
						    			</div>
						    		</div>
						    	</div>
						   

						    </div>
						
					</div>
				</div>
		);
	}
}



/*
<div className="ImgcontentHF">
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
									<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 ">

										<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
									ji
								    
						    			</div>
										<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
									
								    koj
						    			</div>
										<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
									
								    nk
						    			</div>
						    		</div>
						    	</div>
						    </div>

						    */