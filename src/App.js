import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAccessToken, getAccessTokenFromServer, getTickers } from '../src/services/Api.js';
import CurrencyConverter from '../src/components/CurrencyConverter.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<CurrencyConverter />} />
				<Route path="/fallback" element={<OAuthCallback />} />
			</Routes>
		</Router>
		);
}

function OAuthCallback() {
	const navigate = useNavigate();

	useEffect(() => {
		const fetchTokenAndRedirect = async () => {
			const urlParams = new URLSearchParams(window.location.search);
			const code = urlParams.get('code');
			if (code) {
			try {
					const response = await getAccessTokenFromServer(code);
					const token = response.data.access_token;
					navigate('/', { state: { token } });
				}
				catch (error) {
					console.error('Error fetching access token:', error);
				}
			}
		};

		fetchTokenAndRedirect();
		}, []);

	return <div>Processing authentication...</div>;
}

export default App;
