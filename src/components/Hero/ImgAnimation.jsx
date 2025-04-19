import React, { useEffect, useState } from 'react';

const ImgAnimation = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-16">
      {/* Animated background waves */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="wave-container">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
        </div>
      </div>

      {/* Responsive Image with animation */}
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet="Mobile/Landing/Landing-Mobile.svg"
        />
        <img
          className={`relative z-10 m-auto transform transition-all duration-1000 ease-out
            ${isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
            hover:scale-105 transition-transform duration-700
            animate-float`}
          src="Hero Image.svg"
          alt="Hero"
          onLoad={() => setIsLoaded(true)}
        />
      </picture>

      {/* CSS for the waves */}
      <style jsx>{`
        .wave-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 200%;
          height: 100%;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' class='shape-fill'%3E%3C/path%3E%3C/svg%3E");
          background-size: 1600px 100%;
          animation: wave-animation 25s linear infinite;
          z-index: 1;
        }

        .wave1 {
          opacity: 0.2;
          background-color: rgba(2, 17, 103, 0.1);
          animation-delay: 0s;
          bottom: 0;
        }

        .wave2 {
          opacity: 0.15;
          background-color: rgba(2, 30, 144, 0.15);
          animation-delay: -5s;
          animation-duration: 20s;
          bottom: 10px;
        }

        .wave3 {
          opacity: 0.1;
          background-color: rgba(4, 34, 205, 0.1);
          animation-delay: -2s;
          animation-duration: 15s;
          bottom: 15px;
        }

        @keyframes wave-animation {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ImgAnimation;
