import styled from 'styled-components';

const ArticleCard = styled.article`
  display: grid;
  grid: 1fr;
  ${(props) => (props.other ? { margin: 'var(--margin)', width: 'var(--width)' } : null)};
`;

export default ArticleCard;