import React, { Component } from 'react';

import CircleMenuBars from '../circlemenubars.js';
/*import Example from '../../example.js';*/
import Cmspage from '../cmspage.js';


export default class ViewPage_2 extends Component {
   constructor(props){
   	super(props);
   	var id = this.props.match.params.id;
	console.log('id',id);
   	this.state = {
   		urlId:id,

   	}
   }
componentDidMount(){
	
}

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
									<Cmspage id={this.state.urlId}/>
									{/*<Example />*/}
								</div>
							</div>
						</div>
					</div>
					
				</div>
            
        );
    }
}

