import React from 'react'
import image from '../assets/imageOne.jpg'
import '../CSS/Project.css'
import ReadMe from '../assets/ReadMe.jpg'
import Weather from '../assets/Weather.png'
import ECommerce from '../assets/ECommerce.png'
import PayrollTracker from '../PayrollTracker.png'
import SVG from '../assets/SVG.png'


const Projects = () => {
    const projectArray=[
        {
            projectTitle:"Employee Payroll Tracker",
            projectDescription: "This is an employee payroll tracker that run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code.",
            image: PayrollTracker,
            gitHubUrl: "https://github.com/bfbrandhorst/Employee_Payroll_Record",
            deployedLink: "https://bfbrandhorst.github.io/Employee_Payroll_Record/"
        },
        {
            projectTitle:"Weather Dashboard",
            projectDescription: "This project demonstrates server-side APIs in a weather dashboard that will run in the browser and features dynamically updated HTML and CSS.",
            image: Weather,
            gitHubUrl: "https://github.com/bfbrandhorst/Weather_Check?tab=readme-ov-file",
            deployedLink: "https://bfbrandhorst.github.io/Weather_Check/"
        },
        {
            projectTitle:"Professional README Generator",
            projectDescription: "A README generator that allows you to create a command-line application that dynamically generates a professional README.md file from a user's input.",
            image: ReadMe,
            gitHubUrl: "https://github.com/bfbrandhorst/Create_README?tab=readme-ov-file",
            VideoDemonstration: "https://drive.google.com/file/d/1bMwD-oKHwSSunysnNc_aVNKTyGeykyfb/view"
        },
        {
            projectTitle:"SVG Logo Maker",
            projectDescription: "This application allows you to build a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file.",
            image: SVG,
            gitHubUrl: "https://github.com/bfbrandhorst/CreateALogoSVG",
            VideoDemonstration: "https://drive.google.com/file/d/1SmA2I-QEK4F96TMh60Jr7uOAGSitk5m_/view"
        },
        {
            projectTitle:"E-Commerce Back End",
            projectDescription: "This application is a build for the back end for an e-commerce website utilizing Express.js, Sequelize, and a PostgreSQL database.",
            image: ECommerce,
            gitHubUrl: "https://github.com/bfbrandhorst/E-Commerce_API",
            VideoDemonstration: "https://drive.google.com/file/d/1plaN7t3rhKrMMwH1xDmcjRNZbrKPHme0/view"
        },
        {
            projectTitle:"Slice Overflow",
            projectDescription: "This project is a full web application for a Pizza Parlor, built from scratch using numerous technologies.",
            image: image,
            gitHubUrl: "https://github.com/bfbrandhorst/SliceOverflow",
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
