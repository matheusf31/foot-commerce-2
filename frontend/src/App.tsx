import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Header from './components/Header';

import Routes from './routes';

import { CartProvider } from './hooks/cart';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />

      <CartProvider>
        <Header />
        <Routes />
      </CartProvider>
    </Router>
  );
};

export default App;
