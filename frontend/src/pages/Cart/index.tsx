import React, { useMemo } from 'react';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { formatPrice } from '../../utils/format';
import { useCart } from '../../hooks/cart';
import { Container, ProductTable, Total } from './styles';

const Cart: React.FC = () => {
  const { cart, handleRemoveItemFromCart, handleUpdateAmount } = useCart();

  const totalPrice = useMemo(
    () =>
      formatPrice(
        cart.reduce((totalSum, product) => {
          return totalSum + product.price * product.amount;
        }, 0),
      ),
    [cart],
  );

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
          {cart.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>
                  R$
                  {product.price}
                </span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    onClick={() =>
                      handleUpdateAmount(product.id, product.amount - 1)
                    }
                  >
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button
                    type="button"
                    onClick={() =>
                      handleUpdateAmount(product.id, product.amount + 1)
                    }
                  >
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => handleRemoveItemFromCart(product.id)}
                >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>{totalPrice}</strong>
        </Total>
      </footer>
    </Container>
  );
};

export default Cart;
