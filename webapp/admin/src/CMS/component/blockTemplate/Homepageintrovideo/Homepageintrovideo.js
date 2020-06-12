import React from 'react';
import './Homepageintrovideo.css';
import $ 			from 'jquery';
import axios from 'axios';


export default class Homepageintrovideo extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      blocks: {
        "blockComponentName"  : "Typecomponent1",
        "blockType"       : "simple",
        blockTitle : "This is Block Title",
        blockDescription : "This is a Description. Some text goes here. You can replace the text as per your choice.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        fgImage: "/images/bgimage1.jpg",
        repeatedBlocks 		:[
						        {
						        	Title :"NATHAN",
						        	Description :"We understand your teen,and how important <br/> it is to you that they get confident, healthy <br/> smile that  will stay them through their lifetime. <br/>  See what 14 year-pld Nathan, who loves music<br/> and sports,has to say about",
						        	Image :"/images/person.png",
						        	video :"/images/bannervideo.mp4",
						        },
						        
						        {
						        	Title :"NATHAN 2 ",
						        	Description :"We understand your teen,and how important <br/> it is to you that they get confident, healthy <br/> smile that  will stay them through their lifetime. <br/>  See what 14 year-pld Nathan, who loves music<br/> and sports,has to say about",
						        	Image :"/images/person.png",
						        },
						        
						        {
						        	Title :"NATHAN 3",
						        	Description :"We understand your teen,and how important <br/> it is to you that they get confident, healthy <br/> smile that  will stay them through their lifetime. <br/>  See what 14 year-pld Nathan, who loves music<br/> and sports,has to say about",
						        	Image :"/images/person.png",
						        },
						        

						     ]
      },
      blockID:"",
      block_id:"",
      selectedTitle:"NATHAN",
      selectedDescription:"We understand your teen,and how important <br/> it is to you that they get confident, healthy <br/> smile that  will stay them through their lifetime. <br/>  See what 14 year-pld Nathan, who loves music<br/> and sports,has to say about",
      selectedVideo:"/images/bannervideo.mp4",
    }; 

    
  }
componentDidMount(){
		var c = document.getElementById("myDIV").children.length;
		// console.log("ccc",c);
		var x = document.getElementById("myDIV").firstElementChild;
		// console.log("xxx",x);
		$(document).ready(function(){
			

			  $("#myDIV li:nth-child(1)").addClass("active");


		});

		

		// c[1].addClass(".active");
			/*console.log("==>",this.props.block_id);*/
          {
             axios
                .get('/api/blocks/get/'+this.props.block_id)
                .then((response)=>{
                    if(response.data){
                      this.setState({
                          blocks:response.data,
                          selectedTitle      : response.data.repeatedBlocks[0].Title,
					      selectedDescription :response.data.repeatedBlocks[0].Description,
					      selectedVideo 	  :response.data.repeatedBlocks[0].video,
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
				/*$(document).ready(function(){
				  $(".videoOnclick").click(function(){
				    $(".imgLine").addClass("imgLineActive");
				  });
				});*/
	}
	displayDetails(event){
		event.preventDefault();

		var Title  = event.target.getAttribute('data-Title');
		// console.log("index0",Title);
		
        var indexOFBlock = this.state.blocks.repeatedBlocks.findIndex(x=>x.Title===Title);
        // console.log("indexOFBlock",indexOFBlock);
        // console.log("indexOFBlock",this.state.blocks.repeatedBlocks[indexOFBlock]);
        var selectedImg = this.state.blocks.repeatedBlocks[indexOFBlock];
        // console.log("selectedImg",selectedImg);



		this.setState({
                       selectedTitle      : selectedImg.Title,
				      selectedDescription :selectedImg.Description,
				      selectedVideo 	  :selectedImg.Video,
                      });

	}

	render() {
		return (
			<div className="hpivwrapper">
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopadding">
					<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 nopadding bg1hpivwrapper">
						<div className=" " id="hmpageIntrov">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<ul className="nav nav-pills mtop17per" id="myDIV">
								{
						    		Array.isArray(this.state.blocks.repeatedBlocks) && this.state.blocks.repeatedBlocks.length > 0
						    		? 
						    		this.state.blocks.repeatedBlocks.map((result, index)=>{
										// console.log('result', result);
									return(
									    <li className=" videoOnclick" key={index}>
									    	<a data-toggle="pill" href="#home">
									    		<div>
									    			
									    			<img src={result.Image} data-Title={result.Title}  width="100px" alt="img" className="img-responsive"  onClick={this.displayDetails.bind(this)}/>
									    		</div>
											</a>
										</li>
											)
								})
						    	:""
						    	}
								    
								    
							  	</ul>
							  	
						  	</div>
						  
							<div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="tab-content w51percen">
							    <div id="home" className="tab-pane mar8per fade in active col-lg-12 col-md-12 col-sm-12 col-xs-12">
							      <h2>{this.state.selectedTitle}</h2>
							      <h5 className="" dangerouslySetInnerHTML={ { __html:this.state.selectedDescription}}></h5>
							    </div>
							  
							    
							</div>
							</div>
						</div>
				
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 nopadding bg2">
						
						{<video controls height="100%" className="videoPlayer1" src={this.state.selectedVideo} type="video/mp4" alt="video"/>}
						
					</div>
				</div>
			</div>
		);
	}
}
