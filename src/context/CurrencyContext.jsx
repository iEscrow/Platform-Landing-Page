import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState(() => {
    return localStorage.getItem('currency') || 'USD';
  });

  useEffect(() => {
    localStorage.setItem('currency', currency);
  }, [currency]);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);

CurrencyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
