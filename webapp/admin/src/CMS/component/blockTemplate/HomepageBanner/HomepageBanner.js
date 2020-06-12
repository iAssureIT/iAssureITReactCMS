import React from 'react';
import './HomepageBanner.css';
import axios from 'axios';
import $ 			from 'jquery';

/*
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';*/
import 'bootstrap/js/carousel.js';

export default class HomepageBanner extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      blocks: {
        "blockComponentName"  : "Typecomponent1",
        "blockType"       : "simple",
        blockTitle : "This is Block Title",
        blockDescription : "This is a Description. Some text goes here. You can replace the text as per your choice.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fgImage: "/images/bgimage1.jpg",
        bgVideo: "/images/bannervideo.mp4",
        repeatedBlocks 		:[
        						{
						        	Title :"Would you like to see<br/> how your smile can<br/> transformed?"
						        },
						        {
						        	Title :" you like to see<br/> how your smile can<br/> transformed?"
						        },
						        {
						        	Title :" you  to see<br/> how your smile can<br/> transformed?"
						        }
						    ]
      },
      blockID:"",
      block_id:""
    }; 

    
  }
componentDidMount(){
		/*console.log("==>",this.props.block_id);*/
		$(document).ready(function(){
			

			  $("#cItemHBpage div:nth-child(1)").addClass("active");


		});
          {
             axios
                .get('/api/blocks/get/'+this.props.block_id)
                .then((response)=>{
                    if(response.data){
                    	console.log("data in hm banner",response.data);
                      this.setState({
                          blocks:response.data
                      },()=>{
                      	// console.log("blocks", this.state.blocks);
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
          // console.log("blocks in render", this.state.blocks);

		return (
				<div className="row">

					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopadding ImgVideocontainer">
						<video loop autoplay='' muted  className="homepagebgvideo"
					  	src={this.state.blocks.bgVideo} type="video/mp4" alt="video"/>
					  	<div className="Videocontent">
					  	<div className="col-lg-6 mtop100">
					  		<div id="myCarousel" className="carousel " data-ride="carousel"  data-interval="false" data-pause="hover">
							
							  <ol className="carousel-indicators" id="indicatorHBpage">
							    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
							    <li data-target="#myCarousel" data-slide-to="1"></li>
							    <li data-target="#myCarousel" data-slide-to="2"></li>
							  </ol>

							 
							  <div className="carousel-inner" id="cItemHBpage">
							  {
							  this.state.blocks.repeatedBlocks.map((result, index)=>{
							  	{console.log("re release",result)}
							  	return(
									    <div className="item fs40" key={index}>
									      {/*<img src="la.jpg" alt="Los Angeles"/>*/}
									      <div dangerouslySetInnerHTML={ { __html:result.Title}}></div>
									    			 <div className="col-lg-10 col-md-5 nopadding">
											      		<div className="col-lg-6 col-md-6 nopadding">
								                          	<a href="/">
								                           		<div className="Hcmpbtn ">Make an Appointment</div>
								                          	</a>
											      		</div>
											      		<div className="col-lg-6 col-md-6">
													      	<a href="/">
													      		<div className="h2cmpbtn ">Request Consultant</div>
													      	</a>
												        </div>
									                   
												    </div> 
									    </div>
							    	)
									})
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
<div className="col-lg-6 mtop100">
					  		<OwlCarousel
							    className="owl-theme"
							    loop
							    mergeFit
							    items={1}
							   
							>
							{
						    	Array.isArray(this.state.blocks.repeatedBlocks) && this.state.blocks.repeatedBlocks.length > 0
						    		? 
						    			this.state.blocks.repeatedBlocks.map((result, index)=>{
										console.log('result', result);
										return(
											    
									    		<div className="fs40 item active" >
									    			 {console.log('result', result.Title)									    			 }
									    			<div dangerouslySetInnerHTML={ { __html:result.Title}}></div>
									    			 <div className="col-lg-10 col-md-5 nopadding">
											      		<div className="col-lg-6 col-md-6 nopadding">
								                          	<a href="/">
								                           		<div className="Hcmpbtn ">Make an Appointment</div>
								                          	</a>
											      		</div>
											      		<div className="col-lg-6 col-md-6">
													      	<a href="/">
													      		<div className="h2cmpbtn ">Request Consultant</div>
													      	</a>
												        </div>
									                   
												    </div> 
									    		</div>
											    
									
											)
										})
						    		:""
						    	}
							  
							</OwlCarousel>
					  	</div>

*/

/*
<div className="ImgVideocontainer">
				  	<video loop autoplay='' muted width="100%" className="videoHt"
					  src={this.state.blocks.bgVideo} type="video/mp4" alt="video"/>
					  <div className="Videocontent">
					  	<div className="col-lg-6 mtop100">
					  		<OwlCarousel
							    className="owl-theme"
							    loop
							    mergeFit
							    items={1}
							   
							>
							{
						    	Array.isArray(this.state.blocks.repeatedBlocks) && this.state.blocks.repeatedBlocks.length > 0
						    		? 
						    			this.state.blocks.repeatedBlocks.map((result, index)=>{
										console.log('result', result);
										return(
											    
									    		<div className="fs40 item active" >
									    			 {console.log('result', result.Title)									    			 }
									    			<div dangerouslySetInnerHTML={ { __html:result.Title}}></div>
									    			 <div className="col-lg-10 col-md-5 nopadding">
											      		<div className="col-lg-6 col-md-6 nopadding">
								                          	<a href="/">
								                           		<div className="Hcmpbtn ">Make an Appointment</div>
								                          	</a>
											      		</div>
											      		<div className="col-lg-6 col-md-6">
													      	<a href="/">
													      		<div className="h2cmpbtn ">Request Consultant</div>
													      	</a>
												        </div>
									                   
												    </div> 
									    		</div>
											    
									
											)
										})
						    		:""
						    	}
							  
							</OwlCarousel>
					  	</div>
					  </div>
				</div>


*/

/*<OwlCarousel
							    className="owl-theme"
							    loop
							    mergeFit
							    items={1}
							   
							>
							{
						    	Array.isArray(this.state.blocks.repeatedBlocks) && this.state.blocks.repeatedBlocks.length > 0
						    		? 
						    			this.state.blocks.repeatedBlocks.map((result, index)=>{
										console.log('result', result);
										return(
											    
									    		<div className="fs40 item active" >
									    			 {console.log('result', result.Title)									    			 }
									    			<div dangerouslySetInnerHTML={ { __html:result.Title}}></div>
									    			 <div className="col-lg-10 col-md-5 nopadding">
											      		<div className="col-lg-6 col-md-6 nopadding">
								                          	<a href="/">
								                           		<div className="Hcmpbtn ">Make an Appointment</div>
								                          	</a>
											      		</div>
											      		<div className="col-lg-6 col-md-6">
													      	<a href="/">
													      		<div className="h2cmpbtn ">Request Consultant</div>
													      	</a>
												        </div>
									                   
												    </div> 
									    		</div>
											    
									
											)
										})
						    		:""
						    	}
							  
							</OwlCarousel>*/