import React,{Component} from 'react';
import './GetInTouch.css';

export default class GetInTouch extends Component{
    render(){
        return(
            <div className="gettouchwrapp">
                 <div className="col-lg-2 col-lg-offset-5 col-md-2 col-md-offset-5 col-sm-12 col-xs-12 GetIntouchdashwrapp">
                      <ul className="GetIntouchdashBox1">
						<li className="GetIntouchdash01"></li>
						<li className="GetIntouchdash02"></li>
					    <li className="GetIntouchdash03"></li> 
				     </ul>
                 </div>
                 <div className="col-lg-12 col-sm-12 col-sm-12 col-xs-12">
                     <div className="text-center">
                         <h1 className="gettitlttext">GET IN TOUCH</h1>
                     </div>
                </div>

                <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-xs-12 getintouchwrapp1">
                    <p className="paragraphtext">Give us a call or drop by anything,we endeavour to answer all enquiries within 24 hours on business day.We will happy to answer your questuions</p>
                </div>

                <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 getintouchwrapp2">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 Getwrapp1">
                       <div className=" col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-12 col-xs-12 contact-img-block">
                           <img src="/images/ctlocation.png" alt="c02"/>
                        </div>
                       <div className="row">
                          <div className="col-lg-12 col-md-12 colsm-12 col-xs-12 Getwrapp02">
                               <div className="text-center"> 
                                  <div className="GTh1title"><b>HEAD OFFICE</b></div>
                                  <div className="GTh1title2">Pune(INDIA)</div>
                                  <div className="GTh1title3">#323, Amanora Chambers Magarpatta Pune, Maharastra 411228</div> 
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 Getwrapp1">
                     <div className=" col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-12 col-xs-12 contact-img-block">
                         <img src="/images/Receiver.png" alt="c02"/>
                    </div>
                    <div className="col-lg-12 col-md-12 colsm-12 col-xs-12 Getwrapp02">
                        <div className="text-center"> 
                           <div className="GTh1title"><b>PHONE</b></div>
                           <div className="GTh1title2"> +91 99233 93733</div>
                        </div>    
                    </div>
                </div>
                 <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 Getwrapp1">    
                    <div className=" col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-12 col-xs-12 contact-img-block">
                        <img src="/images/email.png" alt="c02"/>
                    </div>
                    <div className="col-lg-12 col-md-12 colsm-12 col-xs-12 Getwrapp03">
                       <div className="text-center"> 
                         <div className="GTh1title"><b>EMAIL</b></div>
                         <div className="GTh1title2">info@iassureit.com</div>
                      </div>    
                   </div>
                </div> 
            </div>

            </div>
        )
    }
}