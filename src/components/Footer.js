import React from 'react';
import styled from 'styled-components';

import { OuterWrapper, MediumHeadline } from 'styles/GlobalStyles';

export const Footer = () => {
  return (
    <OuterWrapper backGroundcolor="#5A415A">
      <MediumHeadline color="white">CONTACT</MediumHeadline>
      <ContactInfo>Tina Bruce</ContactInfo>
      <ContactInfo>+46 72 181 0112</ContactInfo>
      <ContactInfo>tinabruce42@hotmail.com</ContactInfo>
    </OuterWrapper>
  )
}

export const ContactInfo = styled.p`
  color: white;
`