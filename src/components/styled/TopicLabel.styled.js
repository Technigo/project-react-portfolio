import styled from 'styled-components';

const TopicLabels = styled.div`
  display: flex;
  gap: 0.3rem;
  margin: 0.5rem 0 2rem;

  & p {
    background-color: var(--bg-color);
    color: black;
    border: 1px solid black;
    font-family: var(--sub-font);
    font-size: 0.8rem;
    padding: 0.2rem;
    height: fit-content;
  }
`;

export default TopicLabels;