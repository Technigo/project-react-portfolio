// import styled from 'styled-components'
import React from 'react'
import './about.css'
import { FaExpandArrowsAlt } from 'react-icons/fa'
import { AiFillFolderOpen } from 'react-icons/ai'
import me from '../Assets/me about.jpg'

/* const Section = styled.section`
  margin-top: 8rem;

  section > h2, section > h5 {
    text-align: center;
    color: var(--color-light);
  }
` */

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
              <h5>Experience</h5>
            </article>

            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Folder</h5>
            </article>

            <article className="about__card">
              <FaExpandArrowsAlt className="about__icon" />
              <h5>Experience</h5>
            </article>
            <p>
              lorem ipsum jdkljsadkjslkjdklsjdkljasdkjlkdjdkjsldjaslkdjlkajdklasjdkljd
              dskdklsjdklsjdkljdlkjadlkjskldjlksdjslkdjklsofpweifokfödsl
              fdsöjfödkfödslkföldkfölkdfölkfölkdlöfdklfkföl
            </p>
            <a href="#contact" className="btn btn-primary">Lets Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About