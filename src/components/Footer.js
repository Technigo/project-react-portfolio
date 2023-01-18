import React from 'react';
import styled from 'styled-components'

export const Footer = () => {
  return (
    <StyledFooter>
      <h2>CONTACT</h2>
      <h3>Kaja Wilbik</h3>
      <h3>Phone: +46 720 299 056</h3>
      <a href="mailto:wilbik.kaja@gmail.com">E-mail: wilbik.kaja@gmail.com</a>
    </StyledFooter>

  )
}

const StyledFooter = styled.div`
        display: flex;
        text-align: center;
        background-color: #779a96;
        flex-direction: column;
        flex-wrap: wrap;
        margin-top:15px;
        padding-bottom: 15px;
        border-top: solid black;
    
    p, a {
        font-size: x-large;

    }

`