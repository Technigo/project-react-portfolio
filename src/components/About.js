// import styled from 'styled-components'
import React from "react";
import "./about.css";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { AiFillFolderOpen } from "react-icons/ai";
import me from "../Assets/me about.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="AboutImg" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaExpandArrowsAlt className="about__icon" />
              <h5>Organizations</h5>
              <p>Volunteering: UN Women, Helsinki Missio, Espoo City</p>
            </article>
            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Fun fact</h5>
              <p>I used to play professional Football</p>
            </article>
            <article className="about__card">
              <FaExpandArrowsAlt className="about__icon" />
              <h5>Hobbies</h5>
              <p>Gym, Travel, Reading </p>
            </article>
          </div>
          <p>
            Completed my University studies and went straight to a coding
            bootcamp to enchance my coding skills. Time to take a step towards
            the challenge of becoming a Fullstack developer! What really made me
            dive into coding, was the beauty and potential of decetralized tech
            like blockchain! Going to take my certified technical exam in
            Ethereum by the end of January 2023. I am very motivated to grow in
            a cutting edge environment while learning to thrive with the
            brightest minds in the software scene. You will have a team player
            who is eager to learn new things and who knows how to create a good
            spirit for your work team! I believe I would be a right fit, because
            I am ready to dedicate as an aspiring developer raw undivided
            attention for learning and growth for every given opportunity.
            Please checkout my tech CV for even more details.
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
