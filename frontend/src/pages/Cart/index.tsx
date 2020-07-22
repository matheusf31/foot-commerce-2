import React from 'react';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

const Cart: React.FC = () => {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <img
                src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg"
                alt="product-title"
              />
            </td>
            <td>
              <strong>product-title</strong>
              <span>product-priceFormatted</span>
            </td>
            <td>
              <div>
                <button type="button" onClick={() => console.log('decrement')}>
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={10} />
                <button type="button" onClick={() => console.log('increment')}>
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>product-subtotal</strong>
            </td>
            <td>
              <button
                type="button"
                onClick={() => console.log('remove-from-cart')}
              >
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$ total (191293)</strong>
        </Total>
      </footer>
    </Container>
  );
};

export default Cart;
