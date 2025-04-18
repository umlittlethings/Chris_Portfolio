import React from 'react';
import { IoMdDownload } from "react-icons/io";

const SeeMore = () => {
  return (
    <div className="relative inline-flex items-center justify-center gap-4 group">
      <div className="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-[#021678] to-[#0429DE] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200" />
      <a role="button" className="group relative inline-flex items-center justify-center text-base rounded-4xl bg-gradient-to-r from-[#021678] to-[#0429DE] px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30" title="cv" target="_blank" href="https://drive.google.com/drive/folders/19AB-TrQcEmUfR17XklPiVE1W-yhT2PWz?usp=drive_link">Download CV
      <div className=' ml-2 scale-120'>
        <IoMdDownload />
      </div>
      </a>
    </div>
  );
}

export default SeeMore;