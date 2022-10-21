/* eslint-disable linebreak-style */
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const ContainerBeige = styled.section`
    background-color: #F3EFE7;
    width: 100%;
    padding: 50px 0 50px 0;
`

export const ContainerWhite = styled(ContainerBeige)`
    background-color: #ffffff;
`

export const StyledGrid = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr; 
    justify-content: center;
    align-content: center;
    gap: 30px;
    margin: 50px 250px;
`

export const Heading = styled.h1`
    margin: 0px;
`

export const Subheading = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    font-size: 25px;
    color: white;

    background-color: #E8415E;
    padding: 2px 10px;
`

export const SectionText = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    text-align: center;
    font-size: 15px;
    line-height: 25px;
    margin: 0 auto;
    padding: 25px 50px;
    max-width: 600px;
`

export default GlobalStyles;