import React from 'react'
import './skills.css'
import { BsTerminal, BsPatchCheckFill } from 'react-icons/bs'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { DiJavascript } from 'react-icons/di'
import { GrGroup } from 'react-icons/gr'
import { SiRedux, SiSolidity, SiTailwindcss, SiMongodb, SiAntdesign, SiMysql } from 'react-icons/si'
import { FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa'

const Skills = () => {
  return (
    <section id="skills">
      <h5>Skills</h5>
      <h2>My skills</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <AiOutlineHtml5 />
                <h4>HTML</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <FaCss3Alt />
                <h4>CSS</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <SiTailwindcss />
                <h4>Tailwind</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <SiAntdesign />
                <h4>AntDesign</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <FaReact />
                <h4>React</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <DiJavascript />
                <h4>Javascript (ES6)</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <SiRedux />
                <h4>Redux</h4>
              </div>
            </article>
          </div>
        </div>
        {/* ====== START OF BACKEND ====== */}
        <div className="skills__backend">
          <h3>Backend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <FaNodeJs />
                <h4>Node JS</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <SiMongodb />
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <SiMysql />
                <h4>mySQL</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <SiSolidity />
                <h4>Solidity(Learning)</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <BsTerminal />
                <h4>Version Control</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <GrGroup />
                <h4>Mob programming</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills