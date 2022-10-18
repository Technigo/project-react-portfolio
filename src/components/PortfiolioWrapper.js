import React from 'react'
import styled from 'styled-components'
import Article from './Article'
import ArticletList from './ArticleList'
import ElevatorPitch from './ElevatorPitch'
import Footer from './Footer'
import Header from './Header'
import Icons from './Icons'
import ProfileImage from './ProfileImage'
import ProjectList from './ProjectList'
import Projects from './Projects'
import TechInfo from './TechInfo'
import TechList from './TechList'

const Wrapper = styled.section`
display: flex; 
flex-direction: column; 
`;

const Container = styled.div`
display: flex; 
flex-direction: column; 
`;

const PortfolioWrapper = () => {
  return (
    <Wrapper>
      <Header />
      <ProfileImage />
      <Container>
        <ElevatorPitch />
        <TechInfo />
        <Projects />
        <ProjectList />
        <Article />
        <ArticletList />
        <TechList />
        <Icons />
      </Container>
      <Footer />
    </Wrapper>

  )
}

export default PortfolioWrapper