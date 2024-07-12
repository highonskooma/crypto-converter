import React, { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { getTickers, getAccessToken, getAccessTokenFromServer, oauthTransaction } from '../services/Api.js';
import SDK from '../services/UpHoldSDK.js';

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
  const [greeting, setGreeting] = useState('');
  const [accessToken, setAccessToken] = useState(null);
  const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD'];

  const handleOAuthCallback = useCallback(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
		const state = urlParams.get('state');
		console.log('code', code);
		console.log('state', state);
    if (code) {
      try {
        // const tokenData = await getAccessTokenFromServer(code);
				const token = await getAccessToken(code);
        setAccessToken(token.access_token);
				console.log('accesstoken', accessToken);
        // Clear the URL parameters
        // window.history.replaceState({}, document.title, "/");
      } catch (error) {
        console.error('Error exchanging code for token:', error);
      }
    }
  }, []);

  const fetchExchangeRates = useCallback(debounce(async () => {
    if (!accessToken) return;

    try {
			// SDK.authorize(accessToken);
			// const tickers = SDK.getTicker();
      const tickers = await getTickers(accessToken);
			console.log(tickers);
      setExchangeRates({});
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
    }
  }, 300), [accessToken]);

  useEffect(() => {
    handleOAuthCallback();
  }, [handleOAuthCallback]);

  useEffect(() => {
    if (accessToken) {
      fetchExchangeRates();
    }
  }, [accessToken, fetchExchangeRates]);

  const initiateOAuth = async () => {
    try {
			const authorizationUrl = 'https://sandbox.uphold.com/authorize/'
				+ '53520d11d1a2890f6488b9fc71995e4e286da493'
				+ '?scope=user:read'
				+ '&state=' + '1234567890';

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
        <button onClick={initiateOAuth}>Login with Uphold</button>
      ) : (
        <>
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
                  {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
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
