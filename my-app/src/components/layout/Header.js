import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<div>
				{/*Custom header*/}
				<header className="">
					{/* Navigation */}
					<div className="navigation static-header" data-page="mobile-app-design-company-india">
						{/* Container Fluid */}
						<div className="container-fluid">
							{/* Row */}
							<div className="row">
								{/* Col */}
								<div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
									{/* Logo Wrapper */}
									<div className="logo-wrapper">
										<h1>
											<Link to="/">
												<img
													src="img/header-logo.png"
													className="img-fluid"
													alt="Logo"
													title=""
												/>
											</Link>
										</h1>
									</div>
									{/* /Logo Wrapper */}
								</div>
								<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
									{/* Nav */}
									<nav className="desktop-navigation">
										{/* Nav List */}
										<ul className="nav-list">
											<li className="list-item menu-item">
												<a href="javascript:void(0)">Services</a>
												<ul className="sub-menu" id="dropdown-items">
													<li>
														<Link to="/app-designs" href="app-designs" className="">
															App Designs
														</Link>
													</li>
													{/* <li>
                            <Link to='/'
                              href="partnership"
                              className=""
                            >
                              Design Partnership
                            </Link>
                          </li> */}
												</ul>
											</li>
											<li className="list-item">
												<Link to="/work" className="">
													Work
												</Link>
											</li>
											{/* <li className="list-item">
                        <Link to="/blog" className="">
                          Blog
                        </Link>
                      </li> */}
											<li className="list-item">
												<Link to="/review" className="">
													Reviews
												</Link>
											</li>
										</ul>
										{/* /Nav List */}
									</nav>
								</div>
								<div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
									<div className="discoverForm">
										<Link to="/form" title="">
											<span>
												<img
													src="img/discovery_btn_icon.svg"
													className="img-fluid first-img"
													alt=""
													title=""
												/>
												<img
													src="img/discovery_btn_icon-h.svg"
													className="img-fluid first-img-hover"
													alt=""
													title=""
													data-xblocker="passed"
													style={{ visibility: 'visible' }}
												/>
											</span>
											Discovery Form
										</Link>
									</div>
								</div>
							</div>
						</div>
						{/* /Container Fluid */}
					</div>
					{/* /Navigation */}
					{/* / smallNavigation and Mobile Navigation */}
					<div className="smallNavigation">
						{/* <div className="nav-btn">
              <div id="close_icon" className="menuIcon">
                <span className="lines"></span>
                <span className="lines smallLine"></span>
              </div>
            </div> */}
						<div className="mobile-navigation">
							<ul className="navList">
								<li>
									<a href="" title="" className="">
										Home
									</a>
								</li>
								<li>
									<Link to="/app-designs" id="abcTest" title="" className="">
										<span
											data-toggle="collapse"
											data-target="#collapseSet"
											aria-expanded="true"
											aria-controls="collapseOne"
										>
											App Designs
										</span>
									</Link>
								</li>
								<li>
									{/* <a
                    href="partnership"
                    id="abcTest1"
                    title=""
                    className=""
                  >
                    <span
                      data-toggle="collapse"
                      data-target="#collapseSet"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Design Partnership
                    </span>
                  </a> */}
								</li>
								<li>
									<Link to="/work" className="" title="">
										Work
									</Link>
								</li>
								<li>
									<Link to="review" className="" title="">
										Reviews
									</Link>
								</li>
								{/* <li>
                  <a
                    href="blog"
                    className=""
                    title=""
                  >
                    Blog
                  </a>
                </li> */}
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
									<Link to="/form" className="">
										Discovery Form
									</Link>
								</li>
								<li>
									<a href="#quickContact">Schedule A Meeting</a>
								</li>
							</ul>
						</div>
					</div>
					{/* / smallNavigation and Mobile Navigation */}
				</header>
			</div>
		);
	}
}

export default Header;
