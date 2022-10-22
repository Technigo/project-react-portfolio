/* eslint-disable no-confusing-arrow */
import styled, { createGlobalStyle } from 'styled-components';

/* Styling for the body is put here instead of in index.css */
export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0 auto;
  }
  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: 1024px;
    font-family: 'Montserrat', sans-serif;

    @media (min-width: 1024px){
      border: 3px solid rgb(0, 51, 51, 0.2);
    }
  }
`

/* Wrappers for the whole section in each component */
export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  background: ${(props) => (props.primary ? 'white' : '#003333')};
  padding: 10%;

  @media (min-width: 600px) and (max-width: 1023px){
    padding: 8% 10%;
  }

  @media (min-width: 1024px){
    padding: 5% 10%;
  }
`
/* Wrapper for sections that have displayed images */
export const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: 100%;

  @media (min-width: 668px) and (max-width: 1023px){
    grid-template-columns: 50% 50%;
  }

  @media (min-width: 1024px){
    grid-template-columns: 50% 50%;
  }
         
`
/* Styling of writing style (paragraph and headings) */
export const Paragraph = styled.p`
  font-size: 15px;
  color: ${(props) => (props.primary ? '#003333' : 'white')};
  line-height: 30px;

  @media (min-width: 600px) and (max-width: 1023px){
    font-size: 16px;
  }

  @media (min-width: 1024px){
    font-size: 18px;
  }
`
export const ProjectParagraph = styled(Paragraph)`
  font-size: 15px;
  line-height: 20px;
  margin: 2% 2%;
  display: inline;

  @media (min-width: 600px) and (max-width: 1023px){
    font-size: 16px;
  }

  @media (min-width: 1024px){
    font-size: 18px;
  }
`
export const Title = styled.h2`
  font-size: 18px;
  color: white;
  margin-bottom: 5%;

  @media (min-width: 520px) and (max-width: 1023px){
    font-size: 25px;
  }

  @media (min-width: 1024px){
    font-size: 30px;
  }
`
export const SectionTitle = styled(Title)`
  background-color: ${(props) => (props.primary ? '#003333' : 'white')};
  color: ${(props) => (props.primary ? 'white' : '#003333')};
  padding: 10px;
  display: inline-block;
  font-size: 18px;

  @media (min-width: 668px) and (max-width: 1023px){
    font-size: 20px;
  }
  
  @media (min-width: 1024px){
    font-size: 25px;
  }
`

export const Heading = styled.h3`
  margin: 2%;
  color: ${(props) => (props.primary ? 'white' : '#003333')};
  font-size: 15px;
`
export const OverlinedHeading = styled(Heading)`
  margin: 0 auto;
  display: inline-block;
  text-decoration: ${(props) => (props.primary ? ' 2px overline white' : '2px overline #102a29')};
  font-weight: 600;

  &:hover{
    text-decoration: 2px underline white; 
  }
`
/* For icons containers and the icons button styling found in Header and Footer */
export const IconContainer = styled.div`
  position: absolute;
  right: 10%;
  top: 8%;
  
  img{
    height: 50px;
    }

  @media (min-width: 600px) and (max-width: 1023px){
    img{
      height: 65px
    }
}

  @media (min-width: 1024px){
    right: 15%;
    top: 10%;

    img{
      height: 75px;  
  }
}
`

export const IconButton = styled.button`
  background: none;
  border: none;
  margin-right: 0;
  filter: ${(props) => (props.primary ? 'none' : 'invert(1)')};
  transition: transform .4s; 

  &:hover{
    transform: scale(0.95);
  }

  img{
    height: 50px;
  }

  @media (min-width: 600px) and (max-width: 1023px) {
    img{
      height: 60px;
    }
  }

  @media (min-width: 1024px){
    img{
      height: 80px;
    }
  }
`

/* Tags styling */
export const TagIcons = styled.div`
  margin: 5% 2%;

  p{
    display: inline-block;
    background-color: #003333;
    margin: 0 5px 5px 0;
    padding: 5px;
    color: ${(props) => (props.primary ? '#003333' : 'white')};
    font-size: 10px;
    }

  @media (min-width: 600px) and (max-width: 1023px){
    p{
      font-size: 12px;
    }
  }

  @media (min-width: 1024px){
    p{
      font-size: 12px;
    }
  }
`