import React from 'react'
import ImgAnimation from './ImgAnimation'
import InfiniteScrollBlue from '../InfiniteScroll/InfiniteScrollBlue'
import InfiniteScrollOrange from '../InfiniteScroll/InfiniteScrollOrange'

const HeroMain = () => {
  return (
    <div>
        <ImgAnimation/>
        <br />
        
        <div className='relative m-auto'>
          <div className='absolute top-0 left-0 w-full rotate-1'><InfiniteScrollOrange/></div>
          <div className='absolute top-0 left-0 w-full rotate-[-1.4deg]'><InfiniteScrollBlue/></div>
        </div>
        
    </div>
    
  )
}

export default HeroMain