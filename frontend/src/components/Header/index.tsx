import React from 'react';
import { MdShoppingBasket, MdPowerSettingsNew } from 'react-icons/md';

import { useCart } from '../../hooks/cart';
import { useAuth } from '../../hooks/auth';
import { Container, Logo, Cart, Logout } from './styles';

import logo from '../../assets/images/logo.png';

const Header: React.FC = () => {
  const { cart } = useCart();
  const { signOut } = useAuth();

  return (
    <Container>
      <Logo to="/">
        <img src={logo} alt="Foot-commerce" />
      </Logo>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>
            {cart.length > 1 ? `${cart.length} itens` : `${cart.length} item`}
          </span>
        </div>

        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>

      <Logout onClick={signOut}>
        <MdPowerSettingsNew size={36} color="red" style={{ marginLeft: 20 }} />
      </Logout>
    </Container>
  );
};

export default Header;
