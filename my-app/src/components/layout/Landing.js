import React, { Component } from 'react';

import Header  from './Header';
import BannerWrapper from '../BannerWrapper';
import BusinessWrapper from '../BusinessWrapper';
import PartnerWrapper from '../PartnerWrapper';
import FeaturedWrapper from '../FeaturedWrapper';
import GrowingBusinessWrapper from '../GrowingBusinessWrapper';
import Footer from './Footer';

export class Landing extends Component {
  render() {
    return (
      <div className="a-landing">
         <Header/>
         <main id="site-content" role="main">
            <BannerWrapper/>
            <BusinessWrapper/>
            <PartnerWrapper/>
            <FeaturedWrapper/>
            <GrowingBusinessWrapper/>
            <Footer/>
         </main>
      </div>
    )
  }
}


export default Landing;

// export default connect(mapStateToProps, mapDispatchToProps)(Landing)