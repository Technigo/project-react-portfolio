import styled from 'styled-components/macro'

export const AboutWrapper = styled.div`
  padding: 6%;
  background-color: blue;
`;

export const Line = styled.span`
    width: 30px;
    border: 1px solid red;
    display: inline-block;
    margin-bottom: 4px;
`;

export const Dot = styled.span`
    height: 10px;
    width: 10px;
    background-color: red;
    border-radius: 50%;
    display: inline-block;
`;

export const About = styled.p`
  line-height: 1.6rem;
  font-size: 1.2rem;
  margin: 0 auto;
  background-color: grey;
`;
