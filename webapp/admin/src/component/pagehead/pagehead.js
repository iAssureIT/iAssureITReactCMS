import React, {Component} from 'react';
import { render } from 'react-dom';
/*import { withTracker } from 'meteor/react-meteor-data';
import {Helmet} from "react-helmet";
import swal from 'sweetalert';

import  { cmsPageMaster } from '/imports/CMS/Pages/cmsPage.js';
*/


export default class PageHead extends Component{
	constructor(props){
		super(props);
		this.state = {
		};
	}

	handleChange(event){
		event.preventDefault();
    	this.setState({
			});
	}
		

render(){
		/*var data= this.props.pageDetails;*/
		return( 
			<div> 
				{/*<Helmet>
					<meta charset="UTF-8" />
					<meta name="description" content={data.pageHeadDescription} />
					<meta name="keywords" content={data.pageHeadKeyWords} />
					<meta name="author" content={data.pageHeadAuther} />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<title>My Design 1</title>
				</Helmet>*/}
			</div>
		);
	}
}

{/*
export default withTracker( props => {
	
	const cmsData = Meteor.subscribe('getPageHead');
	/*console.log("PageHead = cmsData ===>",cmsData);
	const pageDetails = cmsPageMaster.findOne({"PageHead":PageHead});
	/*console.log("PageHead = pageDetails ===>",pageDetails);
    return {
	    'pageDetails':pageDetails,	     
    };
})(PageHead);		
*/}

