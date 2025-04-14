import React from 'react'
import InfiniteScrollBlue from '../InfiniteScroll/InfiniteScrollBlue'
import InfiniteScrollOrange from '../InfiniteScroll/InfiniteScrollOrange'
import SplitText from '../SplitText'
import AnimatedIntro from './AnimatedIntro'

const IntroMain = () => {

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
      };

      

  return (
    <div>
        <div className='container flex m-auto py-40 px-30'>
            <div className=' '>
                <SplitText
                    text="Hello!"
                    className="text-[#0C1FD1] text-7xl font-black text-center font-play my-5"
                    delay={150}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                    onLetterAnimationComplete={handleAnimationComplete}
                />
            <AnimatedIntro/>
            </div>

            <div className=" relative flex justify-center items-center pr-50">
                <img 
                    className="absolute z-10 transform scale-230 -translate-x-8" 
                    src="/src/assets/Element1.svg" 
                    alt="Background Element" 
                />
                <img 
                    className="relative z-20 scale-400 rotate-1" 
                    src="/src/assets/Photo.svg" 
                    alt="Photo" 
                />
            </div>
        
        </div>

        <div className='relative m-auto'>
          <div className='absolute top-0 left-0 w-full rotate-[-1.4deg]'><InfiniteScrollBlue/></div>
          <div className='absolute top-0 left-0 w-full rotate-1'><InfiniteScrollOrange/></div>
          
        </div>
    </div>
    
    
  )
}

export default IntroMain