import React from 'react'
import '../App.css'
import profile from '../Assets/profile2-removebg.png'
import resume from '../Certificates/Resume.pdf'

function Home() {
  return (
    <>
      <section id='home'>
          <div className="left">
            <span className='hello'>Hello, </span>
            <span className='introText'>I'm <span className='introName'>Anindita Paul</span><br />a Website Designer & a Software Engineer</span>
            <p className='introPara'>I'm a skilled web designer with experience in creating <br />visually appealing and user friendly websites.</p>
            <button className='btn'>
              <a href={resume} download='Resume'>Download Resume</a>
            </button>
          </div>
          <div className="right">
            <img src={profile} alt="Profile picture" />
          </div>
      </section>

    </>
  )
}

export default Home