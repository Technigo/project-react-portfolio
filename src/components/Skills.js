import React from 'react'
import { SectionHeader } from './styled/SectionHeader'

export const Skills = () => {
  return (
    <section className="outer-wrapper" id="other-skills">
      <div className="inner-wrapper">
        <SectionHeader>SKILLS</SectionHeader>
        <div className="skills-container">
          <ul>
            <li>CATEGORY</li>
            <li>Skill</li>
            <li>Skill</li>
            <li>Skill</li>
          </ul>
          <ul>
            <li>CATEGORY</li>
            <li>Skill</li>
            <li>Skill</li>
            <li>Skill</li>
          </ul>
        </div>
      </div>
    </section>
  )
}