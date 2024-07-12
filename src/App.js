import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { getAccessToken, getAccessTokenFromServer, getTickers } from '../src/services/Api.js';
import CurrencyConverter from '../src/components/CurrencyConverter.jsx';
import SDK from '@uphold/uphold-sdk-javascript';

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
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      // Call your function to exchange the code for a token
      // getAccessToken(code);
		const sdk = new SDK({
			clientId: '53520d11d1a2890f6488b9fc71995e4e286da493',
			clientSecret: '3c5493ccd8ff4532e00160a0641b0958bd2a7496',
			baseUrl: 'https://api-sandbox.uphold.com',
		});
			const token = getAccessTokenFromServer(code, sdk);
    }
  }, []);

  return <div>Processing authentication...</div>;
}

export default App;
