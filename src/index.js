import React from 'react';

import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';

import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <ChakraProvider>
    <ColorModeScript />
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
