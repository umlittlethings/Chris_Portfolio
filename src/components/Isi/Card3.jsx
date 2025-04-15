import React from 'react'

const Card3 = () => {
  return (
    <div className='container bg-linear-to-t from-[#4545FF] to-[#021678] rounded-3xl w-fit h-fit place-items-center hover:scale-105 duration-300 ease-in-out cursor-pointer'>
        <div className='m-5'>
        <img className="md:h-160 w-150 h-full" src="src\assets\Card Components\photo3.svg" alt="" />
        <div>
            <div className='md:flex hidden my-2'>
                <div className='rounded-full bg-[#0EF7EB] px-7 font-medium font-jakarta mr-4'>Done</div> 
                <div className='rounded-full bg-[#FF9A00] px-7 font-medium font-jakarta'>Mobile App Development</div>
            </div>

            <div className='flex md:hidden my-2'>
                <div className='rounded-full bg-[#0EF7EB] px-7 font-medium font-jakarta mr-4'>Done</div> 
                <div className='rounded-full bg-[#FF9A00] px-7 font-medium font-jakarta'>Mobile App</div>
            </div>

            <div className='flex'>
                <h1 className='text-white text-2xl font-bold font-jakarta'>CalmSpace: A mental Health Community App</h1>
                <img className='pl-5' src="src/assets/Card Components/next button.svg" alt="" />
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Card3