import { use, useEffect, useState } from 'react';
import { ModalCustomProps } from './interface';
import Modal from 'react-modal';
import style from './style.module.scss';

const ModalCustom = (props: ModalCustomProps) => {
  const {
    children,
    isOpen = false,
    showOpenModalBtn = false,
    textOpenModalBtn = 'Abrir',
    callbackOpenModal,
    textActionBtn = 'Abrir',
    showActionBtn = false,
    callbackActionBtn,
    showCloseBtn = false,
    showCloseIconBtn = true,
    textCloseBtn = 'Fechar',
    callbackCloseBtn,
    showTitle = false,
    titleModal,
    blockClass,
  } = props;

  const customStyles = {
    overlay: {
      zIndex: 1000,
      backgroundColor: 'rgb(108 106 106 / 75%)'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '500px',
    },
  };

  const [openModal, setOpenModal] = useState<boolean>(isOpen);

  const handleOpen = () => {
    setOpenModal(true);

    if (callbackOpenModal) {
      callbackOpenModal();
    }
  };

  const handleClose = () => {
    setOpenModal(false);

    if (callbackCloseBtn) {
      callbackCloseBtn();
    }
  };

  useEffect(() => {
    setOpenModal(isOpen);
  }, [isOpen]);

  return (
    <div>
      {showOpenModalBtn && !openModal && (
        <button
          className={`${style['ModalCustom-Open']} ${blockClass ?? ''}`}
          onClick={() => handleOpen()}
          title={textOpenModalBtn}
        >
          {textOpenModalBtn}
        </button>
      )}
      <Modal
        isOpen={openModal}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel="Example Modal"
        className={style.ModalCustom}
        bodyOpenClassName={style['ModalCustom-Open-Body']}
        htmlOpenClassName={style['ModalCustom-Open-Html']}
      >
        <div className={style.ModalCustom}>
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            {showCloseIconBtn && (
              <button
                type="button"
                className={style['ModalCustom-CloseButton-Icon']}
                data-modal-hide="default-modal"
                onClick={() => handleClose()}
                title={textCloseBtn}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">{textCloseBtn}</span>
              </button>
            )}
            {showTitle && (
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {titleModal}
                </h3>
              </div>
            )}
            {/* Modal body */}
            <div className="p-4 md:p-5 space-y-4">{children}</div>
            {/* Modal footer */}
            {showActionBtn ||
              (showCloseBtn && (
                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                  {showActionBtn && (
                    <button
                      onClick={() => {
                        if (callbackActionBtn) callbackActionBtn();
                      }}
                      data-modal-hide="default-modal"
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      title={textActionBtn}
                    >
                      {textActionBtn}
                    </button>
                  )}
                  {showCloseBtn && (
                    <button
                      onClick={() => handleClose()}
                      data-modal-hide="default-modal"
                      type="button"
                      className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                      title={textCloseBtn}
                    >
                      {textCloseBtn}
                    </button>
                  )}
                </div>
              ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalCustom;
