/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react'
import styled from 'styled-components/macro'

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterH6 tabIndex="0">Contact</FooterH6>
      <p tabIndex="0">Sarah Kneedler</p>
      <p>
        <a
          href="tel:+46704914901">
         +46 704 91 49 01
        </a>
      </p>
      <p>
        <a
          href="mailto:kneedlersarah@gmail.com">
         kneedlersarah@gmail.com
        </a>
      </p>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.footer`
    background-color: rgb(48, 48, 130);
    text-align: center;
    display: block;
    padding-bottom: 10%;

    @media (min-width: 1024px) {
        padding-bottom: 5%;
    }
    & p {
     color: white;
     padding: 0%;
     margin: 1%;
    }
    & a {
     color: white;
     padding: 0%;
    }
    @media (min-width: 1024px) {
    & a:hover {
        text-decoration: underline;
    }
}
`
const FooterH6 = styled.h6` 
    font-family: "Montserrat";
    font-weight: bold;
    font-size: 21px;
    line-height: 25px;
    letter-spacing: 0.03em;
    color: white;
    text-align: center;
    padding-top: 5rem;
    padding-bottom: 3rem;
    text-transform: uppercase;
  `