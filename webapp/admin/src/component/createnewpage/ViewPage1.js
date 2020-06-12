import React, { Component } from 'react';

import CircleMenuBars from '../circlemenubars.js';
//import Selectpagedesign from '../selectpagedesign/selectpagedesign.js';ListOfPages
import ListOfPages from '../ListOfPages/ListOfPages.js';
import 'bootstrap/js/collapse.js';
class ViewPage1 extends Component {
   


    render() {
        return (
        		<div>	
					<div className="contentWrapper">
						<div className="box-body">
							<div className="row">
								<div className=" txtCenter col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<h2 className="text-center">Create New Page </h2>
								</div>
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<CircleMenuBars />
								</div>
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<ListOfPages/>
								</div>
							</div>
						</div>
					</div>
					
				</div>
            
        );
    }
}

export default ViewPage1;
