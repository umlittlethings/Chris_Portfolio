import React from 'react'
import { ArrowRight, Layout } from "lucide-react";

const Scard5 = () => {
  return (
    <div className="max-w-sm p-6 rounded-xl cursor-pointer bg-gradient-to-br from-[#021678] to-[#4545FF] text-white shadow-lg hover:scale-105 duration-300 ease-in-out">
      {/* Icon */}
      <div className="text-white mb-4">
        <img className='w-8' src="src\assets\Scardsz\star-01.svg" alt="" />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-2">Brand Identity</h2>

      {/* Description */}
      <p className="text-white/80 text-sm mb-6">
      I love crafting brands that stand out and leave a lasting impression! 🎨✨ From logos to color palettes, I bring ideas to life with cohesive and memorable designs.
      </p>

      {/* Link */}
      <a href="#/ComingSoon" className="text-yellow-400 font-semibold inline-flex items-center hover:underline cursor-pointer">
        My Projects <ArrowRight className="ml-2 w-4 h-4" />
      </a>
    </div>
  )
}

export default Scard5