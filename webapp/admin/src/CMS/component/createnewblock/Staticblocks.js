import React 						from 'react';
import {Route, withRouter} 			from 'react-router-dom';

import Aboutusbanner                from "../blockTemplate/Aboutusbanner/Aboutusbanner.js";
import Aboutushistory               from "../blockTemplate/Aboutushistory/Aboutushistory.js";
import Aboutusmultistore            from "../blockTemplate/Aboutusmultistore/Aboutusmultistore.js";
import Aboutusteam                  from "../blockTemplate/Aboutusteam/Aboutusteam.js";
import Contactusform                from "../blockTemplate/Contactusform/Contactusform.js";
// import Newservices                  from "../blockTemplate/Newservices/Newservices.js";
import HomepageBanner 				from '../blockTemplate/HomepageBanner/HomepageBanner.js';
import Homepagebuttononimage 		from '../blockTemplate/Homepagebuttononimage/Homepagebuttononimage.js';
import Homepagefeature 				from '../blockTemplate/Homepagefeature/Homepagefeature.js';
import Homepageintrovideo 			from '../blockTemplate/Homepageintrovideo/Homepageintrovideo.js';
import HomepageInvisalign 			from '../blockTemplate/HomepageInvisalign/HomepageInvisalign.js';
import Homepagepromotions 			from '../blockTemplate/Homepagepromotions/Homepagepromotions.js';
import Footer 						from '../blockTemplate/Footer/Footer.js';

import Typecomponent1               from "../blockTemplate/Typecomponent1/Typecomponent1.js";
import Typecomponent2               from "../blockTemplate/Typecomponent2/Typecomponent2.js";
import ListofServices               from "../blockTemplate/ListofServices/ListofServices.js";
import OutSpeciality                from "../blockTemplate/OutSpeciality/OutSpeciality.js";
import IndustryDomains              from "../blockTemplate/IndustryDomains/IndustryDomains.js";
import Testimonials                 from "../blockTemplate/Testimonials/Testimonials.js";
import AboutBanner                  from "../blockTemplate/AboutBanner/AboutBanner.js";
import WhoWeAre                		from "../blockTemplate/WhoWeAre/WhoWeAre.js";
import Awards                		from "../blockTemplate/Awards/Awards.js";
import MissionVision                from "../blockTemplate/MissionVision/MissionVision.js";
import WhyiAssure                   from "../blockTemplate/WhyiAssure/WhyiAssure.js";
import Technologies                 from "../blockTemplate/Technologies/Technologies.js";
import AppDevMain                   from "../blockTemplate/AppDevMain/AppDevMain.js";
import EcommerceBanner              from "../blockTemplate/eCommerceBanner/eCommerceBanner.js";
import Bdesignblock                 from "../blockTemplate/Bdesignblock/Bdesignblock.js";
import EcommBlock1                  from "../blockTemplate/EcommBlock1/EcommBlock1.js";
import EcommBlock2                  from "../blockTemplate/ecommBlock2/ecommBlock2.js";
import EcommBlock3                  from "../blockTemplate/ecommBlock3/ecommBlock3.js";
import EcommBlock4                  from "../blockTemplate/ecommBlock4/ecommBlock4.js";
import Newservices                  from "../blockTemplate/Newservices/Newservices.js";


import 									 './Staticblocks.css';



class Staticblocks extends React.Component {

	constructor(props) {
		super(props);
	}

