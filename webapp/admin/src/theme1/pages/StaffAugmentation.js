import React,{Component} from 'react';
import { Helmet } 		from "react-helmet";
import "./ServicesList.css";
import Footer 	from '../common/Footer.js';
import ContactModal 	from '../blocks/contactModal.js';
import ScrollButton     from '../blocks/ScrollButton.js';
import Customisable     from  '../blocks/Customisable.js';
import SuperPerformance from  '../blocks/SuperPerformance.js';
import DigitalMarkiting from   '../blocks/DigitalMarkiting.js';
import CreateOnlineStore from  '../blocks/CreateOnlineStore';
import OnlineStore       from   '../blocks/OnlineStore.js';
import BusinessGrows     from   '../blocks/BusinessGrows.js';
import AffordableCost    from   '../blocks/AffordableCost.js';
import Userexperience    from   '../blocks/Userexperience.js';
import ServiceBanner 	from '../blocks/eCommerceBanner.js';
import Headernew 		from '../common/headernew.js';


export default class StaffAugmentation extends Component{

    constructor(props) {
		super(props);
		this.state = {

			"description"		: "Corporate Websites & eCommerce Development",
			"keywords"			: "Cutting Edge, Responsive, Mobile Friendly",
			"author"			: "iAssureIT",
			"title"				: "iAssureITHomePage",
			

		};
	}
    render(){
        return(
            <div>
                <Helmet>
					<meta charset="UTF-8" />
					<meta name="description" content= {this.state.description}/>
					<meta name="keywords" content={this.state.keywords} />
					<meta name="author" content={this.state.author} />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<title>{this.state.title}</title>
				</Helmet>
				<Headernew />
				<ContactModal/>
                <ServiceBanner bannerText = {this.state.bannerText}/>
				  <Customisable/> 
				  <SuperPerformance /> 
				  <DigitalMarkiting />
				  <CreateOnlineStore/>
				  <OnlineStore />
				  <BusinessGrows />
				  <AffordableCost />
				  <CreateOnlineStore/>
				  <Userexperience />
				  <Footer />
				
				<ScrollButton />



            </div>
        )
    }
}