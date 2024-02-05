import * as React from 'react';
import { Text } from '@react-email/components';
import { cssParagraph } from './style';

const EmailSignature = () => {
  return (
    <Text style={cssParagraph}>
      Obrigado,
      <br />
      Equipe {process.env.NEXT_PUBLIC_TITLE_MAIN}
    </Text>
  );
};

export default EmailSignature;
