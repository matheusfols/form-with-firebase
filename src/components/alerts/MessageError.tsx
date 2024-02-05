import Image from 'next/image';
import IconError from '../../../public/images/icons/icon-error.png';
import type { MessageProps } from './interfaces';

const MessageError = (props: MessageProps) => {
  const { text, textHighlights, showCloseButton = false, handleClose } = props;
  return (
    <div className="Message MessageError">
      <div className="MessageContainer">
        <div className="MessageIcon MessageIcon--Error">
          <Image
            src={IconError}
            width={50}
            height={50}
            alt="Ícone Sucesso"
            className="MessageIconCare MessageIconCare--Error"
          />
        </div>
        <div className="MessageText">
          {textHighlights && (
            <strong className="MessageLabel MessageLabel--Highlights">{textHighlights}</strong>
          )}
          <label className="MessageLabel">{text}</label>
        </div>
        {showCloseButton && handleClose && (
          <div className="MessageButtons">
            <button className="MessageClose button-secundary" onClick={() => handleClose()} title="Fechar">
              Fechar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageError;
