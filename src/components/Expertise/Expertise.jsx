import React from 'react'

const Expertise = () => {
  return (
    <div className='container border-2 border-[#FFB545] rounded-2xl bg-gray-200 place-items-center'>
        <div className='flex space-x-8 pt-18'>
            <img src="src/assets/icon.svg" alt="" />
            <h1 className='font-jakarta font-extrabold text-[74px] text-[#021167] '>Expertise</h1>
        </div>

        <div className='place-items-center  py-15'>
            <h1 className='font-jakarta font-extrabold text-[31px] text-[#021167] pb-5'>Design</h1>
            <img src="src/assets/Frame 11.svg" alt="" />
        </div>

        <div  className='place-items-center py-10'>
            <h1 className='font-jakarta font-extrabold text-[31px] text-[#021167] pb-1'>Fullstack Progamming</h1>
            <p className='font-jakarta font-normal text-[15px] text-[#021167] pb-5 italic'>(Still learning for the backend)</p>
            <img src="src/assets/Frame 64.svg" alt="" />
        </div>

    </div>
  )
}

export default Expertise