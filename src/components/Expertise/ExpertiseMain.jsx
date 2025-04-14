import React, { useEffect, useState, useRef } from 'react';
import Expertise from './Expertise';
import Education from './Education';
import Work from './Work';

const ExpertiseMain = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the component enters the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div className="container" ref={componentRef}>
      <div 
        className={`grid grid-flow-col my-10 mx-30 transition-all duration-1000 ease-out
          ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
      >
        <div className={`transition-all duration-1000 delay-100 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
          <Expertise />
        </div>
        <div className="grid grid-flow-row mx-5">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
            <Education />
          </div>
          <div className={`grid grid-flow-row pt-10 transition-all duration-1000 delay-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
            <Work />
          </div>
        </div>
      </div>
      
      {/* Add CSS for custom animations */}
      <style jsx>{`
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale3d(0.8, 0.8, 0.8);
          }
          to {
            opacity: 1;
            transform: scale3d(1, 1, 1);
          }
        }
      `}</style>
    </div>
  );
};

export default ExpertiseMain;