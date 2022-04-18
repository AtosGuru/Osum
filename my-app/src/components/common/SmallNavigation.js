import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import $ from 'jquery';

export default class SmallNavigation extends Component {
  onNavIconClick() {
		$('.mobile-navigation').toggleClass('showMobileNav');
		$('.menuIcon').toggleClass('active');
		$('.nav-btn').toggleClass('navActive');
	}
  
  render() {
    return (
      <div>
        <div className="smallNavigation">
						<div className="nav-btn" onClick={this.onNavIconClick.bind(this)}>
							<div id="close_icon" className="menuIcon">
								<span className="lines" />
								<span className="lines smallLine" />
							</div>
						</div>
						<div className="mobile-navigation">
							<ul className="navList">
								<li>
									<Link to="/" title="" className="">
										Home
									</Link>
								</li>
								<li>
									<Link to="/app-designs" id="abcTest" title="" className="">
										<span
											data-toggle="collapse"
											data-target="#collapseSet"
											aria-expanded="true"
											aria-controls="collapseOne"
										>
											App Designs
										</span>
									</Link>
								</li>
								<li>
									<Link to="/work" className="" title="">
										Work
									</Link>
								</li>
								<li>
									<Link to="review" className="" title="">
										Reviews
									</Link>
								</li>
							</ul>
							<ul className="buttonNav">
								<li className="mobNav">
									<img
										src="img/white-seperator.png"
										className="img-fluid first-img"
										alt=""
										title=""
									/>
								</li>
								<li>
									<Link to="/form" className="">
										Discovery Form
									</Link>
								</li>
							</ul>
						</div>
					</div>
      </div>
    )
  }
}
