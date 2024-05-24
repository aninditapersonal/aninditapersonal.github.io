import React from 'react'
import '../App.css'
import c from '../Assets/c.jpg'
import cpp from '../Assets/c++.webp'
import java from '../Assets/java.jpg'
import html from '../Assets/html.png'
import css from '../Assets/css.png'
import js from '../Assets/javascript.jpg'
import react from '../Assets/reactjs.png'
import mysql from '../Assets/mysql.jpg'

function Skills() {
    return (
        <>
            <div id='skills'>
                <h2 className='subheading'>Skills</h2>
                <div className="lang">
                    <img src={c} alt="C" />
                    <img src={cpp} alt="C++" />
                    <img src={java} alt="JAVA" />
                    <img src={html} alt="HTML" />
                    <img src={css} alt="CSS" />
                    <img src={js} alt="JAVASCRIPT" />
                    <img src={react} alt="REACTJS" />
                    <img src={mysql} alt="REACTJS" />
                </div>
            </div>
        </>
    )
}

export default Skills