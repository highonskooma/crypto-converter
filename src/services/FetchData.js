import { useState, useEffect, useCallback } from 'react';
import SDK from '@uphold/uphold-sdk-javascript';
import debounce from 'lodash.debounce';

export default function FetchData() {
  const [sdk, setSdk] = useState(null);
  const [tickers, setTickers] = useState({});
  const [currentCurrency, setCurrentCurrency] = useState('USD');

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
      setTickers(prevTickers => ({
        ...prevTickers,
        [currency]: ticker
      }));
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

    if (tickers[currency]) {
      // Use cached value immediately
      // Then fetch new data in the background
      fetchTicker(currency);
    } else {
      // Fetch new data if not cached
      debouncedFetchTicker(currency);
    }
  }, [tickers, debouncedFetchTicker, fetchTicker]);

	useEffect(() => {
		if (sdk && currentCurrency && !tickers[currentCurrency]) {
			fetchTicker(currentCurrency);
		}
	}, [sdk, currentCurrency, tickers, fetchTicker]);

  return {
    currentCurrency,
    ticker: tickers[currentCurrency],
    handleCurrencyChange
  };
}
