import React, { createContext, useEffect } from 'react';
import useLocalStorage from '@hooks/useLocalStorege';
export const ThemeContext = createContext();
import PropTypes from 'prop-types';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
