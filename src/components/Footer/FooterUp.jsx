import React from 'react'
import InfiniteScrollOrange from '../InfiniteScroll/InfiniteScrollOrange'
import ContactMe from './ContactMe'

const FooterUp = () => {
  return (
    <div>
        <div className='rotate-[-2deg]'><InfiniteScrollOrange/></div>
        
        <div>
            <div className='flex place-content-center py-20'>

            <div>
                <img src="src\assets\Footers\Asterisk 2.svg" alt="" />
            </div>

            <div className='place-items-center px-80'>
                <h1 className='font-jakarta font-extrabold text-6xl italic text-[#021678]'>Interested?</h1>
                <div className='flex space-x-2 my-2'>
                    <h1 className='font-jakarta font-medium text-[#935900] text-3xl'>Let's bring </h1>
                    <h1 className='font-jakarta font-extrabold text-[#AC3472] text-3xl'>something awesome</h1>
                </div>
                <h1 className='font-jakarta font-medium text-[#935900] text-3xl'>to life together!</h1>
                <button className='pt-10'><ContactMe/></button>
            </div>

            <div>
                <img src="src\assets\Footers\Dawn.svg" alt="" />
            </div>

        </div>
        </div>
        
    </div>
  )
}

export default FooterUp