import styled from 'styled-components';

const ArticleCard = styled.article`
  display: grid;
  grid: 1fr;
  ${(props) => (props.other ? { margin: 'var(--margin)', width: 'var(--width)' } : null)};

  & img {
    width: 100%;
    margin-bottom: 0.5rem;
    filter: grayscale(50%);
}
`;

export default ArticleCard;