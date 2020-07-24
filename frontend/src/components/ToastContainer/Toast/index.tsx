import React, { useEffect } from 'react';
import { MdError, MdCancel, MdCheckCircle } from 'react-icons/md';

import { IToastMessage, useToast } from '../../../hooks/toast';

import { Container } from './styles';

interface IToastProps {
  message: IToastMessage;
  style: object;
}

const icons = {
  success: <MdCheckCircle size={24} />,
  error: <MdError size={24} />,
};

const Toast: React.FC<IToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  return (
    <Container
      type={message.type}
      description={message.description ? 'true' : 'false'}
      style={style}
    >
      {icons[message.type]}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => removeToast(message.id)} type="button">
        <MdCancel size={18} />
      </button>
    </Container>
  );
};

export default Toast;
