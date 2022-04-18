import React, { Component } from 'react';

import Header from '../layout/Header';
import Footer from '../layout/Footer';
import FormWrapper from '../FormWrapper';

export default class Form extends Component {
	render() {
		return (
			<div className="a-landing">
				<Header formHeader={true} />
				<main id="site-content" role="main">
					<FormWrapper />
					<Footer />
				</main>
			</div>
		);
	}
}
