import React from 'react'
import '../Styles/projectItem.css'

function ProjectItem( {src} ) {
    return (
        <>
            <div className="projectItem">
                <a href={src} target='_blank' rel="noreferrer">
                    <video autoPlay muted loop preload='auto' controls={false} autoFocus={true}>
                        <source src={src} type="video/mp4"></source>
                    </video>
                </a>
            </div>
        </>
    )
}

export default ProjectItem