import React,{Component}from 'react';
import './PerformanceApps.css';

export default class PerformanceApps extends Component{
    render(){
        return(
            <div className="highperformaoncewrapp">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="col-lg-2 col-lg-offset-5 col-md-2 col-md-offset-5 col-sm-12 col-xs-12 performancesbar">
                    <ul className="dashperformance">
						  <li className="dash1perapp"></li>
						 <li className="dash2perapp"></li>
						<li className="dash3perapp"></li> 
					</ul>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-xs-12 pertextwrapper">
                        <span className="h1per">HIGH</span>
                       &nbsp; <span className="h2per">PERFORMANCE APPS</span>

                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 perbgwrapper">
                 <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 highperwrappcont">
                    <p className="paragraphper01">
                        <span className="loremIpsumper">Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Ipsum passages, and more recently
                             with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Ipsum passages, 
                     </p>

                     <p className="paragraphper02">
                             It is a long established fact that a reader will be distracted by the readable content of a page when
                             looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                             Ipsum passages, and more recently with desktop publishing software
                    </p>
                     <h3 className="perracermore">Read More </h3> <div className="arrowper"><i className="fas fa-angle-double-right"></i></div>

                 </div> 

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 imageframeperformance">
                         <img src="/images/highperformance.png" alt="highperformance" className="sideimageperformance"/>  
                 </div>  
                 </div>

            </div>
        )
    }
}