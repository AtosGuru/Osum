import React, { Component } from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class BannerWrapper2 extends Component {
	constructor() {
		super();
		this.state = {
			curIndex: '',
			curImg: 'img/landing-header-1.png',
			interStopped: false
		};
		this.state.curInterval = setInterval(() => {
			if (this.state.interStopped == false) {
				const cur = (this.state.curIndex + 1) % 3;
				var img = [ 'img/landing-header-1.png', 'img/landing-header-2.png', 'img/landing-header-3.png' ];
				this.setState({
					curImg: img[cur],
					curIndex: cur
				});
			}
		}, 3000);
	}

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
											<p>
												<span>winning identity.</span>
											</p>
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
										<div id="landingSlider" className="">
											<div className="">
												<div className="">
													<div className="" style={{ width: '863px', left: '863px' }}>
														<div
															className="item"
															onMouseEnter={() => {
																this.setState({ interStopped: true });
															}}
															onMouseLeave={() => {
																this.setState({ interStopped: false });
															}}
														>
															<img
																className="fadeEffect"
																src={this.state.curImg}
																alt=""
																title=""
																style={{
																	transition: 'opacity 1.5s',
																	opacity: '1'
																}}
															/>
														</div>
													</div>
												</div>
											</div>
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
