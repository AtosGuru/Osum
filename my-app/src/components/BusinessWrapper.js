import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';



export default class BusinessWrapper extends Component {
	render() {
		return (
			<div>
				<section className="business-wrapper">
					<div className="container">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
								<Fade bottom>
								<div className="business-heading aos-init aos-animate" dataaos="fade-up">
									<h2 className="heading">
										These are the basics you <span>need to follow to connect </span>
										<span>with more customers.</span>
									</h2>
									<label className="sub-heading">
										We understand that you have <span>great idea or business plan for</span>
										<span> your business but you can not</span>
										<span>execute due to lack of resources, </span>{' '}
										<span>design knowledge and</span>
										<span> presentation skills.</span>
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
											<span>Get Your Website/App/Product redesigned by experts.</span>
										</li>
										<li>
											<label>
												<img src="img/bullets.svg" className="img-fluid" alt="" title="" />
											</label>
											<span>Create your business story based on Storybrand Framework.</span>
										</li>
										<li>
											<label>
												<img src="img/bullets.svg" className="img-fluid" alt="" title="" />
											</label>
											<span>Extensive research on your business and competitors.</span>
										</li>
										<li>
											<label>
												<img src="img/bullets.svg" className="img-fluid" alt="" title="" />
											</label>
											<span>Step by Step Process based guidance &amp; project execution.</span>
										</li>
										<li>
											<label>
												<img src="img/bullets.svg" className="img-fluid" alt="" title="" />
											</label>
											<span>Latest technologies will be used for performance.</span>
										</li>
									</ul>
								</div>
								</Fade>
								<Fade bottom>
								<div className="lets-Talk aos-init aos-animate" dataaos="fade-up">
									<h3 className="heading">
										We understand &amp; <span>We can help!</span>
									</h3>
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
					</div>
				</section>
			</div>
		);
	}
}
