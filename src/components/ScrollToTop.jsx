import React, { useEffect, useState} from 'react';
import { ChevronUp } from 'react-bootstrap-icons';

const ScrollToTop = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 300 ? setShowScrollTopButton(true) : setShowScrollTopButton(false) 
        })
    }, []);

    const scrollTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }

  return (
    <div>
    {showScrollTopButton && <ChevronUp color='white' size={30} onClick={scrollTop}></ChevronUp>}
    </div>
  )
}

export default ScrollToTop