/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-quotes */
import React from 'react'
import { ArticleText, SectionContainer, SectionHeadings, SubHeadings, Tags } from 'Globalstyles'
import { ProjectWrapper, OverlayImage, FinalProjectContainer } from './FinalProject.styles'

const FinalProject = () => {
  return (
    <SectionContainer>
      <SectionHeadings>FINAL PROJECT</SectionHeadings>
      <FinalProjectContainer>
        <ProjectWrapper>
          <a
            href='https://expo.dev/@sofierydmark/Planda?serviceType=classic&distribution=expo-go'
            role='button'
            aria-pressed='false'
            aria-label='Planda'
            target='_blank'
            rel='noreferrer'>
            <OverlayImage>
              <h2>FINAL PROJECT</h2>
            </OverlayImage>
            <img src='/images/Planda.PNG' alt='planda' />
            <SubHeadings>PLANDA</SubHeadings>
            <ArticleText>
              Fullstack app created in React Native (Expo). On Google Playstore soon.
            </ArticleText>
            <Tags>
              <li>React Native</li>
              <li>Expo</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Mongoose</li>
              <li>MongoDB</li>
              <li>Google Cloud</li>
            </Tags>
          </a>
        </ProjectWrapper>
      </FinalProjectContainer>
    </SectionContainer>
  )
}

export default FinalProject
