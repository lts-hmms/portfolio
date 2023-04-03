import React from 'react';
import './projects-view.css';
import pokedex from '../assets/pokedex_screenshot.jpg';
import meetup from '../assets/meetup_screenshot.jpg';
import intouch from '../assets/intouch_screenshots.jpg';
import apiPlaceholder from '../assets/api_screenshot.jpg';
import mequalReact from '../assets/mequal_screenshot.jpg';
import mequalAngular from '../assets/mequal_angular_screenshot.jpg';

function ProjectsView() {
  return (
    <div className='container'>
      <div className='project-wrapper'>
        <h2 className='section-title'>projects</h2>
        {/* start project */} 
        <div className='row'>
          <div className='col-lg-4 col-sm-12'>
            <div className='project-wrapper__text'>
              <h3 className='project-wrapper__text-title'>Pokédex</h3>
              <div>
                <p className='mb-4'>A simple app built with HTML, CSS and JavaScript that uses an external API and enables the viewing of data points in detail.</p>
              </div>
              <a className='custom-btn-live' href='https://lts-hmms.github.io/pokedex-list-app' aria-label="link to live project" target='_blank' rel="noreferrer">See live</a>
              <a className='custom-btn-code' href='https://github.com/lts-hmms/pokedex-list-app' aria-label="link to project code" target='_blank' rel="noreferrer">See code</a>
            </div>
          </div>
          <div className='col-lg-8 col-sm-12'>
            <div className='project-wrapper__image'>
              <a href='https://lts-hmms.github.io/pokedex-list-app/' aria-label="link to live project" target='_blank' rel="noreferrer">
                <img className='img-fluid shadow-lg' alt='Pokédex Project Screen' src={pokedex} />
              </a>
            </div>
          </div>
        </div>
        {/* end project */}  
        <div className='row'>
          <div className='col-lg-4 col-sm-12'>
            <div className='project-wrapper__text'>
              <h3 className='project-wrapper__text-title'>MeetUp</h3>
              <div>
                <p className='mb-4'>A serverless, progressive web application (PWA) build with React, using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.</p>
              </div>
              <a className='custom-btn-live' href='https://lts-hmms.github.io/meetup/' aria-label="link to live project" target='_blank' rel="noreferrer">See live</a>
              <a className='custom-btn-code' href='https://github.com/lts-hmms/meetup' aria-label="link to project code" target='_blank' rel="noreferrer">See code</a>
            </div>
          </div>
          <div className='col-lg-8 col-sm-12'>
            <div className='project-wrapper__image'>
              <a href='https://lts-hmms.github.io/meetup/' aria-label="link to live project" target='_blank' rel="noreferrer">
                <img className='img-fluid shadow-lg' alt='MeetUp Project Screen' src={meetup} />
              </a>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4 col-sm-12'>
            <div className='project-wrapper__text'>
              <h3 className='project-wrapper__text-title'>inTouch</h3>
              <div>
                <p className='mb-4'>inTouch is a chat app for mobile devices using React Native. The app provides users with a chat interface and options to share images and their location.</p>
              </div>
              <a className='custom-btn-code' href='https://github.com/lts-hmms/inTouch' aria-label="link to project code" target='_blank' rel="noreferrer">See code</a>
            </div>
          </div>
          <div className='col-lg-8 col-sm-12'>
            <div className='project-wrapper__image'>
              <a href='https://github.com/lts-hmms/inTouch' aria-label="link to project code" target='_blank' rel="noreferrer">
                <img className='img-fluid shadow-lg' alt='inTouch Project Screen' src={intouch} />
              </a>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4 col-sm-12'>
            <div className='project-wrapper__text'>
              <h3 className='project-wrapper__text-title'>mequal – React client</h3>
              <div>
                <p className='mb-4'>The client-side of a movie-app, build as a single-page application, allows users to create an account, logging in, save and remove movies as their favorites in a list, search a bulk of movies by title, receive information about them and updating and deleting their user profile.</p>
              </div>
              <a className='custom-btn-live' href='https://mequal.netlify.app/' aria-label="link to live project" target='_blank' rel="noreferrer">See live</a>
              <a className='custom-btn-code' href='https://github.com/lts-hmms/mequal_client' aria-label="link to project code" target='_blank' rel="noreferrer">See code</a>
            </div>
          </div>
          <div className='col-lg-8 col-sm-12'>
            <div className='project-wrapper__image'>
            <a href='https://mequal.netlify.app/' aria-label="link to live project" target='_blank' rel="noreferrer">
                <img className='img-fluid shadow-lg' alt='mequal React Project Screen' src={mequalReact} />
              </a>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4 col-sm-12'>
            <div className='project-wrapper__text'>
              <h3 className='project-wrapper__text-title'>Movie API</h3>
              <div>
                <p className='mb-4'>The server-side component of a movies web application. It provides users with access to information about different movies, directors, and genres. Users are able to sign up, update their personal information, and create a list of their favorite movies.</p>
              </div>
              <a className='custom-btn-code' href='https://github.com/lts-hmms/movie_api' aria-label="link to project code" target='_blank' rel="noreferrer">See code</a>
            </div>
          </div>
          <div className='col-lg-8 col-sm-12'>
            <div className='project-wrapper__image'>
              <a href='https://github.com/lts-hmms/movie_api' aria-label="link to project code" target='_blank' rel="noreferrer">
                <img className='img-fluid shadow-lg' alt='API Placeholder' src={apiPlaceholder} />
              </a>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4 col-sm-12'>
            <div className='project-wrapper__text'>
              <h3 className='project-wrapper__text-title'>mequal Angular client</h3>
              <div>
                <p className='mb-4'>The client-side of a movie-app, build as a single-page application, allows users to create an account, logging in, save and remove movies as their favorites in a list, receive information about them and updating and deleting their user profile.</p>
              </div>
              <a className='custom-btn-live' href='https://lts-hmms.github.io/mequal-Angular-client/' aria-label="link to live project" target='_blank' rel="noreferrer">See live</a>
              <a className='custom-btn-code' href='https://github.com/lts-hmms/mequal-Angular-client' aria-label="link to project code" target='_blank' rel="noreferrer">See code</a>
            </div>
          </div>
          <div className='col-lg-8 col-sm-12'>
            <div className='project-wrapper__image'>
              <a href='https://lts-hmms.github.io/mequal-Angular-client/' aria-label="link to live project" target='_blank' rel="noreferrer">
                <img className='img-fluid shadow-lg' alt='mequal Angular Project Screen' src={mequalAngular} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default ProjectsView;