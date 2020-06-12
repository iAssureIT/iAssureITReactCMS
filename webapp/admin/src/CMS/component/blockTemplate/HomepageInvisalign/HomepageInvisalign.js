import React from 'react';
import './HomepageInvisalign.css';
import axios from 'axios';
import 'bootstrap/js/carousel.js';

/*

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';*/
import $ 			from 'jquery';

export default class HomepageInvisalign extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      blocks: {
        "blockComponentName"    : "Typecomponent1",
        "blockType"       		: "simple",
        blockTitle 				: "WHY INVISALIGN <br/>IS RIGHT FOR ME ?",
        blockDescription 		: "What does impeoved tooth<br/>aligment and a healthy bite <br/>provide me?",
        fgImage 				: "/images/bgimage1.jpg",
        repeatedBlocks 			:[
        							{
							        	Title 			:"LOOK &nbsp;<span className='clorcyan'> GOOD</span>",
							        	"Description" 	:"Naturally Beautiful aesthetics.<br/>Your best smile.",
							        	"Image"			:"/images/sm1.jpg",
						        	},
        							{
							        	Title 			:" &nbsp;<span className='clorcyan'> GOOD</span>",
							        	"Description" 	:"Naturally Beautiful aesthetics.<br/>Your best smile.",
							        	"Image"			:"/images/sm1.jpg",
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
			

			  $("#cItemHPI1 div:nth-child(1)").addClass("active");


		});
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
			<div className="hpInviwrapper">
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopadding">
					<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 nopadding bghpI">
						
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mtop19perHI">
							<b><h1 dangerouslySetInnerHTML={ { __html:this.state.blocks.blockTitle}}></h1></b>
							<h2 dangerouslySetInnerHTML={ { __html:this.state.blocks.blockDescription}}></h2>
							<div className="col-lg-3 col-md-2 nopadding">
	                          	<a href="/">
	                           		<div className="custbtnhbtnonimgHI">Get started</div>
	                          	</a>
				      		</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 nopadding" id="owlCarHIpage">
						<div className="marTop15perHI">
							<div id="HPInviID" class="carousel slide" data-ride="carousel">
							 
							 {/* <ol class="carousel-indicators">
							    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
							    <li data-target="#myCarousel" data-slide-to="1"></li>
							    <li data-target="#myCarousel" data-slide-to="2"></li>
							  </ol>*/}

							 
							  <div class="carousel-inner" id="cItemHPI1">
							  	{this.state.blocks.repeatedBlocks.map((result, index)=>{
										// console.log('result', result);
									return(
							    <div class="item ">
							    	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								    			<div className="">
								    				<img   className="imgRoundHI"  src={result.Image}  alt="img"/>
								    				<div className="text-center clorwht col-lg-12 col-md-12 col-sm-12 col-xs-12">
								    					<h1 dangerouslySetInnerHTML={ { __html:result.Title}}></h1>
								    					<h4 dangerouslySetInnerHTML={ { __html:result.Description}}></h4>
								    				</div>
								    			</div>

								    		</div>
							     {/* <img src="la.jpg" alt="Los Angeles"/>*/}
							    </div>
							    )})
								}
							
							  </div>

							
							  <a class="left carousel-control" href="#HPInviID" data-slide="prev">
							    <span class="glyphicon glyphicon-chevron-left"></span>
							    <span class="sr-only">Previous</span>
							  </a>
							  <a class="right carousel-control" href="#HPInviID" data-slide="next">
							    <span class="glyphicon glyphicon-chevron-right"></span>
							    <span class="sr-only">Next</span>
							  </a>
							</div>
							
						    	 
						

						</div>
					</div>
				</div>
			</div>
		);
	}
}

/*
{
						    	Array.isArray(this.state.blocks.repeatedBlocks) && this.state.blocks.repeatedBlocks.length > 0
						    	? 
						    		this.state.blocks.repeatedBlocks.map((result, index)=>{
										// console.log('result', result);
									return(
								    		<div className="item col-lg-12 col-md-12 col-sm-12 col-xs-12">
								    			<div className="">
								    				<img   className="imgRoundHI"  src={result.Image}  alt="img"/>
								    				<div className="text-center clorwht col-lg-12 col-md-12 col-sm-12 col-xs-12">
								    					<h1 dangerouslySetInnerHTML={ { __html:result.Title}}></h1>
								    					<h4 dangerouslySetInnerHTML={ { __html:result.Description}}></h4>
								    				</div>
								    			</div>

								    		</div>
							  
							    		)
									})
						    	:""
						    	}

*/