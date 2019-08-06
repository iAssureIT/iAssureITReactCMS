import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/selectpagedesign.css';

class SelectBlockDesign extends Component {
   

    constructor(props) {
        super(props);
        this.state={
        	allData:[
        			{
					    
					    "_id": 1,
					    "designName": "Block 1",
					    "designImage": "/images/block1.jpg",
					  },
					  {
					    "_id": 2,
					    "designName": "Block 2",
					    "designImage": "/images/block2.jpg",
    				  },
					  {
					    "_id": 3,
					    "designName": "Block 3",
					    "designImage": "/images/block4.jpg",
					    
					  }

        	]
      
      
    	}
    }

    render() {
    	var data = this.state.allData;
    	console.log("all data ",data);
        return (
        			<div className="container-fluid">
							<div className="col-lg-12 col-md-12 hidden-sm hidden-xs secdiv"></div>
							<section className="content">
								<div className="row">
									<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 ">
										<div className="noPadLR  selectBox box col-lg-12 col-md-12 col-xs-12 col-sm-12">
										   	<div className="with-border box-header col-lg-12 col-md-12 col-xs-12 col-sm-12">
										        <div className="col-lg-12 col-md-12 col-sm-12 col-sm-12 txtCenter pdcls">
										            <h4 className="weighttitle ctext">Select Block Design</h4>
										        </div>
										    </div>		
										    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 marginTop17">
			                					{
						                			data && data.length > 0 ?
								      				data.map((data, index)=>{
						                					return(
					                							<div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
										                			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 selectDiv1 designList">
										                				<Link to={"/viewblock2"}>
											                				<img alt='' src={data.designImage} className="img-responsive blockdemo1"  />
											                				<div  className="row">
												                				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
												                					<p className="mtop25 txtCenter ctext">{data.designName}</p>
												                				</div>												                				
											                				</div>
										                				</Link>
									                				</div>
										                		</div>	
						                					);
					                					})
					                				:
					                				null
						                		}				
						                					    
					                		</div>		                
										</div> 
							       	</div>
								</div>
							</section>	
			</div>
            
        );
    }
}

export default SelectBlockDesign;
