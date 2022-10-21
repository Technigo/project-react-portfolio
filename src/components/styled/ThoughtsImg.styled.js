import styled from 'styled-components';
import ProjectImg from './ProjectImg.styled';
import thought1 from '../../assets/thought_article.png';

const ThoughtsImg = styled(ProjectImg)`
  background-image: url(${thought1});
  border: 1px solid var(--main-color);
  box-shadow: 3px 3px var(--main-color);

   & div {
    background-color: var(--third-color);
   }
`

export default ThoughtsImg;