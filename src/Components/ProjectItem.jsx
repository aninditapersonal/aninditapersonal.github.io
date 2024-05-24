import React from 'react'
import '../Styles/projectItem.css'
import landing from '../Videos/Landing_Page.mp4'
import temperature from '../Videos/Temperature_Converter.mp4'

function ProjectItem() {
    return (
        <>
            <div className="projectItem">
                <a href={landing} target='_blank'>
                    <video autoPlay muted loop preload='auto' controls autoFocus={true}>
                        <source src={landing} type="video/mp4"></source>
                    </video>
                </a>
                <a href={temperature} target='_blank'>
                    <video autoPlay muted loop preload='auto' controls autoFocus={true}>
                        <source src={temperature} type="video/mp4"></source>
                    </video>
                </a>
            </div>
        </>
    )
}

export default ProjectItem