import React from 'react'
import { ArrowRight, Layout } from "lucide-react";

const Scard2 = () => {
  return (
    <div className="max-w-sm p-6 rounded-xl bg-gradient-to-br from-[#021678] to-[#4545FF] text-white shadow-lg hover:scale-105 duration-300 ease-in-out">
      {/* Icon */}
      <div className="text-white mb-4">
        <img className='w-8' src="Scardsz\browser-code.svg" alt="" />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-2">Website Development</h2>

      {/* Description */}
      <p className="text-white/80 text-sm mb-6">
        I love building websites that look great and work even better! 🧑‍💻✨ Turning ideas into smooth,
        user-friendly experiences is my thing. (Still needs working in my backend though, haha)
      </p>

      {/* Link */}
      <a href="#/ComingSoon" className="text-yellow-400 font-semibold inline-flex items-center hover:underline cursor-pointer">
        My Projects <ArrowRight className="ml-2 w-4 h-4" />
      </a>
    </div>
  )
}

export default Scard2