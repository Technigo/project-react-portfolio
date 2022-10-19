/* eslint-disable no-confusing-arrow */
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0 auto;
}
body{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1280px;
  font-family: 'Montserrat', sans-serif;
}
`
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 100%;
background: ${(props) => (props.primary ? '#FFFBE9' : 'white')};
padding: 5% 10%;
`

export const Paragraph = styled.p`
font-size: 15px;
color: ${(props) => (props.primary ? '#614124' : 'white')};
line-height: 30px;

@media (min-width: 1024px){
  font-size: 16px;
}
`
export const ProjectParagraph = styled(Paragraph)`
line-height: 20px;
margin: 5% 2%;
display: inline;
`

export const Heading = styled.h3`
margin: 2%;
    color: #614124;
    font-size: 15px;
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
background-color: #006f45;
  padding: 10px;
  display: inline-block;
  font-size: 20px;
`

export const IconContainer = styled.div`
  position: absolute;
  right: 10%;
  top: 8%;
  
  img{
    height: 50px;
    }

@media (min-width: 668px) and (max-width: 1023px){
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
}
`

export const IconButton = styled.button`
  background: none;
  border: none;
  height: 50px;
  margin: 0;
  filter: ${(props) => (props.primary ? 'none' : 'invert(1)')};

&:hover{
    filter: opacity(0.5);
  }
`
export const TagIcons = styled.div`
    margin: 0 2%;

    p{
display: inline-block;
    background-color: #006f45;
    margin: 0 5px 5px 0;
    padding: 5px;
    color: ${(props) => (props.primary ? '#006f45' : 'white')};
    font-size: 10px;
    }

    & .tag-github-icon{
      background-color: black;
}

@media (min-width: 668px) and (max-width: 1023px){
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