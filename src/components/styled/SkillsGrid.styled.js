import styled from 'styled-components';

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  margin: var(--margin);
  width: var(--width);

  & h5 {
    font-family: var(--main-font);
    text-transform: none;
  }

  & ul {
    font-family: var(--main-font);
    font-size: 1rem;
    margin-top: 5px;
    line-height: var(--line-height);
    list-style-type: none;
  }
`;

export default SkillsGrid;