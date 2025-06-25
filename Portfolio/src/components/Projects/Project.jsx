import React from 'react'
import {motion} from 'framer-motion'
import './project.css'
import project1 from '../../assets/Project1.png'
import project2 from '../../assets/login.png'
import project3 from '../../assets/weather.png'
import project4 from '../../assets/quiz.png'

const project = [
    {
        title:'Event Management System',
        description:'React, Firebase, SQL',
        image: project1,
        repo:'https://github.com/ShaluPruthi/Event-Management-Project-React-Firebase-',
    },
    {
        title:'Login',
        description:'PHP, SQL, PHPMyAdmin',
        image: project2,
        repo:'https://github.com/ShaluPruthi/PHP/tree/main/login1',
    },
    {
        title:'Weather App',
        description:'Html, CSS, JavaScript',
        image:project3,
        repo:'https://github.com/ShaluPruthi/Weather-App-Using-JS',
    },
    {
        title:'Quiz',
        description:'Html, CSS, JavaScript',
        image:project4,
        repo:'https://github.com/ShaluPruthi/QuizApp-JS',
    },
]
const container = {
    hidden: { opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const item = {
    hidden : {opacity: 0, y: 30},
    visible: {opacity:1 , y:0}
}

const Project = () => {
  return (
    <motion.section id="projects"
            initial="hidden"
            whileInView="visible"
            viewport={{once : true}}
            variants={container}>
        <motion.h2 className="title" variants={item}>My Projects</motion.h2>
        <motion.span className="subtitle" variants={item}>Some of my GitHub projects</motion.span>

        <div className="container">
            {project.map((project, index) =>(
                <motion.div className='projectCard' key={index} variants={item}>
                    <div className="imageContainer"style={{ backgroundImage: `url(${project.image})` }}>
                    {/* <img src={project.image} alt={project.title} className='workImg' /> */}
                    </div>
                    <div className="projectInfo">
                        <h3 className="projectTitle">{project.title}</h3>
                        <p className="projectDesc">{project.description}</p>
                      <a href={project.repo} target='_blank' rel='noreferrer' className='repoBtn'>
                            View
                        </a>
                    </div>
                </motion.div>
            ))}
        </div>
    </motion.section>
  )
}

export default Project
