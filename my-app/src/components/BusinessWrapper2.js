import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class BusinessWrapper2 extends Component {
	render() {
		return (
			<div>
				<section className="business-wrapper landing-business">
					<div className="container">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
								<Fade bottom>
									<div className="business-heading aos-init aos-animate" dataaos="fade-up">
										<h2 className="heading mobileHide">
											You need a first impression that gets results.<span>That's exactly what we'll help you do.</span>
										</h2>
										<h2 className="heading desktopHide">
											You need a first impression that gets results. That's exactly what we'll
											help you do.
										</h2>
										<label className="sub-heading mobileHide">
											More and more apps are flooding the market every day.<span>If yours fails to attract users the first time around, it is unlikely</span>{' '}
											<span>you will get a second chance to impress.</span>
										</label>
										<label className="sub-heading desktopHide">
											More and more apps are flooding the market every day. If yours fails to
											attract users the first time around, it is unlikely you will get a second
											chance to impress.
										</label>
									</div>
								</Fade>
								<Fade bottom>
									<div className="business-info aos-init aos-animate" dataaos="fade-up">
										<ul className="listing-sec">
											<li>
												<label>
													<img src="img/bullets.svg" className="img-fluid" alt="" title="" />
												</label>
												<span>Get your app user experience redesigned by experts.</span>
											</li>
											<li>
												<label>
													<img src="img/bullets.svg" className="img-fluid" alt="" title="" />
												</label>
												<span>Designs are striking enough to make users download it.</span>
											</li>
											<li>
												<label>
													<img src="img/bullets.svg" className="img-fluid" alt="" title="" />
												</label>
												<span>Extensive research on your app and competitors.</span>
											</li>
											<li>
												<label>
													<img src="img/bullets.svg" className="img-fluid" alt="" title="" />
												</label>
												<span>
													Step by Step Process based guidance &amp; project execution.
												</span>
											</li>
											<li>
												<label>
													<img src="img/bullets.svg" className="img-fluid" alt="" title="" />
												</label>
												<span>Upside down strategy to make your app stands out.</span>
											</li>
										</ul>
									</div>
								</Fade>
								<div className="lets-Talk">
									<Fade bottom>
										<h3 className="heading aos-init aos-animate" dataaos="fade-up">
											We understand &amp; <span>We can help!</span>
										</h3>
									</Fade>
									<Fade bottom>
										<div className="multiple-btn aos-init aos-animate" dataaos="fade-up">
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
											<div className="link static-link link-line a">
												<a href="work?mob-tab=1" title="" className="bottom_line">
													See Work
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
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
