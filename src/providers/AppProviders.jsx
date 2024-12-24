import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CurrencyProvider } from '../context/CurrencyContext';

const AppProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <CurrencyProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </CurrencyProvider>
    </BrowserRouter>
  );
};

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProviders;
