export interface ModalCustomProps extends GeneralProps {
  isOpen: boolean
  showOpenModalBtn?: boolean
  textOpenModalBtn?: string
  callbackOpenModal?: () => void
  showCloseIconBtn?: boolean
  showCloseBtn?: boolean
  textCloseBtn?: string
  callbackCloseBtn?: () => void
  showActionBtn?: boolean
  textActionBtn?: string
  callbackActionBtn?: () => void
  showTitle?: boolean
  titleModal?: string
  blockClass?: string
}