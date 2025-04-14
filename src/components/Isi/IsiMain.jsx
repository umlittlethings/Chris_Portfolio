import React from 'react'
import Card1 from './Card1'
import SeeMoreProj from './SeeMoreProj'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'

const IsiMain = () => {
  return (
    <div className='container place-items-center'>
         <div class="relative w-full h-500">
        
        <img 
            src="src/assets/bg.svg" 
            alt="Centered Image" 
            class="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        
        <div className='flex gap-3 py-10 px-30'>
          
          <h1 className='font-jakarta font-medium italic text-5xl '>-My</h1>
          <h1 className='font-jakarta font-black text-5xl  pr-180'>Portfolio</h1>
          <button className=''>
            <SeeMoreProj/>
          </button> 
          
        </div>
        
        <div class="relative z-10 grid grid-cols-2 place-items-center px-15 gap-4">
            <Card1/>
            <Card2/>
            <Card3/>
            <Card4/>
        </div>
    </div>
    </div>
  )
}

export default IsiMain