import React from 'react';
import BottomLinks from './BottomLinks';
import Knowledge from './Knowledge';
import Presentation from './Presentation';
// eslint-disable-next-line import/no-cycle
import Projects from './Projects';
import Skills from './Skills';
import Thoughts from './Thoughts';

const Main = () => {
  return (
    <>
      <Presentation />
      <Knowledge />
      <Projects />
      <Thoughts />
      <Skills />
      <BottomLinks />

      {/* <MainSections coloredBackground>
        <InnerWrapper>
          <MainHeader>{category}</MainHeader>
        </InnerWrapper>
      </MainSections>
      <MainSections>
        <InnerWrapper>
          <MainHeader>{category}</MainHeader>
        </InnerWrapper>
      </MainSections>
      <MainSections coloredBackground>
        <InnerWrapper>
          <MainHeader>{category}</MainHeader>
        </InnerWrapper>
      </MainSections>
      <MainSections>
        <InnerWrapper>
          <MainHeader>{category}</MainHeader>
        </InnerWrapper>
      </MainSections>
      <MainSections coloredBackground>
        <InnerWrapper>
          <MainHeader>{category}</MainHeader>
        </InnerWrapper>
      </MainSections> */}
    </>
  )
}

export default Main;

// const MainSections = styled`
//   padding: 20% 7% 10% 7%;

//   @media ${Devices.tablet} {
//     padding: 10% 7%;
//   }

//   @media ${Devices.laptop} {
//     padding: 10% 0%;
//   }

//   @media ${Devices.desktop} {
//     padding: 0% 0%;
//   }
// `