import React, { useState } from 'react'
import './project.css'
import project1 from '../../assets/Project1.png'
import project2 from '../../assets/login.png'
import project3 from '../../assets/weather.png'
import project4 from '../../assets/quiz.png'
import project5 from '../../assets/portfolio.png'

const projects = [
  {
    title: 'Event Management System',
    description: 'React, Firebase, SQL',
    image: project1,
    repo: 'https://github.com/ShaluPruthi/Event-Management-Project-React-Firebase-'
  },
  {
    title: 'Login System',
    description: 'PHP, SQL',
    image: project2,
    repo: 'https://github.com/ShaluPruthi/PHP/tree/main/login1'
  },
  {
    title: 'Weather App',
    description: 'HTML, CSS, JavaScript',
    image: project3,
    repo: 'https://github.com/ShaluPruthi/Weather-App-Using-JS'
  },
  {
    title: 'Quiz App',
    description: 'HTML, CSS, JavaScript',
    image: project4,
    repo: 'https://github.com/ShaluPruthi/QuizApp-JS'
  },
  {
    title: 'Portfolio',
    description: 'React, Framer Motion',
    image: project5,
    repo: ''
  }
]

const Project = () => {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <section id="projects" className="projectsSection">
      <h2 className="sectionTitle">My Projects</h2>

      {/* Carousel */}
      <div className="carousel">
        <div className="carouselTrack">
          {[...projects, ...projects].map((project, index) => (
            <div className="projectWrapper" key={index}>
              
              {/* Image Card */}
              <div className="projectCard">
                <img src={project.image} alt={project.title} />

                <div className="overlay">
                  <button
                    className="plusBtn"
                    onClick={() => setActiveImage(project.image)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Info Section */}
              <div className="projectInfo">
                <h3 className="projectTitle">{project.title}</h3>
                <p className="projectDesc">{project.description}</p>

                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="repoBtn"
                  >
                    View
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeImage && (
        <div className="imageModal" onClick={() => setActiveImage(null)}>
          <img src={activeImage} alt="Project Preview" />
        </div>
      )}
    </section>
  )
}

export default Project
