import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class FeaturedWrapper2 extends Component {
	render() {
		return (
			<div>
				<section className="featured-wrapper">
					<div className="featured-case-studies">
						<div className="container">
							<div className="row">
								<div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
									<Fade bottom>
										<div className="feature-left-section aos-init" dataAos="fade-up">
											<h2 className="heading">
												Featured <span>case studies</span>
											</h2>
											<label className="sub-heading">
												Well-designed apps help your<span> customers engage with you on a</span>
												<span> whole other level.</span>
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
											dataAos="fade-up"
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
										<div className="social-images aos-init" dataAos="fade-up">
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
										<div className="social-Talk mobHide aos-init" dataAos="fade-up">
											<h2>
												Like what you see?<br />
												Let’s create one for you.
											</h2>
											<button className="btn btn-normal" onClick="openChat();">
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
										<div className="featured-work aos-init" dataAos="fade-up">
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
										<div className="our-plan-section aos-init" dataAos="fade-up">
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
											<div className="step-journey aos-init" dataAos="fade-up">
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
												<div className="step-de-line aos-init" dataAos="fade-up">
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
											<div className="step-detail aos-init" dataAos="fade-up">
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
											<div className="step-detail aos-init" dataAos="fade-up">
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
										<div className="customer-support aos-init" dataAos="fade-up">
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
										<div className="customer-support-talk aos-init" dataAos="fade-up">
											<h3 className="headingNew colFirst">
												So let us build you<span> an identity your customers</span>
												<span> will take notice of.</span>
											</h3>
											<div className="lets-Talk aos-init" dataAos="fade-up">
												<button className="btn btn-normal MT55" onClick="openChat();">
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
									<div className="customer-benefits landing-benefits">
										<Fade bottom>
											<h3 className="heading aos-init" dataAos="fade-up">
												How many more users will be on your app if your app<span> is easy to use yet elegant in look.</span>
											</h3>
										</Fade>
										<Fade bottom>
											<div className="benefits-list aos-init" dataAos="fade-up">
												<h3 className="heading colSecond">Success looks like</h3>
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
															Fully customized app design based on your brand language.
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
														<span>
															Connect better with customers, and results in more sales.
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
													<li>
														<label>
															<img
																src="img/green-tick.svg"
																className="img-fluid"
																alt=""
																title=""
															/>
														</label>
														<span>Stand out from the competition.</span>
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
														<span>Easy to use interface and navigate.</span>
													</li>
												</ul>
												<div className="offerBanner aos-init" dataAos="fade-up">
													<div className="bannerButton">
														<img
															src="img/offer-banner.png"
															className="img-fluid"
															alt=""
															title=""
															data-xblocker="passed"
															style={{ visibility: 'visible' }}
														/>
														<div className="btnSection">
															<a href="form?tab=1" title="" className="btnBig">
																<span>
																	<img
																		src="img/discovery_btn_icon-h.svg"
																		className="img-fluid first-img"
																		alt=""
																		title=""
																	/>
																	<img
																		src="img/discovery_btn_icon.svg"
																		className="img-fluid first-img-hover"
																		alt=""
																		title=""
																		data-xblocker="passed"
																		style={{ visibility: 'visible' }}
																	/>
																</span>
																Discovery Form
															</a>
														</div>
													</div>
												</div>
												<div
													className="offerBanner-mobile aos-init aos-animate"
													dataAos="fade-up"
												>
													<div className="bannerButton">
														<img
															src="img/offer-banner-mobile.png"
															className="img-fluid"
															alt=""
															title=""
															data-xblocker="passed"
															style={{ visibility: 'visible' }}
														/>
														<div className="btnSection">
															<a href="form?tab=1" title="" className="btnBig">
																<span>
																	<img
																		src="img/discovery_btn_icon-h.svg"
																		className="img-fluid first-img"
																		alt=""
																		title=""
																		data-xblocker="passed"
																		style={{ visibility: 'visible' }}
																	/>
																	<img
																		src="img/discovery_btn_icon.svg"
																		className="img-fluid first-img-hover"
																		alt=""
																		title=""
																		data-xblocker="passed"
																		style={{ visibility: 'visible' }}
																	/>
																</span>
																Discovery Form
															</a>
														</div>
													</div>
												</div>
											</div>
										</Fade>
									</div>
								</div>
							</div>
							<div className="row" id="viewPlanSection">
								<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
									<div className="plan-structure-container">
										<Fade bottom>
											<div className="plan-heading aos-init" dataAos="fade-up">
												<h2 className="heading">Plans</h2>
												<label className="sub-heading mobileHide">
													Well thought-out plans designed to meet your needs at all levels.<span> So what fits you best right now?</span>
												</label>
												<label className="sub-heading desktopHide">
													Well thought-out plans designed to meet your needs at all levels. So
													what fits you best right now?
												</label>
												<div className="link static-link link-line a">
													<a href="javascript:void(0);" title="" className="bottom_line">
														*** Design Only ***
													</a>
												</div>
											</div>
										</Fade>
										<div className="planFull-section">
											<Fade bottom>
												<div className="plan-columns aos-init" dataAos="fade-up">
													<div className="planTop-Sec">
														<h3>Simple App</h3>
														<h2>$1999</h2>
														<p>
															Per app design <span>Split in 2 payments</span>
														</p>
														<a href="app-designs/#quickContact">
															<button className="btn btn-normal" type="" value="">
																Schedule A Meeting
															</button>
														</a>
													</div>
													<div className="price-table">
														<h3>
															Best for simple &amp;<span> straight forward apps.</span>
														</h3>
														<ul className="priceList">
															<li>
																<label>
																	<img
																		src="img/green-tick.svg"
																		className="img-fluid"
																		alt=""
																		title=""
																	/>
																</label>
																<span>Blueprints</span>
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
																<span>User Flow</span>
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
																<span>Upto 30 Screens</span>
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
																<span>1 Month Timeline</span>
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
																<span>Free Assets</span>
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
																<span>Standard Support</span>
															</li>
														</ul>
													</div>
												</div>
											</Fade>
											<Fade bottom>
												<div className="plan-columns current aos-init" dataAos="fade-up">
													<div className="planTop-Sec">
														<h3>Pro App</h3>
														<h2>$2999</h2>
														<p>
															Per app design <span>Split in 3 payments</span>
														</p>
														<button
															className="btn btn-normal btnYellow"
															type=""
															value=""
															onClick="openChat();"
														>
															Let’s Discuss Now
														</button>
													</div>
													<div className="price-table">
														<h3>
															Best for complex app where<span> mutiple flows are interacting</span>{' '}
															<span>with each other.</span>
														</h3>
														<ul className="priceList MT18">
															<li>
																<label>
																	<img
																		src="img/green-tick.svg"
																		className="img-fluid"
																		alt=""
																		title=""
																	/>
																</label>
																<span className="">Blueprints</span>
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
																<span className="">User Flow</span>
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
																<span className="boldFmt">Upto 50 Screens</span>
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
																<span className="boldFmt">1.5 Month Timeline</span>
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
																<span className="boldFmt">Premium Assets</span>
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
																<span className="boldFmt">Priority Support</span>
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
																<span className="boldFmt">Real-Time Collaboration</span>
															</li>
														</ul>
													</div>
												</div>
											</Fade>
											<div className="plan-columns MR0">
												<Fade bottom>
													<div className="planTop-Sec aos-init" dataAos="fade-up">
														<h3>Custom</h3>
														<h2>$50</h2>
														<p className="MB16">
															Per Hour<span>Billing based on Hrs and</span>Quotations
														</p>
														<button
															className="btn btn-normal"
															type=""
															value=""
															onClick="location.href=&#39;form?tab=1&#39;;"
														>
															Discovery Form
														</button>
													</div>
												</Fade>
												<div className="price-table">
													<h3>
														No strings attached.<span> Pay as you go at per hour</span> rate
														based on assigned tasks.
													</h3>
													<span className="divider-sec">OR</span>
													<h3>
														Fixed prices based on Project<span> evaluation &amp; Quotations.</span>
													</h3>
												</div>
											</div>
										</div>
										{/*<!-- Plan Block Only Mobile Show-->*/}
										<Fade bottom>
											<div
												className="planFull-section-mobile aos-init aos-animate"
												dataAos="fade-up"
											>
												<a
													href="javascript:void(0);"
													onClick="navSwipe()"
													className="swipe-tab"
												>
													Swipe<img src="img/arrow.svg" className="img-fluid" title="" />
												</a>
												<ul className="nav nav-pills" id="pills-tab" role="tablist">
													<li className="nav-item">
														<a
															className="nav-link active"
															id="pills-home-tab"
															data-toggle="pill"
															href="app-designs/#simpleApp"
															role="tab"
															aria-controls="pills-home"
															aria-selected="true"
														>
															Simple
														</a>
													</li>
													<li className="nav-item">
														<a
															className="nav-link"
															id="pills-profile-tab"
															data-toggle="pill"
															href="app-designs/#proApp"
															role="tab"
															aria-controls="pills-profile"
															aria-selected="false"
														>
															Pro
														</a>
													</li>
													<li className="nav-item">
														<a
															className="nav-link"
															id="pills-contact-tab"
															data-toggle="pill"
															href="app-designs/#custumApp"
															role="tab"
															aria-controls="pills-contact"
															aria-selected="false"
														>
															Custom
														</a>
													</li>
												</ul>
												<div className="tab-content">
													<div
														className="tab-pane fade show active"
														id="simpleApp"
														role="tabpanel"
														aria-labelledby="pills-home-tab"
													>
														<div
															className="plan-columns aos-init aos-animate"
															dataAos="fade-up"
														>
															<div className="planTop-Sec">
																<h3>Simple App</h3>
																<h2>$1999</h2>
																<p>
																	Per app design <span>Split in 2 payments</span>
																</p>
																<a href="app-designs/#quickContact">
																	<button className="btn btn-normal" type="" value="">
																		Schedule A Meeting
																	</button>
																</a>
															</div>
															<div className="price-table">
																<h3>
																	Best for simple &amp;<span> straight forward apps.</span>
																</h3>
																<ul className="priceList">
																	<li>
																		<label>
																			<img
																				src="img/green-tick.svg"
																				className="img-fluid"
																				alt=""
																				title=""
																			/>
																		</label>
																		<span>Blueprints</span>
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
																		<span>User Flow</span>
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
																		<span>Upto 30 Screens</span>
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
																		<span>1 Month Timeline</span>
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
																		<span>Free Assets</span>
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
																		<span>Standard Support</span>
																	</li>
																</ul>
															</div>
														</div>
													</div>
													<div
														className="tab-pane fade show"
														id="proApp"
														role="tabpanel"
														aria-labelledby="pills-home-tab"
													>
														<div
															className="plan-columns current aos-init aos-animate"
															dataAos="fade-up"
														>
															<div className="planTop-Sec">
																<h3>Pro App</h3>
																<h2>$2999</h2>
																<p>
																	Per app design <span>Split in 3 payments</span>
																</p>
																<button
																	className="btn btn-normal btnYellow"
																	type=""
																	value=""
																	onClick="openChat();"
																>
																	Let’s Discuss Now
																</button>
															</div>
															<div className="price-table">
																<h3>
																	Best for complex app where<span> mutiple flows are interacting</span>{' '}
																	<span>with each other.</span>
																</h3>
																<ul className="priceList MT18">
																	<li>
																		<label>
																			<img
																				src="img/green-tick.svg"
																				className="img-fluid"
																				alt=""
																				title=""
																			/>
																		</label>
																		<span className="">Blueprints</span>
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
																		<span className="">User Flow</span>
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
																		<span className="boldFmt">Upto 50 Screens</span>
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
																		<span className="boldFmt">
																			1.5 Month Timeline
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
																		<span className="boldFmt">Premium Assets</span>
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
																		<span className="boldFmt">
																			Priority Support
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
																		<span className="boldFmt">
																			Real-Time Collaboration
																		</span>
																	</li>
																</ul>
															</div>
														</div>
													</div>
													<div
														className="tab-pane fade show"
														id="custumApp"
														role="tabpanel"
														aria-labelledby="pills-home-tab"
													>
														<div className="plan-columns MR0">
															<div
																className="planTop-Sec aos-init aos-animate"
																dataAos="fade-up"
															>
																<h3>Custom</h3>
																<h2>$50</h2>
																<p className="MB16">
																	Per Hour<span>Billing based on Hrs and</span>Quotations
																</p>
																<button
																	className="btn btn-normal"
																	type=""
																	value=""
																	onClick="location.href=&#39;form?tab=1&#39;;"
																>
																	Discovery Form
																</button>
															</div>
															<div className="price-table">
																<h3>
																	No strings attached.<span> Pay as you go at per hour</span>{' '}
																	rate based on assigned tasks.
																</h3>
																<span className="divider-sec">OR</span>
																<h3>
																	Fixed prices based on Project<span> evaluation &amp; Quotations.</span>
																</h3>
															</div>
														</div>
													</div>
												</div>
											</div>
										</Fade>

										<Fade bottom>
											<div className="landing-BtnSection aos-init aos-animate" dataAos="fade-up">
												<div className="lets-Talk aos-init aos-animate" dataAos="fade-up">
													<h3 className="heading">
														Not sure what you need?{' '}
														<span>That's okay! Let’s conduct a FREE review today!</span>
													</h3>
												</div>
												<ul className="btnSection aos-init aos-animate" dataAos="fade-up">
													<li>
														<a href="form?tab=1" title="" className="btnBig">
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
																onClick="openChat();"
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
