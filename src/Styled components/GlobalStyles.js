import styled from 'styled-components';

export const OuterWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items:center;
  justify-content: center;
  background-color: ${(props) => (props.gray ? '#F4F4F4;' : 'white')}
`

export const InnerWrapper = styled.section`
  width: 80%;

  @media (min-width: 668px) and (max-width: 1024px) {
    width: 60%;
  }
  @media (min-width: 1025px){ 
    width: 60%;
  }
  @media (min-width: 1600px) {
    width: 50%;
  }
`

export const StyledLink = styled.a`
    text-decoration: none;
    outline: none;
    color: inherit;
`

export const P = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 29px; 
`