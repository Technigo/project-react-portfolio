import React from 'react';
import ContentWrapper from './Shared/ContentWrapper';

const Footer = () => {
  return (
    <ContentWrapper as="footer">
      <h2 className="contact">CONTACT</h2>
      <p className="text" role="contentinfo">Petra Eriksson</p>
      <p className="text" role="contentinfo">+46 761 81 35 19</p>
      <p className="text" role="contentinfo">eriksson.petra@gmail.com</p>
    </ContentWrapper>
  );
};
export default Footer;
