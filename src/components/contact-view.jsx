import React from 'react';
import './contact-view.css';

function ContactView() {
  return (
    <div className='contact-wrapper'>
        <h2 className='section-title'>contact</h2>
        <p className='contact-wrapper__text'>Now let me know about you!</p>
        <a className='custom-btn-contact' href="mailto:judith.projects@gmail.com" aria-label="open email client" target='_blank' rel="noreferrer">Email</a>
    </div>
  )
}

export default ContactView;