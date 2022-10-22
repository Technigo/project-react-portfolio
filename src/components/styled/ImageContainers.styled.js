import styled from 'styled-components';

const ProjectImage = styled.div`
  background-size: cover;
  aspect-ratio: 1.5 / 1;
  border: 1px solid var(--third-color);
  box-shadow: 3px 3px var(--third-color);
  margin-bottom: 0.6rem;

    & div {
      background-color: var(--main-color);
      opacity: 0.9;
      height: 100%;
      transition: all 0.5s;
      text-align: center;
    }

    &:hover div {
      opacity: 0;
    }
`

export const ThoughtsImage = styled(ProjectImage)`
  border: 1px solid var(--main-color);
  box-shadow: 3px 3px var(--main-color);

   & div {
    background-color: var(--third-color);
   }
`

export default ProjectImage;