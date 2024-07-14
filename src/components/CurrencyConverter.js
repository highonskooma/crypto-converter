import React, { useState, useEffect } from 'react';
import FetchData from '../services/FetchData';
import debounce from 'lodash.debounce';
import InputWithDropdown from './InputWithDropdown';
import '../styles/CurrencyConverter.css';

const currencies = ['USD', 'EUR', 'GBP', 'BTC', 'ETH', 'BAT', 'BRL', 'XRP', 'VOX', 'XAU'];

function calculateConversionRates(fromCurrency, tickers) {
	const rates = {};
	currencies.forEach(toCurrency => {
		if (fromCurrency === toCurrency) {
			rates[toCurrency] = 1;
		} else if (tickers && tickers.length > 0) {
			const pair = `${toCurrency}${fromCurrency}`;
			const pairAlt = `${toCurrency}-${fromCurrency}`
			var rate = tickers.find(rate => rate.pair === pair);
			if (rate === undefined) {
				rate = tickers.find(rate => rate.pair === pairAlt);
			}
			rates[toCurrency] = rate ? 1 / parseFloat(rate.ask) : 0;
		} else {
			rates[toCurrency] = 0;
		}
	});
	return rates;
}

const CurrencyConverter = () => {
	const [amount, setAmount] = useState(0);
	const { isLoading, currentCurrency, tickers, handleCurrencyChange } = FetchData();
	const [debouncedAmount, setDebouncedAmount] = useState(0);
	const [conversionRates, setConversionRates] = useState({});

	useEffect(() => {
		const debouncedSetAmount = debounce(setDebouncedAmount, 300);
		debouncedSetAmount(amount);
	}, [amount]);

	useEffect(() => {
		if (!isLoading && tickers) {
			const newRates = calculateConversionRates(currentCurrency, tickers);
			setConversionRates(newRates);
		}
	}, [isLoading, currentCurrency, tickers]);

	const handleAmountChange = (e) => {
		setAmount(e.target.value);
	};

	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
		<div className="conversion-results">
			<h3 className='conversion-title'>Currency Converter</h3>
			<p>Receive competitive and transparent pricing with no hidden spreads. See how we compare.</p>
			<InputWithDropdown
				handleAmountChange={handleAmountChange}
				currencies={currencies}
				handleCurrencyChange={handleCurrencyChange}
				amount={amount}
				currentCurrency={currentCurrency}
			/>
			<div>
			{(amount !== 0 && amount !== '') ? (
				currencies.map(toCurrency => {
					if (toCurrency === currentCurrency) return null;
					const rate = conversionRates[toCurrency];
					const convertedAmount = debouncedAmount * rate;
					return (
						<div key={toCurrency} className="conversion-item">
							<span className="amount">{convertedAmount.toFixed(2)}</span>
							<span className="currency">
								<span className="currency-icon">
									<img width="20" height="20" src={`/icons/${toCurrency.toUpperCase()}.png`} alt={toCurrency} />
								</span>
								<span className="currency-code">{toCurrency}</span>
							</span>
						</div>
					);
				})
			) : (
					<p>Enter an amount to check the rates</p>
				)}
				</div>
		</div>
	);
};

export default CurrencyConverter;
