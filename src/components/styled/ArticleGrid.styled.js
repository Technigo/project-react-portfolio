import styled from 'styled-components';

const ArticleGrid = styled.div` 
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: var(--margin);
  width: var(--width);

  @media (max-width: 650px) {
    grid: 1fr;
  }
`;

export default ArticleGrid;