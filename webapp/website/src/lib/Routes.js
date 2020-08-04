import React from 'react';
import { BrowserRouter as Router,Switch} from 'react-router-dom';
import { Route } from 'react-router';
import Masterpage from '../MasterPage/MasterPage.js';
import Headernew from '../blockTemplate/Headernew/headernew.js';
// import Footer from '../blockTemplate/Footer/Footer.js';


import ContactModal 	from '../blockTemplate/ContactModal/ContactModal.js';

// import ScrollButton     from '../blockTemplate/ScrollButton/ScrollButton.js';




const WebLayout = () => (

         	<Route path= "/masterpage/:pageurl"          component={ Masterpage } /> 


	);


const Routes = (props) => {
  return (
    <Router>
    		
        <Headernew />
        <ContactModal />
    	<Switch>
           <Route path="/" component={ WebLayout } />
            
    	</Switch>
        {/* <Footer /> */}
        {/* <ScrollButton/> */}
    </Router>
  )
}

export default Routes;