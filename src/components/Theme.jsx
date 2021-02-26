import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { purple, amber } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: amber,
    background: {
      default: '#323230',
    },
  },
});

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
