import React,{Component} from 'react';
import "./AutoPilotPlatform.css";

export default class AutoPilotPlatform extends Component{
    render(){
        return(
            <div className="autopilotwrapper00">
                <div className="autopilotwrapper">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
					  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<ul className="dashBoxOS dashboxauto col-lg-2 col-lg-offset-5 col-md-2 col-md-offset-5 col-sm-12 col-xs-12">
						  <li className="dash1OS"></li>
						  <li className="dash2OS"></li>
						  <li className="dash3OS"></li>
						</ul>
					</div> 
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-12 col-xs-12 mainrow row">
                            <span className="Auopilot">AUTOPILOT</span >&nbsp;&nbsp;<span className="ecomeplatofrm">ECOMMERCE PLATFORM</span>
                        </div>

                </div>
                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Auotmaincontentwrapper">
                     <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 leftimageframework ">
                         <img src="/images/0002.png" alt="002" className="leftsideimg"/>  


                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 autocontentframework">
                            <p className="paragraphfasttrack00">
                            <span className="loremIpsum1">Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Ipsum passages, and more recently
                             with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Ipsum passages. 
                             </p>

                            <p className="paragraphfasttrack02">
                             It is a long established fact that a reader will be distracted by the readable content of a page when
                             looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                             Ipsum passages, and more recently with desktop publishing software
                             </p>
                             <h3 className="ftracermore00 border">Read More </h3> <div className="arrow00"><i className="fas fa-angle-double-right"></i></div>

                        </div>

                </div> 


                </div>


            </div>
        )
    }
}