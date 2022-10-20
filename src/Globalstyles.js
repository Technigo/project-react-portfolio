/* eslint-disable linebreak-style */
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

`
/* EACH SECTIONS OF PORTFOLIO */

export const SectionContainer = styled.section`
    padding: 55px 30px;
    background-color: ${(props) => (props.bgColor || '#ffffff')};
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 768px) and (max-width: 991px) {
        padding: 20px 50px;
    }

    @media (min-width: 992px) {
        padding: 50px 15%;
    }
`;

/* THE MAIN HEADINGS OF EACH SECTION */

export const SectionHeadings = styled.h2`
    font-family: 'Montserrat';
    font-style: normal;
    font-size: 1.2rem;
    font-weight: 700;
    color: #ffffff;
    background-color: ${(props) => (props.bgColor || '#829460')};
    line-height: 1.68rem;
    align-self: center;
    max-width: fit-content;
    padding: 0 1%;
    margin-bottom: 20px;
`;

/* THE COLORED SMALLER HEADINGS OF ARTICLES */

export const SubHeadings = styled.h3`
    font-family: 'Roboto';
    font-style: normal;
    font-size: 1.1em;
    font-weight: 700;
    color: ${(props) => (props.color || '#112261')}; ;
    padding: 10px 0;
    letter-spacing: 0.01em;
  
`
/* INTRO, TECH AND FOOTER TEXT */

export const SectionText = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => (props.color || 'black')};
    line-height: 1.81rem;
    text-align: center;
    
  
    @media (min-width: 768px) and (max-width: 991px) {
        font-size: 1.06rem;
        width: 80%;
        align-self: center;
    }

    @media (min-width: 992px) {
        font-size: 1.062rem;
        width: 70%;
        align-self: center;
    }

 `
/* ARTICLE TEXT */

export const ArticleText = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.1rem;
    color: black;
    line-height: 1.81rem;
    letter-spacing: 0.01rem;

`
/* TECH TAGS UNDER PROJECTS */

export const Tags = styled.ol`
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 0;  

    &:hover {
        text-decoration: none;
    }

    li {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        letter-spacing: 0.01rem;
        color: #ffffff;
        background-color: ${(props) => (props.bgColor || '#f96666')};
        border-radius: 3px;
        padding: 5px;
        margin: 5px 10px 0 0;
    }
`;

/* LITTLE COLORED FIGURE IN INTRO */

export const StartFigure = styled.img`
    filter: invert(1) sepia(0) saturate(1) hue-rotate(-187deg);
    padding-right: 5px;
 `

/* SCROLL TO TOP */

export const ScrollBtn = styled.button`
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: black;
    display: none;
    position: fixed;
    bottom: 10%;
    right: 10%;
    z-index: 99;
    border: none;
    background-color: #e8dcdc;
    cursor: pointer;
    padding: 15px;
    border-radius: 2px;
    box-shadow: 7px 8px 23px -7px rgba(0,0,0,0.87);

    &:hover {
        opacity: 0.6
    }

`

export default GlobalStyles;