import { Section, Text } from '@react-email/components';
import * as React from 'react';
import { cssFooter } from './style';

const EmailFooter = () => {
  const dateNow = new Date();
  const yearNow = dateNow.getFullYear();
  return (
    <Section style={cssFooter}>
      <Text style={{ textAlign: 'center', color: '#706a7b' }}>
        © {yearNow} {process.env.NEXT_PUBLIC_TITLE_MAIN}, Todos os direitos
        reservados
      </Text>
    </Section>
  );
};

export default EmailFooter;
