import React, { Component } from 'react';

export default class FormHeader extends Component {
	render() {
		return (
			<div>
				<header className="">
					{/* Navigation*/}
					<div className="navigation static-header header-fixed" data-page="form">
						{/* Container Fluid*/}
						<div className="container-fluid">
							{/* Row*/}
							<div className="row">
								{/* Col*/}
								<div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
									{/* Logo Wrapper*/}
									<div className="logo-wrapper">
										<h1>
											<a href="" title="">
												<img
													src="img/header-logo.png"
													className="img-fluid"
													alt="Logo"
													title=""
												/>
											</a>
										</h1>
									</div>
									{/* /Logo Wrapper*/}
								</div>
								<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
									{/* Nav*/}
									<nav className="desktop-navigation" />
								</div>
								<div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
									<div className="discoverForm">
										<div className="discoverForm">
											<a href="#quickContact" title="">
												<span>
													<img
														src="img/schedule_a_meeting_icon.svg"
														className="img-fluid first-img"
														alt=""
														title=""
													/>
													<img
														src="img/schedule_a_meeting_icon-h.svg"
														className="img-fluid first-img-hover"
														alt=""
														title=""
														data-xblocker="passed"
														style={{ visibility: 'visible' }}
													/>
												</span>
												Schedule A Meeting
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* /Container Fluid*/}
					</div>
					{/* /Navigation*/}
					{/* / smallNavigation and Mobile Navigation*/}
					<div className="smallNavigation showMobileNav">
						<div className="nav-btn">
							<div id="close_icon" className="menuIcon">
								<span className="lines" />
								<span className="lines smallLine" />
							</div>
						</div>
						<div className="mobile-navigation">
							<ul className="navList">
								<li>
									<a href="" title="" className="">
										Home
									</a>
								</li>
								<li>
									<a href="app-designs" id="abcTest" title="" className="">
										<span
											data-toggle="collapse"
											data-target="#collapseSet"
											aria-expanded="true"
											aria-controls="collapseOne"
										>
											App Designs
										</span>
									</a>
								</li>
								<li>
									<a href="partnership" id="abcTest1" title="" className="">
										<span
											data-toggle="collapse"
											data-target="#collapseSet"
											aria-expanded="true"
											aria-controls="collapseOne"
										>
											Design Partnership
										</span>
									</a>
								</li>
								<li>
									<a href="work" className="" title="">
										Work
									</a>
								</li>
								<li>
									<a href="review" className="" title="">
										Reviews
									</a>
								</li>
								<li>
									<a href="blog" className="" title="">
										Blog
									</a>
								</li>
							</ul>
							<ul className="buttonNav">
								<li className="mobNav">
									<img
										src="img/white-seperator.png"
										className="img-fluid first-img"
										alt=""
										title=""
									/>
								</li>
								<li>
									<a href="form" className="active">
										Discovery Form
									</a>
								</li>
								<li>
									<a href="">Schedule A Meeting</a>
								</li>
							</ul>
						</div>
					</div>
				</header>
			</div>
		);
	}
}
