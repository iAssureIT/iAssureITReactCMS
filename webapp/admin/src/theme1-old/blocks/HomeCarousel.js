import React from 'react';
import "./HomeCarousel.css";

import Banner 			from '../blocks/Banner.js';

import AppDevMain from '../blocks/Banners/AppDevMain/AppDevMain.js';
/*import MobileSol from '../blocks/Banners/MobileSol/MobileSol.js';*/

/*import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';*/


export default class HomeCarousel extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{/*<OwlCarousel className="owl-theme arrows owl-carousel h715" loop  autoplay={true} animateOut={false} animateIn={false} autoplaySpeed={500} items={1}  dots={false} >
				   	<div className="item active ">*/}
				      	{/*<Banner/>*/}
				      	<AppDevMain/>
				    {/*</div>*/}
				   	{/*<div className="item  bcheight">
				      <img src="/images/banner1.png" className="carimg" alt="Los Angeles"/>
				    </div>*/}

				    {/*<div className="item bcheight">*/}
				    	{/*<AppDevMain/>*/}
				    	{/*<MobileSol/>*/}
				      {/*<img src="/images/banner2.png" className="carimg" alt="Chicago"/>*/}
				    {/*</div>*/}

				   {/* <div className="item bcheight">
				      <img src="/images/banner3.png" className="carimg" alt="New York"/>
				    </div>*/}
			{/*	</OwlCarousel>*/}
			</div>
		);
	}
}
