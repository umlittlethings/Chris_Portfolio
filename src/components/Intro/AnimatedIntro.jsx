import React, { useState, useEffect } from 'react';

const AnimatedIntro = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <p 
      className={`
        text-justify
        font-jakarta 
        font-medium 
        mt-15
        md:pr-10 
        text-[20px]
        md:mr-100
        transition-all 
        duration-1000 
        ease-out
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'}
      `}
    >
      I'm a third-year Computer Science student at Universitas 
      Brawijaya who loves building cool stuff for mobile and web! 🚀 
      I mix technical skills with creativity, teamwork, and solid 
      communication—whether it's coding, problem-solving, or 
      presenting ideas. With a knack for designing user-friendly 
      interfaces and a passion for learning, I'm all about creating 
      impactful tech solutions!
    </p>
  );
};

export default AnimatedIntro;