import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';


import SmallNavigation from '../common/SmallNavigation';

class Header extends Component {
	
	render() {
		let desktopNavigation = '';
		let formBtn = '';

		if(this.props.formHeader) {
			desktopNavigation = '';
			formBtn = (
				<div className="discoverForm">
					<div className="discoverForm">
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
					</div>
				</div>
			);
		} else {
			desktopNavigation = (
				<nav className="desktop-navigation">
					<ul className={classnames('nav-list', { 'color-white': this.props.isWhite })}>
						<li className="list-item menu-item">
							<a href="javascript:void(0)">Services</a>
							<ul className="sub-menu" id="dropdown-items">
								<li>
									<Link to="/app-designs" href="app-designs" className="">
										App Designs
									</Link>
								</li>
							</ul>
						</li>
						<li className="list-item">
							<Link to="/work" className="">
								Work
							</Link>
						</li>
						<li className="list-item">
							<Link to="/review" className="">
								Reviews
							</Link>
						</li>
					</ul>
				</nav>
			)

			formBtn = (
				<div className="discoverForm">
					<Link to="/form" title="">
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
			)
		}

		return (
			<div>
				<header className="">
					<div className="navigation static-header" data-page="mobile-app-design-company-india">
						<div className="container-fluid">
							<div className="row">
								<div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
									<div className="logo-wrapper">
										<h1>
											<Link to="/">
												<img
													src="img/header-logo.png"
													className="img-fluid"
													alt="Logo"
													title=""
												/>
											</Link>
										</h1>
									</div>
								</div>
								<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
									{desktopNavigation}
								</div>
								<div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
									{formBtn}
								</div>
							</div>
						</div>
					</div>
					{/* /Navigation */}
					{/* / smallNavigation and Mobile Navigation */}
					<SmallNavigation/>
					{/* / smallNavigation and Mobile Navigation */}
				</header>
			</div>
		);
	}
}

export default Header;
