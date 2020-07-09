import React,{Component} from 'react';
import "./AutoPilotPlatform.css";
import axios from 'axios';

export default class AutoPilotPlatform extends Component{


    constructor(props) {
        super(props);
        this.state = {
          blocks: {
            "blockTitle": "<b>AUTOPILOT</b> ECOMMERCE PLATFORM",
            
            "blockSubTitle": "We are passionate about our work",
            "blockDescription": " <span style='font-size:30px'>Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Ipsum passages, and more recentlywith desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Ipsum passages. <p style='margin-top:25px'> It is a long established fact that a reader will be distracted by the readable content of a page whenlooking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution Ipsum passages, and more recently with desktop publishing software</p>", 
            "blockComponentName": "TemplateOverview",
            "blockType": "",
            "bgImage": "/images/1.png",
            "fgImage": "/images/0002.png",
            "repeatedBlocks": [
                                
                                { 
                                    Title: "Sample 5", 
                                    SubTitle: "", 
                                    Image: "/images/4.png",
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


    render(){
        return(
            <div className="autopilotwrapper00">
                <div className="autopilotwrapper">
                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
					  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<ul className="dashBoxOS dashboxauto col-lg-2 col-lg-offset-5 col-md-2 col-md-offset-5 col-sm-12 col-xs-12">
						  <li className="dash1OS"></li>
						  <li className="dash2OS"></li>
						  <li className="dash3OS"></li>
						</ul>
					</div> 
                </div> 
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row container-fluid">
                        <div className="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-12 col-xs-12 mainrow">
                            <div className="Auopilot" dangerouslySetInnerHTML={ { __html:this.state.blocks.blockTitle}}></div>
                        
                </div> 
                </div> 
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Auotmaincontentwrapper">
                     <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 leftimageframework ">
                         <img src={this.state.blocks.fgImage} alt="002" className="leftsideimg"/>  


                    </div> 

                     <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 autocontentframework">
                            <p className="paragraphfasttrack00" dangerouslySetInnerHTML={ { __html:this.state.blocks.blockDescription}}></p>

                            
                             <h3 className="ftracermore00">Read More </h3> <div className="arrow00"><i className="fas fa-angle-double-right"></i></div>

                        </div> 

                 </div>  


                </div>


            </div>
        )
    }
}