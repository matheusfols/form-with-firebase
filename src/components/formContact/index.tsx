import { useForm, SubmitHandler, set } from 'react-hook-form';
import { Contact, FormContactProps } from './interfaces';
import { useHookFormMask } from 'use-mask-input';
import axios from 'axios';
import IconSpinner from '../icons/loading';
import { toast } from 'react-toastify';
import { useState } from 'react';
import MessageSuccess from '../alerts/MessageSuccess';

const FormContact = (props: FormContactProps) => {
  const { callbackSuccess, callbackError } = props;
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Contact>();

  const registerWithMask = useHookFormMask(register);

  const onSubmit: SubmitHandler<Contact> = async (data) => {
    try {
      const dateNow = new Date();
      const dataPost = {
        ...data,
        createdAt: dateNow.toISOString(),
        updatedAt: null,
      };

      const response = await axios.post(`/api/contact`, dataPost);
      const { status } = response;

      if (status === 200) {
        reset()
        setIsSuccess(true);
        if (callbackSuccess) {
          callbackSuccess();
        }
      }
    } catch (error) {
      if (callbackError) {
        callbackError();
      }
      console.error('Error on submit form', error);
    }
  };

  return (
    <>
      {isSuccess ? (
        <MessageSuccess text='Mensagem enviada com sucesso!' />
      ) : (
        <form id="formContact" className="form" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="form-title">
            Preencha o formulário abaixo e descubra como podemos ajudar a melhorar o
            trackeamento de dados da sua empresa.
          </h3>
          <div className="form-group group">
            <input
              type="text"
              id="coName"
              {...register('name')}
              className={`form-input ${errors.name ? 'form-input-error' : ''} peer`}
              placeholder=" "
              required
            />
            <label className="form-label form-label-peer" htmlFor="coName">
              Nome
            </label>
            {/* {errors && errors.name && (
					<span className="message-warning">
						{errors.name.message.toString()}
					</span>
				)} */}
          </div>
          <div className="form-group group">
            <input
              type="email"
              id="coEmail"
              {...register('email')}
              className={`form-input ${errors.email ? 'form-input-error' : ''
                } peer`}
              placeholder=" "
              required
            />
            <label className="form-label form-label-peer" htmlFor="coEmail">
              Email
            </label>
          </div>
          <div className="form-group group">
            <input
              type="tel"
              id="coPhone"
              {...registerWithMask("phone", ['(99) 9999-9999', '(99) 99999-9999'], {
                required: true
              })}
              className={`form-input ${errors.phone ? 'form-input-error' : ''
                } peer`}
              placeholder=" "
            />
            <label className="form-label form-label-peer" htmlFor="coPhone">
              Telefone
            </label>
          </div>
          <div className="flex form-group">
            <div className="flex items-center h-5">
              <input
                id="coTerms"
                type="checkbox"
                {...register('terms')}
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label className="form-label ml-2" htmlFor="coTerms">
              Eu concordo em receber comunicações
            </label>
          </div>
          <div className="form-group group">
            <button
              type="submit"
              id="btnSendContact"
              className="main-btn w-full"
              disabled={isSubmitting}
            >
              Quero falar com um Especialista {isSubmitting && <IconSpinner />}
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default FormContact;
