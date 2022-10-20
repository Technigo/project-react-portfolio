import styled from 'styled-components';

export const BlockSection = styled.div`
  padding: 50px 0;
  background: pink;

  & h1 {
  }
`;

export const InnerWrapper = styled.div`
  width: 80%;
  height: inherit;
  max-width: 700px;
  margin: 0 auto;
  position: relative;

  h3 {
    background-color: #fa382f;
    text-transform: uppercase;
    color: white;
    font-weight: 700;
    width: fit-content;
    margin: 0 auto 30px;
  }

  h4 {
    color: #fa382f;
    text-transform: uppercase;
    margin: 0;
    font-size: 17px;
    text-align: center;
  }

  p {
    text-align: left;
  }
`;
