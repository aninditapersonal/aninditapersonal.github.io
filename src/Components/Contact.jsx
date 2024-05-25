import React, { useRef } from 'react'
import '../App.css'
import emailjs from '@emailjs/browser';
import linkedin from '../Assets/linkedin.webp'
import github from '../Assets/github.png'
import leetcode from '../Assets/leetcode.png'
import hackerrank from '../Assets/hackerrank.webp'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ebb4mtf', 'template_co0aw74', form.current, {
        publicKey: '1plbZcbfSIozvE5yt',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email sent!')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <section id='contact'>
        <h2 className='heading'>Contact Me</h2>
        <div className="container-det">
          <div className="details">
            <span>Please fill out the form below to discuss any work opportunities with me.</span>
            <form id='form' ref={form} onSubmit={sendEmail}>
              <input type="name" className='name' placeholder='Your name' name='your_name' />
              <input type="email" className='email' placeholder='Your email' name='your_email' />
              <textarea className='msg' name='message' rows='5' placeholder='Your message'></textarea>
              <button type='submit' value='send'>Send me</button>
            </form>
          </div>
          <div className="container">
            <div className="address">
              <span className='cont-heading'>My Address</span>
              <p className='para'>Haritala, Koler Danga Road <br />Nabadwip, Nadia <br />P.O. Nabadwip <br />PIN: 741302</p>
            </div>
            <div className="cont-links">
              <span className='cont-heading'>Social Contacts</span>
              <div className="links">
                <a href='https://www.linkedin.com/in/aninditapersonal/' target='_blank' rel='noreferrer'><img src={linkedin} alt="Linkedin" className='link' /></a>
                <a href='https://github.com/aninditapersonal' target='_blank' rel='noreferrer'><img src={github} alt="Github" className='link' /></a>
                <a href='https://leetcode.com/u/aninditapersonal/' target='_blank' rel='noreferrer'><img src={leetcode} alt="Leetcode" className='link' /></a>
                <a href='https://www.hackerrank.com/profile/Anindita_Paul' target='_blank' rel='noreferrer'><img src={hackerrank} alt="Hackerrank" className='link' /></a>
              </div>
            </div>
            <div className="mail">
              <span className='cont-heading'>Email Me</span>
              <a href='mailto:aninditapaul.personal@gmail.com' className='para'>aninditapaul.personal@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact