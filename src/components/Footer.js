import React from 'react';
import styled from 'styled-components'
import SectionHeaderStyling from 'styles/SectionHeaderStyling';

const Footer = () => {
  return (

    <footer>
      <FooterStyling>
        <section className="section footer">
          <SectionHeaderStyling><div><h2>Contact</h2></div></SectionHeaderStyling>
          <a href="mailto: mia_dahlgren@outlook.com">Mia Dahlgren</a>
          <a href="tel:+46736685894"> +46 736 68 58 94</a>
          <a href="mailto: mia_dahlgren@outlook.com"> mia_dahlgren@outlook.com</a>
          <a href="mailto: mia_dahlgren@outlook.com">Stockholm, Sweden.</a>
          <p>© Mia Dahlgren 2022</p>

        </section>
      </FooterStyling>
    </footer>
  )
}

export default Footer

const FooterStyling = styled.footer`
    background-color: pink;
    text-align: center;
    display:flex;
    flex-direction: column;
    
  .section.footer{
    background-color:tan;
    font-size: 16px;
  }
  
   .section.footer p{
   font-size: 12px;
  }
    `
