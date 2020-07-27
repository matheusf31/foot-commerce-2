import React from 'react';
import { MdDone } from 'react-icons/md';

import { Container, Content, HomeLink } from './styles';

const CreateOrderSuccess: React.FC = () => {
  return (
    <Container>
      <Content>
        <MdDone size={120} color="#30C552" />

        <h3>Compra efetuada com sucesso!</h3>

        <HomeLink to="/">
          <span>VOLTAR PARA A HOME</span>
        </HomeLink>
      </Content>
    </Container>
  );
};

export default CreateOrderSuccess;
