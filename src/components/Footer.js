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
    background: url("./images/nailpolish.jpg") no-repeat;
    background-size: 300%;

    height: 100vw;
    background-position-y: 6%;
    background-position-x: 35%;

  }
  
  span{
    text-align: center;
    font-size: 12px;
    margin-top: 1.5vw;
    margin-bottom: 5vw;
  }

  .footer-header{
    background-color: #f0efed;
    margin-top: 1.5vw;
  }

  /* Galaxy S8+ */
@media (min-width: 350px) and (max-width: 370px){

}

/* Galaxy S8+ */
@media (min-width: 350px) and (max-width: 370px){

}
/* TABLET */
@media (min-width: 667px) and (max-width: 1024px) {
  .section.footer{
    max-height: 50vw;
    background-size: 200%;
    background-position-y: 25%;
    background-position-x: 7%;
  }
}

}

@media (min-width: 1024px) {
  .section.footer{
    background-color:#f0efed;
    max-height: 20vw;
    background-size: 800px;
    background-position-y: 0%;
    background-position-x: 90%;
  }
  
}

    `
