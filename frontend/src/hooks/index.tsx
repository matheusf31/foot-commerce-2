import React from 'react';

import { AuthProvider } from './auth';
import { CartProvider } from './cart';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => (
  <ToastProvider>
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  </ToastProvider>
);

export default AppProvider;
