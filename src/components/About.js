import React from 'react';
import { Section } from 'StyledComponents/Section';

const About = () => {
 return (
    <Section>
    <div className="line-circle">
      <span className="line" />
      <span className="circle" />
    </div>
     <p className="about-text">
    Hello! My name is Hanna, and I am an aspiring front-end developer.
    I also have a bachelors degree in Strategic Communication from Lund University.
    I love digital design, being creative as well as the logical sides that come with programming.
    I am passionate about everything that has to do with dogs, jokes and making things for other people to enjoy.
     </p>
  </Section>
 )
}

export default About;