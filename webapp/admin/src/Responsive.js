import React from 'react';
import HomepageBanner       from "./CMS/component/blockTemplate/HomepageBanner/HomepageBanner.js";
import Services             from "./CMS/component/blockTemplate/Services/Services.js";
import FasttrackFrameWork    from "./CMS/component/blockTemplate/FasttrackFrameWork/FasttrackFrameWork.js"
import Headernew from './theme1/common/headernew.js';




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
                 <HomepageBanner /> 
                 <Services />      
                 {/* <FasttrackFrameWork />   */}
		   </div>
		);
	}
}
