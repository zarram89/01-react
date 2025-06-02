import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#315AB6',
    },
    secondary: {
      main: '#4CAF50',
    },
    background: {
      default: '#f5f7fa',
    },
  },
  typography: {
    fontFamily: 'Proxima Nova, Arial, sans-serif',
    h1: {
      fontFamily: 'Panton ExtraBold, Arial, sans-serif',
      fontSize: '1.8rem',
      '@media (min-width:768px)': {
        fontSize: '2.2rem',
      },
    },
  },
});