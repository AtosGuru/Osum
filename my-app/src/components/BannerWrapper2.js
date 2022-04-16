import React, { Component } from 'react';

export default class BannerWrapper2 extends Component {
	render() {
		return (
			<div>
				<section className="banner-wrapper banner-landing">
					<div className="landing-bg">
						<img
							src="img/header-bg.jpg"
							alt=""
							title=""
							className="imgDesk"
							data-xblocker="passed"
							style={{ visibility: 'visible' }}
						/>
						<img
							src="img/black-bg-mobile.jpg"
							alt=""
							title=""
							className="imgMobileImage"
							data-xblocker="passed"
							style={{ visibility: 'visible' }}
						/>
					</div>
					{/* Banner Area */}
					<div className="banner-area">
						{/* Container */}
						<div className="container">
							{/* Row */}
							<div className="row">
								{/* Col */}
								<div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
									<div className="banner-content">
										<h1 className="title title-landing">
											Give your app idea a
											<span>winning identity.</span>
										</h1>
										<h2 className="sub-title subtitle-landing">
											We design amazing user experiences <span>that win over your customers</span>
										</h2>
										<ul className="main-button">
											<li>
												<a href="app-designs/#quickContact" title="">
													<span>
														<img
															src="img/schedule_a_meeting_white.svg"
															className="img-fluid first-img"
															alt=""
															title=""
														/>
														<img
															src="img/schedule_a_meeting_icon.svg"
															className="img-fluid first-img-hover"
															alt=""
															title=""
															data-xblocker="passed"
															style={{ visibility: 'visible' }}
														/>
													</span>
													Schedule A Meeting
												</a>
											</li>
											<li>
												<a href="app-designs/#viewPlanSection" title="" className="normalText">
													View Plans
													<span>
														<img
															src="img/arrow-small-yellow.svg"
															className="img-fluid first-img"
															alt=""
															title=""
														/>
														<img
															src="img/arrow-small-white.svg"
															className="img-fluid first-img-hover"
															alt=""
															title=""
															data-xblocker="passed"
															style={{ visibility: 'visible' }}
														/>
													</span>
												</a>
											</li>
										</ul>
										<ul className="moreInfo landingInfo">
											<li>
												<label>
													<img
														src="img/free-consultaion.svg"
														className="img-fluid"
														alt=""
														title=""
													/>{' '}
												</label>
												<span>
													Free <br />Consultation
												</span>
											</li>
											<li>
												<label className="second">
													<img
														src="img/fixed-price.svg"
														className="img-fluid"
														alt=""
														title=""
													/>{' '}
												</label>
												<span>
													Fixed <br />Pricing
												</span>
											</li>
											<li>
												<label className="third">
													<img
														src="img/unlimited.svg"
														className="img-fluid"
														alt=""
														title=""
													/>{' '}
												</label>
												<span>
													Unlimited <br />Revisions
												</span>
											</li>
											<li>
												<label className="fourth">
													<img
														src="img/satisfaction.svg"
														className="img-fluid"
														alt=""
														title=""
													/>
												</label>
												<span>
													100% Satisfaction <br /> Guranteed
												</span>
											</li>
										</ul>
									</div>
								</div>
								{/* /Col */}
								{/* Col */}
								<div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 posStatic">
									<div className="landing-graphic-banner">
										<div id="landingSlider" className="owl-carousel owl-theme owl-loaded owl-drag">
											<div className="owl-stage-outer">
												<div
													className="owl-stage"
													style={{
														transform: 'translate3d(-2589px, 0px, 0px)',
														transition: 'all 0s ease 0s',
														width: '6041px'
													}}
												>
													<div className="owl-item cloned" style={{ width: '863px' }}>
														<div className="item">
															<img
																src="img/landing-header-2.png"
																className="img-fluid"
																alt=""
																title=""
																data-xblocker="passed"
																style={{ visibility: 'visible' }}
															/>
														</div>
													</div>
													<div className="owl-item cloned" style={{ width: '863px' }}>
														<div className="item">
															<img
																src="img/landing-header-3.png"
																className="img-fluid"
																alt=""
																title=""
																data-xblocker="passed"
																style={{ visibility: 'visible' }}
															/>
														</div>
													</div>
													<div
														className="owl-item animated owl-animated-out fadeOut"
														style={{ width: '863px', left: '863px' }}
													>
														<div className="item">
															<img
																src="img/landing-header-1.png"
																className="img-fluid"
																alt=""
																title=""
																data-xblocker="passed"
																style={{ visibility: 'visible' }}
															/>
														</div>
													</div>
													<div
														className="owl-item animated owl-animated-in fadeIn active"
														style={{ width: '863px' }}
													>
														<div className="item">
															<img
																src="img/landing-header-2.png"
																className="img-fluid"
																alt=""
																title=""
																data-xblocker="passed"
																style={{ visibility: 'visible' }}
															/>
														</div>
													</div>
													<div className="owl-item" style={{ width: '863px' }}>
														<div className="item">
															<img
																src="img/landing-header-3.png"
																className="img-fluid"
																alt=""
																title=""
																data-xblocker="passed"
																style={{ visibility: 'visible' }}
															/>
														</div>
													</div>
													<div className="owl-item cloned" style={{ width: '863px' }}>
														<div className="item">
															<img
																src="img/landing-header-1.png"
																className="img-fluid"
																alt=""
																title=""
																data-xblocker="passed"
																style={{ visibility: 'visible' }}
															/>
														</div>
													</div>
													<div className="owl-item cloned" style={{ width: '863px' }}>
														<div className="item">
															<img
																src="img/landing-header-2.png"
																className="img-fluid"
																alt=""
																title=""
																data-xblocker="passed"
																style={{ visibility: 'visible' }}
															/>
														</div>
													</div>
												</div>
											</div>
											<div className="owl-nav disabled">
												<button type="button" role="presentation" className="owl-prev">
													<span aria-label="Previous">‹</span>
												</button>
												<button type="button" role="presentation" className="owl-next">
													<span aria-label="Next">›</span>
												</button>
											</div>
											<div className="owl-dots disabled" />
										</div>
									</div>
								</div>
								{/* /Col */}
							</div>
							{/* /Row */}
						</div>
						{/* /Container */}
					</div>
					{/* /Banner Area */}
				</section>
			</div>
		);
	}
}
