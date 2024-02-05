import { Column, Link, Row, Text } from '@react-email/components';
import * as React from 'react';
import { cssLink, cssParagraph } from './layout/style';
import EmailLayout from './layout/layout';
import { EmailContactProps } from './interfaces';

export const EmailContact = (props: EmailContactProps) => {
  const { email, name, phone, terms, message, url } = props;
  return (
    <EmailLayout>
      <>
        <Text style={cssParagraph}>Olá,</Text>
        <Text style={cssParagraph}>
          Você acaba de receber um contato via formulário
        </Text>
        <Text style={cssParagraph}>
          <Row>
            <Text>
              <strong>Nome:</strong>
            </Text>
            <Text>{name}</Text>
          </Row>
          <Row>
            <Text>
              <strong>E-mail:</strong>
            </Text>
            <Text>{email}</Text>
          </Row>
          <Row>
            <Text>
              <strong>Telefone:</strong>
            </Text>
            <Text>{phone}</Text>
          </Row>
          <Row>
            <Text>
              <strong>Aceitou receber comunicação:</strong>
            </Text>
            <Text>{terms ? 'Sim' : 'Não'}</Text>
          </Row>
          {url && (
            <Row>
              <Text>
                <strong>URL:</strong>
              </Text>
              <Text>
                <Link href={url} target="_blank" style={cssLink}>
                  {url}
                </Link>
              </Text>
            </Row>
          )}
          {message && (
            <Row>
              <Text>
                <strong>Mensagem:</strong>
              </Text>
              <Text>{message}</Text>
            </Row>
          )}
        </Text>
      </>
    </EmailLayout>
  );
};

export default EmailContact;
