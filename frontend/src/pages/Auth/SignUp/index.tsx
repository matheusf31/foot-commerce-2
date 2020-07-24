import React, { useState, useCallback, FormEvent } from 'react';
import { MdKeyboardBackspace, MdEmail, MdPerson } from 'react-icons/md';
import { Link } from 'react-router-dom';

import api from '../../../services/api';
import logo from '../../../assets/images/undraw-web-shopping.svg';

import { Container, Content, InputContainer } from './styles';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [hasNameError, setHasNameError] = useState(false);
  const [hasEmailError, setHasEmailError] = useState(false);
  const [nameIsFocused, setNameIsFocused] = useState(false);
  const [emailIsFocused, setEmailIsFocused] = useState(false);

  const handleFormSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!name) {
        setHasNameError(true);
        return;
      }

      if (!email) {
        setHasNameError(false);
        setHasEmailError(true);
        return;
      }

      try {
        await api.post('/customers', {
          name,
          email,
        });

        setHasNameError(false);
        setHasEmailError(false);

        // msg de sucesso
      } catch (err) {
        setHasEmailError(true);
        console.log(err.response.data.message);
      }
    },
    [name, email],
  );

  return (
    <Container>
      <Content>
        <img src={logo} alt="foot-commerce-logo" width={300} />

        <form onSubmit={handleFormSubmit}>
          <h1>Crie sua conta</h1>

          <InputContainer isFocused={nameIsFocused} hasError={hasNameError}>
            <MdPerson color={!!name || nameIsFocused ? '#5999c1' : '#9e9e9e'} />
            <input
              onFocus={() => setNameIsFocused(true)}
              onBlur={() => setNameIsFocused(false)}
              placeholder="Nome"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </InputContainer>

          <InputContainer isFocused={emailIsFocused} hasError={hasEmailError}>
            <MdEmail
              color={!!email || emailIsFocused ? '#5999c1' : '#9e9e9e'}
            />
            <input
              onFocus={() => setEmailIsFocused(true)}
              onBlur={() => setEmailIsFocused(false)}
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </InputContainer>

          <button type="submit">Entrar</button>
        </form>

        <Link to="/">
          <MdKeyboardBackspace />
          Fazer login
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
