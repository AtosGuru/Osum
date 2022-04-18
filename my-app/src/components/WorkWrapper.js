import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

export default class WorkWrapper extends Component {
	render() {
		return (
			<div>
				<section className="work-wrapper-container">
					<div className="container">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
								<div className="workHeader">
									<Fade bottom>
										<h2 className="heading aos-init aos-animate" dataaos="fade-up">
											Just look at what we can do.
											<span className="smallHead">We'll do the same for you.</span>
										</h2>
									</Fade>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
								<div className="workGallery-section">
									<div className="workGalleryTabs" id="tabsSlide">
										<Fade bottom>
											<ul
												className="nav nav-pills aos-init aos-animate"
												id="pills-tab"
												role="tablist"
												dataaos="fade-up"
											>
												<div className="slider" style={{ left: '0px', width: '148px' }} />
												<li className="nav-item">
													<Link
														className="nav-link active show"
														id="pills-home-tab"
														dataToggle="pill"
														to="/work"
														role="tab"
														ariaControls="pills-home"
														aria-selected="true"
													>
														All
													</Link>
												</li>
												<li className="nav-item">
													<Link
														className="nav-link"
														id="pills-profile-tab"
														dataToggle="pill"
														to="/work"
														role="tab"
														ariaControls="pills-profile"
														aria-selected="false"
													>
														Mobile
													</Link>
												</li>
												<li className="nav-item">
													<Link
														className="nav-link"
														id="pills-contact-tab"
														dataToggle="pill"
														to="/work"
														role="tab"
														ariaControls="pills-contact"
														aria-selected="false"
													>
														Web
													</Link>
												</li>
											</ul>
										</Fade>
										<div className="tab-content" id="pills-tabContent">
											{/* All */}
											
											{/* Mobile */}
											
											{/* Web */}
											
										</div>
									</div>
								</div>
								<Fade bottom>
									<div className="workBtnSection aos-init aos-animate" dataaos="fade-up">
										<Fade bottom>
											<div className="lets-Talk aos-init aos-animate" dataaos="fade-up">
												<h3 className="heading">
													Ready to start <span>growing your business?</span>
													<span> Let’s connect.</span>
												</h3>
											</div>
										</Fade>
										<Fade bottom>
											<ul className="btnSection aos-init aos-animate" dataaos="fade-up">
												<li>
													<a href="form" title="" className="btnBig">
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
													</a>
												</li>
												<li>
													<a href="javascript:void(0)" title="">
														<button
															className="btn btn-normal btnYellow"
															
														>
															<span>
																Let’s Talk
																<img
																	src="img/button_arrow.svg"
																	className="img-fluid first-img"
																	alt=""
																	title=""
																/>
																<img
																	src="img/button_arrow_hover.svg"
																	className="img-fluid first-img-hover"
																	alt=""
																	title=""
																	data-xblocker="passed"
																	style={{ visibility: 'visible' }}
																/>
															</span>
														</button>
													</a>
												</li>
											</ul>
										</Fade>
									</div>
								</Fade>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
