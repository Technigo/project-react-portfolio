/* eslint-disable linebreak-style */
import styled, { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    font-family: 'montserrat';
a {
    text-decoration: none;
    color: black;
}
} `;

export const Section = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
`

export const HeaderText = styled.div`
color: white;
max-width: 45%;

h1 {
    letter-spacing: 0.10rem;
    max-width: 55vw;
    margin-left: 7%;
    font-size: 0.5rem;
}

h2 {
    font-display: flex;
    letter-spacing: 0.10rem;
    max-width: 50vw;
    font-weight: lighter;
    margin-left: 7%;
    font-size: 1.5rem;
}

h3 {
    font-display: flex;
    letter-spacing: 0.10rem;
    max-width: 50vw;
    font-weight: lighter;
    margin-left: 7%;
    font-size: 1rem;

}
`
export const SectionHeading  = styled.h4`
max-width: fit-content;
color: white;
background-color:#acbdd3;
font-family: 'Montserrat';
letter-spacing: 0.10rem;
font-weight: Bold;
font-size: 18px;
padding: 0.5%;
box-shadow: #938690 0px 2px 4px, #544351 0px 2px 2px;
`

export const Heading = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-size: 1.1em;
    font-weight: 700;
    letter-spacing: 0.01em;
    color: #5d80b6;
`
export const ProjectsWrapper = styled.div`
 
 a {
        
    }
`



export default GlobalStyles;