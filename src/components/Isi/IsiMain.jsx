import React from 'react'
import Card1 from './Card1'
import SeeMoreProj from './SeeMoreProj'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import { Link } from 'react-router-dom'

const IsiMain = () => {
  return (
    <div className='container place-items-center'>
      <div className="relative w-full">
        {/* Background Image */}
        <div className="absolute inset-0 h-full -z-10">
          <img 
            src="bg.svg" 
            alt="Background" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Heading */}
        <div className='flex gap-3 md:py-10 md:px-30 py-10 px-5 place-self-center md:place-self-start z-10 relative'>
          <h1 className='font-jakarta font-medium italic text-5xl'>-My</h1>
          <h1 className='font-jakarta font-black text-5xl md:pr-180'>Portfolio</h1>
          <button className='md:block hidden'>
            <Link to='/ComingSoon'>
              <SeeMoreProj/>
            </Link>
            
          </button> 
        </div>

        {/* Cards */}
        <div className="relative z-10 md:grid flex flex-col md:grid-cols-2 place-items-center md:px-15 gap-4 px-5">
          
    
          <Card1 />
    

       
          <Card2 />
      

        
          <Card3 />
        

     
          <Card4 />
  
        </div>

        {/* Mobile Button */}
        <div className="z-10 relative flex justify-center py-6 md:hidden">
        <Link to='/ComingSoon'>
              <SeeMoreProj/>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default IsiMain
