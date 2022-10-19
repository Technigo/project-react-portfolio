/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import projectImg1 from '../../assets/project_happy_thoughts.png'
import projectImg2 from '../../assets/project_movies.png';
import projectImg3 from '../../assets/project_survey.png';
import projectImg4 from '../../assets/project_weather_app.png';

const ProjectImage = styled.div`
  background-image: ${(props) => (
    props.project1 ? `url(${projectImg1})`
      : props.project2 ? `url(${projectImg2})`
        : props.project3 ? `url(${projectImg3})`
          : props.project4 ? `url(${projectImg4})`
            : null)};
  background-size: cover;
  border: 1px solid black;
  aspect-ratio: 1.5 / 1;
  min-width: 100%;
`

export default ProjectImage;