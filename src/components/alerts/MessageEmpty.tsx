import Image from 'next/image';
import IconAlert from '../../../public/images/icons/icon-alert.png';
import type { MessageProps } from './interfaces';

const MessageEmpty = (props: MessageProps) => {
  const { text = 'Tente usar termos diferentes!', textHighlights = 'Nenhum resultado encontrado.' } = props;

  return (
    <div className="Message MessageEmpty">
      <div className="MessageContainer">
        <div className="MessageIcon MessageIcon--Alert">
          <Image
            src={IconAlert}
            width={50}
            height={50}
            alt="Ícone Alerta"
            className="MessageIconCare MessageIconCare--Alert"
          />
        </div>
        <div className="MessageText">
          {textHighlights && (
            <strong className="MessageLabel MessageLabel--Highlights">{textHighlights}</strong>
          )}
          {text && <label className="MessageLabel">{text}</label>}
        </div>
      </div>
    </div>
  );
};

export default MessageEmpty;
