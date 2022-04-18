import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class GrowingBusinessWrapper extends Component {
	render() {
		return (
			<div>
				<section className="growing-business-wrapper growBg" id="quickContact">
					<div className="growing-Section">
						<div className="container">
							<div className="row">
								<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
									<Fade bottom>
										<h2 className="heading aos-init" dataaos="fade-up">
											Ready to start<span> growning your business?</span>
											<span> Let’s connect.</span>
										</h2>
									</Fade>
								</div>
							</div>
							<div className="row flex-column-reverse flex-md-row pad120">
								<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
									<div className="connect-section">
										<div className="connect-steps">
											<div className="step-detail">
												<Fade bottom>
													<div className="step-de-line aos-init" dataaos="fade-up">
														<span className="step-num">1</span>
														<h2>Schedule a meeting</h2>
														<p>
															Fill up the Discovery Form and<span> find out how we can help you to</span>
															<span> attract more customers.</span>
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
											<div className="step-detail MT70">
												<Fade bottom>
													<div className="step-de-line stepRight aos-init" dataaos="fade-up">
														<span className="step-num">2</span>
														<h2>Discuss on call</h2>
														<p>
															In this call we will find that we are{' '}
															<span>best fit for each other or not &amp;</span>
															<span> cover the following:</span>
														</p>
													</div>
												</Fade>

												<Fade bottom>
													<ul className="discussCall-sec aos-init" dataaos="fade-up">
														<li>
															<label>
																<img
																	src="img/bullets.svg"
																	className="img-fluid"
																	alt=""
																	title=""
																/>
															</label>
															<span>Talk about the problem you’re experiencing.</span>
														</li>
														<li>
															<label>
																<img
																	src="img/bullets.svg"
																	className="img-fluid"
																	alt=""
																	title=""
																/>
															</label>
															<span>Build strategy to overcome them.</span>
														</li>
														<li>
															<label>
																<img
																	src="img/bullets.svg"
																	className="img-fluid"
																	alt=""
																	title=""
																/>
															</label>
															<span>Show you more examples of our work.</span>
														</li>
														<li>
															<label>
																<img
																	src="img/bullets.svg"
																	className="img-fluid"
																	alt=""
																	title=""
																/>
															</label>
															<span>Tell you about our pricing.</span>
														</li>
														<li>
															<label>
																<img
																	src="img/bullets.svg"
																	className="img-fluid"
																	alt=""
																	title=""
																/>
															</label>
															<span>Answer any other question you have!</span>
														</li>
													</ul>
												</Fade>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
									<Fade bottom>
										<div className="quickConnect aos-init" dataaos="fade-up">
											<h2 className="headingNew ">Quick contact</h2>
											<label>
												Fill up the details below &amp; We will get in touch with you as soon as
												possible.
											</label>
											<ul className="quickConnect-form">
												<div
													role="form"
													className="wpcf7"
													id="wpcf7-f314-o1"
													lang="en-US"
													dir="ltr"
												>
													<div className="screen-reader-response">
														<p role="status" aria-live="polite" aria-atomic="true" /> <ul />
													</div>
													<form
														action="#wpcf7-f314-o1"
														method="post"
														className="wpcf7-form init"
														noValidate="noValidate"
														data-status="init"
													>
														<div style={{ display: 'none' }}>
															<input type="hidden" name="_wpcf7" value="314" />
															<input type="hidden" name="_wpcf7_version" value="5.4.1" />
															<input type="hidden" name="_wpcf7_locale" value="en_US" />
															<input
																type="hidden"
																name="_wpcf7_unit_tag"
																value="wpcf7-f314-o1"
															/>
															<input
																type="hidden"
																name="_wpcf7_container_post"
																value="0"
															/>
															<input
																type="hidden"
																name="_wpcf7_posted_data_hash"
																value=""
															/>
															<input
																type="hidden"
																name="_wpcf7_recaptcha_response"
																value=""
															/>
														</div>
														<li>
															<span className="wpcf7-form-control-wrap your-name">
																<input
																	type="text"
																	name="your-name"
																	value=""
																	size="40"
																	className="wpcf7-form-control wpcf7-text"
																	aria-invalid="false"
																	placeholder="Name"
																/>
															</span>
														</li>
														<li>
															<span className="wpcf7-form-control-wrap your-email">
																<input
																	type="email"
																	name="your-email"
																	value=""
																	size="40"
																	className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
																	aria-required="true"
																	aria-invalid="false"
																	placeholder="Email"
																/>
															</span>{' '}
														</li>
														<li>
															<span className="wpcf7-form-control-wrap menu-666">
																<select
																	name="menu-666"
																	className="wpcf7-form-control wpcf7-select selectCustom"
																	id="service-interested-in"
																	aria-invalid="false"
																>
																	<option value="Service Interested In">
																		Service Interested In
																	</option>
																	<option value="Branding">Branding</option>
																	<option value="Mobile App">Mobile App</option>
																	<option value="Design Partnership">
																		Design Partnership
																	</option>
																</select>
															</span>{' '}
														</li>
														<li>
															<span className="wpcf7-form-control-wrap your-message">
																<textarea
																	name="your-message"
																	cols="40"
																	rows="10"
																	className="wpcf7-form-control wpcf7-textarea"
																	aria-invalid="false"
																	placeholder="Message"
																/>
															</span>{' '}
														</li>
														<li>
															<input
																type="submit"
																value="Submit"
																className="wpcf7-form-control wpcf7-submit btnFull"
															/>
															<span className="ajax-loader" />
														</li>
														<div
															className="wpcf7-response-output"
															aria-hidden="true"
															style={{ display: 'none' }}
														/>
													</form>
												</div>{' '}
											</ul>
										</div>
									</Fade>
								</div>
							</div>
							{/* <div className="row">
								<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
									<div className="line-angle MT85 aos-init" dataaos="fade-up">
										<img src="img/line-icon.png" className="img-fluid" alt="" title="" />
									</div>
								</div>
							</div>
							<div className="row flex-column-reverse flex-md-row pad22">
								<div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
									<div className="bookSectionLeft aos-init" dataaos="fade-up">
										<div className="brand-leftSec parallax-inner c-example__tilt-inner">
											<div
												className="brand-image parallax [ c-example__tilt ] js-tilt"
												data-tilt-axis="x"
												data-tilt-glare="true"
												data-tilt-perspective="1000"
												data-tilt-scale="1"
												data-tilt-speed="400"
												data-tilt-max="10"
											>
												<img
													src="img/book.png"
													className="img-fluid"
													alt=""
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
															width: '524px',
															height: '524px',
															transform: 'rotate(180deg) translate(-50%, -50%)',
															transformOrigin: '0% 0%',
															opacity: '0'
														}}
													/>
												</div>
											</div>
										</div>
										<div className="link static-link link-line a">
											<a
												href="branding-guide"
												title=""
												className="bottom_line"
											>
												Read Now
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
								</div>
								<div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
									<div className="brand-RightSec aos-init" dataaos="fade-up">
										<div className="completeGuide aos-init" dataaos="fade-up">
											<h3>
												Get your <span>FREE complete guide</span>
												<span>to Brand Building ebook.</span>
											</h3>
											<form className="download-ebook" type="post" noValidate="noValidate">
												<input
													type="text"
													name="email"
													placeholder="Email Address"
													required=""
												/>
												<button className="btn btn-normal MT55">
													<span>
														Download
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
												<div className="e-book-spinner" style={{ display: 'none' }}>
													<img src="img/spinner-2x.gif" alt="" />
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
									<div className="faq-container">
										<h2 className="heading aos-init" dataaos="fade-up">
											FAQ
										</h2>
										<div className="faq-accordian aos-init" dataaos="fade-up">
											<div id="accordion">
												<div className="card">
													<div className="card-header" id="heading1">
														<h5 className="mb-0">
															<button
																className="btn btn-link "
																data-toggle="collapse"
																data-target="#collapse1"
																aria-expanded="true"
																aria-controls="collapse1"
															>
																What are the main services you provide?
															</button>
														</h5>
													</div>
													<div
														id="collapse1"
														className="collapse show"
														aria-labelledby="heading1"
														data-parent="#accordion"
													>
														<div className="card-body">
															We are team of experienced professionals in Designs. We do
															all design works like website, mobile app, desktop
															applications, print materials etc. We have development
															partnerships under one roof too to provide dev solutions.{' '}
														</div>
													</div>
												</div>
												<div className="card">
													<div className="card-header" id="heading2">
														<h5 className="mb-0">
															<button
																className="btn btn-link collapsed"
																data-toggle="collapse"
																data-target="#collapse2"
																aria-controls="collapse2"
															>
																What time zone your team works?
															</button>
														</h5>
													</div>
													<div
														id="collapse2"
														className="collapse "
														aria-labelledby="heading2"
														data-parent="#accordion"
													>
														<div className="card-body">
															Our team's standard operating time is 11:00 AM to 8:30 PM
															IST. We work 5 days a week (Mon to Fri).<br />
															<br />
															However, we are available most of the time for emergencies
															and if planned in advance.{' '}
														</div>
													</div>
												</div>
												<div className="card">
													<div className="card-header" id="heading3">
														<h5 className="mb-0">
															<button
																className="btn btn-link collapsed"
																data-toggle="collapse"
																data-target="#collapse3"
																aria-controls="collapse3"
															>
																What is your process?
															</button>
														</h5>
													</div>
													<div
														id="collapse3"
														className="collapse "
														aria-labelledby="heading3"
														data-parent="#accordion"
													>
														<div className="card-body">
															First of all, we do brainstorming and create blueprints on
															invision, after approval on blueprints, we start designing
															and move further page by page approvals. We use Basecamp 3
															for project management, invison app for blueprints &amp;
															feedbacks, Sketch app for designs &amp; Illustrator for
															vectors.{' '}
														</div>
													</div>
												</div>
												<div className="card">
													<div className="card-header" id="heading4">
														<h5 className="mb-0">
															<button
																className="btn btn-link collapsed"
																data-toggle="collapse"
																data-target="#collapse4"
																aria-controls="collapse4"
															>
																What will be the Payment Terms?
															</button>
														</h5>
													</div>
													<div
														id="collapse4"
														className="collapse "
														aria-labelledby="heading4"
														data-parent="#accordion"
													>
														<div className="card-body">
															We take 50% advance and 50% after completion of the project
															before handing over the source files.{' '}
														</div>
													</div>
												</div>
												<div className="card">
													<div className="card-header" id="heading5">
														<h5 className="mb-0">
															<button
																className="btn btn-link collapsed"
																data-toggle="collapse"
																data-target="#collapse5"
																aria-controls="collapse5"
															>
																Who will buy the stock licenses?
															</button>
														</h5>
													</div>
													<div
														id="collapse5"
														className="collapse "
														aria-labelledby="heading5"
														data-parent="#accordion"
													>
														<div className="card-body">
															Clients have to buy stock licenses.{' '}
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="converstion-Talk">
											<div className="lets-Talk aos-init" dataaos="fade-up">
												<h3 className="heading">
													The longer you wait<span> to take action, the more</span>
													<span> you fall behind.</span>
													<span>
														<strong>So let’s get the</strong>
													</span>
													<span>
														<strong> conversation started.</strong>
													</span>
												</h3>
											</div>
											<ul className="btnSection aos-init" dataaos="fade-up">
												<li>
													<a
														href="form"
														title=""
														className="btnBig"
													>
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
										</div>
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</section>
			</div>
		);
	}
}
