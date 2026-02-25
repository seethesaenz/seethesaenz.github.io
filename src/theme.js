import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0073e6',
    },
    secondary: {
      main: '#333',
    },
    background: {
      default: '#f4f4f4',
    },
    error: {
      main: '#ff0000',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    },
    success: {
      main: '#4caf50',
    },
  },
  typography: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  },
  spacing: 8,
});

export default theme;
