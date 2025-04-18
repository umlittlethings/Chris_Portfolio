import React from 'react'
import InfiniteScrollOrange from '../InfiniteScroll/InfiniteScrollOrange'
import ContactMe from './ContactMe'
import { Link } from 'react-router-dom'

const FooterUp = () => {
  return (
    <div className='md:pt-10 pt-0'>
        <div className='rotate-[-2deg]'><InfiniteScrollOrange/></div>
        
        <div>
            <div className='flex place-content-center py-10'>

            <div className='hidden md:block'>
                <img src="src\assets\Footers\Asterisk 2.svg" alt="" />
            </div>

            <div className='place-items-center md:px-80'>
                <h1 className='font-jakarta font-extrabold md:text-6xl text-3xl italic text-[#021678]'>Interested?</h1>
                <div className='flex space-x-2 my-2'>
                    <h1 className='font-jakarta font-medium text-[#935900] md:text-3xl text-2xl'>Let's bring </h1>
                    <h1 className='font-jakarta font-extrabold text-[#AC3472] md:text-3xl text-2xl'>something awesome</h1>
                </div>
                <h1 className='font-jakarta font-medium text-[#935900] md:text-3xl text-2xl'>to life together!</h1>
                <Link to='/About'>
                    <button className='pt-10'><ContactMe/></button>
                </Link>
            </div>

            <div className='hidden md:block'>
                <img src="src\assets\Footers\Dawn.svg" alt="" />
            </div>

        </div>
        </div>
        
    </div>
  )
}

export default FooterUp