import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0 auto;
}

body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: 1024px;
    font-family: 'Montserrat', sans-serif;

    @media (min-width: 1024px) {
      border: 3px solid rgb(0, 51, 51, 0.2);
    }
}
`

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: ${(props) => (props.primary ? '#f4f4f4' : 'white')};
    padding: 10px;
`

export const SectionHeader = styled.h2`
    color: #fff;
    background: #1C658C;
    border-radius: 3px;
    padding: 5px;
    width: fit-content;
`

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
`