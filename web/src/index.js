import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, ThemeProvider } from '@chakra-ui/react';
import App from './App';

import './index.css';


ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
