import styled from 'styled-components';

const TopicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.3rem;
  height: fit-content;
  margin: 0.5rem 0;

    & a {
      text-decoration: underline;
    } 
      & span {
        font-weight: 300;
        color: var(--main-color);
      }
`;

export default TopicsContainer;