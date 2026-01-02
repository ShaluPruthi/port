import React from 'react'
import './Experience.css'
import { motion } from 'framer-motion'
import internshipLogo from '../../assets/inter.png'
import companyLogo from '../../assets/company.png'

const experiences = [
  {
    role: 'Web Developer (Unpaid Internship)',
    company: 'Internship',
    duration: 'June 2025 – August 2025',
    logo: internshipLogo,
    description: [
      'Worked as a Developer during a 2-month unpaid internship from 4 June 2025 to 4 August 2025.',
      'Primarily worked on backend development using PHP, handling basic CRUD operations and form validations.',
      'Gained exposure to React.js and Node.js while preparing for a Full Stack development role.',
      'Focused mainly on development tasks, with limited involvement in UI/UX design.'
    ]
  },
  {
    role: 'Web Developer (Full-Time)',
    company: 'Current Organization',
    duration: 'August 2025 – Present',
    logo: companyLogo,
    description: [
      'Currently working as a Full-Time Web Developer since 4 August 2025.',
      'Actively developing web applications using Laravel at an advanced level.',
      'Responsible for backend logic, database integration, and performance optimization.',
      'Primary role is development, with minimal involvement in design-related tasks.'
    ]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2 className="sectionTitle">Experience</h2>

      <div className="experienceContainer">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experienceCard"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* HEADER */}
            <div className="experienceHeader">
              <div>
                <h3>{exp.role}</h3>
                <span className="company">{exp.company}</span>
                <span className="duration">{exp.duration}</span>
              </div>

              <img
                src={exp.logo}
                alt={exp.company}
                className="companyLogo"
              />
            </div>

            {/* DESCRIPTION */}
            <ul className="experienceList">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience
