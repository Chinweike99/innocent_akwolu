import React, { useState } from 'react'
import './Portfolio.css'
import {  projectData } from '../../assets/assets'

const Portfolio = () => {

  const [projects, setProjects] = useState(projectData);
  const getCurrent = (title) =>{
    setProjects(projectData.filter((project )=>project.title === title))
  }


  return (
    <div className='portfolio'>
      <div className='mainText'>
        <span>What i will do for you</span>
        <h2>Projects</h2>
      </div>

      <div className="container">
        <div className="filterButtons">
          <div onClick={()=>setProjects(projectData)} className="btn">All</div>
          <div onClick={()=>getCurrent("ecommerce")} className="btn">E-commerce</div>
          <div className="btn">Interacting</div>
          <div onClick={()=>getCurrent("chat-app")} className="btn">Web App</div>
        </div>

        <div className="portFolioGallery">
          <div className="portBox">
            {
              projects.map((project, index) =>{
                return(
                  <a id='portfolio' href={project.link} target="_blank" rel="noopener noreferrer" key={index} className='projectMap'>
                  <div className='projectInfo'>
                    <span>{project.name}</span>
                    <span>{project.about}</span>
                  </div>
                  <img src={project.image} alt="project_website" />
                </a>
                )
              })
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio