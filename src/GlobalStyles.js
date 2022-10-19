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
    height: 30vh;
    left: 0px;
    top: 0px;

    display: block;
`

export const ContainerWhite = styled(ContainerBeige)`
    background-color: #ffffff;
`

export const Subheading = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    font-size: 25px;
    color: white;
    margin-top: 80px;

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
    padding: 25px 50px 80px 50px;
    max-width: 600px;
`

export default GlobalStyles;