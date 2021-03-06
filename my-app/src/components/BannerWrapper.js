import React, { Component } from 'react';

export default class BannerWrapper extends Component {
	constructor() {
		super();
		this.state = {
			curIndex: '',
			curTxt: 'Online Brand',
			interStopped: false
		};
		this.state.curInterval = setInterval(() => {
			const cur = (this.state.curIndex + 1) % 3;
			var txt = [ 'Online Brand', 'Mobile App', 'Online Shop', 'Application' ];
			this.setState({
				curTxt: txt[cur],
				curIndex: cur
			});
		}, 5000);
	}

	render() {
		return (
			<div>
				<section className="banner-wrapper">
					<div className="bg-color1 fadeEffect">
						<img
							src="img/purple.png"
							alt=""
							title=""
							data-xblocker="passed"
							style={{ visibility: 'visible' }}
						/>{' '}
					</div>
					<div className="bg-color2 fadeEffect">
						<img
							src="img/yellow.png"
							alt=""
							title=""
							data-xblocker="passed"
							style={{ visibility: 'visible' }}
						/>{' '}
					</div>
					<div className="bg-color3 fadeEffect intro-bg-img">
						<img
							src="img/pink.png"
							alt=""
							title=""
							data-xblocker="passed"
							style={{ visibility: 'visible' }}
						/>{' '}
					</div>
					<div className="bg-banner">
						<img
							src="img/banner-bg.png"
							className="img-fluid"
							alt=""
							title=""
							data-xblocker="passed"
							style={{ visibility: 'visible' }}
						/>{' '}
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
										<h1 className="title">Build the</h1>
										<h1 className="title slidertitle static-line">
											<div className="custom1">
												<div className="">
													<div className="">
														<div className="move-line" style={{ width: '823px' }}>
															<div className="item ">
																<span className="bottom_line-second">
																	{this.state.curTxt}
																</span>
															</div>
														</div>
													</div>
												</div>
											</div>
										</h1>
										<h1 className="title mobMar">you deserve</h1>
										<h2 className="sub-title">
											Our digital solutions can help you <span>to engage more customers.</span>
										</h2>
										<ul className="main-button">
											<li>
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
											</li>
											<li>
												<a href="javascript:void(0);" title="" className="normalText">
													Watch Reviews
													<span>
														<img
															src="img/play.svg"
															className="img-fluid first-img"
															alt=""
															title=""
														/>
														<img
															src="img/play_purple.svg"
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
										<ul className="moreInfo">
											<li>
												<label>
													<img
														src="img/rem-icon.svg"
														className="img-fluid"
														alt=""
														title=""
													/>{' '}
												</label>
												<span>
													Design to
													<br /> Remember
												</span>
											</li>
											<li>
												<label className="second">
													<img
														src="img/dev-platform.svg"
														className="img-fluid"
														alt=""
														title=""
													/>{' '}
												</label>
												<span>
													Develop to <br /> Perform
												</span>
											</li>
											<li>
												<label className="third">
													<img
														src="img/engage-icon.svg"
														className="img-fluid"
														alt=""
														title=""
													/>{' '}
												</label>
												<span>
													Advertise to <br /> Engage
												</span>
											</li>
											<li>
												<label className="fourth">
													<img
														src="img/shield.svg"
														className="img-fluid"
														alt=""
														title=""
													/>{' '}
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
								<div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
									{/* Banner Graphics */}
									<div className="banner-graphics">
										{/* Header Graphic  */}
										<div className="header-graphic">
											{/* Graphic One */}
											<div className="graphic-one">
												<img
													src="img/dollar_icon.svg"
													className="img-fluid"
													alt="Header Graphic"
													title=""
												/>
											</div>
											{/* /Graphic One */}
										</div>
										{/* /Header Graphic  */}
										{/* Header Graphic  */}
										<div className="header-graphic">
											{/* Graphic Two */}
											<div className="graphic-two">
												<img
													src="img/increase_revenue.svg"
													className="img-fluid"
													alt="Header Graphic"
													title=""
												/>
												<h2>Increase Revenue</h2>
											</div>
											{/* /Graphic Two */}
										</div>
										{/* /Header Graphic  */}
										{/* Header Graphic  */}
										<div className="header-graphic">
											{/* Graphic Three */}
											<div className="graphic-three">
												<img
													src="img/engage_audience_icon.svg"
													className="img-fluid"
													alt="Header Graphic"
													title=""
												/>
												<h2>
													Engage <br /> Audience
												</h2>
											</div>
											{/* /Graphic Three */}
										</div>
										{/* /Header Graphic  */}
										{/* Header Graphic  */}
										<div className="header-graphic">
											{/* Graphic Five */}
											<div className="graphic-five">
												<img
													src="img/build-trust.svg"
													className="img-fluid"
													alt="Header Graphic"
													title=""
												/>
												<h2>Build Trust</h2>
											</div>
											{/* /Graphic Five */}
										</div>
										{/* /Header Graphic  */}
										{/* Header Graphic  */}
										{/* <div className="header-graphic"> */}
										{/* Graphic Six */}
										{/* <div className="graphic-six">
                                    <img src="" className="img-fluid" alt="Header Graphic" title=""/>
                                </div> */}
										{/* /Graphic Six */}
										{/* </div> */}
										{/* /Header Graphic  */}
										{/* Header Graphic  */}
										<div className="header-graphic">
											{/* Graphic Seven */}
											<div className="graphic-seven">
												<img
													src="img/header-6.svg"
													className="img-fluid"
													alt="Header Graphic"
													title=""
												/>
												<span>
													<i className="ripple" />
												</span>
											</div>
											{/* /Graphic Seven */}
										</div>
										{/* /Header Graphic  */}
										{/* Header Big Banner  */}
										<div className="header-graphic">
											{/* Graphic Seven */}
											<div className="graphic-Big">
												<img
													src="img/big-banner.png"
													className="img-fluid"
													alt=""
													title=""
													id="phone_img"
													data-xblocker="passed"
													style={{ visibility: 'visible' }}
												/>
											</div>
										</div>
										{/* /Graphic Seven */}
									</div>
									{/* /Header Graphic  */}
								</div>
								{/* /Banner Graphics */}
							</div>
							{/* /Col */}
						</div>
						{/* /Row */}
					</div>
					{/* /Container */}

					{/* /Banner Area */}
				</section>
			</div>
		);
	}
}
