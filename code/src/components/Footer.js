import React from 'react';
import { OuterWrapper, MediumHeadline, Paragraph } from 'styles/GlobalStyles';

export const Footer = () => {
  return (
    <OuterWrapper backGroundcolor="#5A415A">
      <MediumHeadline color="white">CONTACT</MediumHeadline>
      <Paragraph color="white">Tina Bruce</Paragraph>
      <Paragraph color="white">tina@fishface.se</Paragraph>
    </OuterWrapper>
  )
}