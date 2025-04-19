import React from 'react'
import { Link } from 'react-router-dom'

const Card1 = () => {
  return (
    <div className='container bg-linear-to-t from-[#4545FF] to-[#021678] rounded-3xl w-fit h-fit place-items-center'>
        <div className='m-5'>
        <img className="md:h-160 w-150 h-full" src="Card Components\photo1.svg" alt="" />
        <div>
            <div className='flex my-2'>
                <div className='rounded-full bg-[#0EF70E] px-7 font-medium font-jakarta mr-4'>Ongoing</div> 
                <div className='rounded-full bg-[#FF9A00] md:px-7 px-2 font-medium font-jakarta text-[12px] place-self-center md:text-[20px]'>Website Development</div>
            </div>

            <div className='flex'>
                <h1 className='text-white text-2xl font-bold font-jakarta'>Chris: My Portfolio Website</h1>
                <Link to='/ComingSoon'>
                <img className='md:pl-55 hover:scale-105 duration-300 ease-in-out cursor-pointer' src="Card Components/next button.svg" alt="" />
                </Link>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Card1