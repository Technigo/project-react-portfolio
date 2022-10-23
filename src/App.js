/* eslint-disable operator-linebreak */
/* eslint-disable react/no-unescaped-entities */
import Header from 'components/Header';
import React from 'react';
import styled from 'styled-components';
import {
  SectionHeader,
  SectionInner,
  SectionOuter,
  SectionSubHeader
} from 'Styles';
import OtherProjects from 'components/OtherProjects';
import FeaturedProjectCard from 'components/FeaturedProjectCard';
import MyThoughts from 'components/MyThoughts';
import Skills from 'components/Skills';
import ForMore from 'components/ForMore';
import Footer from 'components/Footer';

import figure from './assets/start-figure2.svg';

const thoughtText =
  window.innerWidth < 1000 ? 'MY THOUGHTS' : 'MY THOUGHTS ABOUT CODE';

const IntroFigure = styled.img`
  width: 55px;

  @media (min-width: 800px) {
    width: 70px;
  }
`;

export const App = () => {
  return (
    <div>
      <Header />
      <SectionOuter gallery>
        <SectionInner>
          <p>
            <IntroFigure src={figure} alt="line figure" /> Hello! Cat ipsum
            dolor sit amet, destroy dog. Lick the other cats meow to be let out
            sleep everywhere, but not in my bed. Tweeting a baseball. Making
            sure that fluff gets into the owner's eyes refuse to drink water
            except out of someone's glass if human is on laptop sit on the
            keyboard side-eyes your "jerk" other hand while being petted get
            away from me stupid dog
          </p>
        </SectionInner>
      </SectionOuter>
      <SectionOuter>
        <SectionInner textCentered>
          <SectionHeader>TECH</SectionHeader>
          <p>
            HTML, CSS, Flexbox, <span>JavaScript</span>, ES6, JSX,
            <span> React, React Hooks, Redux,</span> Node.js, Mongo DB, Web
            Accessibly, API:s, mob-programming, pair-programming, Github.
          </p>
        </SectionInner>
      </SectionOuter>
      <SectionOuter gallery>
        <SectionInner>
          <FeaturedProjectCard />
          <SectionSubHeader>OTHER PROJECTS</SectionSubHeader>
          <OtherProjects />
        </SectionInner>
      </SectionOuter>
      <SectionOuter>
        <SectionInner>
          <SectionHeader>{thoughtText}</SectionHeader>
          <MyThoughts />
          <SectionSubHeader>MORE THOUGHTS</SectionSubHeader>
        </SectionInner>
      </SectionOuter>
      <SectionOuter gallery>
        <SectionInner>
          <SectionHeader>SKILLS</SectionHeader>
          <Skills />
        </SectionInner>
      </SectionOuter>
      <SectionOuter>
        <SectionInner>
          <SectionHeader>FOR MORE</SectionHeader>
          <ForMore />
        </SectionInner>
      </SectionOuter>
      <Footer />
    </div>
  );
};
