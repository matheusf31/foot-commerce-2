import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  align-items: center;
  margin: 50px 0;
`;

export const Logo = styled(Link)`
  flex: 1;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;

export const Logout = styled.button`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;
