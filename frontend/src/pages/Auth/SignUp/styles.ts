import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface IInputContainer {
  hasError: boolean;
  isFocused: boolean;
}

// interface IInputName {
//   hasError: boolean;
//   isFocused: boolean;
// }

// interface IInputEmail {
//   hasError: boolean;
//   isFocused: boolean;
// }

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;

  img {
    transition: transform 0.2s;

    &:hover {
      transform: translateX(-10px) translateY(-10px);
    }
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    margin: 60px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 48px;
      color: #fff;
    }

    button {
      width: 100%;
      background: #5999c1;
      border-radius: 10px;
      padding: 16px;
      border: 0;
      font-weight: 500;
      margin-top: 16px;
      color: #17181d;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#5999c1')};
      }
    }
  }

  a {
    color: #fff;
    display: block;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 12px;
    }

    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }
`;

export const InputContainer = styled.div<IInputContainer>`
  background: #252535;
  border-radius: 10px;
  padding: 0 16px;
  width: 100%;
  border: 2px solid #252535;

  display: flex;
  align-items: center;

  ${props =>
    props.isFocused &&
    css`
      border: 2px solid #5999c1;
    `}

  ${props =>
    props.hasError &&
    css`
      border: 2px solid #c53030;
    `}

  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 10px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #fff;
    padding: 16px 0;

    &::placeholder {
      color: #9e9e9e;
    }
  }
`;

// export const InputName = styled(InputContainer)``;

// export const InputEmail = styled(InputContainer)``;
