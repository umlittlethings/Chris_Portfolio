import React from 'react'

const Expertise = () => {
  return (
    <div className='container border-2 border-[#FFB545] rounded-2xl bg-white place-items-center place-self-center'>
  {/* Header section */}
  <div className='mx-2 md:mx-0 place-items-center'>
  <div className='flex space-x-4 md:space-x-8 pt-18 items-center'>
    <img 
      src="src/assets/icon.svg" 
      alt="" 
      className=" h-auto" 
    />
    <h1 className='font-jakarta font-extrabold md:text-[74px] text-[50px] text-[#021167]'>
      Expertise
    </h1>
  </div>

  {/* Design section */}
  <div className='place-items-center py-15'>
    <h1 className='font-jakarta font-extrabold text-[31px] text-[#021167] pb-5'>Design</h1>
    <img 
      className="w-90 md:w-100 h-auto" 
      src="src/assets/Frame 11.svg" 
      alt="" 
    />
  </div>

  {/* Programming section */}
  <div className='place-items-center py-10'>
    <h1 className='font-jakarta font-extrabold text-[31px] text-[#021167] pb-1'>
      Fullstack Programming
    </h1>
    <p className='font-jakarta font-normal text-[15px] text-[#021167] pb-5 italic'>
      (Still learning for the backend)
    </p>
    <img 
      src="src/assets/Frame 64.svg" 
      alt="" 
      className="w-90 md:w-100 h-auto" 
    />
  </div>
  </div>
</div>

  )
}

export default Expertise