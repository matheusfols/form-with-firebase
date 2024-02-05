import { sendGTMEvent } from '@next/third-parties/google';
import FormContact from '.';
import ModalCustom from '../modal';
import { ButtonContactProps } from './interfaces';
import { toast } from 'react-toastify';
import { useState } from 'react';

const ButtonContact = (props: ButtonContactProps) => {
  const { text, callBack, area } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const SendEvent = (action: string) => {
    sendGTMEvent({
      event: 'contactForm',
      action,
      area,
    });
  };

  const onSuccess = () => {
    setIsOpen(false);
    toast.success('Mensagem enviado com sucesso', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <ModalCustom
      isOpen={isOpen}
      showOpenModalBtn={true}
      textOpenModalBtn={text}
      textCloseBtn="Cancelar"
      callbackOpenModal={() => SendEvent('open')}
      callbackCloseBtn={() => SendEvent('close')}
      blockClass="main-btn"
    >
      <FormContact />
    </ModalCustom>
  );
};

export default ButtonContact;
