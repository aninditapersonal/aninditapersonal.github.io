import React from 'react'
import '../App.css'
import ProjectItem from './ProjectItem'
import CertificateItem from './CertificateItem'

function Project() {
  return (
    <>
      <section id='portfolio'>
        <h2 className='heading'>My Portfolio</h2>
        <span className='desc'>I"m passionate about learning and implementing new projects. So I want to take your attention to show the smallest details of my work and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses acheive their goals and cretae a strong online presence.</span>
        <div className="container">
          <div className='item'>
            <h2 className='subheading'>Projects</h2>
            <div className="projects">
              <ProjectItem />
              <ProjectItem />
            </div>
          </div>
          <div className='item'>
            <h2 className='subheading'>Certificates</h2>
            <div className="certificates">
              <CertificateItem />
              <CertificateItem />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Project