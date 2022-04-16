import React, { Component } from 'react'

import Header from '../layout/Header'
import Footer from '../layout/Footer'
import ReviewWrapper from '../ReviewWrapper'

export default class Reviews extends Component {
  render() {
    return (
      <div className="a-review">
         <Header/>
         <main id="site-content" role="main">
            <ReviewWrapper/>
            <Footer/>
         </main>
      </div>
    )
  }
}
