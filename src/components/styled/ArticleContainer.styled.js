import styled from 'styled-components';

const ArticleContainer = styled.article`
  display: grid;
  grid: 1fr;
  ${({ other }) => (other && { margin: 'var(--margin)', width: 'var(--width)' })};

    & h5 {
      margin-bottom: 0.1rem;
      ${({ thoughts }) => (thoughts && { fontWeight: '500', textTransform: 'capitalize' })};
    }
`;

export default ArticleContainer;