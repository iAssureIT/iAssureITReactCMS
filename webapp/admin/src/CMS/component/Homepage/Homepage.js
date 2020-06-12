import React from 'react';
import HomepageBanner from '../blockTemplate/HomepageBanner/HomepageBanner.js';
import Homepagebuttononimage from '../blockTemplate/Homepagebuttononimage/Homepagebuttononimage.js';
import Homepagefeature from '../blockTemplate/Homepagefeature/Homepagefeature.js';
import Homepageintrovideo from '../blockTemplate/Homepageintrovideo/Homepageintrovideo.js';
import HomepageInvisalign from '../blockTemplate/HomepageInvisalign/HomepageInvisalign.js';
import Homepagepromotions from '../blockTemplate/Homepagepromotions/Homepagepromotions.js';
import Footer from '../blockTemplate/Footer/Footer.js';


export default class Homepage extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{/*<HomepageBanner/>
				<Homepagebuttononimage/>
				<Homepagefeature/>
				<Homepageintrovideo/>*/}
				<HomepageInvisalign/>
				{/*<Homepagepromotions/>
				<Footer/>*/}
			</div>
		);
	}
}
