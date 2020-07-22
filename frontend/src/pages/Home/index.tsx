import React, { useState, useEffect, useCallback } from 'react';

import api from '../../services/api';

// import { Container } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

interface IProducts {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<IProducts[]>([]);

  useEffect(() => {
    api.get('products').then(response => setProducts(response.data));
  }, []);

  const handleAddProduct = useCallback((productId: number) => {
    console.log(productId);
  }, []);

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />

          <strong>{product.title}</strong>
          <span>R$ {product.price}</span>

          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />
              18232
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
};

export default Home;
