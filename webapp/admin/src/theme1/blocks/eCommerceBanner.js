import React from 'react';
import "./eCommerceBanner.css"

export default class eCommerceBanner extends React.Component {

	constructor(props) {
		super(props);
	}
	render() {
			
			var data = this.props.bannerText;
			console.log("props",data);
			
				return (
				/*{ 	data && data.length > 0 ?
					data.map((data, index)=>{
					return(
					key={index}
					*/
						<div  className="ecbheight container-fluid">
							<div className="col-lg-12 col-md-12 hidden-sm hidden-xs container">
								<div className="col-lg-12 col-md-12 hidden-sm hidden-xs logoBox">
								<a href="/"><img className="logo img-responsive" src="./images/Logo.png" alt="logo"/> </a>
						
								</div>
								<div className="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1 hidden-sm hidden-xs">
									<div className="mtop150ec">
									
										<div className="t2title text-center" dangerouslySetInnerHTML={{ __html:this.props.bannerText[0].title}} >
										</div>
										<p className="col-lg-8 col-lg-offset-2 text-center t3title" dangerouslySetInnerHTML={{ __html:this.props.bannerText[0].titletext}}></p>
									</div>	
								</div>
								
							</div>
						</div>
					/*);
				})
				:
				null*/
			);
	}
}
/*YOU NEED ECOMMERCE WEBSITE THAT IS<br/>
							SUPER BEAUTIFUL, USER FRIENDLY & THAT GROWS YOUR<br/>BUSINESS EXPONETIALLY*/