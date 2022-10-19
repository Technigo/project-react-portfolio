import React from 'react'
import styled from 'styled-components'

export const Contact = () => {
  return (
    <ContainerColored>
      <div className="contact__headline">Contact</div>
      <div className="contact__details">Ulrika Öhman<br />040-706 1252<br />ulrikalovisa@gmail.com</div>
    </ContainerColored>
  )
};

export const ContainerColored = styled.section`
    background-color: #601835;
    display: block;

    width: 100%;
    height: 30vh;
    left: 0px;
    top: 0px;
    padding: 5px 0 100px 0;

    .contact__headline {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    font-size: 20px;
    color: white;
    padding-top: 50px;
}

    .contact__details {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    text-align: center;
    font-size: 15px;
    line-height: 25px;
    color: white;
    padding:  40px 0 80px;
    margin: 0;
}
`