import styled, { createGlobalStyle } from 'styled-components';

export const OuterWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  `;
export const InnerWrapper = styled.section`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0 auto
    
    `;
export const MainHeading = styled.h2`
  font-size: 150%;
  line-height: 1;
  padding: 10px 15px;
  font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
  background-color: red;
  color: white;
  display: inline;
  align-self: center;
`;

export const SecondaryHeading = styled.h3`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 1.5em;
text-align: center;
`;

export const ProjectTags = styled.li`
padding: 0;
font-family: "Roboto", sans-serif;
color: black;
padding: 5px 10px;
background-color: pink;
display: inline;
font-size: 16px;
margin-right: 5px;

@media (max-width: 800px) {
  padding: 2px;
  font-size: 14px;
  margin-right: 3px;
}
`;

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Montserrat', sans-serif;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
}
`;
