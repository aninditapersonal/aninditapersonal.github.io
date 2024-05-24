import React from 'react'
import '../Styles/certificateItem.css'
import deep from '../Certificates/DEEP LEARNING.jpg'

function CertificateItem() {
  return (
    <>
        <div className="certificateItem">
            <a href={deep} target='_blank'><img src={deep} alt="Deep Learning" /></a>
        </div>
    </>
  )
}

export default CertificateItem