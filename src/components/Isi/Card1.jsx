import React from 'react'

const Card1 = () => {
  return (
    <div className='container bg-linear-to-t from-[#4545FF] to-[#021678] rounded-3xl w-fit h-fit place-items-center hover:scale-105 duration-300 ease-in-out cursor-pointer'>
        <div className='m-5'>
        <img className="md:h-160 w-150 h-full" src="src\assets\Card Components\photo1.svg" alt="" />
        <div>
            <div className='flex my-2'>
                <div className='rounded-full bg-[#0EF70E] px-7 font-medium font-jakarta mr-4'>Ongoing</div> 
                <div className='rounded-full bg-[#FF9A00] md:px-7 px-2 font-medium font-jakarta'>Website Development</div>
            </div>

            <div className='flex'>
                <h1 className='text-white text-2xl font-bold font-jakarta'>Chris: My Portfolio Website</h1>
                <img className='md:pl-55' src="src/assets/Card Components/next button.svg" alt="" />
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Card1