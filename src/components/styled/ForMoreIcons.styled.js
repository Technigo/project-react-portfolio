import styled from 'styled-components';
import SkillsGrid from './SkillsGrid.styled';

const ForMoreIcons = styled(SkillsGrid)`
  & a {
     color: var(--sub-color);
     font-family: var(--main-font);
     font-size: 0.8rem;
     font-weight: 700;
     text-decoration: none;
     text-transform: none;
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
`

export default ForMoreIcons;