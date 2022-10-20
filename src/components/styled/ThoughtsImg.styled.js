import styled from 'styled-components';
import ProjectImage from './ProjectImg.styled';

const ThoughtsImg = styled(ProjectImage)`
  background-color: red;

   & div {
    background-color: green;
   }
`

export default ThoughtsImg;