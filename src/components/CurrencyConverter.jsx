import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { getTickersFromServer, getAccessToken } from '../services/Api.js';
import SDK from '@uphold/uphold-sdk-javascript';
import NavBar from './NavBar';

function getConversionRate(fromCurrency, toCurrency, exchangeRates) {
	if (fromCurrency === toCurrency) return 1;
	if (!exchangeRates || exchangeRates.length === 0) return 0;
	const pair = `${toCurrency}${fromCurrency}`;
	const rate = exchangeRates.find(rate => rate.pair === pair);
	return rate ? 1 / parseFloat(rate.ask) : 0;
}

const CurrencyConverter = () => {
	const [amount, setAmount] = useState(0);
	const [fromCurrency, setFromCurrency] = useState('USD');
	const [exchangeRates, setExchangeRates] = useState({});
	const [accessToken, setAccessToken] = useState(null);
	const [sdk, setSdk] = useState(null);
	const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD'];
	const location = useLocation();

	useEffect(() => {
		const newSdk = new SDK({
			clientId: '53520d11d1a2890f6488b9fc71995e4e286da493',
			clientSecret: '3c5493ccd8ff4532e00160a0641b0958bd2a7496',
			baseUrl: 'https://api-sandbox.uphold.com',
		});
		setSdk(newSdk);
		}, []);

	const handleOAuthCallback = useCallback(async () => {
		const urlParams = new URLSearchParams(window.location.search);
		const code = urlParams.get('code');

		if (code) {
			try {
				const token = await getAccessToken(code);
				setAccessToken(token.access_token);
				console.log("access token: " ,accessToken);
				window.history.replaceState({}, document.title, "/");
			} catch (error) {
				console.error('Error exchanging code for token:', error);
			}
		}
	}, [accessToken]);


	// Authorize SDK and fetch user data
	useEffect(() => {
		if (sdk && accessToken) {
			sdk.authorize(accessToken)
				.catch(error => {
					console.error('Error authorizing SDK or fetching user data:', error);
				});
		}
	}, [sdk, accessToken]);

	const fetchExchangeRates = useCallback(debounce(async () => {
		if (!accessToken || !sdk) return;

		try {
			const tickers = await sdk.getTicker('USD');
			console.log('tickers:', tickers);
			setExchangeRates(tickers);
		}
		catch (error) {
			console.error('Error authorizing sdk:', error);
			const tickers = await getTickersFromServer(fromCurrency || 'USD');
			setExchangeRates(tickers);
		}
	}, 300), [accessToken, fromCurrency, sdk]);

	useEffect(() => {
		const token = location.state?.token;
		if (token) {
			setAccessToken(token);
		} else {
			handleOAuthCallback();
		}

	}, [location.state, handleOAuthCallback]);

	useEffect(() => {
		if (accessToken) {
			fetchExchangeRates();
		}
	}, [sdk, accessToken, fetchExchangeRates]);

	const initiateOAuth = async () => {
		try {
			const authorizationUrl = 'https://sandbox.uphold.com/authorize/'
				+ '53520d11d1a2890f6488b9fc71995e4e286da493'
				+ '?scope=user:read'
				+ '&state=1234567890';

			window.location.href = authorizationUrl; 
		} catch (error) {
			console.error('Error initiating OAuth:', error);
		}
	};

	const handleAmountChange = (e) => {
		console.log('amount changed', e.target.value)
		setAmount(e.target.value);
	};

	const handleFromCurrencyChange = (e) => {
		setFromCurrency(e.target.value);
	};

	return (
		<div>
			{!accessToken ? (
				<>
				<button onClick={initiateOAuth}>
				<img src="/FrontendChallenge/assets/UpholdConnectButtons/SVG/connect_with_uphold.svg" />
					</button>
				</>
			) : (
					<>
						<NavBar/>
						<input type="number" placeholder={"0.00"} value={amount} onChange={handleAmountChange} />
						<select value={fromCurrency} onChange={handleFromCurrencyChange}>
							{currencies.map(currency => <option key={currency} value={currency}>{currency}</option>)}
						</select>
						{(amount !== 0 && amount !== '') && 
							currencies.map(toCurrency => {
								if (toCurrency === fromCurrency) return null;
								const rate = getConversionRate(fromCurrency, toCurrency, exchangeRates);
								const convertedAmount = amount * rate;
								return (
									<p key={toCurrency}>
										{amount} {fromCurrency} = {!convertedAmount ? "..." : convertedAmount.toFixed(2)} {toCurrency}
									</p>
								);
							}) 
						}
						{(amount === 0 || amount === '') &&
							<p>Enter an amount to check the rates</p>
						}
					</>
				)}
		</div>
	);
};

export default CurrencyConverter;
