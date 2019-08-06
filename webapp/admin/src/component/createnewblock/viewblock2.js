import React, { Component } from 'react';
import CircleBlockMenuBars from './circleblockmenubars.js';
import CmsBlock from './cmsblock.js';

class ViewBlock_1 extends Component {
  
  /*  constructor(props) {
        super(props);
    }*/

    render() {
        return (
				
					<div className="box-body">
						<div className="row">
							<div className=" txtCenter col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<h2 className="text-center">Create New Block </h2>
							</div>
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<CircleBlockMenuBars />
							</div>
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<CmsBlock />
							</div>
						</div>
					</div>
				
            
        );
    }
}

export default ViewBlock_1;
