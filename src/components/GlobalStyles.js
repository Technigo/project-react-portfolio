import styled, { createGlobalStyle } from 'styled-components';

/* sets styling for entire page */

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Montserrat', sans-serif;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
}
`;

export const OuterWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* sets the different background colours in the sections */
  background: ${(props) => (props.primary ? 'white' : '#f4f0ec4d;')};
  padding: 5% 0% 8% 0%;

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
  padding: 2%;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  background-color: #ff7b00;
  color: white;
  display: inline;
  align-self: center;
  margin-bottom: 5%;
  text-shadow: -0.5px 0.5px 0 #000;
`;

export const SecondaryHeading = styled.h3`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 1.5em;
text-align: center;
color: #ff7b00;
text-shadow: -0.5px 0.5px 0 #000;
`;

/* styles the standalone paragraphs in intro, tech etc */

export const CommonP = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 120%;
line-height: 138%;
padding: 0% 10% 0% 10%;
`;

/* skill tags for featured and other projects */

export const ProjectTags = styled.li`
font-family: "Roboto", sans-serif;
color: black;
padding: 0.5%;
line-height: 1.5;
background-color: #ff7b0038;
display: inline;
font-size: 90%;
margin-right: 1.5%;
`;