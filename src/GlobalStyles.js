import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*, 
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`
export const SectionContainer = styled.section`
  background-color: white;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  padding: 10% 15%;

  @media (min-width 660px) }
  padding: 5% 15%;
  }
`

export const Headings = styled.h2`
  font-family: 'Montserrat';
  font-size: 22px;
  line-height: 27px;
  font-weight: bold;
  text-align: center;
  max-width: fit-content;
  padding: 1%;
  color: #ffffff;
  background-color: #f567a7ff

  @media (min-width 1024px) {
  font-size: 38px;
  line-height: 47px;
  }
`

export const Text = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 17px;
  line-height: 29px;
  color: black;
`

export default GlobalStyles;