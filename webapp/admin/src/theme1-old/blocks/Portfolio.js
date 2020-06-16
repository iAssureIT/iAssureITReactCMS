import React from 'react';
import "./Portfolio.css";
import $ from "jquery";

export default class Portfolio extends React.Component {

	constructor(props) {
		super(props);
	}
    componentDidMount(){
    	$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('5000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});
      
    }


	render() {
		return (
			<div className="PortfolioHT container-fluid">

        <div class="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="text-center">
						<h1>
							<b>Portfolio</b>
						</h1>
					</div>
        </div>

        <div align="center">
            <button class="filter-button" data-filter="all">ALL PROJECTS</button>
            <button class="filter-button" data-filter="hdpe">WEB APPLICATION</button>
            <button class="filter-button" data-filter="sprinkle">MOBILE APPLICATION</button>
            <button class="filter-button" data-filter="spray">eCOMMERCE ONLINE STORE </button>
            <button class="filter-button" data-filter="irrigation">BUSINESS PORTALS</button>
            <button class="filter-button" data-filter="irrigation">CORPORATE WEBSITES </button>
        </div>
        <br/>
        		<div className="col-lg-12 col-md-12 col-xl-12 col-sm-12">
					<div className="col-lg-10 col-lg-offset-1 iDomainBlock">
						
							
					            <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
					                
					                <img className="img-responsive" src="./images/30.png" alt="Bannerpng"/>
					            </div>

					            <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle">
					                <img className="img-responsive" src="./images/31.png" alt="Bannerpng"/>
					            </div>

					            <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
					                <img className="img-responsive" src="./images/32.png" alt="Bannerpng"/>
					            </div>

				{/*	            <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
					                <img src="http://fakeimg.pl/365x365/" class="img-responsive"/>
					            </div>


					            <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter spray">
					                <img src="http://fakeimg.pl/365x365/" class="img-responsive"/>
					            </div>

					            <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle">
					                <img src="http://fakeimg.pl/365x365/" class="img-responsive"/>
					            </div>*/}
					  		</div>
					  	
					</div>
				  		
					  
				
			</div>
		);
	}
}
