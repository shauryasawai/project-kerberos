// Desc: Theme for styled-components created by Ashish Padhy ( @ Shurtu-gal)
// Date: 2023-07-13
// Modify as per your needs

import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#0070f3',
    primaryHover: '#0060d3',
    secondary: '#333333',
    secondaryHover: '#222222',
    background: '#ffffff',
    backgroundHover: '#f1f1f1',
    backgroundActive: '#e1e1e1',
    text: '#333333',
    textHover: '#222222',
    textActive: '#111111',
    textInverted: '#ffffff',
    textInvertedHover: '#f1f1f1',
    textInvertedActive: '#e1e1e1',
    border: '#eaeaea',
    borderHover: '#d1d1d1',
    borderActive: '#c1c1c1',
    borderInverted: '#333333',
    borderInvertedHover: '#222222',
    borderInvertedActive: '#111111',
    error: '#d32f2f',
    errorHover: '#b71c1c',
    errorActive: '#9a0007',
    warning: '#ffa000',
    warningHover: '#ff8f00',
    warningActive: '#ff6f00',
    success: '#388e3c',
    successHover: '#2e7d32',
    successActive: '#1b5e20',
    info: '#1976d2',
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  boxShadow: {
    primary: '0 0 0 3px rgba(0,118,255,0.3)',
    secondary: '0 0 0 3px rgba(0,118,255,0.3)',
    error: '0 0 0 3px rgba(211,47,47,0.3)',
    warning: '0 0 0 3px rgba(255,160,0,0.3)',
    success: '0 0 0 3px rgba(56,142,60,0.3)',
    info: '0 0 0 3px rgba(25,118,210,0.3)',
  },
};

const StyleThemeProvider = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default StyleThemeProvider;
