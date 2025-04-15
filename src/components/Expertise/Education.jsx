import React from 'react'

const Education = () => {
  return (
    
    <div className='container border-2 border-[#00009B] rounded-2xl bg-white p-8'>
      <div className='flex space-x-8 pt-10 pb-5'>
        <img src="src/assets/graduation-cap-02.svg" alt="" />
        <h1 className='font-jakarta font-extrabold md:text-[50px] text-[40px] text-[#021167]'>Education</h1>
      </div>

      <div className="flex flex-1">
        <div className="inline-block h-[80px] min-h-[1em] w-0.5 self-stretch bg-[#717171]"></div>
        <div>
          <p className  ="ps-3 text-[#717171] italic font-medium font-jakarta">2019 - 2022</p>
          <p className  ="ps-3 font-extrabold font-jakarta">SMAS Tunas Daud Denpasar</p>
          <p className  ="ps-3 text-[#717171] italic font-medium font-jakarta">Science</p>
        </div>
      </div>

      <br />

      <div className="flex flex-1">
        <div className="inline-block h-[80px] min-h-[1em] w-0.5 self-stretch bg-[#717171]"></div>
        <div>
          <p className  ="ps-3 text-[#717171] italic font-medium font-jakarta">2022 - Present</p>
          <p className  ="ps-3 font-extrabold font-jakarta">Universitas Brawijaya</p>
          <p className  ="ps-3 text-[#717171] italic font-medium font-jakarta">Computer Science, Informatics Engineering Major </p>
        </div>
      </div>
      
    

    </div>
  )
}

export default Education