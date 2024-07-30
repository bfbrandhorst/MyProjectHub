import React from 'react'
import macbookUnsplash from '../assets/macbookUnsplash.jpg'
import '../CSS/About.css'

const About = () => {
  return (
    <div className='aboutContainer' >
      <section className='imageContent'>
        <h1 className='header'> about me </h1>
        <div className='imageContainer'> 
            <img src={macbookUnsplash} alt="" />
        </div>
      </section>
      <section className='aboutContent'>
        <p>
            Hello! I'm Bethany Brandhorst, a passionate software engineer in 
            full-stack development.  I am a recent graduate from UT Austin 
            and am excited to continue honing my skillset in JavaScript, HTML, 
            and various modern frameworks like React and PostgreSQL.

            Looking forward, I am excited about opportunities that allow me to
            continue my growth and learning in this industry. Feel free to connect 
            with me on LinkedIn or checkout my projects on GitHub.  

        </p>

      </section>
      
    </div>
  )
}

export default About
