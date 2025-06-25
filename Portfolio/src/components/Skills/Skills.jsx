import React from 'react'
import './Skills.css'
import {motion} from 'framer-motion'
import frontend from '../../assets/frontend.png'
import backend from '../../assets/backend.png'
import database from '../../assets/database.png'
import tools from '../../assets/tools.png'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      staggerChildren: 0.2
    }
}
};
const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}  
const Skills = () => {
  return (
    <motion.section id="skills" initial="hidden" whileInView="visible" variants={container}>
        <motion.span className="title" variants={cardVariant}>Skills</motion.span>
        <motion.div className="card" variants={container}>
          <motion.div className="skillCard" variants={cardVariant}>
            <img src={frontend} alt="Frontend Development" className='skillImg'/>
            <div className="text">
              <h2 className="skillTitle">Frontend Development</h2>
              <p className="skillDesc">HTML5, CSS3, JavaScript, React.js, Bootstrap</p>
            </div>
          </motion.div>

          <motion.div className="skillCard" variants={cardVariant}>
            <img src={backend} alt="Backend Development" className='skillImg'/>
            <div className="text">
              <h2 className="skillTitle">Backend Development</h2>
              <p className="skillDesc">Node.js(Learning) , PHP , Java(learning)</p>
            </div>
          </motion.div>

          <motion.div className="skillCard" variants={cardVariant}>
            <img src={database} alt="Database" className='skillImg'/>
            <div className="text">
              <h2 className="skillTitle">Database</h2>
              <p className="skillDesc">SQL, Firebase</p>
            </div>
          </motion.div>

          <motion.div className="skillCard" variants={cardVariant}>
            <img src={tools} alt="tools and technologies" className='skillImg'/>
            <div className="text">
              <h2 className="skillTitle">Tools and Technologies</h2>
              <p className="skillDesc">Git & GitHub, Responsive Design, Deployment, VSCode</p>
            </div>
          </motion.div>
        </motion.div>
    </motion.section>
  )
}

export default Skills
