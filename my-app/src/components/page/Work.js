import React, { Component } from 'react'

import Header from '../layout/Header'
import Footer from '../layout/Footer'
import WorkWrapper from '../WorkWrapper'

export default class Work extends Component {
  render() {
    return (
      <div className="a-footer">
         <Header/>
         <main id="site-content" role="main">
            <WorkWrapper />
            <Footer/>
         </main>
      </div>
    )
  }
}
