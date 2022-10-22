import styled from 'styled-components';

const ArticleContainer = styled.article`
  display: grid;
  grid: 1fr;
  gap: 0.6rem;
  ${({ other }) => (other && { margin: 'var(--margin)', width: 'var(--width)' })};

    & h5 {
      ${({ thoughts }) => (thoughts && { fontWeight: '500', textTransform: 'capitalize' })};
    }
`;

export default ArticleContainer;