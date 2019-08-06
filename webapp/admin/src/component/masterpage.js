import React, { Component, Suspense } from 'react';

class MasterPage extends Component {
   
    constructor(props) {
        super(props);
    }

    render() {
        return (
        	var componentName = this.props.pageDetails ? this.props.pageDetails.componentName : 'abc';
		const NewPageComponent = React.lazy(() => import('/imports/CMS/Templates/'+componentName+'.jsx'));
		if(!this.props.loading){
			return (
			    <div>
			    	
			    	<Suspense fallback={<div>Loading...</div>}>
			    		<NewPageComponent />
			    	</Suspense>
			    	
			    </div>
			  );
		}else{
			return(<div>Loading......</div>);
		}
            
        );
    }
}

export default MasterPage;
