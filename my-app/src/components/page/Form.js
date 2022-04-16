import React, { Component } from 'react';

import Header from '../layout/Header';
import Footer from '../layout/Footer';
import FormWrapper from '../FormWrapper';
import FormHeader from '../layout/FormHeader';

export default class Form extends Component {
	render() {
		return (
			<div className="a-landing">
				<Header/>
				<main id="site-content" role="main">
					<FormWrapper />
					<Footer />
				</main>
			</div>
		);
	}
}
