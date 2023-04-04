import React, { useEffect, useState} from 'react';
import { ChevronUp } from 'react-bootstrap-icons';

const ScrollToTop = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false)

    useEffect(() => {
      window.addEventListener('scroll', () => {
        if(window.scrollY > 300) {
          setShowScrollTopButton(true)
        } else {
          setShowScrollTopButton(false)
        }
      })
    }, []);

    const scrollTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
  return (
    <div>
    {showScrollTopButton && <ChevronUp onClick={scrollTop} className='top-btn-position top-btn-style'></ChevronUp>}
    </div>
  )
}

export default ScrollToTop