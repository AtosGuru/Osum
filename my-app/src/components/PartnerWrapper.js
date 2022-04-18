import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
export default class PartnerWrapper extends Component {
	render() {
		return (
			<div>
				<section className="partner-wrapper digital-bg">
					<div className="container">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
								<Fade bottom>
								<div className="digital-heading aos-init aos-animate" dataaos="fade-up">
									<div className="small-logo">
										<img src="img/logo.png" className="img-fluid" alt="" title="" />
									</div>
									<h2 className="heading">
										A partner <span>for all your digital needs.</span>
									</h2>
									<label className="sub-heading">
										Born desire to make beautiful
										<span> and functional online presence</span>
										<span> for EVERYONE.</span>
									</label>
									<label className="sub-heading pad120">
										We love our jobs, we love our <span>customers, and we love providing</span>{' '}
										<span>absolutely outstanding</span> <span>customer service.</span>
									</label>
									<span className="line-angle">
										<img src="img/line-icon.png" className="img-fluid" alt="" title="" />
									</span>
								</div>
								</Fade>
								<div className="trusted-brands">
									<Fade bottom>
									<h2 className="heading aos-init aos-animate" dataaos="fade-up">
										Trusted by <span>many brands in the world</span>
									</h2>
									</Fade>
									<Fade bottom>
									<ul className="brand-list aos-init aos-animate" dataaos="fade-up">
										<li>
											<img
												src="img/social-success-new.jpg"
												className="img-fluid"
												alt=""
												title=""
											/>
										</li>
										<li>
											<img src="img/alucor.jpg" className="img-fluid" alt="" title="" />
										</li>
										<li>
											<img src="img/admin-barefoot.jpg" className="img-fluid" alt="" title="" />
										</li>
										<li>
											<img src="img/oolive.jpg" className="img-fluid" alt="" title="" />
										</li>
										<li>
											<img src="img/escale.jpg" className="img-fluid" alt="" title="" />
										</li>
										<li>
											<img src="img/saavi-new.jpg" className="img-fluid" alt="" title="" />
										</li>
										<li>
											<img src="img/comiida.jpg" className="img-fluid" alt="" title="" />
										</li>
										<li>
											<img src="img/heart-logo.jpg" className="img-fluid" alt="" title="" />
										</li>
									</ul>
									</Fade>
									<div className="project-sec">
										<Fade bottom>
										<h2 className="heading aos-init" dataaos="fade-up">
											Do you have <span>project in mind?</span>
										</h2>
										</Fade>
										<Fade bottom>
										<button
											className="btn btn-normal aos-init"
											dataaos="fade-up"
											
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
