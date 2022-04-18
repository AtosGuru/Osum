import React, { Component } from 'react'

import Header from '../layout/Header'
import Footer from '../layout/Footer'
import BannerWrapper2 from '../BannerWrapper2'
import BusinessWrapper2 from '../BusinessWrapper2'
import PartnerWrapper2 from '../PartnerWrapper2'
import FeaturedWrapper2 from '../FeaturedWrapper2'
import GrowingBusinessWrapper from '../GrowingBusinessWrapper'

export default class AppDesigns extends Component {
  render() {
    return (
      <div className="a-landing">
         <Header isWhite={true}/>
         <main id="site-content" role="main">
            <BannerWrapper2 />
            <BusinessWrapper2/>
            <PartnerWrapper2/>
            <FeaturedWrapper2/>
            <GrowingBusinessWrapper/>
            <Footer/>
         </main>
      </div>
    )
  }
}
