import React 						from 'react';
import {Route, withRouter} 			from 'react-router-dom';
import 									 './Staticblocks.css';

import Typecomponent1                from "../blockTemplate/Typecomponent1/Typecomponent1.js";
// import FastrackFrameWork                from "../blockTemplate/FastrackFrameWork/FastrackFrameWork.js";
import FasttrackFrameWork                from "../blockTemplate/FasttrackFrameWork/FasttrackFrameWork.js";
import AutoPilotPlatform                from "../blockTemplate/AutoPilotPlatform/AutoPilotPlatform.js";
import OutSpeciality                from "../blockTemplate/OutSpeciality/OutSpeciality.js";
import CommerceBanner              from "../blockTemplate/eCommerceBanner/eCommerceBanner.js";
import Customisable                from "../blockTemplate/Customisable/Customisable.js";
import Superperformance            from "../blockTemplate/Superperformance/Superperformance.js";
import CreateOnlineStore           from "../blockTemplate/CreateOnlineStore/CreateOnlineStore.js";
import Userexperience              from  "../blockTemplate/Userexperience/Userexperience.js";
import HomepageBanner              from  "../blockTemplate/HomepageBanner/HomepageBanner.js";
import AboutBanner              from  "../blockTemplate/AboutBanner/AboutBanner.js";
import Endlesspossibility              from  "../blockTemplate/Endlesspossibility/Endlesspossibility.js";
import IndustryDomains              from  "../blockTemplate/IndustryDomains/IndustryDomains.js";
import ServicesBanner              from  "../blockTemplate/ServicesBanner/ServicesBanner.js";
import NationalAwards              from  "../blockTemplate/NationalAwards/NationalAwards.js";
import Testimonials              from  "../blockTemplate/Testimonials/Testimonials.js";
import Services              from  "../blockTemplate/Services/Services.js";
import ContactBanner        from "../blockTemplate/ContactBanner/ContactBanner.js";
import GetInTouch          from "../blockTemplate/GetInTouch/GetInTouch.js";
import ContactForm      from "../blockTemplate/ContactForm/ContactForm.js";
import AddressOnGoogleMap from "../blockTemplate/AddressOnGoogleMap/AddressOnGoogleMap.js";
import MobileAppDevelopment from "../blockTemplate/MobileAppDevelopment/MobileAppDevelopment.js"







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
			<div className="">

				<div className="boxItem1Statickblocks ">
				<div className=" txtCenter col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
					<div className="  col-lg-12 col-md-12 col-sm-12 col-xs-12 ">

                    	<h2 className="text-center">Select Required Design from Following list </h2>
            		</div>
            	</div>
{/*
					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="FastrackFrameWork" 
								data-blockTitle="blockTitle" 
			                	data-blockDescription="blockDescription" 
								data-fgImage="fgImage" 
								data-bgImage="bgImage" 
			                	className="btn zIndexmtop pull-right" 
			                	onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>		            
					blockTitle	<FastrackFrameWork /> 
					</section>*/}

					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="HomepageBanner" 
								data-RepetedBlock="RepetedBlock" 
							 
			                	 
								data-bgImage="bgImage" 
								data-rBlocksTitle="rBlocksTitle" 
								data-rBlocksSubTitle="rBlocksSubTitle" 
								data-rBlocksDescription="rBlocksDescription" 
								data-rBlocksImage="rBlocksImage" 
			                	className="btn zIndexmtop pull-right" 
			                	onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>		            
						<HomepageBanner /> 
					</section>

					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
						<button id="Services"
								data-blockTitle="blockTitle" 
								data-RepetedBlock="RepetedBlock" 
								data-rBlocksLink="rBlocksLink" 
								data-bgImage="bgImage" 
								data-rBlocksTitle="rBlocksTitle" 
								data-rBlocksImage="rBlocksImage" 
			                	className="btn zIndexmtop pull-right" 
			                	onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>		            
						<Services /> 
					</section>
					
					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="FasttrackFrameWork" 
								data-blockTitle="blockTitle" 
			                	data-blockDescription="blockDescription" 
								data-fgImage="fgImage" 
								data-bgImage="bgImage" 
			                	className="btn zIndexmtop pull-right" 
			                	onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>		            
						<FasttrackFrameWork /> 
					</section>

					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="AboutBanner" 
								data-blockTitle="blockTitle" 
								data-blocksubTitle="blocksubTitle" 
								data-blockDescription="blockDescription"
								data-fgImage="fgImage" 
								data-bgImage="bgImage"
								className="btn zIndexmtop pull-right" 
			                	onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>		            
						<AboutBanner /> 
					</section>

					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="Endlesspossibility" 
								data-blockTitle="blockTitle" 
								data-blockSubTitle="blockSubTitle" 
								data-blockDescription="blockDescription" 
								data-fgImage="fgImage"
								data-blockLink="blockLink"
			                	className="btn zIndexmtop pull-right" 
			                	onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>		            
						<Endlesspossibility /> 
					</section>

					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="IndustryDomains" 
								data-blockTitle="blockTitle" 
								data-RepetedBlock="RepetedBlock" 
								data-rBlocksTitle="rBlocksTitle" 
								data-rBlocksImage="rBlocksImage"
								data-rBlocksLink="rBlocksLink" 
			                	className="btn zIndexmtop pull-right" 
			                	onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>		            
						<IndustryDomains /> 
					</section>


					
					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="AutoPilotPlatform" 
								data-blockTitle="blockTitle" 
			                	data-blockDescription="blockDescription" 
								data-fgImage="fgImage" 
								data-bgImage="bgImage" 
			                	className="btn zIndexmtop pull-right" 
			                	onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>		            
						<AutoPilotPlatform /> 
					</section>
					
					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="OutSpeciality" 
								data-blockTitle="blockTitle" 
								data-RepetedBlock="RepetedBlock" 
								data-rBlocksTitle="rBlocksTitle" 
								data-rBlocksDescription="rBlocksDescription" 
								data-rBlocksImage="rBlocksImage" 
			                	className="btn zIndexmtop pull-right" 
			                	onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>		            
						<OutSpeciality /> 
					</section>
					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="eCommerceBanner" 
								data-blockTitle="blockTitle" 
								data-blockSubTitle="blockSubTitle" 
								data-blockDescription="blockDescription" 
								data-fgImage="fgImage" 
								data-bgImage="bgImage" 
								className="btn zIndexmtop pull-right" 
			                	onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>		            
						<CommerceBanner /> 
					</section>
					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="Customisable" 
								data-blockTitle="blockTitle" 
								data-blockDescription="blockDescription" 
								data-fgImage="fgImage" 
								className="btn zIndexmtop pull-right" 
			                	onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>		            
						<Customisable /> 
					</section>

					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="Superperformance" 
								data-blockTitle="blockTitle" 
								 data-blockDescription="blockDescription" 
								data-fgImage="fgImage" 
								data-bgImage="bgImage"
								 className="btn zIndexmtop pull-right" 
			                	onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>		            
						<Superperformance /> 
					</section>

					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="CreateOnlineStore" 
								data-blockTitle="blockTitle" 
								 data-blockDescription="blockDescription" 
								data-fgImage="fgImage" 
								data-bgImage="bgImage"
								 className="btn zIndexmtop pull-right" 
			                	onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>		            
						<CreateOnlineStore /> 
					</section>

					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="Userexperience" 
								data-blockTitle="blockTitle" 
								data-blockDescription="blockDescription" 
								data-fgImage="fgImage" 
								className="btn zIndexmtop pull-right" 
			                	onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>		            
						<Userexperience /> 
					</section>

					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
			            <button id="NationalAwards" 
								data-blockTitle="blockTitle" 
								data-blocksubTitle="blocksubTitle" 
								data-blockDescription="blockDescription"
								data-fgImage="fgImage" 
								data-bgImage="bgImage"
								data-rBlocksImage="rBlocksImage"
								className="btn zIndexmtop pull-right" 
			                	onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>		            
						<NationalAwards /> 
					</section>

					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
						<button id="Testimonials" 
						       data-blockTitle="blockTitle" 
							   data-RepetedBlock="RepetedBlock" 
							   data-rBlocksTitle="rBlocksTitle" 
							   data-rBlocksSubTitle="rBlocksSubTitle"
							   data-rBlocksDescription="rBlocksDescription" 
							   data-rBlocksImage="rBlocksImage"
							    className="btn zIndexmtop pull-right" 
			                	onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>		            
						<Testimonials /> 
					</section>

					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
						<button id="ContactBanner" 
							   data-blockTitle="blockTitle"
							   data-bgImage   = "bgImage"
							   data-fgImage   ="fgImage"
							   className="btn zIndexmtop pull-right" 
			                	onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>		            
						<ContactBanner /> 
					</section>
					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
						<button id="GetInTouch" 
							   data-blockTitle="blockTitle"
							   data-blocksubTitle="blocksubTitle"
							   data-RepetedBlock="RepetedBlock"
							   data-rBlocksTitle="rBlocksTitle" 
							   data-rBlocksSubTitle="rBlocksSubTitle"
							   data-rBlocksDescription="rBlocksDescription"
							   data-rBlocksImage="rBlocksImage"

							   className="btn zIndexmtop pull-right" 
			                	onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>		            
						<GetInTouch /> 
					</section>
					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
						<button id="ContactForm" 
							   data-blockTitle="blockTitle"
							   data-RepetedBlock="RepetedBlock"
							   data-rBlocksTitle="rBlocksTitle" 
							   data-rBlocksSubTitle="rBlocksSubTitle"
							   data-rBlocksImage="rBlocksImage"

							   className="btn zIndexmtop pull-right" 
			                	onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>		            
						<ContactForm /> 
					</section>
					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
						<button id="AddressOnGoogleMap" 
							   data-blockTitle="blockTitle"
							  
							   className="btn zIndexmtop pull-right" 
			                	onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>		            
						<AddressOnGoogleMap /> 
					</section>
					<section className="col-lg-12 col-md-12 col-sm-12 col-xl-12 selectHover m10">	
						<button id="MobileAppDevelopment" 
							   data-blockTitle="blockTitle"
							   data-blocksubTitle="blocksubTitle"
							   data-fgImage="fgImage"
							   data-RepetedBlock="RepetedBlock"
							   data-rBlocksTitle="rBlocksTitle" 
							   data-rBlocksImage="rBlocksImage"
     						   className="btn zIndexmtop pull-right" 
			                	onClick={this.selectComponent.bind(this)} > 
			                	Select this Design
			            </button>		            
						<MobileAppDevelopment /> 
					</section>







				</div>
			</div>
		);
	}
}

export default withRouter(Staticblocks);
