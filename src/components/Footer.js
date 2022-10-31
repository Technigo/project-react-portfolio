import React from 'react';
import { FooterContainer } from './styled-components/FooterStyles';

const Contact = () => {
  return (
    <footer>
      <FooterContainer>
        <div className="contact-container">
          <h2>CONTACT</h2>
          <div>
            <p>Antonella Cardozo</p>
            <p>+46 73 963 36 03</p>
            <p>sylcardozo.sc@gmail.com</p>
          </div>
        </div>
      </FooterContainer>
    </footer>
  )
}

export default Contact;