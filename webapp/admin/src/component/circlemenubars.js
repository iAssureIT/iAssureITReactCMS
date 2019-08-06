import React, { Component }        from 'react';
import { Link } from 'react-router-dom';

import './css/circlemenubars.css';


export default class CircleMenuBars extends Component{


    componentDidMount(){
      
    }

    componentWillUnmount() {
   
    }

    render() {
       var urlParam = window.location.pathname;
       console.log('urlParam=>',urlParam);
       const pathname = this.props.location;
       console.log(" url   =>",pathname);
        /*var vname =   this.props.match.params;

        let a = urlParam1.split('/');
        console.log("a==>",a[1]); 
        const urlParam =a[1];

        console.log("vname",vname);*/
            return (
                    <div className="wizard col-lg-12 col-md-12 col-xs-12 col-sm-12">
                        <div className="wizard-inner col-lg-12 col-md-12 col-xs-12 col-sm-12">
                            <div className="connecting-line"></div>
                            <ul className="nav nav-tabs" role="tablist">
                                <li role="presentation" className={urlParam ==="/viewpage1" ? "active": urlParam ==="/viewpage2" || urlParam ==="/viewpage3" ? "tab-done" : ""}>
                                    <Link to="/viewpage1" title="viewpage1">
                                        <span className="round-tab circleSpan">
                                            <i className="fa fa-object-group fa-stack-1x circleIcon"></i>
                                        </span>
                                    </Link>
                                    <div className="wizardNote ">Select Design</div>
                                </li>
                                <li role="presentation" className={urlParam === "/viewpage2"? "active":urlParam === "/viewpage3"?"tab-done" : ""}>
                                    <Link to="/viewpage2" title="viewpage2">
                                        <span className="round-tab  circleSpan">
                                            <i className="fa  fa-info fa-stack-1x circleIcon"></i>
                                        </span>
                                    </Link>
                                    <div className="wizardNote">Enter Data</div>
                                </li>
                               <li role="presentation" >{/*className={urlParam == "viewpage3"? "active" : ""}*/}
                                    <Link to="" title="viewpage3">
                                        <span className="round-tab  circleSpan">
                                            <i className="fa fa-file fa-stack-1x circleIcon circleIconReceipt"></i>
                                        </span>
                                    </Link>
                                    <div className="wizardNote">View Page</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                );
            }
}

