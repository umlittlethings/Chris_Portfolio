import React from 'react'
import { ArrowRight, Layout } from "lucide-react";

const Scard3 = () => {
  return (
    <div className="max-w-sm p-6 rounded-xl bg-gradient-to-br from-[#021678] to-[#4545FF] text-white shadow-lg hover:scale-105 duration-300 ease-in-out">
      {/* Icon */}
      <div className="text-white mb-4">
        <img className='w-8' src="src\assets\Scardsz\Component.svg" alt="" />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-2">Mobile App Development</h2>

      {/* Description */}
      <p className="text-white/80 text-sm mb-6">
      I love bringing ideas to life through mobile apps! 📱✨ From smooth performance to user-friendly design, I build apps that make an impact.
      </p>

      {/* Link */}
      <a href="#/ComingSoon" className="text-yellow-400 font-semibold inline-flex items-center hover:underline cursor-pointer">
        My Projects <ArrowRight className="ml-2 w-4 h-4" />
      </a>
    </div>
  )
}

export default Scard3