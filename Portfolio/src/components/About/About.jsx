import React from 'react'
import './About.css'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="about">
      <motion.h2
        className="sectionTitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="aboutCard"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p>
          I am a passionate <span>Web Developer</span> with hands-on experience
          in building dynamic and responsive web applications.
          I started my journey with backend development using PHP and gradually
          transitioned towards modern full-stack technologies.
        </p>

        <p>
          Currently, I am working as a <span>Full-Time Web Developer</span>,
          where I actively develop applications using <span>Laravel</span> at an
          advanced level. Alongside this, I am continuously enhancing my skills
          in <span>React.js</span> and <span>Node.js</span> to grow as a complete
          Full Stack Developer.
        </p>

        <p>
          My primary focus is on <span>development</span>, including backend
          logic, database handling, and performance optimization.
          I also have a basic understanding of UI/UX design, which helps me
          collaborate better with design-oriented tasks.
        </p>

        <div className="aboutSkills">
          <span>React</span>
          <span>Node.js</span>
          <span>Laravel</span>
          <span>PHP</span>
          <span>MySQL</span>
          <span>JavaScript</span>
        </div>
      </motion.div>
    </section>
  )
}

export default About
