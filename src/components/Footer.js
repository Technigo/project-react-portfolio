import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <h1>Contact</h1>
      <h3>Phone: +34 626 727 443</h3>
      <h3>Email: arnau.monforte@gmail.com</h3>
    </Container>
  )
};

export default Footer;

const Container = styled.div`
background: rgb(104, 137, 235);
display: flex;
flex-direction: column;
align-items: center;
h1 {
  background: salmon;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 17px;
}
h3 {
    color: white;
}
`;