import React from 'react'
import styled from 'styled-components/macro'

import footerImage from '../images/dunes_jeremy-bishop_footer.jpg';

// import { GlobalStyles } from './GlobalStyles'

// react component
export const Footer = () => {
  return (
    <StyledFooter>
      <BigText>CONTACT</BigText>
      <Text>Nina Berggren</Text>
      <Text>+46 70 302 48 57</Text>
      <Text>
        <a href="mailto:nina.w.berggren@gmail.com" target="_blank" rel="noopener noreferrer">
        nina.w.berggren@gmail.com
        </a>
      </Text>
    </StyledFooter>
  )
}

// styled component
export const StyledFooter = styled.div`
width: 100%;
/* height: 25vh; */
height: 250px;
background-image: url(${footerImage});
object-fit: cover;
background-position: center;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
align-items: center;
border: 2px solid pink;

a {
  text-decoration: none;
  color: var(--clr-light);
 }

a:hover {
  color: var(--clr-dark)
}

p {
  margin: 10px auto;
}
`;

export const BigText = styled.h3`
color: white;
margin: 10px;
`;

export const Text = styled.p`
color: white;
margin: 0px;
`;
