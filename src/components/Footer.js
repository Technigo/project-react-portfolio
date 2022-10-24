import React from 'react';
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterStyling>
      <footer>

        <section className="section footer">
          <div className="footer-header"><h2>Contact</h2>
            <a href="mailto: mia_dahlgren@outlook.com">Mia Dahlgren</a><br />
            <a href="tel:+46736685894"> +46 736 68 58 94</a><br />
            <a href="mailto: mia_dahlgren@outlook.com"> mia_dahlgren@outlook.com</a><br />
            <a href="mailto: mia_dahlgren@outlook.com">Stockholm, Sweden.</a><br />
            <span>© Mia Dahlgren 2022</span>
          </div>
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
  h2 {
    position: absolute;
    margin-top: -20%;
    margin-left: 30%; 
    background-color: #F6AD7B;
    width: fit-content;
    text-align: center;
    font-family: 'Raleway Dots', cursive;
    padding: 6px;
    margin-bottom: 10px;
    color: white;
    font-size: 20px;
  }
  
  span{
    text-align: center;
    font-size: 12px;
    margin-top: 1.5vw;
    margin-bottom: 5vw;
  }

  .footer-header{
    position: absolute;
    margin-top: 15%;
    margin-left: 20%; 
    background: transparent;
    font-size: 16px;
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

  .footer-header{
    position: absolute;
    margin-top: 7%;
    margin-left: 42%; 
    background: transparent;
  }
  
}

    `
