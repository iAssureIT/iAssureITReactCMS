
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/*
import UMListOfUsers from '../coreAdmin/userManagement/UM/UMListOfUsers.js';
import EditUserProfile from '../coreAdmin/userManagement/UM/EditUserProfile.js';*/
import MasterPage from '../component/MasterPage/MasterPage.js';

// import ViewTemplates from '../coreAdmin/NotificationManagement/ViewTemplates.js';
// import Header from '/Users/omkar/Documents/Reactjs/TGK/src/coreAdmin/dashboard/Dashboard.js';

class router extends React.Component {

  return (
    <div>
     	<Router>
            <Route path="/masterpage/:pageurl"  component={ MasterPage } /> 
  		</Router>
    </div>
  );
}

export default router;





// export default routes;
