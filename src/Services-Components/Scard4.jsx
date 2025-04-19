import React from 'react'
import { ArrowRight, Layout } from "lucide-react";

const Scard4 = () => {
  return (
    <div className="max-w-sm p-6 rounded-xl cursor-pointer bg-gradient-to-br from-[#021678] to-[#4545FF] text-white shadow-lg hover:scale-105 duration-300 ease-in-out">
      {/* Icon */}
      <div className="text-white mb-4">
        <img className='w-8' src="Scardsz\color-picker.svg" alt="" />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-2">Graphic Design</h2>

      {/* Description */}
      <p className="text-white/80 text-sm mb-6">
      I love creating visuals that catch the eye and tell a story! 🎨✨ Bringing ideas to life with colors, typography, and sleek designs is my thing.
      </p>

      {/* Link */}
      <a href="#/ComingSoon" className="text-yellow-400 font-semibold inline-flex items-center hover:underline cursor-pointer">
        My Projects <ArrowRight className="ml-2 w-4 h-4" />
      </a>
    </div>
  )
}

export default Scard4