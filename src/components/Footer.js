import React from 'react';
import styled from 'styled-components/macro';
import { InnerWrapper, OuterWrapper, SectionHeader, shark } from 'Styles';

const Footer = () => {
  return (
    <FooterOuter>
      <FooterInner>
        <FooterHeader>CONTACT</FooterHeader>
        <FooterText>
          <p>Joel Öhman</p>
          <a href="tel:+46708622215">
            <p>+46 70 862 22 15</p>
          </a>
          <a href="mailto:j.ohman@hotmail.com">
            <p>j.ohman@hotmail.com</p>
          </a>
        </FooterText>
        <AccessibilityStatement>
          <p>
            This website is accessible to users with disabilities, including
            persons using a keyboard and those with visual and cognitive
            impairments.
          </p>
        </AccessibilityStatement>
      </FooterInner>
    </FooterOuter>
  );
};

export default Footer;

const FooterOuter = styled(OuterWrapper)`
  padding: 80px 0;
  background-color: ${shark};

  @media (min-width: 800px) {
    padding: 100px 0;
  }
`;

const FooterInner = styled(InnerWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 1.4;
`;

const FooterHeader = styled(SectionHeader)`
  background-color: ${shark};

  @media (min-width: 800px) {
    margin-bottom: 70px;
  }
`;

const FooterText = styled.div`
  font-family: 'Montserrat';
  text-align: center;
  color: white;

  a {
    color: white;
  }
`;

const AccessibilityStatement = styled(FooterText)`
  padding-top: 100px;
`;
