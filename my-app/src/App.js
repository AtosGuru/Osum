import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from './components/layout/Landing';
import Work from './components/page/Work';
import WorkWeb from './components/page/WorkWeb';
import WorkMobile from './components/page/WorkMobile';
import Form from './components/page/Form';
import Reviews from './components/page/Reviews';
import AppDesigns from './components/page/AppDesigns';

import Fade from 'react-reveal/Fade';

import './App.css';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/work" element={<Work />} />
				<Route path="/work/mobile" element={<WorkMobile />} />
				<Route path="/work/web" element={<WorkWeb />} />
				<Route path="/form" element={<Form />} />
				<Route path="/review" element={<Reviews />} />
				<Route path="/app-designs" element={<AppDesigns />} />
			</Routes>
		</Router>
	);
};

export default App;
