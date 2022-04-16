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
										<h2 className="heading aos-init aos-animate" dataAos="fade-up">
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
												dataAos="fade-up"
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
											<div
												className="tab-pane fade active show"
												id="pills-All"
												role="tabpanel"
												aria-labelledby="pills-home-tab"
											>
												<ul className="work-listing-item">
													<li>
														<Fade bottom>
															<div
																className="workDetail parallax-inner c-example__tilt-inner aos-init aos-animate"
																dataAos-delay="300"
																dataAos="fade-up"
															>
																<div
																	className="work-image parallax [ c-example__tilt ] js-tilt"
																	data-tilt-glare="true"
																	data-tilt-axis="x"
																	data-tilt-perspective="1000"
																	data-tilt-scale="1"
																	data-tilt-speed="400"
																	data-tilt-max="10"
																	style={{
																		willChange: 'transform',
																		transform:
																			'perspective(1000px) rotateX(0deg) rotateY(0deg)'
																	}}
																>
																	<img
																		src="img/tile-setu-app.jpg"
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
																				width: '1118px',
																				height: '1118px',
																				transform:
																					'rotate(180deg) translate(-50%, -50%)',
																				transformOrigin: '0% 0%',
																				opacity: '0'
																			}}
																		/>
																	</div>
																</div>
																<div className="work-content">
																	<h3>Setu NFT Marketplace</h3>
																	<p>NFT Marketplace with Admin Dashboards</p>
																	<div className="link static-link link-line a">
																		<a
																			href="work/detail/setu-nft-marketplace/"
																			title=""
																			className="bottom_line"
																		>
																			Case Study
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
														</Fade>
													</li>
													<li>
														<Fade bottom>
															<div
																className="workDetail parallax-inner c-example__tilt-inner aos-init aos-animate"
																dataAos-delay="1000"
																dataAos="fade-up"
															>
																<div
																	className="work-image parallax [ c-example__tilt ] js-tilt"
																	data-tilt-glare="true"
																	data-tilt-axis="x"
																	data-tilt-perspective="1000"
																	data-tilt-scale="1"
																	data-tilt-speed="400"
																	data-tilt-max="10"
																	style={{
																		willChange: 'transform',
																		transform:
																			'perspective(1000px) rotateX(0deg) rotateY(0deg)'
																	}}
																>
																	<img
																		src="img/tile-finology-app.jpg"
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
																				width: '1118px',
																				height: '1118px',
																				transform:
																					'rotate(180deg) translate(-50%, -50%)',
																				transformOrigin: '0% 0%',
																				opacity: '0'
																			}}
																		/>
																	</div>
																</div>
																<div className="work-content">
																	<h3>Finology App</h3>
																	<p>Money Management App Template</p>
																	<div className="link static-link link-line a">
																		<a
																			href="work/detail/finology-app/"
																			title=""
																			className="bottom_line"
																		>
																			Case Study
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
														</Fade>
													</li>
													<li>
														<Fade bottom>
															<div
																className="workDetail parallax-inner c-example__tilt-inner aos-init aos-animate"
																dataAos-delay="300"
																dataAos="fade-up"
															>
																<div
																	className="work-image parallax [ c-example__tilt ] js-tilt"
																	data-tilt-glare="true"
																	data-tilt-axis="x"
																	data-tilt-perspective="1000"
																	data-tilt-scale="1"
																	data-tilt-speed="400"
																	data-tilt-max="10"
																>
																	<img
																		src="img/tile-purpose-distance-app.jpg"
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
																				width: '1118px',
																				height: '1118px',
																				transform:
																					'rotate(180deg) translate(-50%, -50%)',
																				transformOrigin: '0% 0%',
																				opacity: '0'
																			}}
																		/>
																	</div>
																</div>
																<div className="work-content">
																	<h3>Purpose App</h3>
																	<p>Distance Learning App</p>
																	<div className="link static-link link-line a">
																		<a
																			href="work/detail/purpose/"
																			title=""
																			className="bottom_line"
																		>
																			Case Study
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
														</Fade>
													</li>
													<li>
														<Fade bottom>
															<div
																className="workDetail parallax-inner c-example__tilt-inner aos-init aos-animate"
																dataAos-delay="1000"
																dataAos="fade-up"
															>
																<div
																	className="work-image parallax [ c-example__tilt ] js-tilt"
																	data-tilt-glare="true"
																	data-tilt-axis="x"
																	data-tilt-perspective="1000"
																	data-tilt-scale="1"
																	data-tilt-speed="400"
																	data-tilt-max="10"
																	style={{
																		willChange: 'transform',
																		transform:
																			'perspective(1000px) rotateX(0deg) rotateY(0deg)'
																	}}
																>
																	<img
																		src="img/tile-eat-fresh.jpg"
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
																				width: '1118px',
																				height: '1118px',
																				transform:
																					'rotate(180deg) translate(-50%, -50%)',
																				transformOrigin: '0% 0%',
																				opacity: '0'
																			}}
																		/>
																	</div>
																</div>
																<div className="work-content">
																	<h3>Eatfresh App</h3>
																	<p>Food Ordering App</p>
																	<div className="link static-link link-line a">
																		<a
																			href="work/detail/eatfresh-app/"
																			title=""
																			className="bottom_line"
																		>
																			Case Study
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
														</Fade>
													</li>
													<li>
														<Fade bottom>
															<div
																className="workDetail parallax-inner c-example__tilt-inner aos-init aos-animate"
																dataAos-delay="300"
																dataAos="fade-up"
															>
																<div
																	className="work-image parallax [ c-example__tilt ] js-tilt"
																	data-tilt-glare="true"
																	data-tilt-axis="x"
																	data-tilt-perspective="1000"
																	data-tilt-scale="1"
																	data-tilt-speed="400"
																	data-tilt-max="10"
																>
																	<img
																		src="img/tile-signal.jpg"
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
																				width: '1118px',
																				height: '1118px',
																				transform:
																					'rotate(180deg) translate(-50%, -50%)',
																				transformOrigin: '0% 0%',
																				opacity: '0'
																			}}
																		/>
																	</div>
																</div>
																<div className="work-content">
																	<h3>Signal News App</h3>
																	<p>News Channels, Magazines &amp; Publishers.</p>
																	<div className="link static-link link-line a">
																		<a
																			href="work/detail/signal-news-app/"
																			title=""
																			className="bottom_line"
																		>
																			Case Study
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
														</Fade>
													</li>
													<li>
														<Fade bottom>
															<div
																className="workDetail parallax-inner c-example__tilt-inner aos-init aos-animate"
																dataAos-delay="1000"
																dataAos="fade-up"
															>
																<div
																	className="work-image parallax [ c-example__tilt ] js-tilt"
																	data-tilt-glare="true"
																	data-tilt-axis="x"
																	data-tilt-perspective="1000"
																	data-tilt-scale="1"
																	data-tilt-speed="400"
																	data-tilt-max="10"
																	style={{
																		willChange: 'transform',
																		transform:
																			'perspective(1000px) rotateX(0deg) rotateY(0deg)'
																	}}
																>
																	<img
																		src="img/tile-findout.jpg"
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
																				width: '1118px',
																				height: '1118px',
																				transform:
																					'rotate(180deg) translate(-50%, -50%)',
																				transformOrigin: '0% 0%',
																				opacity: '0'
																			}}
																		/>
																	</div>
																</div>
																<div className="work-content">
																	<h3>Findout Listing App</h3>
																	<p>Hotels, Locations, Restaurants &amp; Events.</p>
																	<div className="link static-link link-line a">
																		<a
																			href="work/detail/findout-listing-app/"
																			title=""
																			className="bottom_line"
																		>
																			Case Study
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
														</Fade>
													</li>
													<li>
														<Fade bottom>
															<div
																className="workDetail parallax-inner c-example__tilt-inner aos-init aos-animate"
																dataAos-delay="300"
																dataAos="fade-up"
															>
																<div
																	className="work-image parallax [ c-example__tilt ] js-tilt"
																	data-tilt-glare="true"
																	data-tilt-axis="x"
																	data-tilt-perspective="1000"
																	data-tilt-scale="1"
																	data-tilt-speed="400"
																	data-tilt-max="10"
																>
																	<img
																		src="img/2x-comiida-thumbnail.jpg"
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
																				width: '1118px',
																				height: '1118px',
																				transform:
																					'rotate(180deg) translate(-50%, -50%)',
																				transformOrigin: '0% 0%',
																				opacity: '0'
																			}}
																		/>
																	</div>
																</div>
																<div className="work-content">
																	<h3>Comiida App</h3>
																	<p>Online Restuarants Food Ordering App</p>
																	<div className="link static-link link-line a">
																		<a
																			href="work/detail/comiida-app/"
																			title=""
																			className="bottom_line"
																		>
																			Case Study
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
														</Fade>
													</li>
													<li>
														<Fade bottom>
															<div
																className="workDetail parallax-inner c-example__tilt-inner aos-init aos-animate"
																dataAos-delay="1000"
																dataAos="fade-up"
															>
																<div
																	className="work-image parallax [ c-example__tilt ] js-tilt"
																	data-tilt-glare="true"
																	data-tilt-axis="x"
																	data-tilt-perspective="1000"
																	data-tilt-scale="1"
																	data-tilt-speed="400"
																	data-tilt-max="10"
																	style={{
																		willChange: 'transform',
																		transform:
																			'perspective(1000px) rotateX(0deg) rotateY(0deg)'
																	}}
																>
																	<img
																		src="img/2x-saavi-thumbnail.jpg"
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
																				width: '1118px',
																				height: '1118px',
																				transform:
																					'rotate(180deg) translate(-50%, -50%)',
																				transformOrigin: '0% 0%',
																				opacity: '0'
																			}}
																		/>
																	</div>
																</div>
																<div className="work-content">
																	<h3>Saavi B2B</h3>
																	<p>Branding, Website, Mobile App &amp; Marketing</p>
																	<div className="link static-link link-line a">
																		<a
																			href="work/detail/saavi-b2b/"
																			title=""
																			className="bottom_line"
																		>
																			Case Study
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
														</Fade>
													</li>
													<li>
														<Fade bottom>
															<div
																className="workDetail parallax-inner c-example__tilt-inner aos-init aos-animate"
																dataAos-delay="300"
																dataAos="fade-up"
															>
																<div
																	className="work-image parallax [ c-example__tilt ] js-tilt"
																	data-tilt-glare="true"
																	data-tilt-axis="x"
																	data-tilt-perspective="1000"
																	data-tilt-scale="1"
																	data-tilt-speed="400"
																	data-tilt-max="10"
																>
																	<img
																		src="img/social-success-thumbnail.jpg"
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
																				width: '1118px',
																				height: '1118px',
																				transform:
																					'rotate(180deg) translate(-50%, -50%)',
																				transformOrigin: '0% 0%',
																				opacity: '0'
																			}}
																		/>
																	</div>
																</div>
																<div className="work-content">
																	<h3>Social Success App</h3>
																	<p>Social Media Graphic Edit App</p>
																	<div className="link static-link link-line a">
																		<a
																			href="work/detail/social-success-app/"
																			title=""
																			className="bottom_line"
																		>
																			Case Study
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
														</Fade>
													</li>
													<li>
														<Fade bottom>
															<div
																className="workDetail parallax-inner c-example__tilt-inner aos-init aos-animate"
																dataAos-delay="1000"
																dataAos="fade-up"
															>
																<div
																	className="work-image parallax [ c-example__tilt ] js-tilt"
																	data-tilt-glare="true"
																	data-tilt-axis="x"
																	data-tilt-perspective="1000"
																	data-tilt-scale="1"
																	data-tilt-speed="400"
																	data-tilt-max="10"
																	style={{
																		willChange: 'transform',
																		transform:
																			'perspective(1000px) rotateX(0deg) rotateY(0deg)'
																	}}
																>
																	<img
																		src="img/show-some-love-thumbnail.jpg"
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
																				width: '1118px',
																				height: '1118px',
																				transform:
																					'rotate(180deg) translate(-50%, -50%)',
																				transformOrigin: '0% 0%',
																				opacity: '0'
																			}}
																		/>
																	</div>
																</div>
																<div className="work-content">
																	<h3>Show Some Love App</h3>
																	<p>Dating Mobile Application</p>
																	<div className="link static-link link-line a">
																		<a
																			href="work/detail/show-some-love-app/"
																			title=""
																			className="bottom_line"
																		>
																			Case Study
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
														</Fade>
													</li>
													<li>
														<Fade bottom>
															<div
																className="workDetail parallax-inner c-example__tilt-inner aos-init aos-animate"
																dataAos-delay="300"
																dataAos="fade-up"
															>
																<div
																	className="work-image parallax [ c-example__tilt ] js-tilt"
																	data-tilt-glare="true"
																	data-tilt-axis="x"
																	data-tilt-perspective="1000"
																	data-tilt-scale="1"
																	data-tilt-speed="400"
																	data-tilt-max="10"
																>
																	<img
																		src="img/barefoor-media-solution-thumbnail.jpg"
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
																				width: '1118px',
																				height: '1118px',
																				transform:
																					'rotate(180deg) translate(-50%, -50%)',
																				transformOrigin: '0% 0%',
																				opacity: '0'
																			}}
																		/>
																	</div>
																</div>
																<div className="work-content">
																	<h3>Barefoot Media Solutions</h3>
																	<p>StoryBrand 7 Framework Website</p>
																	<div className="link static-link link-line a">
																		<a
																			href="work/detail/barefoot-media-solutions/"
																			title=""
																			className="bottom_line"
																		>
																			Case Study
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
														</Fade>
													</li>
													<li>
														<Fade bottom>
															<div
																className="workDetail parallax-inner c-example__tilt-inner aos-init aos-animate"
																dataAos-delay="1000"
																dataAos="fade-up"
															>
																<div
																	className="work-image parallax [ c-example__tilt ] js-tilt"
																	data-tilt-glare="true"
																	data-tilt-axis="x"
																	data-tilt-perspective="1000"
																	data-tilt-scale="1"
																	data-tilt-speed="400"
																	data-tilt-max="10"
																	style={{
																		willChange: 'transform',
																		transform:
																			'perspective(1000px) rotateX(0deg) rotateY(0deg)'
																	}}
																>
																	<img
																		src="img/shop-app-thumbnail.jpg"
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
																				width: '1118px',
																				height: '1118px',
																				transform:
																					'rotate(180deg) translate(-50%, -50%)',
																				transformOrigin: '0% 0%',
																				opacity: '0'
																			}}
																		/>
																	</div>
																</div>
																<div className="work-content">
																	<h3>Shop App</h3>
																	<p>E-Commerce App Designs</p>
																	<div className="link static-link link-line a">
																		<a
																			href="work/detail/shop-app/"
																			title=""
																			className="bottom_line"
																		>
																			Case Study
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
														</Fade>
													</li>
													<li>
														<Fade bottom>
															<div
																className="workDetail parallax-inner c-example__tilt-inner aos-init aos-animate"
																dataAos-delay="300"
																dataAos="fade-up"
															>
																<div
																	className="work-image parallax [ c-example__tilt ] js-tilt"
																	data-tilt-glare="true"
																	data-tilt-axis="x"
																	data-tilt-perspective="1000"
																	data-tilt-scale="1"
																	data-tilt-speed="400"
																	data-tilt-max="10"
																>
																	<img
																		src="img/bose-app-thumbnail.jpg"
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
																				width: '1118px',
																				height: '1118px',
																				transform:
																					'rotate(180deg) translate(-50%, -50%)',
																				transformOrigin: '0% 0%',
																				opacity: '0'
																			}}
																		/>
																	</div>
																</div>
																<div className="work-content">
																	<h3>Bose News App</h3>
																	<p>Sketch Design System + Framework 7</p>
																	<div className="link static-link link-line a">
																		<a
																			href="work/detail/bose-news-app/"
																			title=""
																			className="bottom_line"
																		>
																			Case Study
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
														</Fade>
													</li>
													<li>
														<Fade bottom>
															<div
																className="workDetail parallax-inner c-example__tilt-inner aos-init aos-animate"
																dataAos-delay="1000"
																dataAos="fade-up"
															>
																<div
																	className="work-image parallax [ c-example__tilt ] js-tilt"
																	data-tilt-glare="true"
																	data-tilt-axis="x"
																	data-tilt-perspective="1000"
																	data-tilt-scale="1"
																	data-tilt-speed="400"
																	data-tilt-max="10"
																	style={{
																		willChange: 'transform',
																		transform:
																			'perspective(1000px) rotateX(0deg) rotateY(0deg)'
																	}}
																>
																	<img
																		src="img/barefoot-photographer-thumbnail.jpg"
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
																				width: '1118px',
																				height: '1118px',
																				transform:
																					'rotate(180deg) translate(-50%, -50%)',
																				transformOrigin: '0% 0%',
																				opacity: '0'
																			}}
																		/>
																	</div>
																</div>
																<div className="work-content">
																	<h3>Barefoot Photographer</h3>
																	<p>Studio and Photography Services</p>
																	<div className="link static-link link-line a">
																		<a
																			href="work/detail/barefoot-photographer/"
																			title=""
																			className="bottom_line"
																		>
																			Case Study
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
														</Fade>
													</li>
													<li>
														<Fade bottom>
															<div
																className="workDetail parallax-inner c-example__tilt-inner aos-init aos-animate"
																dataAos-delay="300"
																dataAos="fade-up"
															>
																<div
																	className="work-image parallax [ c-example__tilt ] js-tilt"
																	data-tilt-glare="true"
																	data-tilt-axis="x"
																	data-tilt-perspective="1000"
																	data-tilt-scale="1"
																	data-tilt-speed="400"
																	data-tilt-max="10"
																>
																	<img
																		src="img/personal-blogging-app-thumbnail.jpg"
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
																				width: '1118px',
																				height: '1118px',
																				transform:
																					'rotate(180deg) translate(-50%, -50%)',
																				transformOrigin: '0% 0%',
																				opacity: '0'
																			}}
																		/>
																	</div>
																</div>
																<div className="work-content">
																	<h3>Personal Blogging App</h3>
																	<p>Blogging App in Sketch &amp; HTML 5</p>
																	<div className="link static-link link-line a">
																		<a
																			href="work/detail/personal-blogging-app/"
																			title=""
																			className="bottom_line"
																		>
																			Case Study
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
														</Fade>
													</li>
												</ul>
											</div>
											{/* Mobile */}
											<div
												className="tab-pane fade"
												id="pills-Mobile"
												role="tabpanel"
												aria-labelledby="pills-profile-tab"
											>
												<ul className="work-listing-item">
													<li>
														<Fade bottom>
															<div
																className="workDetail parallax-inner c-example__tilt-inner aos-init aos-animate"
																dataAos-delay="100"
																dataAos="fade-up"
															>
																<div
																	className="work-image parallax [ c-example__tilt ] js-tilt"
																	data-tilt-axis="x"
																	data-tilt-perspective="1000"
																	data-tilt-scale="1"
																	data-tilt-speed="400"
																	data-tilt-max="10"
																>
																	<img
																		src="img/tile-finology-app.jpg"
																		className="img-fluid"
																		alt=""
																		title=""
																		data-xblocker="passed"
																		style={{ visibility: 'visible' }}
																	/>
																</div>
																<div className="work-content">
																	<h3>Finology App</h3>
																	<p>Money Management App Template</p>
																	<div className="link static-link link-line a">
																		<a
																			href="work/detail/finology-app/"
																			title=""
																			className="bottom_line"
																		>
																			Case Study
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
														</Fade>
													</li>
													<li>
														<Fade bottom>
															<div
																className="workDetail parallax-inner c-example__tilt-inner aos-init aos-animate"
																dataAos-delay="100"
																dataAos="fade-up"
															>
																<div
																	className="work-image parallax [ c-example__tilt ] js-tilt"
																	data-tilt-axis="x"
																	data-tilt-perspective="1000"
																	data-tilt-scale="1"
																	data-tilt-speed="400"
																	data-tilt-max="10"
																>
																	<img
																		src="img/tile-purpose-distance-app.jpg"
																		className="img-fluid"
																		alt=""
																		title=""
																		data-xblocker="passed"
																		style={{ visibility: 'visible' }}
																	/>
																</div>
																<div className="work-content">
																	<h3>Purpose App</h3>
																	<p>Distance Learning App</p>
																	<div className="link static-link link-line a">
																		<a
																			href="work/detail/purpose/"
																			title=""
																			className="bottom_line"
																		>
																			Case Study
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
														</Fade>
													</li>
													<li>
														<Fade bottom>
															<div
																className="workDetail parallax-inner c-example__tilt-inner aos-init aos-animate"
																dataAos-delay="100"
																dataAos="fade-up"
															>
																<div
																	className="work-image parallax [ c-example__tilt ] js-tilt"
																	data-tilt-axis="x"
																	data-tilt-perspective="1000"
																	data-tilt-scale="1"
																	data-tilt-speed="400"
																	data-tilt-max="10"
																>
																	<img
																		src="img/tile-eat-fresh.jpg"
																		className="img-fluid"
																		alt=""
																		title=""
																		data-xblocker="passed"
																		style={{ visibility: 'visible' }}
																	/>
																</div>
																<div className="work-content">
																	<h3>Eatfresh App</h3>
																	<p>Food Ordering App</p>
																	<div className="link static-link link-line a">
																		<a
																			href="work/detail/eatfresh-app/"
																			title=""
																			className="bottom_line"
																		>
																			Case Study
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
														</Fade>
													</li>
													<li>
														<Fade bottom>
															<div
																className="workDetail parallax-inner c-example__tilt-inner aos-init aos-animate"
																dataAos-delay="100"
																dataAos="fade-up"
															>
																<div
																	className="work-image parallax [ c-example__tilt ] js-tilt"
																	data-tilt-axis="x"
																	data-tilt-perspective="1000"
																	data-tilt-scale="1"
																	data-tilt-speed="400"
																	data-tilt-max="10"
																>
																	<img
																		src="img/tile-signal.jpg"
																		className="img-fluid"
																		alt=""
																		title=""
																		data-xblocker="passed"
																		style={{ visibility: 'visible' }}
																	/>
																</div>
																<div className="work-content">
																	<h3>Signal News App</h3>
																	<p>News Channels, Magazines &amp; Publishers.</p>
																	<div className="link static-link link-line a">
																		<a
																			href="work/detail/signal-news-app/"
																			title=""
																			className="bottom_line"
																		>
																			Case Study
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
														</Fade>
													</li>
													<li>
														<Fade bottom>
															<div
																className="workDetail parallax-inner c-example__tilt-inner aos-init aos-animate"
																dataAos-delay="100"
																dataAos="fade-up"
															>
																<div
																	className="work-image parallax [ c-example__tilt ] js-tilt"
																	data-tilt-axis="x"
																	data-tilt-perspective="1000"
																	data-tilt-scale="1"
																	data-tilt-speed="400"
																	data-tilt-max="10"
																>
																	<img
																		src="img/tile-findout.jpg"
																		className="img-fluid"
																		alt=""
																		title=""
																		data-xblocker="passed"
																		style={{ visibility: 'visible' }}
																	/>
																</div>
																<div className="work-content">
																	<h3>Findout Listing App</h3>
																	<p>Hotels, Locations, Restaurants &amp; Events.</p>
																	<div className="link static-link link-line a">
																		<a
																			href="work/detail/findout-listing-app/"
																			title=""
																			className="bottom_line"
																		>
																			Case Study
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
														</Fade>
													</li>
													<li>
														<Fade bottom>
															<div
																className="workDetail parallax-inner c-example__tilt-inner aos-init aos-animate"
																dataAos-delay="100"
																dataAos="fade-up"
															>
																<div
																	className="work-image parallax [ c-example__tilt ] js-tilt"
																	data-tilt-axis="x"
																	data-tilt-perspective="1000"
																	data-tilt-scale="1"
																	data-tilt-speed="400"
																	data-tilt-max="10"
																>
																	<img
																		src="img/2x-comiida-thumbnail.jpg"
																		className="img-fluid"
																		alt=""
																		title=""
																		data-xblocker="passed"
																		style={{ visibility: 'visible' }}
																	/>
																</div>
																<div className="work-content">
																	<h3>Comiida App</h3>
																	<p>Online Restuarants Food Ordering App</p>
																	<div className="link static-link link-line a">
																		<a
																			href="work/detail/comiida-app/"
																			title=""
																			className="bottom_line"
																		>
																			Case Study
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
														</Fade>
													</li>
													<li>
														<Fade bottom>
															<div
																className="workDetail parallax-inner c-example__tilt-inner aos-init aos-animate"
																dataAos-delay="100"
																dataAos="fade-up"
															>
																<div
																	className="work-image parallax [ c-example__tilt ] js-tilt"
																	data-tilt-axis="x"
																	data-tilt-perspective="1000"
																	data-tilt-scale="1"
																	data-tilt-speed="400"
																	data-tilt-max="10"
																>
																	<img
																		src="img/social-success-thumbnail.jpg"
																		className="img-fluid"
																		alt=""
																		title=""
																		data-xblocker="passed"
																		style={{ visibility: 'visible' }}
																	/>
																</div>
																<div className="work-content">
																	<h3>Social Success App</h3>
																	<p>Social Media Graphic Edit App</p>
																	<div className="link static-link link-line a">
																		<a
																			href="work/detail/social-success-app/"
																			title=""
																			className="bottom_line"
																		>
																			Case Study
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
														</Fade>
													</li>
													<li>
														<Fade bottom>
															<div
																className="workDetail parallax-inner c-example__tilt-inner aos-init aos-animate"
																dataAos-delay="100"
																dataAos="fade-up"
															>
																<div
																	className="work-image parallax [ c-example__tilt ] js-tilt"
																	data-tilt-axis="x"
																	data-tilt-perspective="1000"
																	data-tilt-scale="1"
																	data-tilt-speed="400"
																	data-tilt-max="10"
																>
																	<img
																		src="img/show-some-love-thumbnail.jpg"
																		className="img-fluid"
																		alt=""
																		title=""
																		data-xblocker="passed"
																		style={{ visibility: 'visible' }}
																	/>
																</div>
																<div className="work-content">
																	<h3>Show Some Love App</h3>
																	<p>Dating Mobile Application</p>
																	<div className="link static-link link-line a">
																		<a
																			href="work/detail/show-some-love-app/"
																			title=""
																			className="bottom_line"
																		>
																			Case Study
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
														</Fade>
													</li>
													<li>
														<Fade bottom>
															<div
																className="workDetail parallax-inner c-example__tilt-inner aos-init aos-animate"
																dataAos-delay="100"
																dataAos="fade-up"
															>
																<div
																	className="work-image parallax [ c-example__tilt ] js-tilt"
																	data-tilt-axis="x"
																	data-tilt-perspective="1000"
																	data-tilt-scale="1"
																	data-tilt-speed="400"
																	data-tilt-max="10"
																>
																	<img
																		src="img/shop-app-thumbnail.jpg"
																		className="img-fluid"
																		alt=""
																		title=""
																		data-xblocker="passed"
																		style={{ visibility: 'visible' }}
																	/>
																</div>
																<div className="work-content">
																	<h3>Shop App</h3>
																	<p>E-Commerce App Designs</p>
																	<div className="link static-link link-line a">
																		<a
																			href="work/detail/shop-app/"
																			title=""
																			className="bottom_line"
																		>
																			Case Study
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
														</Fade>
													</li>
													<li>
														<Fade bottom>
															<div
																className="workDetail parallax-inner c-example__tilt-inner aos-init aos-animate"
																dataAos-delay="100"
																dataAos="fade-up"
															>
																<div
																	className="work-image parallax [ c-example__tilt ] js-tilt"
																	data-tilt-axis="x"
																	data-tilt-perspective="1000"
																	data-tilt-scale="1"
																	data-tilt-speed="400"
																	data-tilt-max="10"
																>
																	<img
																		src="img/bose-app-thumbnail.jpg"
																		className="img-fluid"
																		alt=""
																		title=""
																		data-xblocker="passed"
																		style={{ visibility: 'visible' }}
																	/>
																</div>
																<div className="work-content">
																	<h3>Bose News App</h3>
																	<p>Sketch Design System + Framework 7</p>
																	<div className="link static-link link-line a">
																		<a
																			href="work/detail/bose-news-app/"
																			title=""
																			className="bottom_line"
																		>
																			Case Study
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
														</Fade>
													</li>
													<li>
														<Fade bottom>
															<div
																className="workDetail parallax-inner c-example__tilt-inner aos-init aos-animate"
																dataAos-delay="100"
																dataAos="fade-up"
															>
																<div
																	className="work-image parallax [ c-example__tilt ] js-tilt"
																	data-tilt-axis="x"
																	data-tilt-perspective="1000"
																	data-tilt-scale="1"
																	data-tilt-speed="400"
																	data-tilt-max="10"
																>
																	<img
																		src="img/personal-blogging-app-thumbnail.jpg"
																		className="img-fluid"
																		alt=""
																		title=""
																		data-xblocker="passed"
																		style={{ visibility: 'visible' }}
																	/>
																</div>
																<div className="work-content">
																	<h3>Personal Blogging App</h3>
																	<p>Blogging App in Sketch &amp; HTML 5</p>
																	<div className="link static-link link-line a">
																		<a
																			href="work/detail/personal-blogging-app/"
																			title=""
																			className="bottom_line"
																		>
																			Case Study
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
														</Fade>
													</li>
												</ul>
											</div>
											{/* Web */}
											<div
												className="tab-pane fade"
												id="pills-Web"
												role="tabpanel"
												aria-labelledby="pills-contact-tab"
											>
												<ul className="work-listing-item">
													<li>
														<Fade bottom>
															<div
																className="workDetail parallax-inner c-example__tilt-inner aos-init aos-animate"
																dataAos-delay="100"
																dataAos="fade-up"
															>
																<div
																	className="work-image parallax [ c-example__tilt ] js-tilt"
																	data-tilt-axis="x"
																	data-tilt-perspective="1000"
																	data-tilt-scale="1"
																	data-tilt-speed="400"
																	data-tilt-max="10"
																>
																	<img
																		src="img/tile-setu-app.jpg"
																		className="img-fluid"
																		alt=""
																		title=""
																		data-xblocker="passed"
																		style={{ visibility: 'visible' }}
																	/>
																</div>
																<div className="work-content">
																	<h3>Setu NFT Marketplace</h3>
																	<p>NFT Marketplace with Admin Dashboards</p>
																	<div className="link static-link link-line a">
																		<a
																			href="work/detail/setu-nft-marketplace/"
																			title=""
																			className="bottom_line"
																		>
																			Case Study
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
														</Fade>
													</li>
													<li>
														<Fade bottom>
															<div
																className="workDetail parallax-inner c-example__tilt-inner aos-init aos-animate"
																dataAos-delay="100"
																dataAos="fade-up"
															>
																<div
																	className="work-image parallax [ c-example__tilt ] js-tilt"
																	data-tilt-axis="x"
																	data-tilt-perspective="1000"
																	data-tilt-scale="1"
																	data-tilt-speed="400"
																	data-tilt-max="10"
																>
																	<img
																		src="img/2x-saavi-thumbnail.jpg"
																		className="img-fluid"
																		alt=""
																		title=""
																		data-xblocker="passed"
																		style={{ visibility: 'visible' }}
																	/>
																</div>
																<div className="work-content">
																	<h3>Saavi B2B</h3>
																	<p>Branding, Website, Mobile App &amp; Marketing</p>
																	<div className="link static-link link-line a">
																		<a
																			href="work/detail/saavi-b2b/"
																			title=""
																			className="bottom_line"
																		>
																			Case Study
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
														</Fade>
													</li>
													<li>
														<Fade bottom>
															<div
																className="workDetail parallax-inner c-example__tilt-inner aos-init aos-animate"
																dataAos-delay="100"
																dataAos="fade-up"
															>
																<div
																	className="work-image parallax [ c-example__tilt ] js-tilt"
																	data-tilt-axis="x"
																	data-tilt-perspective="1000"
																	data-tilt-scale="1"
																	data-tilt-speed="400"
																	data-tilt-max="10"
																>
																	<img
																		src="img/barefoor-media-solution-thumbnail.jpg"
																		className="img-fluid"
																		alt=""
																		title=""
																		data-xblocker="passed"
																		style={{ visibility: 'visible' }}
																	/>
																</div>
																<div className="work-content">
																	<h3>Barefoot Media Solutions</h3>
																	<p>StoryBrand 7 Framework Website</p>
																	<div className="link static-link link-line a">
																		<a
																			href="work/detail/barefoot-media-solutions/"
																			title=""
																			className="bottom_line"
																		>
																			Case Study
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
														</Fade>
													</li>
													<li>
														<Fade bottom>
															<div
																className="workDetail parallax-inner c-example__tilt-inner aos-init aos-animate"
																dataAos-delay="100"
																dataAos="fade-up"
															>
																<div
																	className="work-image parallax [ c-example__tilt ] js-tilt"
																	data-tilt-axis="x"
																	data-tilt-perspective="1000"
																	data-tilt-scale="1"
																	data-tilt-speed="400"
																	data-tilt-max="10"
																>
																	<img
																		src="img/barefoot-photographer-thumbnail.jpg"
																		className="img-fluid"
																		alt=""
																		title=""
																		data-xblocker="passed"
																		style={{ visibility: 'visible' }}
																	/>
																</div>
																<div className="work-content">
																	<h3>Barefoot Photographer</h3>
																	<p>Studio and Photography Services</p>
																	<div className="link static-link link-line a">
																		<a
																			href="work/detail/barefoot-photographer/"
																			title=""
																			className="bottom_line"
																		>
																			Case Study
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
														</Fade>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<Fade bottom>
									<div className="workBtnSection aos-init aos-animate" dataAos="fade-up">
										<Fade bottom>
											<div className="lets-Talk aos-init aos-animate" dataAos="fade-up">
												<h3 className="heading">
													Ready to start <span>growing your business?</span>
													<span> Let’s connect.</span>
												</h3>
											</div>
										</Fade>
										<Fade bottom>
											<ul className="btnSection aos-init aos-animate" dataAos="fade-up">
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
