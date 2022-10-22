/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components';
import { OuterWrapper, SectionHeader, Wrapper, FeaturedProjectWrapper, ProjectCard, ThumbnailWrapper, ThumbnailTitle, ProjectInfoHeader, ProjectInfo, SubParagraphArrows } from './GlobalStyleComponents';
import Lightbulb from './images/Lightbulb.jpg'
import Drumroll from './images/Drumroll.jpg'

const MyThoughts3 = ({ color, colorSecond }) => {
  return (
    <OuterWrapper>
      <Wrapper>
        <SectionHeader color={color}>MY THOUGHTS</SectionHeader>
        <FeaturedProjectWrapper>
          <ProjectCard
            href="https://medium.com/@viktor.tommy.svensson/early-midlife-crises-couldnt-afford-ferrari-so-changed-carriers-instead-fd1b03b75c32"
            target="_blank">
            <ThumbnailWrapper url={Lightbulb}>
              <ThumbnailTitle>Articel 1</ThumbnailTitle>
            </ThumbnailWrapper>
            <ProjectSmallHeader>OKT 2022</ProjectSmallHeader>
            <ClonedProjectInfoHeader color={colorSecond}>
            Early midlife crises, couldn’t afford a Ferrari so changed carriers instead
            </ClonedProjectInfoHeader>
            <ClonedProjectInfo>{`Well I’m going to be honest here, it’s not really a midlife crisis, more like a midlife “awakening”.
            I realised that I was not comfortable at my job, not happy. And that’s a dangerous state for the mind, and for the endless possiblites that’s out there.`}<SubParagraphArrows>{' >>>'}</SubParagraphArrows>
            </ClonedProjectInfo>
          </ProjectCard>
          <ProjectCard
            href="https://medium.com/@viktor.tommy.svensson/early-midlife-crises-couldnt-afford-ferrari-so-changed-carriers-instead-fd1b03b75c32"
            target="_blank">
            <ThumbnailWrapper url={Drumroll}>
              <ThumbnailTitle>Articel 2</ThumbnailTitle>
            </ThumbnailWrapper>
            <ProjectSmallHeader>OKT 2022</ProjectSmallHeader>
            <ClonedProjectInfoHeader color={colorSecond}>
            Changing paths: how to stop living your life on autopilot
            </ClonedProjectInfoHeader>
            <ClonedProjectInfo> {`What's autopilot to you? is it driving home and barely knowing how you got there? Or are you like me who knows there current job like the back of your hand, and every "one liner" you deliver
                                kills you a bit inside(yes i worked in retail)`}<SubParagraphArrows>{' >>>'}</SubParagraphArrows>
            </ClonedProjectInfo>
          </ProjectCard>
        </FeaturedProjectWrapper>
      </Wrapper>
    </OuterWrapper>
  );
};

export default MyThoughts3;

const ClonedProjectInfoHeader = styled(ProjectInfoHeader)`
    margin-block-start: 0;
    margin-block-end: 0.7%;
`;

const ClonedProjectInfo = styled(ProjectInfo)`
    margin-block-start: 0;
    margin-block-end: 0;
`;

const ProjectSmallHeader = styled.p`
    font-size: 24px;
    line-height: 1.4;
    color: #54BAB9;
    margin-block-start: 0.5%;
    margin-block-end: 0.5%;

    @media (max-width: 800px) {
    font-size: 16px;
    line-height: 1.4;
}

`;

/* const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 1.4;

  @media (max-width: 800px) {
    font-size: 16px;
    line-height: 1.4;
  }
`; */

/* const SectionHeader = styled.h2`
  font-size: 50px;
  line-height: 1;
  padding: 10px 15px;
  margin-bottom: 100px;
  font-family: "Montserrat Bold";
  background-color: ${(props) => props.color};
  color: white;

  @media (max-width: 800px) {
    font-size: 22px;
    line-height: 1;
    padding: 10px 15px;
    margin-bottom: 40px;
  }
`; */

/* const FeaturedProjectWrapper = styled.div`
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 100px;
  width: 100%;

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 50px;
  }
`;

const ProjectCard = styled.a`
  transform: translateY(0%);
  transition: transform 0.5s;
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-decoration: none;
  position: relative;

  /* Optional hover effect, delete if not desired */
/* &:hover {
    transform: translateY(-1%);
    transition: transform 0.3s;
  } */
/* `; */

/* const ThumbnailWrapper = styled.div`
  background-size: cover;
  background-position: center;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 26px;
  background-image: linear-gradient(180deg, #1c232580, #1c232580),
    url(${(props) => props.url});
  &:hover {
    background-image: linear-gradient(#1c23255e, #1c23255e),
      url(${(props) => props.url});
  }
  @media (min-width: 900px) {
    height: 550px;
  }

`;

const ThumbnailTitle = styled.h2`
  font-family: "Montserrat Bold";
  color: white;
  position: absolute;
`;

const ProjectInfoHeader = styled.h3`
  font-family: "Roboto Bold", sans-serif;
  color: ${(props) => props.color};
  font-size: 24px;

  ${ProjectCard}:hover & {
    text-decoration: underline;
  }

  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

const ProjectInfo = styled.p`
  font-family: "Roboto", sans-serif;
  color: black;
  font-size: 24px;
  line-height: 1.4;

  ${ProjectCard}:hover & {
    text-decoration: underline;
  }

  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

/* const ProjectTags = styled.li`
  padding: 0;
  font-family: "Roboto", sans-serif;
  color: black;
  padding: 5px 10px;
  background-color: ${(props) => props.tagColor};
  display: inline;
  font-size: 16px;
  margin-right: 5px;

  @media (max-width: 800px) {
    padding: 2px;
    font-size: 14px;
    margin-right: 3px;
  }
`; */