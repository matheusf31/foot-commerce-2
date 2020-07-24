import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface IContainerProps {
  type?: 'error' | 'success';
  description?: string;
}

export const Container = styled(animated.div)<IContainerProps>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  background: #e6fffa;
  color: #2e656a;

  ${props =>
    props.type === 'error' &&
    css`
      background: #fddede;
      color: #c53030;
    `}

  & + div {
    margin-top: 8px;
  }

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    border: 0;
    background: transparent;

    color: inherit;
  }

  ${props =>
    props.description === 'false' &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
