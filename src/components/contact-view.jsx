import React from 'react';
import { useTranslation } from 'react-i18next';
import './contact-view.css';

function ContactView() {
  const { t } = useTranslation();
  return (
    <div className='contact-wrapper'>
        <h2 className='section-title'>{t('contact_link')}</h2>
        <p className='contact-wrapper__text'>{t("contact_text1")}</p>
        <p className='contact-wrapper__text'>{t("contact_text2")}</p>
        <a className='custom-btn-contact' href="mailto:judith.projects@gmail.com" aria-label="open email client" target='_blank' rel="noreferrer">Email</a>
    </div>
  )
}

export default ContactView;