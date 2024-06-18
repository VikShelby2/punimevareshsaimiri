import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Theme } from '@radix-ui/themes';
import { ChakraProvider } from '@chakra-ui/react'

import { HashRouter  ,  BrowserRouter} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
 
  <ChakraProvider>
  <Theme>
    <App/>
    </Theme>
    </ChakraProvider>
    
    
    </BrowserRouter>
  </React.StrictMode>
);

