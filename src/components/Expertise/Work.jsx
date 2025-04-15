import React from 'react'

const Work = () => {
  return (
     
    <div className='container border-2 border-[#8A145E] rounded-2xl bg-white p-8'>
      <div className='flex space-x-8 pt-10 pb-5'>
        <img src="src/assets/luggage-02.svg" alt="" />
        <h1 className='font-jakarta font-extrabold md:text-[50px] text-[30px] text-[#021167] '>Work Experience</h1>
      </div>

      <div className="flex flex-1">
        <div className="inline-block h-[80px] min-h-[1em] w-0.5 self-stretch bg-[#717171]"></div>
        <div>
          <p className  ="ps-3 text-[#717171] italic font-medium font-jakarta">Null - Null</p>
          <p className  ="ps-3 font-extrabold font-jakarta">Currently have 0 work experience :/</p>
          <p className  ="ps-3 text-[#717171] italic font-medium font-jakarta">Null</p>
        </div>
      </div>
    </div>

  )
}

export default Work