/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import projectImage1 from '../../assets/project_movies.png'
import projectImage2 from '../../assets/happy_thoughts.png';
import projectImage3 from '../../assets/music_releases.png';
import projectImage4 from '../../assets/weather_app.png';

const ProjectImg = styled.div`
  background-image: ${(props) => props};
  background-size: cover;
  aspect-ratio: 1.5 / 1;
  border: 1px solid var(--third-color);
  box-shadow: 3px 3px var(--third-color);

    & div {
      background-color: var(--main-color);
      opacity: 0.9;
      height: 100%;
      margin: 0;
      transition: all 0.5s;
      text-align: center;
    }

    &:hover div {
      opacity: 0;
    }
`

export default ProjectImg;