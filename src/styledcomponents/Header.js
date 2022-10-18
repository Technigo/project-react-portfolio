import styled from 'styled-components/macro'

export const Header = styled.header`
  background-color: #a19595;
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
`;

export const Title = styled.h1`
    position: absolute;
    width: 300px;
    top: 35%;
    left: 10%;
    color: white;
    font-size: 2.8rem;
    line-height: 2.4rem;
    font-family: roboto;
`;

export const Name = styled.h3`
    font-weight: 700;
    position: absolute;
    top: 33%;
    left: 10%;
    font-size: 18px;
    line-height: 18px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: red;
`;