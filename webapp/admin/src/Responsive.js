import React from 'react';
// import HomepageBanner       from "./CMS/component/blockTemplate/HomepageBanner/HomepageBanner.js";
// import Services             from "./CMS/component/blockTemplate/Services/Services.js";
// import FasttrackFrameWork    from "./CMS/component/blockTemplate/FasttrackFrameWork/FasttrackFrameWork.js"
 import Headernew from './theme1/common/headernew.js';
// import OutSpeciality from './CMS/component/blockTemplate/OutSpeciality/OutSpeciality.js';
// import Autopilotplatform     from './theme1/blocks/AutoPilotPlatform.js';
// import MobileAppDevelopment  from './CMS/component/blockTemplate/MobileAppDevelopment/MobileAppDevelopment.js'; 
// import ClientTestimonials    from './CMS/component/blockTemplate/Testimonials/Testimonials.js';
// import Endlesspossibility   from './CMS/component/blockTemplate/Endlesspossibility/Endlesspossibility.js';
// import AddressonGoogleMap from './CMS/component/blockTemplate/AddressOnGoogleMap/AddressOnGoogleMap.js';
// import Footer        from './theme1/common/Footer.js';
//  import Aboutus       from './CMS/component/blockTemplate/AboutBanner/AboutBanner.js';
//  import  Customisable     from './CMS/component/blockTemplate/Customisable/Customisable.js';
//  import Nationalaward     from './CMS/component/blockTemplate/NationalAwards/NationalAwards.js';
 import ServicesBanner from './CMS/component/blockTemplate/ServicesBanner/ServicesBanner.js';




export default class Responsive extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {

			"description"		: "Corporate Websites & eCommerce Development",
			"keywords"			: "Cutting Edge, Responsive, Mobile Friendly",
			"author"			: "iAssureIT",
			"title"				: "iAssureITHomePage",
			

		};
	}

	render() {
		return (
			<div className="">
				<Headernew />
                 {/* <HomepageBanner />  */}
                 {/* <Services />       */}
                 {/* <FasttrackFrameWork />  */}
				 {/* <OutSpeciality />   */}
				 {/* <Autopilotplatform /> */}
				 {/* <MobileAppDevelopment /> */}
				  {/* <ClientTestimonials />  */}
				  {/* <Endlesspossibility /> */}
				  {/* <AddressonGoogleMap /> */}
				  {/* <Footer /> */}
				   {/* <Aboutus /> */}
				   {/* <Customisable /> */}
				   {/* <Nationalaward /> */}
				   <ServicesBanner />
		   </div>
		);
	}
}
