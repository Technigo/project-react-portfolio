import styled from 'styled-components';

export const BlockSection = styled.div`
  padding: 50px 0;
  background: #ffa7b6;

  p {
    color: white;
  }

  a {
    color: white;
  }
`;

export const BlockSectionWhite = styled(BlockSection)`
  background-color: white;
  h6 {
    color: #ff284d;
    font-size: 1.5rem;
  }
  p {
    color: black;
  }
  a {
    color: black;
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
    margin: 0 auto 20px;
    text-align: center;
    padding: 2px 6px;
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
  margin: 3px 2px 3px 0;
  flex-wrap: wrap;

  p {
    border-radius: 4px;
    background-color: #ffdae0;
    color: #2b2e34;
    padding: 5px 8px;
    margin: 0px 5px 5px 0px;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
 
`;

export const Content = styled.div`
  margin: 10px 0;
  box-sizing: border-box;
`;

export const LinksWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  gap: 10px;
`;

export const Link = styled.div`
  margin-top: 2em;
  img {
    height: 3em;
    width: 3em;
  }

  @media (min-width: 768px) {
    img {
      height: 4em;
      width: 4em;
    }
  }
  @media (min-width: 1024px) {
    img {
      height: 4.2em;
      width: 4.2em;
    }
  }
`;
