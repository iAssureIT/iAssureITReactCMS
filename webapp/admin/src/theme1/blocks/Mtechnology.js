import React,{Component} from 'react';
import "./Mtechnology.css";

export default class Mtechnology extends Component{
    render(){
        return(
            <div className="mtechnologywrapper">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="col-lg-2 col-lg-offset-5 col-md-2 col-md-offset-5 col-sm-12 col-xs-12 boxspace">
                    <ul className="dashmtechnology">
						  <li className="dash1mtechnology"></li>
						 <li className="dash2mtechnology"></li>
						<li className="dash3mtechnology"></li> 
					</ul>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-xs-12 mtelogytextwrapper">
                        <span className="h1mtech">MODERN</span>
                       &nbsp; <span className="h2mtech">TECHNOLOGY</span>

                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bgwrapper">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mtechlogywrapp">
                    <p className="paragraphmtech01">
                        <span className="loremIpsummtech">Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Ipsum passages, and more recently
                             with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Ipsum passages, 
                     </p>

                     <p className="paragraphmtech02">
                             It is a long established fact that a reader will be distracted by the readable content of a page when
                             looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                             Ipsum passages, and more recently with desktop publishing software
                    </p>
                     <h3 className="mtechracermore">Read More </h3> <div className="arrowmtech"><i className="fas fa-angle-double-right"></i></div>

                 </div> 
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 imageframemtechlogy ">
                         <img src="/images/mtech.png" alt="001" className="sideimagemtechlogy"/>  
                 </div>         


                </div>


            </div>
        )
    }
}