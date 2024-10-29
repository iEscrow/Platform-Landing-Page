import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const AppProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider>{children}</ThemeProvider>
    </BrowserRouter>
  );
};

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProviders;
