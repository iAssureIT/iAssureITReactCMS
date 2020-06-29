import React from 'react';
import "./IndustryDomains.css";

export default class IndustryDomains extends React.Component {

	constructor(props) {
		super(props);
		// this.state={
        // 	allData:[
        // 			  { 
		// 			    "_id": 1,
		// 			    "industryName": "Finance Industry",
		// 			    "industryImg": "/images/18.png",
		// 			  },
		// 			  {
		// 			    "_id": 2,
		// 			    "industryName": "Manufactuering Industry",
		// 			    "industryImg": "/images/19.png",
    	// 			  },
		// 			  {
		// 			    "_id": 3,
		// 			    "industryName": "Transport Industry",
		// 			    "industryImg": "/images/20.png",
					    
		// 			  },
		// 			   { 
		// 			    "_id": 4,
		// 			    "industryName": "Healthcare Industry",
		// 			    "industryImg": "/images/21.png",
		// 			  },
		// 			  {
		// 			    "_id": 5,
		// 			    "industryName": "Real Estate Industry",
		// 			    "industryImg": "/images/22.png",
    	// 			  },
		// 			  {
		// 			    "_id": 6,
		// 			    "industryName": "Education Industry",
		// 			    "industryImg": "/images/23.png",
					    
		// 			  },
		// 			   { 
		// 			    "_id": 7,
		// 			    "industryName": "eCommerce Industry",
		// 			    "industryImg": "/images/24.png",
		// 			  },
		// 			  {
		// 			    "_id": 8,
		// 			    "industryName": "Travel Industry",
		// 			    "industryImg": "/images/25.png",
    	// 			  },
		// 			  {
		// 			    "_id": 9,
		// 			    "industryName": "Startup Industry",
		// 			    "industryImg": "/images/26.png",
					    
		// 			  }






        // 	]
      
      
    	// }
	}

