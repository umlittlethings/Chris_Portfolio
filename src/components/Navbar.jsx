import React, { useState, useEffect } from 'react';
import ButtonContact from './ButtonContact';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle navigation menu
  const handleNav = () => {
    setNav(!nav);
  };

  // Check if screen size is mobile
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Add scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`transition-all duration-300 z-50 bg-gradient-to-r from-[#021167] via-[#021E90] to-[#0422CD] 
      ${isScrolled ? 'sticky top-2 shadow-lg rounded-xl' : 'relative'} 
      ${isMobile ? (isScrolled ? 'mx-2' : 'mx-0') : isScrolled ? 'mx-3 my-0 rounded-2xl' : 'w-full rounded-none'}
      py-2 px-4 text-black font-semibold`}>
      <div className='flex justify-between items-center'>
        <div className={isMobile ? 'pl-0 ml-0' : 'pl-2'}>
        <Link to="/">
          <img 
            className={`py-1 ${
              isMobile ? 'scale-60 max-h-10 -ml-2' : 'scale-80 max-h-16'
            }`} 
            src="src/assets/Logo.svg" 
            alt="Logo" 
          />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <ul className='hidden md:flex space-x-6 lg:space-x-20 p-2 font-jakarta'>
          <Link to="/">
            <li className='py-2 md:py-3 lg:py-4 text-white text-sm md:text-base lg:text-[20.67px]'>HOME</li>
          </Link>
          
          <li className='py-2 md:py-3 lg:py-4 text-white text-sm md:text-base lg:text-[20.67px]'>SERVICES</li>
          
          <Link to="/ComingSoon">
            <li className='py-2 md:py-3 lg:py-4 text-white text-sm md:text-base lg:text-[20.67px]'>PROJECTS</li>
          </Link>
          
          
          <Link to="/About">
            <ButtonContact/>
          </Link>
          

        </ul>
        
        {/* Mobile Burger Button */}
        <div className='md:hidden cursor-pointer z-50' onClick={handleNav}>
          {nav ? <X size={24} color='white' /> : <Menu size={24} color='white' />}
        </div>
        
        {/* Mobile Navigation */}
        <div className={nav 
          ? 'fixed md:hidden top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-gradient-to-r from-[#021167] via-[#021E90] to-[#0422CD] text-center ease-in duration-300 z-40' 
          : 'fixed md:hidden top-[-100%] left-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-gradient-to-r from-[#021167] via-[#021E90] to-[#0422CD] text-center ease-in duration-300 z-40'
        }>
          <ul className='p-4 font-jakarta'>
            <li className='py-4 text-white text-xl sm:text-2xl'>HOME</li>
            <li className='py-4 text-white text-xl sm:text-2xl'>SERVICES</li>
            <li className='py-4 text-white text-xl sm:text-2xl'>PROJECTS</li>
            <li className='py-4'><ButtonContact/></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;