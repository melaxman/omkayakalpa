import React, { useEffect, useRef, useState } from 'react';

const AnimatedSection = ({
  children,
  className = '',
  animation = 'fadeUp',
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        } else {
          setIsVisible(false);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const animations = {
    fadeUp: `transform transition-all duration-1000 ease-out ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
    }`,
    fadeIn: `transition-all duration-1000 ease-out ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`,
    slideLeft: `transform transition-all duration-1000 ease-out ${
      isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
    }`,
    slideRight: `transform transition-all duration-1000 ease-out ${
      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
    }`
  };

  return (
    <div ref={ref} className={`${animations[animation]} ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;