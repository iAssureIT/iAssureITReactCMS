import React,{Component}from 'react';
import './CostAdvantage.css';

export default class CostAdvantage extends Component{
    render(){
        return(
            <div className="costadvantagewrpp"> 
            <div className="backgroundimgadnt">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="col-lg-2 col-lg-offset-5 col-md-2 col-md-offset-5 col-sm-12 col-xs-12 barspace">
                    <ul className="dashcostadntage">
						  <li className="dash1costavtge"></li>
						 <li className="dash2costavtge"></li>
						<li className="dash3costavtge"></li> 
					</ul>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="col-lg-4 col-lg-offset-4 col-md-4 col-sm-12 col-xs-12 textwrapper">
                        <span className="h1cost">COST</span>
                       &nbsp; <span className="h2advantage">ADVANTAGE</span>

                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 wrapperimgtext">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 costadvantagewrapp">
                            <p className="paragraphcostadvantage01">
                            <span className="loremIpsumadtge">Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Ipsum passages, and more recently
                             with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Ipsum passages, 
                             </p>

                            <p className="paragraphcostadvantage02">
                             It is a long established fact that a reader will be distracted by the readable content of a page when
                             looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                             Ipsum passages, and more recently with desktop publishing software
                             </p>
                             <h3 className="cadtgeracermore">Read More </h3> <div className="arrowcadtge"><i className="fas fa-angle-double-right"></i></div>

                 </div> 
                 <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 imageframeworkadtage ">
                         <img src="/images/advantage01.png" alt="001" className="sideimagecostadvatge"/>  
                 </div>        


                </div>
            </div>

            </div>
        )
    }
}