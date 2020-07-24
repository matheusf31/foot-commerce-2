import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 60vh;
  height: 60vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    color: #fff;
    font-size: 30px;
  }
`;

export const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  padding: 16px;
  margin-top: 20px;
  background: #5999c1;
  text-decoration: none;
  border: 0;
  border-radius: 10px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.05, '#5999C1')};
  }

  span {
    color: #17181d;
  }
`;
