import React from 'react';
import { useTranslation } from "react-i18next";
import './hero-view.css';

function HeroView() {
  const { t } = useTranslation();
  return (
    <div className="container">
        <h1 className="hero-title">
            {t("hero_text1")}<span className='text-color-main'>{t("hero_name")} </span> {t("hero_text2")}</h1>
    </div>
  );
}

export default HeroView;