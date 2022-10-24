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
    text-align: center;
  }

  h4 {
    color: #fa382f;
    text-transform: uppercase;
    margin: 0;

    text-align: center;
  }

  h5 {
    color: #fa382f;
    text-transform: uppercase;
  }

  h6 {
  }

  p {
  }

  a {
  }
  a:link {
    text-decoration: none;
  }
  a:hover {
  }

  a:visited {
  }
`;

export const TagWrapper = styled.div`
  display: flex;
  font-family: 'Roboto', sans-serif;
  align-items: center;
  font-weight: bold;
  line-height: 12px;
  font-size: 12px;
  text-decoration: none;
  margin: 3px 0;

  p {
    border-radius: 4px;
    background-color: #fddfe7;
    color: #2b2e34;
    padding: 5px 8px;
    margin-right: 5px;
  }
`;
