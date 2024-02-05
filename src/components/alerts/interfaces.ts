export type AlertsProps = {
  messageHighlight?: string;
  message: string;
  showCloseButton?: boolean;
};

export type MessageProps = {
  textHighlights?: string;
  text?: string;
  showCloseButton?: boolean;
  handleClose?: () => void;
};

export type BoxLoadingProps = {
  text?: string;
};
