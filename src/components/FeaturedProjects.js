import React from 'react'
import styled from 'styled-components/macro'
import { InnerWrapper, OuterWrapper, P, A } from 'StyledComponents/GlobalStyles'
import { SectionHeading, SubHeading } from 'StyledComponents/HeadlineStyles'
import { Tag, TagContainer } from 'StyledComponents/TagStyles'
import data from '../assets/ProjectData.json'

export const FeaturedProjects = () => {
  return (
    <OuterWrapper grey>
      <InnerWrapperFeat>
        <SectionHeading>FEATURED PROJECTS</SectionHeading>

        <ProjectsWrapper>
          {data.map((item) => (
            <ProjectInfo key={item.name}>
              <a
                href={item.netlify}
                target="_blank"
                rel="noopener noreferrer">
                <ImageOverlay>
                  <p>{item.overlayname}</p>
                </ImageOverlay>
                <img src={item.image} alt="Project site" />
              </a>
              <DetailsWrapper>
                <A href={item.netlify}>
                  <SubHeadingProject>{item.name}</SubHeadingProject>
                  <PProject>{item.description}</PProject>
                </A>
                <TagContainer>
                  {item.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </TagContainer>

              </DetailsWrapper>
            </ProjectInfo>
          ))}
        </ProjectsWrapper>
      </InnerWrapperFeat>
    </OuterWrapper>
  )
}

const SubHeadingProject = styled(SubHeading)`
  transition: ease-out 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`

const ProjectInfo = styled.div`
  padding-bottom: 20px;
  width: 100%;
  img {
    width: 100%;
    display: block;
    border-radius: 10px;
  }
`

const InnerWrapperFeat = styled(InnerWrapper)`
  padding-bottom: 0px
`

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3vw;
  column-gap: 3vw;
  
  a {
    position: relative;
    display: block;
  }
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  } `

const ImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  border-radius: 10px;

  p {
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 27px;
    letter-spacing: 0.01em;
    line-height: 30px;
    text-align:center;
    color: white;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0; 
    right: 0;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);

    @media (max-width: 690px) {
      font-size: 25px;
    }
  }

  &:hover {
    opacity: 0;
  }
`

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;

`
const PProject = styled(P)`
  text-align: center;
  line-height: 25px;
  margin-bottom: 20px;
`