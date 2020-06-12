import React from 'react';
import "./MissionVision.css"
import axios from 'axios';

export default class MissionVision extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      blocks: {
        "blockTitle": "Mission Vision",
        "blockSubTitle": "We are passionate about our work",
        "blockDescription": '<p className="mvpara1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feu-giat euismod leo sed efficitur. Sed quis ultriciesante. Donec quistristique magna.</p>	<p className="mvpara1">Etiam sit amet maximus dui. Phasellus iaculis consequat tempus. Sed lorem nunc, tempor a vehicula et, molestie sedmetus. Morbi feugiat nulla tincidunt nisl mattis sollicitudin.</p>',
        "blockComponentName": "TemplateOverview",
        "blockType": "",
        "bgImage": "/images/1.png",
        "fgImage": "/images/37.png",
        "repeatedBlocks": [
        					{ 
        						Title: "Sample 1", 
        						SubTitle: "", 
        						Link: "", 
        						Image: "/images/4.png",
        						Description: ""
        					},
        					{ 
        						Title: "Sample 2", 
        						SubTitle: "", 
        						Link: "", 
        						Image: "/images/4.png",
        						Description: ""
        					},
        					{ 
        						Title: "Sample 3", 
        						SubTitle: "", 
        						Link: "", 
        						Image: "/images/4.png",
        						Description: ""
        					},
        					{ 
        						Title: "Sample 4", 
        						SubTitle: "", 
        						Image: "/images/4.png",
        						Link: "", 
        						Description: ""
        					},
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
				<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 MVwrapper hidden-sm hidden-xs">
					
					<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 mvBox1">
						<div className="col-lg-6 col-md-6 col-sm-6 col-xl-6 ">
							<img className="mvinfoImg1 img-responsive pull-right" src="./images/47.png" alt="Bannerpng"/>

						</div>
						<div className="col-lg-6 col-md-6 col-sm-6 col-xl-6">
							<div className="mvinfotext1 col-lg-10 col-md-10 col-sm-10 col-xl-10">
								<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 ">
									<ul className="dashBoxmv col-lg-4	">
									  <li className="dash1mv"></li>
									  <li className="dash2mv"></li>
									  <li className="dash3mv"></li>
									</ul>
								</div>
								<h1 className="mvheadingb1">{this.state.blocks.blockTitle}
								</h1>
								<p dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }></p>
								<h5  className="mvrdmore"><span><u> Read More</u></span> >> </h5>
							</div>
						</div>
					</div>
				</div>
				{/*mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm*/}	
				{/*===============================================================*/}
				{/*wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww*/}
				<div className="col-sm-12 col-xs-12 MVwrapperxs hidden-lg hidden-md">
					
					
					<div className="col-sm-12 col-xs-12 mvBox1xs">
						<div className="col-sm-6 col-xs-12 col-sm-offset-3">
							<img className="mvinfoImg2xs img-responsive  " src="./images/47.png" alt="Bannerpng"/>
						</div>
						<div className="col-sm-12 col-xs-12">
							<div className="mvinfotext1xs col-sm-12 col-xs-12">
								<div className="col-sm-12 col-xs-12 ">
									<ul className="dashBoxmvxs col-xs-6 col-xs-offset-4 col-sm-6 col-sm-offset-5">
									  <li className="dash1mvxs"></li>
									  <li className="dash2mvxs"></li>
									  <li className="dash3mvxs"></li>
									</ul>
								</div>
								<h1 className="mvheadingb1xs">Why<b>Choose ?</b>
								</h1>
								<p className="mvpara1xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
								Sed feu-giat euismod leo sed efficitur. Sed quis ultricies
								ante. Donec quistristique magna.
								</p>	
								<p className="mvpara1xs">Etiam sit amet maximus dui. Phasellus iaculis consequat 
								tempus. Sed lorem nunc, tempor a vehicula et, molestie 
								sedmetus. Morbi feugiat nulla tincidunt nisl mattis sollicitudin.
								</p>
								<h5  className="mvrdmorexs"><span><u> Read More</u></span> >> </h5>
							</div>
						</div>
					</div>
				</div>	
			</div>
		);
	}
}
