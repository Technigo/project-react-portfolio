import styled from 'styled-components';

export const TechStack = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
  margin: 1em 0em;
  
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  & img {
  height: 50px;
  width: auto;
  margin-bottom: 0.5em;
  }

  @media only screen and (min-width: 600px) {
  max-width: 640px;
  margin: 0em auto;
  }
`