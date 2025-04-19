import React from 'react'
import { ArrowRight, Layout } from "lucide-react";

const Scard = () => {
  return (
    <div className="max-w-sm p-6 rounded-xl bg-gradient-to-br from-[#021678] to-[#4545FF] text-white shadow-lg hover:scale-105 duration-300 ease-in-out">
      {/* Icon */}
      <div className="text-white mb-4">
        <img className='w-8' src="Scardsz\palette.svg" alt="" />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-2">UI/UX Design</h2>

      {/* Description */}
      <p className="text-white/80 text-sm mb-6">
      I have a passion for designing intuitive and user-friendly interfaces! 🎨✨ I've even won a couple of competitions for my UI/UX skills—turning ideas into seamless experiences is what I love to do!
      </p>

      {/* Link */}
      <a href="#/ComingSoon" className="text-yellow-400 font-semibold inline-flex items-center hover:underline cursor-pointer">
        My Projects <ArrowRight className="ml-2 w-4 h-4" />
      </a>
    </div>
  )
}

export default Scard