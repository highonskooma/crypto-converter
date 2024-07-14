import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const InputWithDropdown = ({ handleAmountChange, currencies, handleCurrencyChange, amount, currentCurrency }) => {
  return (
    <>
      <InputGroup className="mb-3 h-50">
        <Form.Control 
          value={amount} 
          aria-label="Text input with dropdown button" 
          onChange={handleAmountChange}
          type="number"
          placeholder="0.00"
        />
        <DropdownButton
          variant="outline-secondary"
          title={currentCurrency}
          id="input-group-dropdown-2"
          align="end"
        >
          {currencies.map(currency => (
            <Dropdown.Item 
              key={currency} 
              onClick={() => handleCurrencyChange(currency)}
              active={currency === currentCurrency}
            >
              {currency}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </InputGroup>
    </>
  );
}

export default InputWithDropdown;
