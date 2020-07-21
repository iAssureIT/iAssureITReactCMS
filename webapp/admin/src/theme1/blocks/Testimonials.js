import React from 'react';
import "./Testimonials.css";


export default class Testimonials extends React.Component {

	
	
	render() {
				return (
				<section className="testimonialwrapper">
					<div className="bgIMG">
					 <div className="col-lg-2 col-lg-offset-5 col-md-2 col-md-offset-5 col-sm-12 col-xs-12 dashBoxTmwrapp">
                        <ul className="dashBoxTm">
                            <li className="dash1Tm"></li>
                            <li className="dash2Tm"></li>
                            <li className="dash3Tm"></li> 
                        </ul>
                    </div> 
                     
				 <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 clienttestmonials">
					<h1>
	                     <b>Client Testimonials</b>
                     </h1> 
                </div>  
				
				
				  {/* <div className="slider-area"> */}
					
					<div id="myCarousel" className="carousel slide" data-ride="carousel">
  
						<ol className="carousel-indicators">
						<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
						<li data-target="#myCarousel" data-slide-to="1"></li>
						<li data-target="#myCarousel" data-slide-to="2"></li>
						</ol>


						<div class="carousel-inner" role="listbox">
						<div className="item active">
							<div className="img-area">
							<img src="/images/t1.jpeg" alt="t1" className="d-block" />
							</div>
							<div className="carousel-caption">
								<div className="testimonialWriter">Mr Paras Surana</div>
								<div className="writerDetails">Director - Prabandhan Management Consulting</div>
								<div className="testContent">
								One important thing which differentiates iAssureIT from other 
								IT companies is the thought process of complete team & their 
								will to provide the best of features, thinking completely out 
								of the box & without bothering the extra efforts which would go
								 in from their end implementing these.Really happy & satisfied with 
								 the quality of the work.",
								</div>
							</div>
						</div>

							<div class="item">
							<div className="img-area">
							<img src="/images/t2.jpeg" alt="t2" className="d-block" />
							</div>
							<div className="carousel-caption">
								<div className="testimonialWriter">Mr Mohd Imran,</div>
								<div className="writerDetails">Founder & CEO - Mag InfoTech, Hydrabad</div>
								<div className="testContent">
								One important thing which differentiates iAssureIT from other 
								IT companies is the thought process of complete team & their 
								will to provide the best of features, thinking completely out 
								of the box & without bothering the extra efforts which would go
								 in from their end implementing these.Really happy & satisfied with 
								 the quality of the work.",
								</div>
							</div>

							</div>

							<div class="item">
							<div className="img-area">
							<img src="/images/t3.jpeg" alt="t3" className="d-block" />
							</div>
							<div className="carousel-caption">
								<div className="testimonialWriter">Nitin Thakrey</div>
								<div className="writerDetails">Operations Director - Innowave IT Solutions</div>
								<div className="testContent">
								One important thing which differentiates iAssureIT from other 
								IT companies is the thought process of complete team & their 
								will to provide the best of features, thinking completely out 
								of the box & without bothering the extra efforts which would go
								 in from their end implementing these.Really happy & satisfied with 
								 the quality of the work.",
								</div>
							</div>

							
							</div>
						</div>


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
					</section>
				
				    
        						    
	  		
		);
	}
}	