	render() {
		// var data = this.state.allData;
    	// console.log("all data ",data);
		return (
			<div className=" container-fluid nopadding">
				<div className="industryDomainsHt container-fluid">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 ">
						<ul className="dashBoxID col-lg-2 col-lg-offset-5 col-md-2 col-md-offset-5">
						  <li className="dash1ID "></li>
						  <li className="dash2ID"></li>
						  <li className="dash3ID"></li>
						</ul>
					</div>
					<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 ">
						<div className="col-lg-4 col-lg-offset-4 text-center industrydomain">
							<h1 className="hmaintitle">
								<b >Industry Domains</b>
							</h1>
						</div>
					</div>
					
					<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 row">
						<div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12 iDomainBlock">
							<div className="col-lg-4 col-md-4">
								<div className="idcol1">
									<img src="/images/50.png" alt="18" className="center"/> 
									<div className="text-center htitle">
									<h3 className="xshmview00">Finance Industry</h3>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4">
								<div className="idcol1">
								  <img src="/images/51.png" alt="18" className="center"/> 
								  <div className="text-center htitle">
										<h3 className="xshmview">Manufactuering Industry</h3>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4">
								<div className="idcol1">
								<img src="/images/52.png" alt="18" className="center"/> 
								<div className="text-center htitle">
										<h3 className="xshmview">Transport Industry</h3>
								</div>
							</div>

							</div>
							<div className="col-lg-4 col-md-4">
								<div className="idcol1">
								<img src="/images/53.png" alt="18" className="center"/> 
								<div className="text-center htitle">
										<h3 className="xshmview">Healthcare Industry</h3>
									</div>


								</div>

							</div>
							<div className="col-lg-4 col-md-4">
								<div className="idcol1">
								<img src="/images/54.png" alt="18" className="center"/>
								<div className="text-center htitle">
										<h3 className="xshmview">Real Estate Industry</h3>
									</div> 


								</div>

							</div>
							<div className="col-lg-4 col-md-4">
								<div className="idcol1">
								<img src="/images/55.png" alt="18" className="center"/> 
								<div className="text-center htitle">
										<h3 className="xshmview">Education Industry</h3>
									</div>


								</div>

							</div>
							<div className="col-lg-4 col-md-4">
								<div className="idcol1">
								<img src="/images/56.png" alt="18" className="center"/> 
								<div className="text-center htitle">
										<h3 className="xshmview">eCommerce Industry</h3>
									</div>


								</div>

							</div>
							<div className="col-lg-4 col-md-4">
								<div className="idcol1">
								<img src="/images/57.png" alt="18" className="center"/> 
								<div className="text-center htitle">
										<h3 className="xshmview000">Travel Industry</h3>
									</div>


								</div>

							</div>
							<div className="col-lg-4 col-md-4">
								<div className="idcol1">
								<img src="/images/58.png" alt="18" className="center"/>
								<div className="text-center htitle">
										<h3 className="xshmview">Start Up Industry</h3>
									</div> 


								</div>
							</div>
						</div>
					</div>
							
							
						
							{/* {
		                		data && data.length > 0 ?
				      				data.map((data, index)=>{
		                					return(
	                							<div key={index} className="col-lg-4 col-md-4">
													<div className="idcol1">
														<div className="col-lg-5 col-md-5 row">
															<img src={data.industryImg} alt="enteprise" className="innerDomain1"/> 
														</div>
														<div className="col-md-7 col-lg-7 row">
															<h3 className="domainTitle text-center">{data.industryName}</h3>
														</div>
													</div>
						                		</div>	
		                					);
	                					})
	                				:
	                				null
		                		}				
						                		 */}
								
							
						
					
				</div>
				</div>
		);
	}
}
			{/*=========== mobile view ================================*/}
				{/* <div className="xsindustryDomainsHt container-fluid hidden-lg hidden-md">
					<div className="col-xs-12 col-sm-12 hidden-lg hidden-md ">
						<ul className="xsdashBox col-xs-8 col-xs-offset-3 col-sm-offset-4 col-sm-7 ">
						  <li className="xsdash1 "></li>
						  <li className="xsdash2"></li>
						  <li className="xsdash3"></li>
						</ul>
					</div>
					<div className="col-xs-12 col-sm-12 hidden-lg hidden-md">
						<div className="text-center">
							<h1>
								<b>Industry Domains</b>
							</h1>
						</div>
					</div>
					<div className="hidden-lg hidden-md col-xs-12 col-sm-12">
						<div className="col-xs-10 col-xs-offset-1 xsiDomainBlock">
							<div className="row">
								<div className="col-xs-12 col-sm-7 col-sm-offset-2">
									<div className="col-xs-12 col-sm-12 hidden-lg hidden-md xsidcol1">
										<img src="/images/18.png" alt="enteprice" className="xsinnerDomain1"/>
										<h3 className="xsdomainTitle text-center">Finance<br/>Industry</h3>
									</div>
								</div>
								<div className="col-xs-12 col-sm-7 col-sm-offset-2">
									<div className="col-xs-12 col-sm-12 hidden-lg hidden-md xsidcol1">
										<img src="/images/19.png" alt="enteprice" className="xsinnerDomain2"/>
										<h3 className="xsdomainTitle1 text-center">Manufactuering<br/>Industry</h3>
									</div>
								</div>
								<div className="col-xs-12 col-sm-7 col-sm-offset-2">
									<div className="col-xs-12 col-sm-12 hidden-lg hidden-md xsidcol1">
										<img src="/images/20.png" alt="xsenteprice" className="xsinnerDomain3"/>
										<h3 className="xsdomainTitle1 text-center">Transport<br/>Industry</h3>
									</div>
								</div>
							</div>
							<div className="row ">
								<div className="col-xs-12 col-sm-7 col-sm-offset-2">
									<div className="hidden-lg hidden-md col-sm-12 col-xs-12 xsidcol1">
										<img src="/images/21.png" alt="enteprice" className="xsinnerDomain1"/>
										<h3 className="xsdomainTitle text-center">Healthcare<br/>Industry</h3>
									</div>
								</div>
								<div className="col-xs-12 col-sm-7 col-sm-offset-2">
									<div className="col-xs-12 col-sm-12 hidden-lg hidden-md xsidcol1">
										<img src="/images/22.png" alt="enteprice" className="xsinnerDomainRE"/>
										<h3 className="xsdomainTitleRE text-center">Real Estate<br/>Industry</h3>
									</div>
								</div>
								<div className="col-xs-12 col-sm-7 col-sm-offset-2">
									<div className="col-xs-12 col-sm-12 hidden-lg hidden-md xsidcol1">
										<img src="/images/23.png" alt="enteprice" className="xsinnerDomainED"/>
										<h3 className="xsdomainTitleED text-center">Education<br/>Industry</h3>
									</div>
								</div>
							</div>
							<div className="row ">
								<div className="col-xs-12 col-sm-7 col-sm-offset-2">
									<div className="col-xs-12 col-sm-12 hidden-lg hidden-md xsidcol1">
										<img src="/images/24.png" alt="enteprice" className="xsinnerDomain1"/>
										<h3 className="xsdomainTitle text-center">eCommerce<br/>Industry</h3>
									</div>
								</div>
								<div className="col-xs-12 col-sm-7 col-sm-offset-2">
									<div className="col-xs-12 col-sm-12 hidden-lg hidden-md xsidcol1">
										<img src="/images/25.png" alt="enteprice" className="xsinnerDomainTL"/>
										<h3 className="xsdomainTitleTI text-center">Travel<br/>Industry</h3>
									</div>
								</div>
								<div className="col-xs-12 col-sm-7 col-sm-offset-2">
									<div className="col-xs-12 col-md-12 hidden-lg hidden-md xsidcol1">
										<img src="/images/26.png" alt="enteprice" className="xsinnerDomainSU"/>
										<h3 className="xsdomainTitleSU text-center">Startup<br/>Industry</h3>
									</div>
								</div>
							</div>
						
						</div>
					</div>
				</div>




			</div>
		);
	}
} */}
