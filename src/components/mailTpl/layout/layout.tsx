import * as React from 'react';
import {
  Body,
  Container,
  Column,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';
import {
  cssContainer,
  cssContent,
  cssFooter,
  cssLink,
  cssLogo,
  cssMain,
  cssParagraph,
  cssSectionBorder,
  cssSectionCenter,
  cssSectionsBorders,
} from './style';
import EmailFooter from './footer';
import EmailSignature from './signature';
import EmailHeader from './header';
import { EmailLayoutProps } from '../interfaces';

const EmailLayout = (props: EmailLayoutProps) => {
  const { children } = props;
  return (
    <Html>
      <Head />
      <Preview>You updated the password for your Twitch account</Preview>
      <Body style={cssMain}>
        <Container style={cssContainer}>
          <EmailHeader />
          <Section style={cssContent}>
            {children}

            <EmailSignature />
          </Section>
        </Container>

        <EmailFooter />
      </Body>
    </Html>
  );
};

export default EmailLayout;
