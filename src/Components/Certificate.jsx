import React from 'react'
import '../App.css'
import CertificateItem from './CertificateItem'
import coursera1 from '../Certificates/Coursera3.jpg'
import coursera2 from '../Certificates/Coursera4.jpg'
import coursera3 from '../Certificates/Coursera5.jpg'
import aws from '../Certificates/AWS.jpg'
import micro_azure from '../Certificates/Microsoft Azure Fundamentals.jpg'
import azure from '../Certificates/Azure Fundamentals Architecture.jpg'
import sql from '../Certificates/SQL_basic certificate.jpg'

function Certificate() {
    return (
        <section id='certificate'>
            <h2 className='heading'>My Achievements</h2>
            <span className='desc'>My dedication to professional development is evident through my certifications from various platforms. These credentials have equipped me to solve complex problems. So I want to show you my acheivements.</span>
            <div className="container">
                <h2 className='subheading'>Certificates</h2>
                <div className="certificates">
                    <CertificateItem src={coursera1}/>
                    <CertificateItem src={coursera2}/>
                    <CertificateItem src={coursera3}/>
                    <CertificateItem src={aws}/>
                    <CertificateItem src={micro_azure}/>
                    <CertificateItem src={azure}/>
                    <CertificateItem src={sql}/>
                </div>
            </div>
        </section>
    )
}

export default Certificate