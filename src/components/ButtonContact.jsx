import React from 'react';

const ButtonContact = () => {
  return (
    <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-white backdrop-blur-lg px-2 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out border-white/20">
      <span className="text-sm sm:text-base md:text-lg lg:text-[26.67px] text-[#0422CD] whitespace-nowrap">CONTACT ME!</span>
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
        <div className="relative h-full w-10 bg-gray-700" />
      </div>
    </button>
  );
}

export default ButtonContact;