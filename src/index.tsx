import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'src/App';

import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider } from '@mui/material';
import { theme } from './styles/theme';
import { MenuProvider } from 'src/context/menuContext'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MenuProvider>
        <App />
      </MenuProvider>
    </ThemeProvider>
  </React.StrictMode>
);
