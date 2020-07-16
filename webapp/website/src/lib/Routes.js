import React from 'react';
import { BrowserRouter as Router,Switch} from 'react-router-dom';
import { Route } from 'react-router';
import Masterpage from '../MasterPage/MasterPage.js';









const Routes = (props) => {
  return (
    <Router>
    	<Switch>
    		   
         <Route path= "/masterpage/:pageurl"          component={ Masterpage } /> 
            
           
            
    	</Switch>
    </Router>
  )
}

export default Routes;