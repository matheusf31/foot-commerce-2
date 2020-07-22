import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import { useCart } from '../../hooks/cart';
import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.png';

const Header: React.FC = () => {
  const { cart } = useCart();

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Foot-commerce" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>
            {cart.length > 1 ? `${cart.length} itens` : `${cart.length} item`}
          </span>
        </div>

        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
};

export default Header;
