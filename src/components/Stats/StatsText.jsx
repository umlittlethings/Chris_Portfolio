import React from 'react'
import CountUp from './Count1'
import SeeMore from './ButtonDownload'

const StatsText = () => {
  return (
    <div className='md:pl-20 px-10'>
        <div className='hidden md:flex space-x-3 text-[62px]'>
            <h1 className='font-jakarta font-normal'>My</h1>
            <h1 className='font-jakarta font-black italic'>Stats</h1>
        </div>
        <p className='py-3 text-[20px] font-jakarta font-normal text-[#00009B]'>From leading committees to completing projects, I’ve built a strong foundation in teamwork, development, and leadership. I’m all about creating meaningful solutions and driving innovation!</p>

        <div className='md:flex'>
          <div className='text-[#00009B] flex-auto'>
            <p className='text-[70px] font-black font-jakarta text-[#00009B]'>
              <CountUp
                from={0}
                to={20}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
              +
            </p>
            <p>
            Organizational , Committee , & Volunteer Experiences
            </p>
          </div>

          <div className='text-[#00009B] flex-auto'>
            <p className='text-[70px] font-black font-jakarta'>
              <CountUp
                from={0}
                to={5}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
              +
            </p>
            <p>
            Projects Completed
            </p>
          </div>

          <div className='text-[#00009B] flex-auto'>
            <p className='text-[70px] font-black font-jakarta'>
              <CountUp
                from={0}
                to={2}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
        
            </p>
            <p>
            Years of Experiences            
            </p>
          </div>
        </div>
        <a 
           
          target="_blank" 
          rel="noopener noreferrer" 
          className="pt-9 pl-20 md:pl-0 block"
        >
        <SeeMore />
        </a>
    
    </div>
    
  )
}

export default StatsText