import React, { Component } from 'react';

class Example extends Component {
  
    constructor(props) {
        super(props);
        var id = this.props.match.params.id;
		console.log("id",id);
    }
    selectDesign(event){
    	
    	console.log("=this.props=>",this.props);
    	this.props.history.push('/viewpage2');
    	/*{<Redirect push to="/viewpage2"/>}*/
    }

    render() {
        return (
        		<button  type="submit" className="col-lg-2 col-md-3 col-sm-6 col-xs-12 btn " onClick={this.selectDesign.bind(this)}>Next</button>

        	/*onClick={this.selectDesign.bind(this)}*/
            
        );
    }
}

export default Example;
