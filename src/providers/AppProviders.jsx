import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CurrencyProvider } from '../context/CurrencyContext';
import { HelmetProvider } from 'react-helmet-async';

const AppProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <CurrencyProvider>
        <HelmetProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </HelmetProvider>
      </CurrencyProvider>
    </BrowserRouter>
  );
};

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProviders;