	selectComponent(event){
		var blockTitle 			= "";
		var blocksubTitle 		= "";
		var blockDescription 	= "";
		var blockType 			= "";
		var blockLink 			= "";
		var bgImage 			= "";
		var bgVideo 			= "";
		var fgImage 			= "";
		var rBlocksTitle 		= "";
		var rBlocksSubTitle 	= "";
		var rBlocksDescription 	= "";
		var rBlocksImage 		= "";
		var rBlocksVideo 		= "";
		var rBlocksLink         = "";
		var RepetedBlock        = "";
	   

		var componentName = event.target.id;
		var element = document.getElementById("id");

		if(event.target.getAttribute("data-blockTitle")){
			blockTitle = event.currentTarget.getAttribute("data-blockTitle");
		}
		if(event.target.getAttribute("data-blocksubTitle")){
			blocksubTitle = event.currentTarget.getAttribute("data-blocksubTitle");
		}
		if(event.target.getAttribute("data-blockDescription")){
			blockDescription = event.currentTarget.getAttribute("data-blockDescription");
		}
		if(event.target.getAttribute("data-blockType")){
			blockType = event.currentTarget.getAttribute("data-blockType");
		}
		if(event.target.getAttribute("data-fgImage")){
			fgImage = event.currentTarget.getAttribute("data-fgImage");
			console.log("fgImage  =>",fgImage);
		}
		if(event.target.getAttribute("data-bgImage")){
			bgImage = event.currentTarget.getAttribute("data-bgImage");
			console.log("bgImage  =>",bgImage);
		}
		if(event.target.getAttribute("data-bgVideo")){
			bgVideo = event.currentTarget.getAttribute("data-bgVideo");
			console.log("bgVideo  =>",bgVideo);
		}
		if(event.target.getAttribute("data-blockLink")){
			blockLink = event.currentTarget.getAttribute("data-blockLink");
			console.log("blockLink  =>",blockLink);
		}
		if(event.target.getAttribute("data-rBlocksTitle")){
			rBlocksTitle = event.currentTarget.getAttribute("data-rBlocksTitle");
		}
		if(event.target.getAttribute("data-rBlocksSubTitle")){
			rBlocksSubTitle = event.currentTarget.getAttribute("data-rBlocksSubTitle");
		}
		if(event.target.getAttribute("data-rBlocksDescription")){
			rBlocksDescription = event.currentTarget.getAttribute("data-rBlocksDescription");
		}
		if(event.target.getAttribute("data-rBlocksImage")){
			rBlocksImage = event.currentTarget.getAttribute("data-rBlocksImage");
		}
		if(event.target.getAttribute("data-rBlocksVideo")){
			rBlocksVideo = event.currentTarget.getAttribute("data-rBlocksVideo");
		}
		if(event.target.getAttribute("data-rBlocksLink")){
			rBlocksLink = event.currentTarget.getAttribute("data-rBlocksLink");
		}
		if(event.target.getAttribute("data-RepetedBlock")){
			RepetedBlock = event.currentTarget.getAttribute("data-RepetedBlock");
		}

	

		var queryString = 	"componentName="+componentName
							+"&blockTitle="+blockTitle
							+"&blocksubTitle="+blocksubTitle
							+"&blockDescription="+blockDescription
							+"&blockType="+blockType
							+"&fgImage="+fgImage
							+"&bgImage="+bgImage
							+"&bgVideo="+bgVideo
							+"&blockLink="+blockLink
							+"&RepetedBlock="+RepetedBlock
							+"&rBlocksTitle="+rBlocksTitle
							+"&rBlocksSubTitle="+rBlocksSubTitle
							+"&rBlocksDescription="+rBlocksDescription
							+"&rBlocksImage="+rBlocksImage
							+"&rBlocksVideo="+rBlocksVideo
							+"&rBlocksLink="+rBlocksLink

							
		
		this.props.history.push('/cms/create-new-block?'+queryString);
	}

