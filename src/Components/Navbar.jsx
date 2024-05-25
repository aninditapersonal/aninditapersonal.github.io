import React, { useEffect, useState } from 'react'
import '../App.css'

function Navbar() {
  const [active, setActive] = useState("home")
  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  useEffect(() => {
    const home = document.getElementById("home");
    const about = document.getElementById("about");
    const project = document.getElementById("project");
    const certificate = document.getElementById("certificate");
    const contact = document.getElementById("contact");
    const onscroll = () => {
        if (window.scrollY >= home.offsetTop && window.scrollY < home.offsetTop + home.offsetHeight) setActive("home");
        else if (window.scrollY >= about.offsetTop && window.scrollY < about.offsetTop + about.offsetHeight) setActive("about");
        else if (window.scrollY >= project.offsetTop && window.scrollY < project.offsetTop + project.offsetHeight) setActive("project");
        else if (window.scrollY >= certificate.offsetTop && window.scrollY < certificate.offsetTop + certificate.offsetHeight) setActive("certificate");
        else if (window.scrollY >= contact.offsetTop && window.scrollY < contact.offsetTop + contact.offsetHeight) setActive("contact");
    }
    window.onscroll = onscroll;
    onscroll();
    return () => {
      window.onscroll = null;
    }
  }, [])

  return (
    <nav className='navbar'>
      <div className="deskMenu">
        <ul>
          <li className= {active === 'home' ? 'active' : ""} onClick={() => scroll('home')}>
            Home
          </li>
          <li className= {active === 'about' ? 'active' : ""} onClick={() => scroll('about')}>
            About
          </li>
          <li className= {active === 'project' ? 'active' : ""} onClick={() => scroll('project')}>
            Projects
          </li>
          <li className= {active === 'certificate' ? 'active' : ""} onClick={() => scroll('certificate')}>
            Achievements
          </li>
          <li className= {active === 'contact' ? 'active' : ""} onClick={() => scroll('contact')}>
            Contact
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar