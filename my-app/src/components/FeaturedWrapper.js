import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class FeaturedWrapper extends Component {
	render() {
		return (
			<div>
				<section className="featured-wrapper">
					<div className="featured-case-studies">
						<div className="container">
							<div className="row">
								<div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
									<Fade bottom>
										<div className="feature-left-section aos-init" dataaos="fade-up">
											<h2 className="heading">
												Featured <span>case studies</span>
											</h2>
											<label className="sub-heading">
												Just look at what we can do. <span>We'll do the same for you.</span>
											</label>
											<div className="link static-link link-line a MT10 mobHide">
												<a href="work" title="" className="bottom_line">
													View All
													<span className="icon-right-arrow">
														<img
															src="img/arrow-small.svg"
															className="img-fluid"
															alt="Review"
															title=""
														/>
													</span>
												</a>
											</div>
										</div>
									</Fade>
								</div>
								<div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
									<Fade bottom>
										<ul
											className="featured-images parallax-inner c-example__tilt-inner aos-init"
											dataaos="fade-up"
										>
											<li>
												<span
													className="parallax [ c-example__tilt ] js-tilt"
													data-tilt-axis="x"
													data-tilt-glare="true"
													data-tilt-perspective="1000"
													data-tilt-scale="1"
													data-tilt-speed="400"
													data-tilt-max="10"
												>
													<img
														src="img/social-success.jpg"
														className="img-fluid"
														alt="Review"
														title=""
														data-xblocker="passed"
														style={{ visibility: 'visible' }}
													/>
													<div
														className="js-tilt-glare"
														style={{
															position: 'absolute',
															top: '0px',
															left: '0px',
															width: '100%',
															height: '100%',
															overflow: 'hidden',
															pointerEvents: 'none'
														}}
													>
														<div
															className="js-tilt-glare-inner"
															style={{
																position: 'absolute',
																top: '50%',
																left: '50%',
																backgroundImage:
																	'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%)',
																width: '640px',
																height: '640px',
																transform: 'rotate(180deg) translate(-50%, -50%)',
																transformOrigin: '0% 0%',
																opacity: '0'
															}}
														/>
													</div>
												</span>
												<a href="work/detail/social-success-app">
													<h3>Social Success App</h3>
												</a>
											</li>
											<li>
												<span
													className="parallax [ c-example__tilt ] js-tilt"
													data-tilt-axis="x"
													data-tilt-glare="true"
													data-tilt-perspective="1000"
													data-tilt-scale="1"
													data-tilt-speed="400"
													data-tilt-max="10"
												>
													<img
														src="img/saavi-big.jpg"
														className="img-fluid"
														alt="Review"
														title=""
														data-xblocker="passed"
														style={{ visibility: 'visible' }}
													/>
													<div
														className="js-tilt-glare"
														style={{
															position: 'absolute',
															top: '0px',
															left: '0px',
															width: '100%',
															height: '100%',
															overflow: 'hidden',
															pointerEvents: 'none'
														}}
													>
														<div
															className="js-tilt-glare-inner"
															style={{
																position: 'absolute',
																top: '50%',
																left: '50%',
																backgroundImage:
																	'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%)',
																width: '640px',
																height: '640px',
																transform: 'rotate(180deg) translate(-50%, -50%)',
																transformOrigin: '0% 0%',
																opacity: '0'
															}}
														/>
													</div>
												</span>
												<a href="work/detail/saavi-b2b">
													<h3>Saavi B2B</h3>
												</a>
											</li>
										</ul>
									</Fade>
								</div>
							</div>
							<div className="row">
								<div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 parallax-inner c-example__tilt-inner">
									<Fade bottom>
										<div className="social-images aos-init" dataaos="fade-up">
											<span
												className="parallax [ c-example__tilt ] js-tilt"
												data-tilt-axis="x"
												data-tilt-glare="true"
												data-tilt-perspective="1000"
												data-tilt-scale="1"
												data-tilt-speed="400"
												data-tilt-max="10"
											>
												<img
													src="img/comiida-big-1.jpg"
													className="img-fluid imgDesktop"
													alt="Review"
													title=""
													data-xblocker="passed"
													style={{ visibility: 'visible' }}
												/>
												<img
													src="img/comiida-big-mobile.jpg"
													className="img-fluid imgMobile"
													alt="Review"
													title=""
													data-xblocker="passed"
													style={{ visibility: 'visible' }}
												/>
												<div
													className="js-tilt-glare"
													style={{
														position: 'absolute',
														top: '0px',
														left: '0px',
														width: '100%',
														height: '100%',
														overflow: 'hidden',
														pointerEvents: 'none'
													}}
												>
													<div
														className="js-tilt-glare-inner"
														style={{
															position: 'absolute',
															top: '50%',
															left: '50%',
															backgroundImage:
																'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%)',
															width: '1164px',
															height: '1164px',
															transform: 'rotate(180deg) translate(-50%, -50%)',
															transformOrigin: '0% 0%',
															opacity: '0'
														}}
													/>
												</div>
											</span>
											<a href="work/detail/comiida-app">
												<h3>Comiida App</h3>
											</a>
										</div>
									</Fade>
								</div>
								<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
									<Fade bottom>
										<div className="social-Talk mobHide aos-init" dataaos="fade-up">
											<h2>
												Like what you see?<br />
												Let’s create one for you.
											</h2>
											<button className="btn btn-normal" >
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
										</div>
									</Fade>
								</div>
							</div>
							<div className="row">
								<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
									<Fade bottom>
										<div className="featured-work aos-init" dataaos="fade-up">
											<h2>
												Our Work has been<span> featured On:</span>
											</h2>
											<ul className="featured-work-list">
												<li>
													<img
														src="img/people-per-hour.jpg"
														className="img-fluid"
														alt=""
														title=""
													/>
												</li>
												<li>
													<img src="img/envato.jpg" className="img-fluid" alt="" title="" />
												</li>
												<li>
													<img src="img/awards.jpg" className="img-fluid" alt="" title="" />
												</li>
											</ul>
											<span className="line-angle MT130">
												<img src="img/line-icon.png" className="img-fluid" alt="" title="" />
											</span>
										</div>
									</Fade>
								</div>
							</div>
							<div className="row pad18">
								<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
									<Fade bottom>
										<div className="our-plan-section aos-init" dataaos="fade-up">
											<h2 className="heading">Our plan of attack</h2>
											<label className="sub-heading Pad30">
												A proven StoryBrand 7<span> framework to build your digital</span>
												<span> presence - the right way.</span>
											</label>
										</div>
									</Fade>
								</div>

								<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
									<div className="plan-steps-section">
										<Fade bottom>
											<div className="step-journey aos-init" dataaos="fade-up">
												<label>
													<img src="img/digital-journet.svg" alt="ff" />
												</label>
												<span>Your digital journey starts here.</span>
												<div className="line-angle line-angle-small">
													<img
														src="img/line-icon.png"
														className="img-fluid"
														alt=""
														title=""
													/>
												</div>
											</div>
										</Fade>
										<div className="step-detail">
											<Fade bottom>
												<div className="step-de-line aos-init" dataaos="fade-up">
													<span className="step-num">1</span>
													<h2>Discover</h2>
													<p>
														The very first step is to fill out the discovery form. Based on
														your answers, we will analyse your project scope &amp; discuss
														requirements, budget, timelines, terms of the project.
													</p>
													<label className="btnSet">
														<a href="form" title="">
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
													</label>
												</div>
											</Fade>
										</div>
									</div>
								</div>
								<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
									<div className="plan-steps-section">
										<Fade bottom>
											<div className="step-detail aos-init" dataaos="fade-up">
												<div className="step-de-line stepRight">
													<span className="step-num">2</span>
													<h2>Design</h2>
													<p>
														Research &amp; Design will start here. We will do extensive
														research and based on that, we will create rough wireframes.
														After apprpoval on wireframe concepts, we will start the real
														designs and make them ready for Desktop &amp; mobile sizes,
														according to the needs.
													</p>
												</div>
											</div>
										</Fade>

										<Fade bottom>
											<div className="step-detail aos-init" dataaos="fade-up">
												<div className="step-de-line stepThird">
													<span className="step-num">3</span>
													<h2>Debut</h2>
													<p>
														Present your new you to the world and start converting visitors
														into customers.
													</p>
												</div>
											</div>
										</Fade>
									</div>
								</div>
								<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
									<Fade bottom>
										<div className="customer-support aos-init" dataaos="fade-up">
											<label>
												<img
													src="img/smili-and-warning.svg"
													className="img-fluid"
													alt=""
													title=""
													data-xblocker="passed"
													style={{ visibility: 'visible' }}
												/>
											</label>
											<div className="secRight">
												<h3>
													If you not take care<span> of your customers</span>
													<span> then somebody else</span>
													<span> will do.</span>
												</h3>
												<p>
													Your first impression is your last impression. <br />
													<strong>You know it's true.</strong>{' '}
												</p>
											</div>
										</div>
									</Fade>
									<Fade bottom>
										<div className="customer-support-talk aos-init" dataaos="fade-up">
											<h3 className="headingNew colFirst">
												So let us build you<span> an identity your customers</span>
												<span> will take notice of.</span>
											</h3>
											<div className="lets-Talk aos-init" dataaos="fade-up">
												<button className="btn btn-normal MT55" >
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
												<div className="line-angle">
													<img
														src="img/line-icon.png"
														className="img-fluid"
														alt=""
														title=""
													/>
												</div>
											</div>
										</div>
									</Fade>
									<div className="customer-benefits">
										<Fade bottom>
											<h3 className="heading aos-init" dataaos="fade-up">
												You can get many more<span> visitors converted into</span>
												<span> customers.</span>
											</h3>
										</Fade>
										<Fade bottom>
											<div className="benefits-list aos-init" dataaos="fade-up">
												<h3 className="heading colSecond">Benefits</h3>
												<ul className="benefits-sec">
													<li>
														<label>
															<img
																src="img/green-tick.svg"
																className="img-fluid"
																alt=""
																title=""
															/>
														</label>
														<span>Stand high in the online competitive world.</span>
													</li>
													<li>
														<label>
															<img
																src="img/green-tick.svg"
																className="img-fluid"
																alt=""
																title=""
															/>
														</label>
														<span>Specifically made for target audience to attract.</span>
													</li>
													<li>
														<label>
															<img
																src="img/green-tick.svg"
																className="img-fluid"
																alt=""
																title=""
															/>
														</label>
														<span>
															Connect better with customers, and watch an increase in
															sales.
														</span>
													</li>
													<li>
														<label>
															<img
																src="img/green-tick.svg"
																className="img-fluid"
																alt=""
																title=""
															/>
														</label>
														<span>Build trust and get more loyal customers.</span>
													</li>
												</ul>
											</div>
										</Fade>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
