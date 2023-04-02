import React from 'react';
import profileImage from '../assets/profile_dez22.jpg';
import './about-view.css';

function AboutView() {
  return (
    <div className="container">
        <h2 className='section-title'>about me</h2>
            <div className="about-wrapper row ">
              <div className='col-md-6 col-sm-12'>
                <div className="about-wrapper-image">
                    <img
                            alt="ProfileImage"
                            className="profile-image img-fluid"
                            src={profileImage}
                    />
                </div>
                </div>
                <div className='col-md-6 col-sm-12'>
                <div className='about-wrapper__info'>
                    <p className='about-wrapper__info-text'>
                            I am a Junior Web Developer living in Berlin and grew up in a rural area of NRW, Germany. While exploring myself in different fields which are all related to communication (e.g. press, marketing, journalism), I always felt attracted to coding and building webpages. With the beginning of 2021 I overcame my fears of failing as a woman in tech and made my dream come true: I started learning JavaScript by myself, in August I expanded my knowledge with a 6-month Full-Stack Web Development program by CareerFoundry. In March I'm going to finish the course with an outcome of outstanding projects and a great deal of new knowledge – e.g. including MongoDB, Express, React, Node, and Angular. And if that's not enough I can tell I've never felt this passioned and fired up about anything before. Sounds huge? Yes it is!
                            So, soon I'll feel ready to bring all of it into a brilliant team and continue to grow with. You know one? Great, take your time to watch my projects and don't hesitate to contact me. I'm looking forward to hearing from you!
                    </p>
                </div>
                </div>
            </div>            
    </div>
  )
}

export default AboutView