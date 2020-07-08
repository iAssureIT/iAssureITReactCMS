import React,{Component}from 'react';
import './DomailExperise.css';

export default class DomailExperise extends Component{
    render(){
        return(
            <div className="dexpertisewrapper">
                <div className="dexpertizebgwrapper">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="col-lg-2 col-lg-offset-5 col-md-2 col-md-offset-5 col-sm-12 col-xs-12 domainspace">
                    <ul className="dashdomalexperise">
						  <li className="dash1dexpertise"></li>
						 <li className="dash2dexpertise"></li>
						<li className="dash3dexpertise"></li> 
					</ul>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-xs-12 domailtextwrapper">
                        <span className="domailh1">DOMAIN</span>
                       &nbsp; <span className=" domailh2">EXPERTISE</span>

                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 domailwrapper">
                     <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 leftwrapperdomail ">
                         <img src="/images/domail.png" alt="domail" className="leftsideimgdomail"/>
                    </div>
                     <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 domailcontentframework">
                        <p className="paragraphdomail00">
                            <span className="loremIpsum1">Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Ipsum passages, and more recently
                             with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Ipsum passages. 
                        </p>

                       <p className="paragraphdomail02">
                             It is a long established fact that a reader will be distracted by the readable content of a page when
                             looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                             Ipsum passages, and more recently with desktop publishing software
                        </p>
                             <h3 className="ftracermore00">Read More </h3> <div className="arrow00"><i className="fas fa-angle-double-right"></i></div>

                    </div>      


                    

                </div>
                </div>

            </div>
        )
    }
}