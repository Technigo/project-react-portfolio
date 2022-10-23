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
  padding: 5% 15%
`

export const SectionContainerGray = styled.section`
  background-color: #f4f4f4;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  padding: 5% 15%
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
  background-color: #f567a7ff;
  margin-bottom: 20px;
  align-self: center;

  @media (min-width 1024px) {
  font-size: 38px;
  line-height: 47px;
  }
`

export const Text = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  line-height: 29px;
  color: black;
  text-align: block;
`
export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; 
  justify-content: center;
  align-content: center;
  grid-gap: 20px;

  a {
    text-decoration: none;
  }

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr; 
    grid-gap: 30px;
  }
`

export const ProjectWrapper = styled.article`
    position: relative;
    img {
        width: 100%;
        height: 20vw;
        object-fit: cover;
    }

    a {
        text-decoration: none;
        color: black;
    }
`

export const ProjectTittle = styled.h3`
      font-family: 'Montserrat',
      font-weight: bold;
      text-align: left;
      font-size: 24px;
      text-transform: uppercase;
      color: #fd8e49ff;
      padding-top: 20px;
  }
`

export const SocialMediaIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 5px;

  img {
    margin: 0 10px;
    height: 75px;
  }
`

export const StyledFooter = styled.footer`
    background: #f567a7ff;
    height: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    `

export default GlobalStyles;