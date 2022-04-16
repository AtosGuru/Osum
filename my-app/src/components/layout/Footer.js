import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

export default class Footer extends Component {
	render() {
		return (
			<div>
				<footer id="site-footer" role="contentinfo" className="header-footer-group">
					<section className="footer-wrapper 
    footer-bg">
						<div className="container">
							<div className="row">
								<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-3">
									<Fade bottom>
										<div className="companySection aos-init" dataAos="fade-up">
											<div className="footer-logo">
												<img src="img/footer-logo.png" className="img-fluid" alt="" title="" />
												<span>
													Born desire to make beautiful and functional online presence for
													EVERYONE.
												</span>
											</div>
											<div className="comapny-address">
												<h3>INDIA</h3>
												<p>
													C 601, Gillco Towers, Gillco Valley, <br />Sec 127, Mohali, Punjab,
													India. 140301
												</p>
											</div>
											<div className="comapny-address">
												<h3>USA</h3>
												<p>
													9873 Sparrow Hawk Ln <br />Fort Worth, TX 76108, United States.
												</p>
											</div>
											<div className="comapny-address">
												<h3>Australia</h3>
												<p>
													Level 2 #162 Macquarie St <br />Hobart Tas 7000, Australia.
												</p>
											</div>
										</div>
									</Fade>
								</div>
								<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 col-lg-4-first">
									<Fade bottom>
										<div className="footerServices aos-init" dataAos="fade-up">
											<div className="footerBlock">
												<h3>Services</h3>
												<ul className="footer-links">
													<li>
														<a href="app-designs">App Designs</a>
													</li>
													<li>
														<a href="partnership">Design Partnership</a>
													</li>
												</ul>
											</div>
											<div className="footerBlock">
												<h3>Links</h3>
												<ul className="footer-links">
													<li>
														<a href="work">Portfolio</a>
													</li>
													<li>
														<a href="blog">Blog</a>
													</li>
													<li>
														<a href="review">Reviews</a>
													</li>
													<li>
														<a href="branding-guide">Brand Building Guide</a>
													</li>
												</ul>
											</div>
										</div>
									</Fade>
								</div>
								<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 col-lg-4-second">
									<Fade bottom>
										<div className="footerServices PL0 aos-init" dataAos="fade-up">
											<div className="footerBlock">
												<h3>Products</h3>
												<ul className="footer-links">
													<li>
														<a
															href="https://themeforest.net/item/bose-new-publishing-app-template-in-html-5-framework-7/26131742"
															target="blank"
														>
															Bose - News Publishing App
														</a>
													</li>
													<li>
														<a
															href="https://themeforest.net/item/the-character-one-pager-templates-for-professionals-in-html-5/26160950"
															target="blank"
														>
															The Character - Personalised Portfolio
														</a>
													</li>
													<li>
														<a
															href="https://themeforest.net/item/mobile-app-templates-blogs-in-html/23036668"
															target="blank"
														>
															MAT - Personal Blogging App
														</a>
													</li>
													<li>
														<a
															href="https://themeforest.net/item/w-mobile-and-app-blogging-templates-for-food-and-restaurants/24017091"
															target="blank"
														>
															W. Food &amp; Restaurant's App
														</a>
													</li>
													<li>
														<a
															href="https://themeforest.net/item/stencil-creative-multipurpose-html-theme/23529882"
															target="blank"
														>
															Stencil - Shop, Blog &amp; Portfolio
														</a>
													</li>
													<li>
														<a
															href="https://themeforest.net/item/fashion-shop-mobile-app-in-sketch/29716093"
															target="blank"
														>
															Fashion Shop App
														</a>
													</li>
												</ul>
											</div>
										</div>
									</Fade>
								</div>
								<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 col-lg-4-first">
									<Fade bottom>
										<div className="footerSocial aos-init" dataAos="fade-up">
											<ul className="footer-links">
												<li>
													<a href="https://www.facebook.com/osumstudio" target="blank">
														<img
															src="img/facebook.svg"
															className="img-fluid imgFirst"
															alt=""
															title=""
														/>
														<img
															src="img/facebook-h.svg"
															className="img-fluid imgFirst-h"
															alt=""
															title=""
														/>
													</a>
												</li>
												<li>
													<a href="https://www.instagram.com/osum.studio/" target="blank">
														<img
															src="img/insta.svg"
															className="img-fluid imgFirst"
															alt=""
															title=""
														/>
														<img
															src="img/insta-h.svg"
															className="img-fluid imgFirst-h"
															alt=""
															title=""
															data-xblocker="passed"
															style={{ visibility: 'visible' }}
														/>
													</a>
												</li>
											</ul>
											<div className="footer-info">
												<ul className="infoLink">
													<li>
														<a href="mailto:info@osumstudio.com" target="blank">
															info@osumstudio.com
														</a>
													</li>
													<li>
														<a href="tel:+919878977771">+91 9878977771</a>
													</li>
													<li>
														<a href="skype:thakur8730">Skype</a>
													</li>
												</ul>
												<div className="btnSection">
													<Link to="/form" title="" className="btnBig">
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
													</Link>
												</div>
											</div>
										</div>
									</Fade>
								</div>
								<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
									<Fade bottom>
										<div className="copyright-section aos-init" dataAos="fade-up">
											<p>Copyright ©2022 Osum Studio PVT. LTD. All Rights Reserved.</p>
										</div>
									</Fade>
								</div>
							</div>
						</div>
					</section>
					<div style={{ display: 'none' }} id="open-intercom-messenger" />
				</footer>
			</div>
		);
	}
}
