import React from 'react';
import {Helmet} from "react-helmet";

export default class pagehead extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Helmet>
					<meta charset="UTF-8" />
					<meta name="description" content= "description"/>{/*{data.pageHeadDescription} {data.pageHeadKeyWords} {data.pageHeadAuther}*/}
					<meta name="keywords" content="keywords" />
					<meta name="author" content="author" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<title>My Design 1</title>
				</Helmet>
			</div>
		);
	}
}
