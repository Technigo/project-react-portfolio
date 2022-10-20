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
    font-size: 2.4rem;
  }

  h4 {
    color: #fa382f;
    text-transform: uppercase;
    margin: 0;
    font-size: 2.2rem;
    text-align: center;
  }

  h5 {
    font-size: 2rem;
    color: #fa382f;
    text-transform: uppercase;
  }

  h6 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.5rem;
  }

  a {
    font-size: 1.5rem;
  }
  a:link {
    text-decoration: none;
  }
`;
