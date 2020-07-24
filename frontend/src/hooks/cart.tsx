import React, { createContext, useContext, useCallback, useState } from 'react';

import { formatPrice } from '../utils/format';

import { IProducts } from '../pages/Home';

interface ICart extends IProducts {
  amount: number;
  subtotal: string;
}

interface ICartContextData {
  cart: ICart[];
  clearCart(): void;
  handleAddToCart(product: IProducts): void;
  handleRemoveItemFromCart(productId: number): void;
  handleUpdateAmount(productId: number, productAmount: number): void;
}

const CartContext = createContext<ICartContextData>({} as ICartContextData);

// colocar carrinho no storage do navegador para ele não sumir ao atualizar

const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<ICart[]>([]);

  const handleAddToCart = useCallback(
    (product: IProducts) => {
      const copyOfCart = [...cart];

      if (copyOfCart.length > 0) {
        const productIndex = copyOfCart.findIndex(
          cartProduct => cartProduct.id === product.id,
        );

        if (productIndex >= 0) {
          copyOfCart[productIndex].amount += 1;
          copyOfCart[productIndex].subtotal = formatPrice(
            copyOfCart[productIndex].price * copyOfCart[productIndex].amount,
          );

          setCart([...copyOfCart]);
          return;
        }
      }

      setCart([
        ...copyOfCart,
        { ...product, amount: 1, subtotal: formatPrice(product.price) },
      ]);
    },
    [cart],
  );

  const handleRemoveItemFromCart = useCallback(
    (productId: number) => {
      const copyOfCart = [...cart];

      const productIndex = copyOfCart.findIndex(
        cartProduct => cartProduct.id === productId,
      );

      if (productIndex >= 0) {
        copyOfCart.splice(productIndex, 1);

        setCart([...copyOfCart]);
      }
    },
    [cart],
  );

  const handleUpdateAmount = useCallback(
    (productId: number, productAmount: number) => {
      const copyOfCart = [...cart];

      const productIndex = copyOfCart.findIndex(
        cartProduct => cartProduct.id === productId,
      );

      if (productIndex >= 0) {
        if (productAmount <= 0) {
          setCart([...copyOfCart]);
          return;
        }

        copyOfCart[productIndex].amount = productAmount;
        copyOfCart[productIndex].subtotal = formatPrice(
          copyOfCart[productIndex].price * productAmount,
        );

        setCart([...copyOfCart]);
      }
    },
    [cart],
  );

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        clearCart,
        handleAddToCart,
        handleRemoveItemFromCart,
        handleUpdateAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

function useCart(): ICartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { useCart, CartProvider };
