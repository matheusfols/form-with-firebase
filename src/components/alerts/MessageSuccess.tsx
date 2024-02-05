import Image from 'next/image';
import IconSuccess from '../../../public/images/icons/icon-success.png';
import type { MessageProps } from './interfaces';

const MessageSuccess = (props: MessageProps) => {
  const { text, textHighlights, showCloseButton = false, handleClose } = props;
  return (
    <div className="Message MessageSuccess">
      <div className="MessageContainer">
        <div className="MessageIcon MessageIcon--Success">
          <Image
            src={IconSuccess}
            width={50}
            height={50}
            alt="Ícone Sucesso"
            className="MessageIconCare MessageIconCare--Success"
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

export default MessageSuccess;
