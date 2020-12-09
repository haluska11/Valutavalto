import React, { useState, useEffect, createContext } from 'react';

const themes = {
  dark: {
    backgroundColor: '#FFCC00',
    color: 'rgb(36, 36, 36)',
  },
  light: {
    backgroundColor: 'rgb(36, 36, 36)',
    color: 'white',
  },
};

const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {},
};
const ThemeContext = createContext(initialState);

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('dark') === 'true';
    setDark(isDark);
  }, [dark]);

  const toggle = () => {
    const isDark = !dark;
    localStorage.setItem('dark', JSON.stringify(isDark));
    setDark(isDark);
  };

  const theme = dark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