	render() {
		return (
			<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
				<div className="boxItem1Statickblocks">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
				
						<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
		            <button id="Newservices" 
		            		data-blockTitle   		="blockTitle" 
							data-bgImage   			="bgImage" 
							data-rBlocksTitle       ="rBlocksTitle" 
							data-rBlocksDescription ="rBlocksDescription" 
							data-rBlocksImage 		="rBlocksImage"
							data-RepetedBlock 		="RepetedBlock" 
		                	className="btn zIndexmtop pull-right" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>		            
					<Newservices /> 
				</section>

				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
		            <button id="OutSpeciality" 
		            		data-blockTitle   		="blockTitle" 
							data-bgImage   			="bgImage" 
							data-rBlocksTitle       ="rBlocksTitle" 
							data-rBlocksImage 		="rBlocksImage"
							data-rBlocksDescription ="rBlocksDescription"
							data-RepetedBlock 		="RepetedBlock" 
		                	className="btn zIndexmtop pull-right" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>		            
					<OutSpeciality /> 
				</section>

				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
		            <button id="AppDevMain" 
		            		data-blockTitle   		="blockTitle" 
							data-bgImage   			="bgImage" 
							data-rBlocksTitle       ="rBlocksTitle" 
							data-rBlocksImage 		="rBlocksImage"
							data-rBlocksDescription ="rBlocksDescription"
							data-RepetedBlock 		="RepetedBlock" 
		                	className="btn zIndexmtop pull-right" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>		            
					<AppDevMain /> 
				</section>

				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
		            <button id="IndustryDomains" 
		            		data-blockTitle   		="blockTitle" 
							data-bgImage   			="bgImage" 
							data-rBlocksTitle       ="rBlocksTitle" 
							data-rBlocksImage 		="rBlocksImage"
							data-RepetedBlock 		="RepetedBlock" 
		                	className="btn zIndexmtop pull-right" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>		            
					<IndustryDomains /> 
				</section>

				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
		            <button id="Testimonials" 
		            		data-blockTitle   		="blockTitle" 
							data-bgImage   			="bgImage" 
							data-rBlocksTitle       ="rBlocksTitle" 
							data-rBlocksImage 		="rBlocksImage"
							data-RepetedBlock 		="RepetedBlock" 
		                	className="btn zIndexmtop pull-right" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>		            
					<Testimonials /> 
				</section>

				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
		            <button id="AboutBanner" 
		            		data-blockTitle   		="blockTitle" 
							data-fgImage   			="fgImage" 
							data-bgImage   			="bgImage" 
							data-blocksubTitle      ="blocksubTitle" 
		                	className="btn zIndexmtop pull-right" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>		            
					<AboutBanner /> 
				</section>

				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
		            <button id="WhoWeAre" 
		            		data-blockTitle   		="blockTitle" 
							data-bgImage   			="bgImage" 
							data-rBlocksTitle       ="rBlocksTitle" 
							data-rBlocksImage 		="rBlocksImage"
							
							data-RepetedBlock 		="RepetedBlock" 
		                	className="btn zIndexmtop pull-right" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>		            
					<WhoWeAre /> 
				</section>

				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
		            <button id="Awards" 
		            		data-blockTitle   		="blockTitle" 
							data-bgImage   			="bgImage" 
							data-rBlocksTitle       ="rBlocksTitle" 
							data-rBlocksImage 		="rBlocksImage"
							
							data-RepetedBlock 		="RepetedBlock" 
		                	className="btn zIndexmtop pull-right" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>		            
					<Awards /> 
				</section>

				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
		            <button id="MissionVision" 
		            		data-blockTitle   		="blockTitle" 
							data-bgImage   			="bgImage" 
							data-rBlocksTitle       ="rBlocksTitle" 
							data-rBlocksImage 		="rBlocksImage"
							
							data-RepetedBlock 		="RepetedBlock" 
		                	className="btn zIndexmtop pull-right" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>		            
					<MissionVision /> 
				</section>

				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
		            <button id="WhyiAssure" 
		            		data-blockTitle   		="blockTitle" 
							data-bgImage   			="bgImage" 
							data-rBlocksTitle       ="rBlocksTitle" 
							data-rBlocksImage 		="rBlocksImage"
							
							data-RepetedBlock 		="RepetedBlock" 
		                	className="btn zIndexmtop pull-right" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>		            
					<WhyiAssure /> 
				</section>
				
				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10 nopadding">	
		            <button id="Technologies" 
		            		data-blockTitle   		="blockTitle" 
							data-bgImage   			="bgImage" 
							data-rBlocksTitle       ="rBlocksTitle" 
							data-rBlocksImage 		="rBlocksImage"
							
							data-RepetedBlock 		="RepetedBlock" 
		                	className="btn zIndexmtop pull-right" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>		            
					<Technologies /> 
				</section>

				
				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10 nopadding">	
		            <button id="eCommerceBanner" 
		            		data-blockTitle   		="blockTitle" 
							data-bgImage   			="bgImage" 
							data-rBlocksTitle       ="rBlocksTitle" 
							data-rBlocksImage 		="rBlocksImage"
							
							data-RepetedBlock 		="RepetedBlock" 
		                	className="btn zIndexmtop pull-right" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>		            
					<EcommerceBanner /> 
				</section>	

				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10 nopadding">	
		            <button id="EcommBlock1" 
							data-fgImage   			="fgImage" 
						

							data-rBlocksTitle       ="rBlocksTitle" 
							data-rBlocksDescription ="rBlocksDescription" 
							data-rBlocksImage 		="rBlocksImage"
							
							data-RepetedBlock 		="RepetedBlock" 
		                	className="btn zIndexmtop pull-right" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>		            
					<EcommBlock1 /> 
				</section>	



				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10 nopadding">	
		            <button id="EcommBlock2" 
		            		data-blockTitle   		="blockTitle" 
		            		data-blocksubTitle   	="blocksubTitle" 
		            		data-blockDescription   ="blockDescription" 
							data-bgImage   			="bgImage" 
							data-fgImage   			="fgImage" 
						
							 
		                	className="btn zIndexmtop pull-right" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>		            
					<EcommBlock2 /> 
				</section>
				
				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10 nopadding">	
		            <button id="EcommBlock3" 
		            		
							data-bgImage   			="bgImage" 
							data-rBlocksTitle       ="rBlocksTitle" 
							data-rBlocksSubTitle    ="rBlocksSubTitle" 
							data-rBlocksDescription ="rBlocksDescription" 
							data-rBlocksImage 		="rBlocksImage"
							
							data-RepetedBlock 		="RepetedBlock" 
		                	className="btn zIndexmtop pull-right" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>		            
					<EcommBlock3 /> 
				</section>
				
				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10 nopadding">	
		            <button id="EcommBlock4" 
		            	
							data-bgImage   			="bgImage" 
							data-rBlocksTitle       ="rBlocksTitle" 
							data-rBlocksSubTitle    ="rBlocksSubTitle" 
							data-rBlocksDescription ="rBlocksDescription" 
							data-rBlocksImage 		="rBlocksImage"
							
							data-RepetedBlock 		="RepetedBlock" 
		                	className="btn zIndexmtop pull-right" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>		            
					<EcommBlock4 /> 
				</section>
				<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10 nopadding">	
		            <button id="Bdesignblock" 
		            		
		            		data-blockDescription   ="blockDescription" 
							data-fgImage   			="fgImage" 
							data-bgImage   			="bgImage" 
							
		                	className="btn zIndexmtop pull-right" 
		                	onClick={this.selectComponent.bind(this)} > 
		                	Select this Block 
		            </button>		            
					<Bdesignblock /> 
				</section>

						

{/*
						<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
				            <button id="OutSpeciality" 
				            		data-blockTitle   		="blockTitle" 
									data-bgImage   			="bgImage" 
									data-rBlocksTitle       ="rBlocksTitle" 
									data-rBlocksImage 		="rBlocksImage"
									data-rBlocksDescription ="rBlocksDescription"
									data-RepetedBlock 		="RepetedBlock" 
				                	className="btn zIndexmtop pull-right" 
				                	onClick={this.selectComponent.bind(this)} > 
				                	Select this Design 
				            </button>		            
							<OutSpeciality /> 
						</section>

						<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
				            <button id="AppDevMain" 
				            		data-blockTitle   		="blockTitle" 
									data-bgImage   			="bgImage" 
									data-rBlocksTitle       ="rBlocksTitle" 
									data-rBlocksImage 		="rBlocksImage"
									data-rBlocksDescription ="rBlocksDescription"
									data-RepetedBlock 		="RepetedBlock" 
				                	className="btn zIndexmtop pull-right" 
				                	onClick={this.selectComponent.bind(this)} > 
				                	Select this Design 
				            </button>		            
							<AppDevMain /> 
						</section>
						<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10 nopadding">	
				            <button id="Bdesignblock" 
				            		
				            		data-blockDescription   ="blockDescription" 
									data-fgImage   			="fgImage" 
									data-bgImage   			="bgImage" 
									
				                	className="btn zIndexmtop pull-right" 
				                	onClick={this.selectComponent.bind(this)} > 
				                	Select this Design 
				            </button>		            
							<Bdesignblock /> 
						</section>*/}
				
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Staticblocks);
