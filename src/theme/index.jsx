// Desc: Theme for styled-components created by Ashish Padhy ( @ Shurtu-gal)
// Date: 2023-07-13
// Modify as per your needs

import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#66FF00',
    primaryDark: '#245F02',
    secondary: '#2A2A2A',
    secondaryLight: '#6C757D',
    secondaryLighter: '#CDCDCD',
    background: '#E4EDF3',
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
