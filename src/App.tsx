import React from 'react';
import {
	Routes,
	Route,
} from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MediaPage from './components/Pages/Media/Media';
import ErrorPage from './components/Pages/ErrorPage';

function App() {
	return (
		<div className='app'>
			<Header />
			<Routes>
				<Route path="/" element={<ErrorPage />} />
				<Route path="/course" element={<ErrorPage />} />
				<Route path="/media" element={<MediaPage />} />
				<Route path="/merch" element={<ErrorPage />} />
				<Route path="/contact" element={<ErrorPage />} />
				<Route path="/account" element={<ErrorPage />} />
				<Route path="/privacy" element={<ErrorPage />} />
				<Route path="/terms_conditions" element={<ErrorPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
