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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ut expedita tempore similique quasi laudantium earum quia 
            totam soluta adipisci quibusdam deserunt quidem minus cumque 
            asperiores distinctio, alias recusandae, necessitatibus laboriosam 
            commodi exercitationem impedit, veniam eaque.

        </p>

      </section>
      
    </div>
  )
}

export default About
