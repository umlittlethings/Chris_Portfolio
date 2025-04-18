import React from 'react'
import Scard from '../Services-Components/Scard'
import Scard2 from '../Services-Components/Scard2'
import Scard3 from '../Services-Components/Scard3'
import Scard4 from '../Services-Components/Scard4'
import Scard5 from '../Services-Components/Scard5'

const Services = () => {
  return (
    <>
      <div className='py-20'>
        <h1 className='font-jakarta font-extrabold text-2xl place-self-center'>Services</h1>
      <div className=' flex place-self-center space-x-3 md:text-[62px] text-[40px] text-[#151AD6]'>
            <h1 className='font-jakarta font-normal'>Things</h1>
            <h1 className='font-jakarta font-black italic'>I do</h1>
        </div>
      </div>
      
      <div className='px-5 md:px-30 grid md:grid-cols-3 grid-rows-1 gap-4 pb-5 md:pb-0'> 
      <Scard/>
      <Scard2/>
      <Scard3/>
      <Scard4/>
      <Scard5/>
      </div>
    </>
    
  )
}

export default Services