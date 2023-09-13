import './App.css';
import { useRef } from 'react';
import { useTranslation } from "react-i18next";
import ScrollToTop from './components/ScrollToTop';
import HeroView from './components/hero-view';
import AboutView from './components/about-view';
import ProjectsView from './components/projects-view';
import ContactView from './components/contact-view';
import FooterView from './components/footer-view';
import Switch from './components/switch';

function App() {
  const { t } = useTranslation();
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    });
  }

  return (
    <div className="App">
      <ScrollToTop />
      <nav className="d-flex">
        <div role="navigation" className="p-2 w-100">
          <ul className='navigation'>
            <li onClick={() => scrollToSection(aboutMeRef)} className='link'>{t('about_link')}</li>
            <li onClick={() => scrollToSection(projectsRef)} className='link'>{t('projects_link')}</li>
            <li onClick={() => scrollToSection(contactRef)} className='link'>{t('contact_link')}</li>
            <li className='link'><a href='/assets/CV_JudithSueggeler.pdf' className='resume-link' aria-label="open resume on new tab" target='_blank' rel="noopener noreferrer">{t('resume_link')}</a></li>
          </ul>
        </div>
        <Switch />
      </nav>
      <div id='hero'>
          <HeroView />
      </div>

      <div ref={aboutMeRef} >
        <section id="about" className='section about-me'>
          <AboutView/>
        </section>
      </div>

      <div ref={projectsRef} >
        <section id="projects" className='section projects'>
          <ProjectsView/>
        </section>
      </div>

      <div ref={contactRef} >
        <section id="contact" className='section'>
          <ContactView/>
        </section>
      </div>
      <div className='footer navbar-static-bottom'>
        <FooterView/>
      </div>
    </div>
  );
}

export default App;
