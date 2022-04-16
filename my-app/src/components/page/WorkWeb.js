import React, { Component } from 'react'

import Header from '../layout/Header'
import Footer from '../layout/Footer'
import WorkWrapper from '../WorkWrapperWeb'

export default class WorkWeb extends Component {
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
