import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import api from '../../services/api';

import { formatPrice } from '../../utils/format';
import { useCart } from '../../hooks/cart';

// import { Container } from './styles';
import { ProductList } from './styles';

export interface IProducts {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Home: React.FC = () => {
  const { cart, handleAddToCart } = useCart();
  const [products, setProducts] = useState<IProducts[]>([]);

  useEffect(() => {
    api.get('products').then(response => setProducts(response.data));
  }, []);

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />

          <strong>{product.title}</strong>
          <span>{formatPrice(product.price)}</span>

          <button type="button" onClick={() => handleAddToCart(product)}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />
              {cart.find(cartProduct => cartProduct.id === product.id)
                ?.amount || 0}
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
};

export default Home;
