import React from 'react'
import '../Styles/certificateItem.css'

function CertificateItem( {src} ) {
  return (
    <>
        <div className="certificateItem">
            <a href={src} target='_blank' rel="noreferrer"><img src={src} alt="certificate" /></a>
        </div>
    </>
  )
}

export default CertificateItem