import React from 'react';
import styled from 'styled-components'

const Footer = () => {
  return (

    <footer>
      <FooterStyling>
        <section className="section footer">
          <h2>Contact</h2>
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
    with: 
    `
