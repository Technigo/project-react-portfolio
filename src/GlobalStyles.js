/* eslint-disable linebreak-style */
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`
export const ContainerColored = styled.div`
  background-color: rgba(240, 234, 237, 0.8);
  padding-right: 6em; 
  padding-left: 6em; 
  padding-top: 2em; 
  padding-bottom: 2em; 

  @media (min-width: 768px) {
  padding-right: 10em; 
  padding-left: 10em;
    
  }
  @media (min-width: 1024px) {
  padding-right: 15em; 
  padding-left: 15em;
    
  }
   `
export const ContainerWhite = styled(ContainerColored)`
background-color:white; `

export const Pitch = styled.p`
font-family:"Roboto", sans-serif;
`
export const SectionHeader = styled.h2`
  text-align: center;
  background-color: rgb(185, 0, 91);
  font-size: 30px;
  text-transform: uppercase;
  color: white;
  padding:3px;
  font-family:'montserrat', sans-serif;
`
export const HeaderContainer = styled.div`
  display: flex; 
  justify-content: center;
  grid-column: span 4; 
`
export const TagWrapperText = styled.p`
 font-family: "Roboto", sans-serif;
    color: white;
    font-weight: bold;
    background-color: rgb(185, 0, 91);
    text-decoration: none;
    text-align: center;
    font-size: 12px; 
    line-height: 12px;
    padding: 4px;
    margin: 3px;
    border-radius: 5px;
`
export const TagWrapper = styled.div`
display: flex;`

export default GlobalStyles;