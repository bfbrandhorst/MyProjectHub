import React from 'react'
import image from '../assets/imageOne.jpg'
import '../CSS/Project.css'


const Projects = () => {
    const projectArray=[
        {
            projectTitle:"Cool Project",
            projectDescription: "its a really cool",
            image: image,
            gitHubUrl: "www.google.com",
            deployedLink: "www.google.com"
        },
        {
            projectTitle:"Cool Project",
            projectDescription: "its a really cool",
            image: image,
            gitHubUrl: "www.google.com",
            deployedLink: "www.google.com"
        },
        {
            projectTitle:"Cool Project",
            projectDescription: "its a really cool",
            image: image,
            gitHubUrl: "www.google.com",
            deployedLink: "www.google.com"
        },
        {
            projectTitle:"Cool Project",
            projectDescription: "its a really cool",
            image: image,
            gitHubUrl: "www.google.com",
            deployedLink: "www.google.com"
        },
        {
            projectTitle:"Cool Project",
            projectDescription: "its a really cool",
            image: image,
            gitHubUrl: "www.google.com",
            deployedLink: "www.google.com"
        },
        {
            projectTitle:"Cool Project",
            projectDescription: "its a really cool",
            image: image,
            gitHubUrl: "www.google.com",
            deployedLink: "www.google.com"
        },
    
        

    ]
  return (
    <div className='projectContainer'>
      {
        projectArray.map((project,index)=>(
            <div key={index} className='projectCard'>
                <h3>{project.projectTitle}</h3>
                <img src={project.image}/>
                <p>{project.projectDescription}</p>
                <a href={project.gitHubUrl}>link to repository</a>
                <a href={project.deployedLink}>link to deployed site</a>
            </div>
        ))
      }
    </div>
  )
}

export default Projects
