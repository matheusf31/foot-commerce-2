import React, { useState, useCallback, FormEvent } from 'react';
import { MdKeyboardTab, MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { useAuth } from '../../../hooks/auth';
import logo from '../../../assets/images/undraw-web-shopping.svg';

import { Container, Content, InputContainer } from './styles';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleFormSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!email) {
        setHasError(true);
        return;
      }

      try {
        signIn(email);

        setHasError(false);
      } catch (err) {
        setHasError(true);
        console.log(err.response.data.message);
      }
    },
    [email, signIn],
  );

  return (
    <Container>
      <Content>
        <img src={logo} alt="foot-commerce-logo" width={300} />

        <form onSubmit={handleFormSubmit}>
          <h1>Faça seu login</h1>

          <InputContainer hasError={hasError} isFocused={isFocused}>
            <MdEmail color={!!email || isFocused ? '#5999c1' : '#9e9e9e'} />
            <input
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </InputContainer>

          <button type="submit">Entrar</button>
        </form>

        <Link to="/signUp">
          Criar conta
          <MdKeyboardTab />
        </Link>
      </Content>
    </Container>
  );
};

export default SignIn;
