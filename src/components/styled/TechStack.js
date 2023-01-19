import styled from 'styled-components';

export const TechStack = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 1rem 0rem;
  
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  & img {
  height: 3rem;
  width: auto;
  margin-bottom: 0.5rem;
  }

  @media only screen and (min-width: 60rem) {
  max-width: 640px;
  margin: 0em auto;
  }
`