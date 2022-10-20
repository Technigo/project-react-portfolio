import styled from 'styled-components';

const SkillsMoreGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  align-items: center;
  justify-items: center;
  margin: var(--margin);
  width: var(--width);

  /* Skills */ 
  & ul {
    font-size: 1rem;
    margin-top: 5px;
    line-height: var(--line-height);
    list-style-type: none;
  }

  /* For More */
    & div {
    } 
    
      & a {
        color: var(--sub-color);
        font-size: 0.8rem;
        font-weight: 700;
        text-decoration: none;
        width: fit-content;
      }

          & svg {
            background-color: var(--sub-color);
            border-radius: 50%;
            color: white;
            width: 3.5rem;
            height: 3.5rem;
            margin-bottom: 0.5rem;
            padding: 12px 0;
          }
`;

export default SkillsMoreGrid;