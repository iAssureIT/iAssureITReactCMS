import React from 'react';
import "./Testimonials.css";
import $ from "jquery";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class Testimonials extends React.Component {

	constructor(props) {
		super(props);
		this.state = {

			"Testimonials": [
								{
									testContent:"One important thing which differentiates iAssureIT from other IT companies is the thought process of complete team & their will to provide the best of features, thinking completely out of the box & without bothering the extra efforts which would go in from their end implementing these.Really happy & satisfied with the quality of the work.",
									testimonialWriter:"Mr Paras Surana,",
									writerDetails:"Director - Prabandhan Management Consulting",
									writerImg:"/images/6.png"
								},
								{
									testContent:"Very much overwhelmed and satisfied with iAssureIT work.These guys have tremendous potential to handle any size of the project and I strongly recommend this company to others.The best of the company is they are 100% committed to work and provide out of the box service. Working with iAssureIT is simply an amazing and memorable experience.Keep up the good work guys and you rock !!!",
									testimonialWriter:"Mr Mohd Imran,",
									writerDetails:"Founder & CEO - Mag InfoTech, Hydrabad",
									writerImg:"/images/6.png"
								},
								{
									testContent:"It's an IT company, which provides innovative IT solutions using latest technology.",
									testimonialWriter:"Nitin Thakrey,",
									writerDetails:"Operations Director - Innowave IT Solutions",
									writerImg:"/images/6.png"
								},

							]
	};

	}
	render() {
				return (
				<div className="testimonialwrapper">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
                     <div className="col-lg-2 col-lg-offset-5 col-md-2 col-md-offset-5 col-sm-12 col-xs-12 dashBoxTmwrapp">
                        <ul className="dashBoxTm">
                            <li className="dash1Tm"></li>
                            <li className="dash2Tm"></li>
                            <li className="dash3Tm"></li> 
                        </ul>
                    </div> 
                 </div>     
				 <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
					<div className="col-lg-4 col-lg-offset-4 col-sm-12 col-xs-12 clienttestmonials">
					   <h1>
	                     <b>Client Testimonials</b>
                     </h1> 
                    </div>  
				</div> 
				<div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12 carosuelwrapp">
				<div id="myCarousel" className="carousel slide" data-ride="carousel">
				<ol class="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
					<li data-target="#myCarousel" data-slide-to="1"></li>
					<li data-target="#myCarousel" data-slide-to="2"></li>
				</ol>
                <div className="carousel-inner">
					<div className="item active">
					 <img src="la.jpg" alt="Los Angeles" />
					</div>

					<div class="item">
					 <img src="chicago.jpg" alt="Chicago" /> 
					</div>

					<div class="item">
					 <img src="ny.jpg" alt="New York" /> 
					</div>
				</div>

  {/* <!-- Left and right controls --> */}
					<a class="left carousel-control" href="#myCarousel" data-slide="prev">
						<span class="glyphicon glyphicon-chevron-left"></span>
						<span class="sr-only">Previous</span>
					</a>
					<a class="right carousel-control" href="#myCarousel" data-slide="next">
						<span class="glyphicon glyphicon-chevron-right"></span>
						<span class="sr-only">Next</span>
					</a>
					</div>

			         		
					
				</div>     
           </div>						    
	  		
		);
	}
}	
{/* <div className="col-lg-12 col-md-12 col-sm- col-xs-12 row"> 
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12"> 
   <div className="col-lg-10 col-md-11  testimonialBox col-lg-offset-1 col-sm-12 col-xs-12"> 
		 <OwlCarousel className="owl-theme arrows owl-carousel" loop  autoplay={true}  autoplaySpeed={500} items={1} nav dots={false}>
		  {
			   data && data.length > 0 ?
					data.map((data, index)=>{
					  return(
						  <div className="item col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
						  <div className="testimonialList col-lg-12 col-md-12 col-sm-12 col-xs-12">
						  <h3 className="hlimit600">{data.testContent}
						   </h3>
							   <div className="col-sm-12 col-lg-8 col-md-8 col-xs-12">
								   <div className="col-md-3 col-lg-3 col-sm-2">
									   <img src={data.writerImg} alt="example" className="img-responsive profileTesti"/>
								   </div>
								   <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
									   <h4 className="custName"><span className="nmclr">{data.testimonialWriter}</span><br/>
									   {data.writerDetails}</h4>
								   </div>
							   </div>
				  
					  </div>
						</div>
					   );
				   })
			   :
			   null
		  }				 
	  
	   
   </OwlCarousel>   


   </div> 
</div> 
</div> */}