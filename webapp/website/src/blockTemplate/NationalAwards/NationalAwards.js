import React,{Component}from 'react';
import './NationalAwards.css';
import axios from 'axios';

export default class NationalAwards extends Component{

    constructor(props) {
        super(props);
        this.state = {
          blocks: {
            "blockTitle": "<b>NATIONAL</b> AWARDS",
            
            "blockSubTitle": "The Company Of The Year 2018",
            "blockDescription": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a.",
            "blockComponentName": "TemplateOverview",
            "blockType": "",
            "bgImage": "/images/ecom11.png",
            "fgImage": "/images/00.png",
            "repeatedBlocks": [
                                
                                { 
                                     Image: "/images/41.png"
                                },
                                { 
                                  Image: "/images/40.png"
                             },
                             { 
                              Image: "/images/42.png"
                         },
                         { 
                          Image: "/images/43.png"
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
            <div className="Nawardswrapp">
                <div className="NawardsBgIMG"style={{backgroundImage:"url("+this.state.blocks.bgImage+")"}}>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
                     <div className="col-lg-2 col-lg-offset-5 col-md-2 col-md-offset-5 col-sm-12 col-xs-12 awardwrapp">
                        <ul className="dashBoxNA">
                            <li className="NAdash1"></li>
                            <li className="NAdash2"></li>
                            <li className="NAdash3"></li> 
                        </ul>
                    </div> 
                 </div>
                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NAh1title">
                        <div className=" text-center">
                            <div className="nah1title00" dangerouslySetInnerHTML={ { __html:this.state.blocks.blockTitle}}></div>
                        </div>
                   </div>
                   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 narionalawardwrapp">
                     <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 awardleftwrapp">
                       <img src="/images/awardn.png" alt="awardn" className="awardIMG"/>

                     </div>
                     <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 NATextwrapp">
                      
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NAtextwrapp1">
                        <div className="NAh1title" dangerouslySetInnerHTML={ { __html:this.state.blocks.blockSubTitle}}></div>
                        <div className="NAhetitle"dangerouslySetInnerHTML={ { __html:this.state.blocks.blockDescription}}></div> 

                           {/* <h3 className="NArmore">Read More </h3> <div className="NAarrow"><i className="fas fa-angle-double-right"></i></div> */}
                     
                      <div>
                        {
                          
                          this.state.blocks.repeatedBlocks && this.state.blocks.repeatedBlocks.length>0
                          ?
                          this.state.blocks.repeatedBlocks.map((data,index)=>{
                            return(
                              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 award1wrapp">
                              <img src={data.Image} alt="40" className="awaed1" /> 
                             </div>
                            )

                          })
                          :
                          null
                          
                        }
                          {/* <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 award1wrapp">
                                <img src="/images/41.png" alt="40" className="awaed1" /> 
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 award1wrapp">
                              <img src="/images/40.png" alt="40" className="awaed1" /> 
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 award1wrapp">
                              <img src="/images/42.png" alt="40" className="awaed1" />
                            </div> 
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 award1wrapp">
                                  <img src="/images/43.png" alt="40" className="awaed1" />
                            </div>  */}
                      </div>
                   </div>
                 </div>
              </div>

                </div>
                

            </div>
        )
    }
}