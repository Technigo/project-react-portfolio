import React from 'react'
import styled from 'styled-components'
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
                  <SubHeading>{item.name}</SubHeading>
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

const ProjectInfo = styled.div`
  padding-bottom: 30px;
  width: 100%;
  img {
    width: 100%;
    display: block;
  }
`

const InnerWrapperFeat = styled(InnerWrapper)`
  padding-bottom: 0px;
`

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5vw;
  a {
    position: relative;
    display: block;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  } `

const ImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  p {
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 25px;
    letter-spacing: 0.01em;
    line-height: 30px;
    padding: 25%;
    text-align:center;
    color: white;

    @media (max-width: 668px) {
      display:none;
    }
  }

  &:hover {
    opacity: 0;
  }
`

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: space-between;
`
const PProject = styled(P)`
  text-align: center;
  line-height: 25px;
  margin-bottom: 30px;
`