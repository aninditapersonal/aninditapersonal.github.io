import React from 'react'
import '../App.css'
import graduation from '../Assets/grad-cap-removebg-preview.png'
import hse from '../Assets/Higher_Secondary-removebg-preview.png'
import se from '../Assets/Secondary-removebg-preview.png'
import Skills from './Skills'

function About() {
  return (
    <>
      <section id='about'>
        <h2 className='heading'>About Me</h2>
        <span className="desc">I'm Strong in design and integration with intuitive problem-solving skills. Proficient in C, C++, JAVA, HTML, CSS, JAVASCRIPT, REACTJS and MYSQL. Eager to learn and grow in my carrier. Highly passionate to bring my fresh perspective to your team. Ability to translate business requirements into technical solutions.</span>
        <div className="details">
          <div className="det-cont">
            <img src={graduation} alt="Graduation" />
            <div className="text">
              <div className="textHeading">
                <h2>B.Tech (CSE)</h2>
                <span>2020 - 2024 | JIS College of Engineering</span>
              </div>
              <p>I am pursuing this course from JIS College of Engineering, under the MAKAUT university.Till now my average SGPA is 9.19.</p>
            </div>
          </div>
          <div className="det-cont">
            <img src={hse} alt="Higher Secondary" />
            <div className="text">
              <div className="textHeading">
                <h2>Higher Secondary</h2>
                <span>2018 - 2020 | Nabadwip Balika Vidyalaya</span>
              </div>
              <p>I completed my higher secondary education in the Science stream under the West Bangel Council of Higher Secondary Education with a percentage of 87%.</p>
            </div>
          </div>
          <div className="det-cont">
            <img src={se} alt="Secondary" />
            <div className="text">
              <div className="textHeading">
                <h2>Secondary</h2>
                <span>2012 - 2018 | Nabadwip Bakultala Balika Vidyalaya</span>
              </div>
              <p>I completed my secondary education from West Bangel Board of Secondary Education with a percentage of 81%.</p>
            </div>
          </div>
        </div>
        <Skills />
      </section>
    </>
  )
}

export default About