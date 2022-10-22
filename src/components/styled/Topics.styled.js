import styled from 'styled-components';

export const TopicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.3rem;
  height: fit-content;
  // margin: 0.3rem 0 0.5rem 0;

    & a {
      text-decoration: underline;
    } 
      & span {
        font-weight: 600;
        color: var(--main-color);
      }
`;

export const Topic = styled.p`
  border: 1px solid var(--third-color);
  color: var(--third-color);
  font-family: var(--sub-font);
  font-size: 0.8rem;
  padding: 0.15rem 0.25rem;
  text-transform: uppercase;
  word-break: keep-all;
`;