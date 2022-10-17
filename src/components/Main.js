/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ForMore from './ForMore';
import Projects from './Projects';
import Skills from './Skills';
import Thoughts from './Thoughts';

const Main = ({ linkedinLogo, githubLogo, stackOverflowLogo }) => {
  return (
    <main>
      <section className="intro bg-darker">
        <p className="intro-text">
          <span className="line" /><span className="dot" />
          Hi there! I'm a frontend developer with fullstack ambition and a background in social
          work. I am passionate about code and have a big interest in CSS.
        </p>
      </section>
      <section className="tech">
        <h2 className="">Tech</h2>
        <p>
          HTML, CSS, Flexbox, Grid, JavaScript, ES6, JSX, React, React Hooks, Redux,
          Node.js, Mongo DB, Web Accessibility, API:s, mob-programming, pair-programming, Github.
        </p>
      </section>
      <Projects />
      <Thoughts />
      <Skills />
      <ForMore
        linkedinLogo={linkedinLogo}
        githubLogo={githubLogo}
        stackOverflowLogo={stackOverflowLogo} />
    </main>
  )
}

export default Main;