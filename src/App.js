import './App.css';
import { useRef } from 'react';
import ScrollToTop from './components/ScrollToTop';
import HeroView from './components/hero-view';
import AboutView from './components/about-view';
import ProjectsView from './components/projects-view';
import ContactView from './components/contact-view';
import FooterView from './components/footer-view';

function App() {
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
      <div role="navigation">
        <ul className='navigation'>
          <li onClick={() => scrollToSection(aboutMeRef)} className='link'>about me</li>
          <li onClick={() => scrollToSection(projectsRef)} className='link'>projects</li>
          <li onClick={() => scrollToSection(contactRef)} className='link'>contact</li>
        </ul>
      </div>
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
