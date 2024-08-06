import React from 'react'
import "./skills.css";
import Languages from "./languages";
import Tech from './tech';
import Cloud from './cloud'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title" style={{ marginBottom: '30px' }}>Skills</h2>
        <div className="skills__container container grid">
            <Languages/>
            <Tech/>
            <Cloud/>
        </div>
    </section>
  )
}

export default Skills
