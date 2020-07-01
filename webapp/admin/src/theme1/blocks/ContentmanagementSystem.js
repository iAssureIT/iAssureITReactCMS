import React,{Component} from 'react';
import './ContentmanagementSystem.css';

export default class ContentmanagementSystem extends Component{
    render(){
        return(
            <div className="contentmgmtwrapper">
                <div className="contantmgmtwrpper00">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
					  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<ul className="dashBoxOS dashbox0000 col-lg-2 col-lg-offset-5 col-md-2 col-md-offset-5 col-sm-12 col-xs-12">
						  <li className="dash1OS"></li>
						  <li className="dash2OS"></li>
						  <li className="dash3OS"></li>
						</ul>
					</div> 
                </div>
                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-12 col-xs-12 contentmgmt row">
                            <span className="Auopilot">CONTENT</span >&nbsp;&nbsp;<span className="ecomeplatofrm">MANAGEMENT SYSTEM</span>
                        </div>

                </div> 
                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contentmgmtwrpp">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 contentmgmtsystm">
                            <p className="paragraphfasttrackmgmt">
                            <span className="loremIpsum">Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Ipsum passages, and more recently
                             with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Ipsum passages, 
                             </p>

                            <p className="paragraphfasttrackmgmt">
                             It is a long established fact that a reader will be distracted by the readable content of a page when
                             looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                             Ipsum passages, and more recently with desktop publishing software
                             </p>
                             <h3 className="ftracermore border">Read More </h3> <div className="arrow"><i className="fas fa-angle-double-right"></i></div>

                        </div>
                         <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 imageframeworkmgmt ">
                         <img src="/images/00002.png" alt="001" className="sideimageftrackmgmt"/>   


                        </div> 

                </div> 


                </div>

            </div>
        )
    }
}