import React from 'react'

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-blue-900 px-6 text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">🚧 Under Maintenance</h1>
    <p className="text-lg md:text-xl mb-8 max-w-xl">
      We're currently making some improvements. Please check back soon. Meanwhile, feel free to visit my old portfolio page  isntead!
    </p>

    <a 
      href="https://spot-shear-42f.notion.site/My-Portofolio-162871e297828063a45dfa479ac81833?pvs=4" 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-white text-blue-900 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300 border-2"
    >
      Click this!
    </a>
  </div>
  )
}

export default ComingSoon