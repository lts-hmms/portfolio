import React from 'react';
import { useTranslation } from "react-i18next";
import './about-view.css';

function AboutView() {
  const { t } = useTranslation();
  return (
    <div className="container">
        <h2 className='section-title'>{t('about_link')}</h2>
            <div className="about-wrapper row ">
              <div className='col-md-6 col-sm-12'>
                <div className="about-wrapper-image">
                    <img
                            alt="ProfileImage"
                            className="profile-image img-fluid"
                            src="/assets/profile_dez22.jpg"
                    />
                </div>
                </div>
                <div className='col-md-6 col-sm-12'>
                <div className='about-wrapper__info'>
                    <p className='about-wrapper__info-text'>
                        {t('about_text')}
                    </p>
                </div>
                </div>
            </div>            
    </div>
  )
}

export default AboutView