import React, { useMemo, useCallback } from 'react';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';

import api from '../../services/api';

import { useCart } from '../../hooks/cart';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import { formatPrice } from '../../utils/format';

import { Container, ProductTable, Total } from './styles';

const Cart: React.FC = () => {
  const {
    cart,
    clearCart,
    handleRemoveItemFromCart,
    handleUpdateAmount,
  } = useCart();
  const { profile } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  /**
   * TODO
   * limpar carrinho se a order foi bem sucedida
   */

  const handleCreateOrder = useCallback(async () => {
    try {
      await api.post('orders', {
        customer_id: profile.id,
        products: cart.map(product => ({
          id: product.id,
          quantity: product.amount,
        })),
      });

      addToast({
        type: 'success',
        title: 'Compra efetuada com sucesso',
      });

      clearCart();
      history.push('/order/success');
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Ocorreu um erro ao efetuar a compra',
        description: err.response.data.message,
      });
    }
  }, [addToast, cart, profile.id, history, clearCart]);

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
    <>
      <Header />

      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>PRODUTO</th>
              <th>QUANTIDADE</th>
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
          <button
            disabled={cart.length === 0}
            type="button"
            onClick={handleCreateOrder}
          >
            Finalizar pedido
          </button>

          <Total>
            <span>TOTAL</span>
            <strong>{totalPrice}</strong>
          </Total>
        </footer>
      </Container>
    </>
  );
};

export default Cart;
