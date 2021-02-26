import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4267B2',
    },
    secondary: indigo,
    background: {
      default: '#E9EBEE',
    },
  },
});

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
