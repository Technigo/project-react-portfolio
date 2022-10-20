/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import projectImg1 from '../../assets/happy_thoughts.png'
import projectImg2 from '../../assets/chatbot.png';
import projectImg3 from '../../assets/survey.png';
import projectImg4 from '../../assets/weather_app.png';

const ProjectImg = styled.div`
  background-image: ${(props) => (
    props.project1 ? `url(${projectImg1})`
      : props.project2 ? `url(${projectImg2})`
        : props.project3 ? `url(${projectImg3})`
          : props.project4 ? `url(${projectImg4})`
            : null)};
  background-size: cover;
  border: 1px solid black;
  aspect-ratio: 1.5 / 1;

    & div {
      background-color: var(--main-color);
      opacity: .9;
      height: 100%;
      margin: 0;
      transition: all 0.3s;
      text-align: center;
    }

    &:hover div {
      opacity: 0;
    }
`

export default ProjectImg;