import React from 'react';
import './footer-view.css';
import { Linkedin } from 'react-bootstrap-icons';
import { Github } from 'react-bootstrap-icons';

function FooterView() {
  return (
    <div className='container'>
         <div className="social-links">
            <a href="https://linkedin.com/in/judith-sueggeler" aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <Linkedin color='white' size={30}/>
            </a>
            <a href="https://www.github.com/lts-hmms" aria-label="Github" target="_blank" rel="noreferrer">
            <Github color='white' size={30}/>
            </a>
         </div>
         <div style={{ borderTop: "1px solid #fff ", marginLeft: 450, marginRight: 450 }}></div>
         <p style={{fontSize:"12px"}}>©2023</p>
    </div>
  )
}

export default FooterView;