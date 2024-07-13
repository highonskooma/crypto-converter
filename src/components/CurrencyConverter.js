import React, { useState, useEffect } from 'react';
import FetchData from '../services/FetchData';
import debounce from 'lodash.debounce';

const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD'];

function getConversionRate(fromCurrency, toCurrency, ticker) {
	if (fromCurrency === toCurrency) return 1;
	if (!ticker || ticker.length === 0) return 0;
	const pair = `${toCurrency}${fromCurrency}`;
	const rate = ticker.find(rate => rate.pair === pair);
	return rate ? 1 / parseFloat(rate.ask) : 0;
}

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(0);
  const { currentCurrency, ticker, handleCurrencyChange } = FetchData();
  const [debouncedAmount, setDebouncedAmount] = useState(0);

  useEffect(() => {
    const debouncedSetAmount = debounce(setDebouncedAmount, 300);
    debouncedSetAmount(amount);
  }, [amount]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="0.00"
        value={amount}
        onChange={handleAmountChange}
      />
      <select
        value={currentCurrency}
        onChange={(e) => handleCurrencyChange(e.target.value)}
      >
        {currencies.map(currency => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
      {(debouncedAmount !== 0 && debouncedAmount !== '') ? (
        currencies.map(toCurrency => {
          if (toCurrency === currentCurrency) return null;
          const rate = getConversionRate(currentCurrency, toCurrency, ticker);
          const convertedAmount = debouncedAmount * rate;
          return (
            <p key={toCurrency}>
              {debouncedAmount} {currentCurrency} = {
                !convertedAmount ? "..." : convertedAmount.toFixed(2)
              } {toCurrency}
            </p>
          );
        })
      ) : (
        <p>Enter an amount to check the rates</p>
      )}
    </div>
  );
};

export default CurrencyConverter;
