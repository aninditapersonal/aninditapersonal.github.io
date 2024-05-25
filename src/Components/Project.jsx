import React from 'react'
import '../App.css'
import ProjectItem from './ProjectItem'
import landing from '../Videos/Landing_Page.mp4'
import port from '../Videos/Portfolio-another.mp4'
import shop from '../Videos/Shopsy.mp4'
import temperature from '../Videos/Temperature_Converter.mp4'
import Portfolio from '../Videos/Portfolio.mp4'

function Project() {
  return (
    <>
      <section id='project'>
        <h2 className='heading'>My Projects</h2>
        <span className='desc'>I"m passionate about learning and implementing new projects. So I want to take your attention to show the smallest details of my work and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses acheive their goals and cretae a strong online presence.</span>
        <div className="container">
          <h2 className='subheading'>Projects</h2>
          <div className="projects">
            <ProjectItem src={landing} />
            <ProjectItem src={port} />
            <ProjectItem src={temperature} />
            <ProjectItem src={shop} />
            <ProjectItem src={Portfolio} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Project