import React, { Component } from "react";
import "./FasttrackFrameWork.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


export default class FastrackFrameWork extends Component{
    render(){
        return(
            <div className="fastrachight">
                <div className="ftrackwrapper">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
					  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
						<ul className="dashBoxOS dashbox00 smdash1 col-lg-2 col-lg-offset-5 col-md-2 col-md-offset-5 col-sm-12 col-xs-12">
						  <li className="dash1OS fstrack1"></li>
						  <li className="dash2OS"></li>
						  <li className="dash3OS"></li>
						</ul>
					</div> 
                </div>
                     <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-xs-12 heading row">
                            <span className="ftitle0">FASTTRACK</span >&nbsp;&nbsp;<span className="ftitle00">FRAMEWORK</span>
                        </div>

                    </div> 
					 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 maincontentwrapper"> 
                         <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 contentframework">
                            <p className="paragraphfasttrack">
                            <span className="loremIpsum">Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Ipsum passages, and more recently
                             with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Ipsum passages, 
                             </p>

                            <p className="paragraphfasttrack01">
                             It is a long established fact that a reader will be distracted by the readable content of a page when
                             looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                             Ipsum passages, and more recently with desktop publishing software
                             </p>
                             <h3 className="ftracermore">Read More </h3> <div className="arrow"><i className="fas fa-angle-double-right"></i></div>

                        </div> 
                          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 imageframework ">
                         <img src="/images/001.png" alt="001" className="sideimageftrack"/>  


                        </div>   

                     </div> 
					
					

                </div>

            </div>
        )
    }
}
