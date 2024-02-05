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
import * as React from 'react';
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

const EmailHeader = () => {
  return (
    <>
      <Section style={cssLogo}>
        <h1>Logo</h1>
      </Section>
      <Section style={cssSectionsBorders}>
        <Row>
          <Column style={cssSectionBorder} />
          <Column style={cssSectionCenter} />
          <Column style={cssSectionBorder} />
        </Row>
      </Section>
    </>
  );
};

export default EmailHeader;
