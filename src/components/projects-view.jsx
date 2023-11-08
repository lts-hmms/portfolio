import React from 'react';
import { useTranslation } from "react-i18next";
import './projects-view.css';

function ProjectsView() {
  const { t } = useTranslation();
  return (
    <div className='container'>
      <div className='project-wrapper'>
        <h2 className='section-title'>{t('projects_link')}</h2>
        {/* start project */} 
        <div className='row'>
          <div className='col-lg-4 col-sm-12'>
            <div className='project-wrapper__text'>
              <h3 className='project-wrapper__text-title'>mequal – React client</h3>
              <div>
                <p className='mb-4'>
                  {t('project_mequal_react')}
                </p>
                <p className='mb-4'>
                  {t('project_mequal_react2')}
                </p>
              </div>
              <a className='custom-btn-live' href='https://mequal.netlify.app/' aria-label="link to live project" target='_blank' rel="noreferrer">{t("see_live")}</a>
              <a className='custom-btn-code' href='https://github.com/lts-hmms/mequal_client' aria-label="link to project code" target='_blank' rel="noreferrer">{t("see_code")}</a>
            </div>
          </div>
          <div className='col-lg-8 col-sm-12'>
            <div className='project-wrapper__image'>
            <a href='https://mequal.netlify.app/' aria-label="link to live project" target='_blank' rel="noreferrer">
                <img className='img-fluid shadow-lg' alt='mequal React Project Screen' src='/assets/mequal_screenshot.jpg' />
              </a>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4 col-sm-12'>
            <div className='project-wrapper__text'>
              <h3 className='project-wrapper__text-title'>Movie API</h3>
              <div>
                <p className='mb-4'>
                  {t('project_api_movies')}
                </p>
                <p className='mb-4'>
                  {t('project_api_movies2')}
                </p>
              </div>
              <a className='custom-btn-code' href='https://github.com/lts-hmms/movie_api' aria-label="link to project code" target='_blank' rel="noreferrer">{t("see_code")}</a>
            </div>
          </div>
          <div className='col-lg-8 col-sm-12'>
            <div className='project-wrapper__image'>
              <a href='https://github.com/lts-hmms/movie_api' aria-label="link to project code" target='_blank' rel="noreferrer">
                <img className='img-fluid shadow-lg' alt='API Placeholder' src='/assets/api_screenshot.jpg' />
              </a>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4 col-sm-12'>
            <div className='project-wrapper__text'>
              <h3 className='project-wrapper__text-title'>MeetUp</h3>
              <div>
                <p className='mb-4'>
                  {t('project_meetUp')}
                </p>
                <p className='mb-4'>
                  {t('project_meetUp2')}
                </p>
              </div>
              <a className='custom-btn-live' href='https://lts-hmms.github.io/meetup/' aria-label="link to live project" target='_blank' rel="noreferrer">{t("see_live")}</a>
              <a className='custom-btn-code' href='https://github.com/lts-hmms/meetup' aria-label="link to project code" target='_blank' rel="noreferrer">{t("see_code")}</a>
            </div>
          </div>
          <div className='col-lg-8 col-sm-12'>
            <div className='project-wrapper__image'>
              <a href='https://lts-hmms.github.io/meetup/' aria-label="link to live project" target='_blank' rel="noreferrer">
                <img className='img-fluid shadow-lg' alt='MeetUp Project Screen' src='/assets/meetup_screenshot.jpg' />
              </a>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4 col-sm-12'>
            <div className='project-wrapper__text'>
              <h3 className='project-wrapper__text-title'>Pokédex</h3>
              <div>
                <p className='mb-4'>
                  {t('project_pokedex')}
                </p>
              </div>
              <a className='d-none custom-btn-live' href='https://lts-hmms.github.io/pokedex-list-app' aria-label="link to live project" target='_blank' rel="noreferrer">{t("see_live")}</a>
              <a className='custom-btn-code' href='https://github.com/lts-hmms/pokedex-list-app' aria-label="link to project code" target='_blank' rel="noreferrer">{t("see_code")}</a>
            </div>
          </div>
          <div className='col-lg-8 col-sm-12'>
            <div className='project-wrapper__image'>
              <a href='https://lts-hmms.github.io/pokedex-list-app/' aria-label="link to live project" target='_blank' rel="noreferrer">
                <img className='img-fluid shadow-lg' alt='Pokédex Project Screen' src='/assets/pokedex_screenshot.jpg' />
              </a>
            </div>
          </div>
        </div>
        {/* end project */}  
        <div className='row'>
          <div className='col-lg-4 col-sm-12'>
            <div className='project-wrapper__text'>
              <h3 className='project-wrapper__text-title'>inTouch</h3>
              <div>
                <p className='mb-4'>
                  {t('project_inTouch')}
                </p>
                <p className='mb-4'>
                  {t('project_inTouch2')}
                </p>
              </div>
              <a className='custom-btn-code' href='https://github.com/lts-hmms/inTouch' aria-label="link to project code" target='_blank' rel="noreferrer">{t("see_code")}</a>
            </div>
          </div>
          <div className='col-lg-8 col-sm-12'>
            <div className='project-wrapper__image'>
              <a href='https://github.com/lts-hmms/inTouch' aria-label="link to project code" target='_blank' rel="noreferrer">
                <img className='img-fluid shadow-lg' alt='inTouch Project Screen' src='/assets/intouch_screenshots.jpg' />
              </a>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4 col-sm-12'>
            <div className='project-wrapper__text'>
              <h3 className='project-wrapper__text-title'>mequal Angular client</h3>
              <div>
                <p className='mb-4'>
                  {t('project_mequal_angular')}
                </p>
                <p className='mb-4'>
                  {t('project_mequal_angular2')}
                </p>
              </div>
              <a className='d-none custom-btn-live' href='https://lts-hmms.github.io/mequal-Angular-client/' aria-label="link to live project" target='_blank' rel="noreferrer">{t("see_live")}</a>
              <a className='custom-btn-code' href='https://github.com/lts-hmms/mequal-Angular-client' aria-label="link to project code" target='_blank' rel="noreferrer">{t("see_code")}</a>
            </div>
          </div>
          <div className='col-lg-8 col-sm-12'>
            <div className='project-wrapper__image'>
              <a href='https://lts-hmms.github.io/mequal-Angular-client/' aria-label="link to live project" target='_blank' rel="noreferrer">
                <img className='img-fluid shadow-lg' alt='mequal Angular Project Screen' src='/assets/mequal_angular_screenshot.jpg' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default ProjectsView;