import { useState, useEffect, useCallback, useRef } from 'react';
import SDK from '@uphold/uphold-sdk-javascript';
import debounce from 'lodash.debounce';

export default function FetchData() {
	const [sdk, setSdk] = useState(null);
	const [tickers, setTickers] = useState(null);
	const [currentCurrency, setCurrentCurrency] = useState('USD');
	const [isLoading, setIsLoading] = useState(true);
	const lastFetchTimeRef = useRef({});

	useEffect(() => {
		const initSDK = async () => {
			const newSdk = new SDK({
				baseUrl: `${process.env.REACT_APP_BASE_URL}`,
				clientId: `${process.env.REACT_APP_CLIENT_ID}`,
				clientSecret: `${process.env.REACT_APP_CLIENT_SECRET}`
			});
			setSdk(newSdk);
		};

		initSDK();
	}, []);

	const fetchTicker = useCallback(async (currency) => {
		if (!sdk) return;

		try {
			const ticker = await sdk.getTicker(currency);
			setTickers(ticker)
			lastFetchTimeRef.current = Date.now();
		} catch (error) {
			console.error(`Error fetching ticker for ${currency}:`, error);
		}
	}, [sdk]);

	const debouncedFetchTicker = useCallback(
		debounce(fetchTicker, 300),
		[fetchTicker]
	);

	const handleCurrencyChange = useCallback((currency) => {
		setCurrentCurrency(currency);
		debouncedFetchTicker(currency);
	}, [debouncedFetchTicker]);

	// Initial data fetch for all currencies
	useEffect(() => {
		const fetchInitialData = async () => {
			if (sdk) {
				setIsLoading(true);
				await fetchTicker(currentCurrency);
				setIsLoading(false);
			}
		};

		fetchInitialData();
	}, [sdk, fetchTicker]);

	if (isLoading) {
		return { isLoading: true };
	}

	return {
		isLoading: false,
		currentCurrency,
		tickers,
		handleCurrencyChange
	};
}
