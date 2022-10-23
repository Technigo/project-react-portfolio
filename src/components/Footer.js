import React from 'react';
import styled from 'styled-components'
import SectionHeaderStyling from 'styles/SectionHeaderStyling';

const Footer = () => {
  return (
    <FooterStyling>
      <footer>

        <section className="section footer">
          <SectionHeaderStyling><div className="footer-header"><h2>Contact</h2></div></SectionHeaderStyling>
          <a href="mailto: mia_dahlgren@outlook.com">Mia Dahlgren</a>
          <a href="tel:+46736685894"> +46 736 68 58 94</a>
          <a href="mailto: mia_dahlgren@outlook.com"> mia_dahlgren@outlook.com</a>
          <a href="mailto: mia_dahlgren@outlook.com">Stockholm, Sweden.</a>
          <span>© Mia Dahlgren 2022</span>

        </section>

      </footer>
    </FooterStyling>
  )
}

export default Footer

const FooterStyling = styled.footer`

    
  .section.footer{
    background-color: tan;
    font-size: 16px;
    text-align: center;

  }
  
  span{
    text-align: center;
    font-size: 12px;
    margin-top: 1.5vw;
    margin-bottom: 5vw;
  }

  .footer-header{
    background-color: tan;
    margin-top: 1.5vw;
  }

    `
