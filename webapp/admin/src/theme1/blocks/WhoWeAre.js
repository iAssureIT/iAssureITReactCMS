import React from 'react';
import "./WhoWeAre.css";
import axios from 'axios';

export default class WhoWeAre extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
          blocks: {
            "blockTitle": " WHO <b>WE ARE ?</b>",
            
            "blockSubTitle": "We are passionate about our work",
            "blockDescription": "<span style='font-size:30px'><b>Lorem Ipsum </b> </span> is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Ipsum passages,<p style='margin-top:20px'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution Ipsum passages, and more recently with desktop publishing software </p>",
            "blockComponentName": "TemplateOverview",
            "blockType": "",
            "bgImage": "/images/002.png",
            "fgImage": "/images/us3.png",
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


	render() {
		return (
			   <div className="whowrapper">
				    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                         <div className="col-lg-2 col-lg-offset-5 col-md-2 col-md-offset-5 col-sm-12 col-xs-12 dashboxwrapper">
                             <ul className="dashBox">
						         <li className="dash1"></li>
						         <li className="dash2"></li>
					             <li className="dash3"></li> 
				             </ul>
                        </div>
                     </div>
					 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hcustomtitlewrapp">
                        <div className="text-center">
                            <div className="h2titlecustom" dangerouslySetInnerHTML={ { __html:this.state.blocks.blockTitle}}></div>
                        </div>
				    </div>
					<div className="col-lg-12 col-sm-12 col-sm-12 col-xs-12 custmowrapper">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 customIMGwrapp">
                        <img src={this.state.blocks.fgImage} alt="001" className="customleftimage"/>
                        </div>
						<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 customtextwrapp">
                             <p className="h1titlecustom"  dangerouslySetInnerHTML={ { __html:this.state.blocks.blockDescription}}>
                             </p> 
                             <h3 className="rmoretitle">Read More </h3> <div className="awrapp"><i className="fas fa-angle-double-right"></i></div>
                        </div>
					</div> 
				</div>
		);
	}
}	

{/* <div className="container-fluid nopadding">
<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 wwrapper container-fluid hidden-sm hidden-xs nopadding">
	<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 wwBox2">
		
		<div className="col-lg-6 col-md-6 col-sm-6 col-xl-6">
			<div className="winfotext1 col-lg-10 col-md-10 col-sm-10 col-xl-10 pull-right">
				<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 ">
					<ul className="dashBoxWwA col-lg-4	">
					  <li className="dash1WwA"></li>
					  <li className="dash2WwA"></li>
					  <li className="dash3WwA"></li>
					</ul>
				</div>
				<h1 className="wheadingb1">Who<b> We Are?</b>
				</h1>
				<p className="wpara1">iAssureIT is an innovative IT company with energetic, talented and ambitious pool of 30+ Software Engineers,
				 passionate about bringing the disruptive change in technology arena.
				<br/>We are the Change Makers.<br/>

				&nbsp;&nbsp;&nbsp;&nbsp;Our world class quality application development with latest cutting-edge technologies used for rapid development and blazing fast performance.
				A tremendous journey of 7 years started in 2011. We have developed over 150+ projects of small and large sizes. Our clientele is spread across the globe, from countries like USA, Europien Countries, South Africa, Gulf Region, Singapore and Australia.
				<br/>
				&nbsp;&nbsp;&nbsp;&nbsp;iAssureIT has customers from various industry domains that include Start ups too. Our clients are from industries like Financial Services, Healthcare, Manufacturing, Pharmaceuticals, Real Estate, Shipping and Logistics, Education, etc. We have been helping them to craft their
				organizational level digital road map.
				</p>
				

			</div>

		</div>
		<div className="col-lg-6 col-md-6 col-sm-6 col-xl-6 ">
			<img className="winfoImg1 img-responsive" src="./images/38.png" alt="Bannerpng"/>

		</div>

	</div>
	<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 wwBox1">
		<div className="col-lg-6 col-md-6 col-sm-6 col-xl-6 ">
			<img className="winfoImg1 img-responsive pull-right" src="./images/39.png" alt="Bannerpng"/>

		</div>
		<div className="col-lg-6 col-md-6 col-sm-6 col-xl-6">
			<div className="winfotext1 col-lg-10 col-md-10 col-sm-10 col-xl-10">
				<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 ">
					<ul className="dashBoxWwA col-lg-4	">
					  <li className="dash1WwA"></li>
					  <li className="dash2WwA"></li>
					  <li className="dash3WwA"></li>
					</ul>
				</div>
				<h1 className="wheadingb1">Mission<b> Vision</b>
				</h1>
				<p className="wpara1"><b>VISION</b><br/>
				&nbsp;&nbsp;&nbsp;&nbsp;Our Vision is to become a multinational IT Organisation that provides premium,
				 cutting-edge, advanced IT Solutions & Products at extremely affordable costs.
				 <br/><br/><b>MISSION</b><br/>
				&nbsp;&nbsp;&nbsp;&nbsp;We are working on setting up the worldclass standards in IT Organisation 
				to give our customers, employee and stakeholders the real value of their invested trust.</p>
				{/*<h5  className="wrdmore"><span><u> Read More</u></span> >> </h5>*/}
			// </div>
		// </div>
	// </div>
// </div>

	 
