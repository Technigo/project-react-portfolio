/* eslint-disable linebreak-style */
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }
`
export const ContainerWhite = styled.section`
    padding: 55px 30px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ffffff;

    @media (min-width: 768px) and (max-width: 991px) {
        padding: 20px 50px;
    }

    @media (min-width: 992px) {
        padding: 50px 180px;
    }
`;

export const ContainerGrey = styled(ContainerWhite)`
     background-color: #eeeeee;
`;

export const GridWrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 50px;
    background-color: ${({ bgColor }) => (bgColor ? '#ffffff' : '#eeeeee')};
    @media screen and (max-width: 960px) {
    padding: 0 30px;
    }
`;

export const ProjectCard = styled.article`
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 50px;
    background-color: ${({ bgColor }) => (bgColor ? '#ffffff' : '#eeeeee')};
    @media screen and (max-width: 960px) {
    padding: 0 30px;
    }
`;

export const SectionHeadings = styled.h2`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 1.2em;
    color: #ffffff;
    background-color: #829460;
    line-height: 1.68em;
    align-self: center;
    max-width: fit-content;
    padding: 0 1%;
    margin-bottom: 20px;
`;

export const SubHeadings = styled.h3`
    font-family: 'Roboto';
    padding: 10px 0;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.01em;
    color: #f96666;
    font-size: 1.1em;
`

export const FooterHeading = styled(SectionHeadings)`
    color: #ffffff;
    background-color: transparent;
    padding-bottom: 1rem;
`

export const SectionText = styled.p`
    font-weight: 400;
    font-size: 1.062em;
    line-height: 1.81em;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    
  
    @media (min-width: 768px) and (max-width: 991px) {
        font-size: 1em;
        width: 80%;
        align-self: center;
    }

    @media (min-width: 992px) {
        font-size: 1em;
        width: 70%;
        align-self: center;
    }

 `
export const FooterText = styled(SectionText)`
    color: #fff;
`

export const ArticleText = styled.p`
    font-family: 'Roboto';
    line-height: 1.81em;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.01em;
    color: black;
    font-size: 1.1em;
`

export const Tags = styled.li`
    border-radius: 4px;
    background: none;
    white-space: nowrap;
    padding: 10px 20px;
    font-size: 16px;
    color: #fff;
    outline: none;
    border: 2px solid #fff;
    cursor: pointer;
    overflow: hidden;
    position: relative;
   
`;

export const StartFigure = styled.img`
   filter: invert(1) sepia(0) saturate(1) hue-rotate(-187deg);
    padding-right: 5px;
 `

export default GlobalStyles;