import React from 'react';
import "./IndustryDomains.css";

export default class IndustryDomains extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className=" container-fluid nopadding">
				<div className="industryDomainsHt container-fluid hidden-sm hidden-xs">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 ">
						<ul className="dashBoxID col-lg-2 col-lg-offset-5 col-md-2 col-md-offset-5">
						  <li className="dash1ID "></li>
						  <li className="dash2ID"></li>
						  <li className="dash3ID"></li>
						</ul>
					</div>
					<div className="col-lg-12 col-md-12 col-xl-12 ">
						<div className="text-center">
							<h1>
								<b>Industry Domains</b>
							</h1>
						</div>
					</div>
					<div className="col-lg-12 col-md-12 col-xl-12">
						<div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 iDomainBlock">
							<div className="row">
								<div className="col-lg-4 col-md-4">
									<div className="col-lg-12 col-md-12 idcol1">
										
											<img src="/images/18.png" alt="enteprise" className="innerDomain1"/>
										
										<h3 className="domainTitle text-center">Finance<br/>Industry</h3>
									</div>
								</div>
								<div className="col-lg-4 col-md-4">
									<div className="col-lg-12 col-md-12 idcol1">
										<img src="/images/19.png" alt="enteprice" className="innerDomain2"/>
										<h3 className="domainTitle1 text-center">Manufactuering<br/>Industry</h3>
									</div>
								</div>
								<div className="col-lg-4 col-md-4">
									<div className="col-lg-12 col-md-12 idcol1">
										<img src="/images/20.png" alt="enteprice" className="innerDomain3"/>
										<h3 className="domainTitle1 text-center">Transport<br/>Industry</h3>
									</div>
								</div>
							</div>
							<div className="row mtop25">
								<div className="col-lg-4 col-md-4">
									<div className="col-lg-12 col-md-12 idcol1">
										<img src="/images/21.png" alt="enteprice" className="innerDomain1"/>
										<h3 className="domainTitle text-center">Healthcare<br/>Industry</h3>
									</div>
								</div>
								<div className="col-lg-4 col-md-4">
									<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 idcol1">
										<img src="/images/22.png" alt="enteprice" className="innerDomainRE"/>
										<h3 className="domainTitleRE text-center">Real Estate<br/>Industry</h3>
									</div>
								</div>
								<div className="col-lg-4 col-md-4">
									<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 idcol1">
										<img src="/images/23.png" alt="enteprice" className="innerDomainED"/>
										<h3 className="domainTitleED text-center">Education<br/>Industry</h3>
									</div>
								</div>
							</div>
							<div className="row mtop25">
								<div className="col-lg-4 col-md-4">
									<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 idcol1">
										<img src="/images/24.png" alt="enteprice" className="innerDomain1"/>
										<h3 className="domainTitle text-center">eCommerce<br/>Industry</h3>
									</div>
								</div>
								<div className="col-lg-4 col-md-4">
									<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 idcol1">
										<img src="/images/25.png" alt="enteprice" className="innerDomainTL"/>
										<h3 className="domainTitleTI text-center">Travel<br/>Industry</h3>
									</div>
								</div>
								<div className="col-lg-4 col-md-4">
									<div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 idcol1">
										<img src="/images/26.png" alt="enteprice" className="innerDomainSU"/>
										<h3 className="domainTitleSU text-center">Startup<br/>Industry</h3>
									</div>
								</div>
							</div>
						
						</div>
					</div>
				</div>
			{/*=========== mobile view ================================*/}
				<div className="xsindustryDomainsHt container-fluid hidden-lg hidden-md">
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
}
